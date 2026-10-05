#!/usr/bin/env node
// Checks every http(s) URL in src/data/*.ts and writes the ones that fail to a JSON report.
// Used by the weekly data audit so Claude only looks at broken links, not all of them.
//
//   node scripts/check-links.mjs [out.json]
//
// Many news and government sites block bots or time out; those are reported as
// "blocked" or "unreachable" rather than "broken", so they get a manual check first.

import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve('src/data');
const OUT = process.argv[2] ?? 'link-report.json';
const TIMEOUT_MS = 20_000;
const CONCURRENCY = 6;
const UA = 'Mozilla/5.0 (compatible; AlexandriaFanSiteLinkCheck/1.0; +https://github.com/nabilelnour15/Alexandria-Project-unofficial)';

const urls = new Map(); // url -> [file:line]
for (const file of fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.ts'))) {
  const lines = fs.readFileSync(path.join(DATA_DIR, file), 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/https?:\/\/[^\s'"`)<>]+/g)) {
      const url = m[0].replace(/[.,;]+$/, '');
      if (!urls.has(url)) urls.set(url, []);
      urls.get(url).push(`src/data/${file}:${i + 1}`);
    }
  });
}

// URLs come from data files a bot may have edited, so never probe the runner's own network.
// (URL hostnames keep IPv6 addresses in brackets, e.g. "[::1]".)
const PRIVATE_HOST =
  /^(localhost|.*\.localhost|.*\.local|.*\.internal|127\.\d|10\.\d|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.|0\.0\.0\.0|\[::1?\]|\[f[cd][0-9a-f]{2}:|\[fe80:)/i;

async function check(url) {
  const host = new URL(url).hostname;
  if (PRIVATE_HOST.test(host)) return { status: 0, error: 'skipped: private or local address' };
  const attempt = async (method) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, { method, redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': UA } });
      await res.body?.cancel(); // only the status matters; free the socket
      return { status: res.status, finalUrl: res.url };
    } finally {
      clearTimeout(timer);
    }
  };
  try {
    let r = await attempt('HEAD');
    // Plenty of servers reject HEAD; retry with GET before calling it broken.
    if (r.status >= 400) r = await attempt('GET');
    return r;
  } catch (err) {
    return { status: 0, error: err.name === 'AbortError' ? 'timeout' : String(err.cause?.code ?? err.message) };
  }
}

const entries = [...urls.entries()];
const results = [];
let next = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (next < entries.length) {
      const [url, where] = entries[next++];
      const r = await check(url);
      results.push({ url, where, ...r });
    }
  }),
);

// broken: the server says the page is gone (404, 410 and other 4xx).
// blocked: the server refuses bots. unreachable: network error, bad certificate or 5xx,
// which is often temporary or regional; check those by hand before changing anything.
const kind = (r) =>
  r.status >= 200 && r.status < 400 ? 'ok'
  : [401, 403, 429, 999].includes(r.status) ? 'blocked'
  : r.status >= 400 && r.status < 500 ? 'broken'
  : 'unreachable';

const report = {
  checked: results.length,
  broken: results.filter((r) => kind(r) === 'broken'),
  blocked: results.filter((r) => kind(r) === 'blocked'),
  unreachable: results.filter((r) => kind(r) === 'unreachable'),
  redirected: results.filter((r) => kind(r) === 'ok' && r.finalUrl && r.finalUrl !== r.url).map(({ url, finalUrl, where }) => ({ url, finalUrl, where })),
};
fs.writeFileSync(OUT, JSON.stringify(report, null, 2));
console.log(`checked ${report.checked}: ${report.broken.length} broken, ${report.blocked.length} blocked, ${report.unreachable.length} unreachable, ${report.redirected.length} redirected -> ${OUT}`);
