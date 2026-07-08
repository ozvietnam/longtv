#!/usr/bin/env node
/**
 * Pre-build content sync.
 *
 * Copies markdown content from <repo>/root into <repo>/web/content/ so the
 * Next.js app can read it via fs.readdirSync at build time. This works both
 * locally (npm run dev) and on Vercel (prebuild hook).
 *
 * Source roots: parent of cwd (repo root) + optional Desktop/longtv (dev only)
 * Destination: cwd/content
 *
 * Skipped: node_modules, .next, .git, web (the app itself), .vercel, out, .turbo
 * Also skipped at file level: AGENTS.md, CLAUDE.md, README.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Repo root = directory containing both `web/` and `decisions/` (or `00-about.md`).
// Search strategy:
//  - cwd (when vercel project root = repo root, cwd = /vercel/path0/)
//  - parent of cwd (when running from /web locally or via cd web && ...)
//  - cwd/web (legacy)
//  - walk up from __dirname as fallback
function findRepoRoot() {
  function isRepoRoot(p) {
    try {
      const entries = fs.readdirSync(p);
      return entries.includes('web') && (entries.includes('decisions') || entries.includes('00-about.md'));
    } catch (e) {
      return false;
    }
  }
  const candidates = [
    process.cwd(),
    path.resolve(process.cwd(), '..'),
    path.join(process.cwd(), 'web'),
    __dirname,
  ];
  for (const c of candidates) {
    console.log(`[sync-content]   checking candidate: ${c}`);
    try {
      const e = fs.readdirSync(c);
      console.log(`[sync-content]     entries: ${e.join(', ')}`);
    } catch (err) {
      console.log(`[sync-content]     error: ${err.message}`);
    }
    if (isRepoRoot(c)) return c;
  }
  // Walk up from __dirname as fallback
  let cur = __dirname;
  for (let i = 0; i < 8; i++) {
    if (isRepoRoot(cur)) return cur;
    cur = path.resolve(cur, '..');
  }
  throw new Error(`[sync-content] could not find repo root from cwd=${process.cwd()}, __dirname=${__dirname}`);
}
const REPO_ROOT = findRepoRoot();
const WEB_DIR = path.join(REPO_ROOT, 'web');
const DEST = path.join(WEB_DIR, 'content');
console.log(`[sync-content] cwd=${process.cwd()}`);
console.log(`[sync-content] __dirname=${__dirname}`);
console.log(`[sync-content] REPO_ROOT=${REPO_ROOT}`);
console.log(`[sync-content] WEB_DIR=${WEB_DIR}`);
console.log(`[sync-content] DEST=${DEST}`);

const EXCLUDED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.vercel',
  'out',
  '.turbo',
  'web', // never copy the app itself
  'content', // avoid recursion
]);

const EXCLUDED_FILES = new Set(['AGENTS.md', 'CLAUDE.md', 'README.md', '.DS_Store']);

function rmrf(p) {
  if (!fs.existsSync(p)) return;
  fs.rmSync(p, { recursive: true, force: true });
}

function mkdirp(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyDir(src, dst) {
  if (!fs.existsSync(src)) return;
  mkdirp(dst);
  for (const entry of fs.readdirSync(src)) {
    if (EXCLUDED_DIRS.has(entry)) continue;
    if (EXCLUDED_FILES.has(entry)) continue;
    const sp = path.join(src, entry);
    const dp = path.join(dst, entry);
    const st = fs.statSync(sp);
    if (st.isDirectory()) {
      copyDir(sp, dp);
    } else if (entry.endsWith('.md')) {
      fs.copyFileSync(sp, dp);
    }
  }
}

// Clean and recreate destination
rmrf(DEST);
mkdirp(DEST);

// Copy from repo root (this is the canonical source)
console.log(`[sync-content] copying from ${REPO_ROOT} -> ${DEST}`);
copyDir(REPO_ROOT, DEST);

// Optionally merge Desktop/longtv in dev (uncomment if needed)
// if (process.env.NODE_ENV !== 'production' && process.env.HOME) {
//   const desktop = path.join(process.env.HOME, 'Desktop', 'longtv');
//   if (fs.existsSync(desktop)) copyDir(desktop, DEST);
// }

const count = fs.readdirSync(DEST, { recursive: true }).filter((f) => f.endsWith('.md')).length;
console.log(`[sync-content] done — ${count} markdown files`);