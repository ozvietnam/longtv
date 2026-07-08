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
// Vercel flattens the project root: scripts/ is at /vercel/path0/scripts/,
// and the entire repo (including /web, /decisions, /00-about.md, etc.) is at
// /vercel/path0/. So REPO_ROOT is the parent of WEB_DIR — but WEB_DIR on Vercel
// equals /vercel/path0/ itself (the project root), not /vercel/path0/web/.
//
// We detect WEB_DIR dynamically: it's the closest ancestor of __dirname that
// contains a package.json AND a sibling `web` folder.
function findWebDir() {
  let cur = __dirname;
  for (let i = 0; i < 6; i++) {
    try {
      const entries = fs.readdirSync(cur);
      if (entries.includes('package.json') && entries.includes('web')) {
        return cur;
      }
    } catch (e) {}
    cur = path.resolve(cur, '..');
  }
  return path.resolve(__dirname, '..');
}
const WEB_DIR = findWebDir();
// On Vercel, REPO_ROOT === WEB_DIR because the project root is the repo root
// from Vercel's perspective (only the /web subtree is shipped as the project).
// Locally, REPO_ROOT is the parent of WEB_DIR.
function findRepoRoot() {
  // Vercel case: WEB_DIR already contains decisions/ etc.
  if (fs.existsSync(path.join(WEB_DIR, 'decisions'))) return WEB_DIR;
  // Local case: parent of WEB_DIR
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