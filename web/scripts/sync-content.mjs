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
// Vercel runs npm from /vercel/path0/ but our script lives in /vercel/path0/web/scripts/.
// Walk up to find the repo root by looking for a sibling "web" folder.
const WEB_DIR = path.resolve(__dirname, '..'); // .../web
function findRepoRoot() {
  // Start from WEB_DIR and walk up looking for a directory whose children include "web"
  let cur = path.resolve(WEB_DIR, '..');
  for (let i = 0; i < 6; i++) {
    try {
      const entries = fs.readdirSync(cur);
      if (entries.includes('web')) return cur;
    } catch (e) {}
    cur = path.resolve(cur, '..');
  }
  // Fallback
  return path.resolve(WEB_DIR, '..');
}
const REPO_ROOT = findRepoRoot();
console.log(`[sync-content] __dirname=${__dirname}`);
console.log(`[sync-content] WEB_DIR=${WEB_DIR}`);
console.log(`[sync-content] REPO_ROOT=${REPO_ROOT}`);
const DEST = path.join(WEB_DIR, 'content');

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