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
// Locate the repo root by walking up until we find a .git directory.
// This works locally (/Users/.../longtv/.git) and on Vercel
// (/vercel/path0/.git — which is always present since Vercel pulls from git).
function findRepoRoot() {
  let cur = __dirname;
  for (let i = 0; i < 8; i++) {
    try {
      if (fs.existsSync(path.join(cur, '.git'))) return cur;
    } catch (e) {}
    cur = path.resolve(cur, '..');
  }
  // Fallback
  return path.resolve(__dirname, '..', '..', '..');
}
const REPO_ROOT = findRepoRoot();
// WEB_DIR is /web under REPO_ROOT.
const WEB_DIR = path.join(REPO_ROOT, 'web');
const DEST = path.join(WEB_DIR, 'content');
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