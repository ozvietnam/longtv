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
const WEB_DIR = path.resolve(__dirname, '..');
const REPO_ROOT = path.resolve(WEB_DIR, '..');
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