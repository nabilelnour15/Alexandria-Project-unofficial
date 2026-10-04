#!/usr/bin/env node
// Generates a site image with Gemini, from a prompt in docs/image-prompts.md.
//
//   npm run gen:image -- abu-qir-metro-concept.jpg            # prompt from the doc
//   npm run gen:image -- my-image.jpg --prompt "..." --size 1600x1200
//   options: --force (overwrite)  --model <id>  --list
//
// The key is read from GEMINI_API_KEY (put it in .env.local, which is gitignored).
// Never prefix it with VITE_: Vite would then bundle it into the public site.
//
// Trust rules (CLAUDE.md): every AI image must carry the ConceptBadge on the site,
// never depict real or identifiable people, and real landmarks use real photos.

import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { GoogleGenAI } from '@google/genai';
import sharp from 'sharp';

const DEFAULT_MODEL = 'gemini-3.1-flash-image';
const DOC = resolve('docs/image-prompts.md');
const OUT_DIR = resolve('public/images');
const MAX_SIDE = 1920;
const QUALITY = 80;
const ASPECTS = ['1:1', '3:2', '2:3', '3:4', '4:3', '4:5', '5:4', '9:16', '16:9', '21:9'];

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    prompt: { type: 'string' },
    size: { type: 'string' },
    model: { type: 'string', default: process.env.GEMINI_IMAGE_MODEL ?? DEFAULT_MODEL },
    force: { type: 'boolean', default: false },
    list: { type: 'boolean', default: false },
  },
});

const doc = readFileSync(DOC, 'utf8');

// "### name.jpg" sections, each with "- **Size:**", "- **Prompt:**", "- **Avoid:**" lines.
function docEntries() {
  const entries = new Map();
  for (const block of doc.split(/^### /m).slice(1)) {
    const name = block.split('\n', 1)[0].trim();
    const field = (label) => new RegExp(`^- \\*\\*${label}:\\*\\* (.+)$`, 'm').exec(block)?.[1].trim();
    const prompt = field('Prompt');
    if (prompt) entries.set(name, { prompt, avoid: field('Avoid'), size: field('Size') });
  }
  return entries;
}

function preamble(prompt) {
  const text = /^> (.+)$/m.exec(doc.split('## Style preamble')[1] ?? '')?.[1] ?? '';
  // Textures and illustrations drop the photorealistic opening (see the doc).
  const illustrated = /\b(texture|tileable|illustrat|watercolour|engraved)/i.test(prompt);
  return illustrated ? text.replace(/^Photorealistic, editorial-quality image/, 'Image') : text;
}

/** "4:3, 1600×1200" → { width: 1600, height: 1200 } */
function parseSize(text) {
  const m = /(\d{3,4})\s*[×x]\s*(\d{3,4})/.exec(text ?? '');
  return m ? { width: Number(m[1]), height: Number(m[2]) } : null;
}

function closestAspect({ width, height }) {
  const target = width / height;
  const ratio = (a) => {
    const [w, h] = a.split(':').map(Number);
    return w / h;
  };
  return ASPECTS.reduce((best, a) =>
    Math.abs(ratio(a) - target) < Math.abs(ratio(best) - target) ? a : best,
  );
}

// Throw instead of process.exit(): exiting while the HTTP client still has open
// handles trips a libuv assertion on Windows.
class UserError extends Error {}
function fail(message) {
  throw new UserError(message);
}

async function main() {
const entries = docEntries();

if (values.list) {
  for (const [name, e] of entries) console.log(`${name.padEnd(42)} ${e.size ?? ''}`);
  return;
}

const name = positionals[0];
if (!name || !/^[a-z0-9-]+\.jpg$/.test(name)) {
  fail('Give a file name like abu-qir-metro-concept.jpg (lowercase, .jpg). Use --list to see the doc entries.');
}

const entry = entries.get(name);
const basePrompt = values.prompt ?? entry?.prompt;
if (!basePrompt) fail(`No prompt for ${name} in docs/image-prompts.md. Add one there, or pass --prompt.`);

const size = parseSize(values.size ?? entry?.size) ?? { width: 1600, height: 1200 };
const outPath = resolve(OUT_DIR, name);
if (existsSync(outPath) && !values.force) fail(`${outPath} exists. Pass --force to replace it.`);

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) fail('GEMINI_API_KEY is not set. Add it to .env.local (see .env.example).');

const avoid = values.prompt ? undefined : entry?.avoid;
const fullPrompt = [preamble(basePrompt), basePrompt, avoid && `Do not include: ${avoid}`]
  .filter(Boolean)
  .join('\n\n');

const aspectRatio = closestAspect(size);
console.log(`→ ${values.model}, ${aspectRatio}, target ${size.width}×${size.height}`);

const ai = new GoogleGenAI({ apiKey });
let response;
try {
  response = await ai.models.generateContent({
    model: values.model,
    contents: fullPrompt,
    config: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio, imageSize: '2K' } },
  });
} catch (err) {
  const quota = /RESOURCE_EXHAUSTED|"code":429/.test(err.message);
  fail(
    quota
      ? "Gemini quota exceeded. On the free tier image models have a limit of 0: enable billing on the key's Google Cloud project, then retry."
      : `Gemini request failed: ${err.message}`,
  );
}

const image = response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data);
if (!image) {
  const reason = response.candidates?.[0]?.finishReason ?? 'no image returned';
  fail(`No image in the response (${reason}). Try rewording the prompt.`);
}

// Crop to the doc's exact size (cover), cap the longest side, save as a compact JPG.
const scale = Math.min(1, MAX_SIDE / Math.max(size.width, size.height));
const info = await sharp(Buffer.from(image.inlineData.data, 'base64'))
  .resize(Math.round(size.width * scale), Math.round(size.height * scale), { fit: 'cover' })
  .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
  .toFile(outPath);

console.log(`✓ Saved public/images/${name} (${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB)`);
console.log('  Check it for text, logos or faces, then show it with <ConceptBadge /> wherever it appears.');
}

main().catch((err) => {
  console.error(`✗ ${err instanceof UserError ? err.message : err.stack}`);
  process.exitCode = 1;
});
