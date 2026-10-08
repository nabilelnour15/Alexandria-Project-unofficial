import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import type { Plugin } from 'vite';
import {
  SITE_NAME,
  SITE_URL,
  defaultShareImage,
  fullTitle,
  pageMeta,
  type PagePath,
  type ShareImage,
} from '../src/data/pageMeta';
import { newsItems, type NewsCategory, type NewsItem } from '../src/data/newsData';
import { newsImages } from '../src/data/newsImages';

// Writes a static HTML file per route with its own <title>, description and Open
// Graph / Twitter tags, plus a 1200×630 crop of the page's photo in dist/og/.
// Link-preview crawlers don't run JavaScript, so without this every shared link
// shows the home page card. index.html marks the block this replaces.

const BLOCK = /<!-- share-meta -->[\s\S]*?<!-- \/share-meta -->/;
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

interface Route {
  readonly path: string;
  readonly title: string;
  readonly description: string;
  readonly image: ShareImage;
  readonly type: 'website' | 'article';
}

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** "/images/news/port.jpg" -> "/og/news-port.jpg" */
const ogPath = (src: string) =>
  `/og/${src.replace(/^\/images\//, '').replace(/\.[^.]+$/, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.jpg`;

const newsShareImage = (item: NewsItem): ShareImage | undefined => {
  const img = item.image ? newsImages[item.image] : undefined;
  return img && { src: img.src, alt: img.alt };
};

/** Photo of the newest story (optionally in one topic), as shown first in the news lists. */
const newestNewsImage = (topic?: NewsCategory): ShareImage | undefined =>
  [...newsItems]
    .filter((i) => !topic || i.category === topic)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(newsShareImage)
    .find(Boolean);

const dynamicImages: Partial<Record<PagePath, ShareImage | undefined>> = {
  '/news': newestNewsImage(),
  '/governor': newestNewsImage('Governorate'),
};

function routes(): Route[] {
  const pages = (Object.entries(pageMeta) as [PagePath, (typeof pageMeta)[PagePath]][]).map(
    ([p, meta]): Route => ({
      path: p,
      title: fullTitle('title' in meta ? meta.title : undefined),
      description: meta.description,
      image: ('image' in meta ? meta.image : dynamicImages[p]) ?? defaultShareImage,
      type: 'website',
    }),
  );
  const posts = newsItems.map(
    (item): Route => ({
      path: `/news/${item.id}`,
      title: fullTitle(item.title),
      description: item.summary,
      image: newsShareImage(item) ?? dynamicImages['/news'] ?? defaultShareImage,
      type: 'article',
    }),
  );
  return [...pages, ...posts];
}

function headTags(route: Route): string {
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const image = `${SITE_URL}${ogPath(route.image.src)}`;
  const t = escapeAttr(route.title);
  const d = escapeAttr(route.description);
  const alt = escapeAttr(route.image.alt);
  return [
    '<!-- share-meta -->',
    `<title data-prerendered>${t}</title>`,
    `<meta name="description" content="${d}" data-prerendered />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${route.type}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="${OG_WIDTH}" />`,
    `<meta property="og:image:height" content="${OG_HEIGHT}" />`,
    `<meta property="og:image:alt" content="${alt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${alt}" />`,
    '<!-- /share-meta -->',
  ].join('\n    ');
}

export default function shareMeta(): Plugin {
  let publicDir = 'public';
  const all = routes();
  const home = all.find((r) => r.path === '/')!;

  return {
    name: 'share-meta',
    configResolved(config) {
      publicDir = config.publicDir;
    },
    transformIndexHtml(html) {
      if (!BLOCK.test(html)) throw new Error('share-meta: index.html is missing the <!-- share-meta --> block');
      return html.replace(BLOCK, headTags(home));
    },
    async writeBundle({ dir }) {
      if (!dir) return;
      const indexHtml = await fs.readFile(path.join(dir, 'index.html'), 'utf8');

      // One 1200×630 crop per distinct source photo.
      const sources = [...new Set(all.map((r) => r.image.src))];
      await fs.mkdir(path.join(dir, 'og'), { recursive: true });
      await Promise.all(
        sources.map((src) =>
          sharp(path.join(publicDir, src))
            .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: sharp.strategy.attention })
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(path.join(dir, ogPath(src))),
        ),
      );

      // dist/<route>.html, served for /<route> before the SPA fallback (Vercel `cleanUrls`,
      // Netlify pretty URLs, vite preview).
      await Promise.all(
        all
          .filter((r) => r.path !== '/')
          .map(async (r) => {
            const out = path.join(dir, `${r.path}.html`);
            await fs.mkdir(path.dirname(out), { recursive: true });
            await fs.writeFile(out, indexHtml.replace(BLOCK, headTags(r)));
          }),
      );
    },
  };
}
