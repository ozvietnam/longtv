#!/usr/bin/env node
/**
 * Pre-build content sync.
 *
 * Source of truth: <repo>/<root-level *.md + decisions/ + 01-.../.../*.md>
 * Destination:     <repo>/web/content/ (git-tracked so Vercel ships it)
 *
 * Run via `npm run sync-content` (or auto via `prebuild` hook).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// WEB_DIR = directory containing package.json (walking up from this script)
function findWebDir() {
  let cur = __dirname;
  for (let i = 0; i < 6; i++) {
    if (fs.existsSync(path.join(cur, 'package.json'))) return cur;
    cur = path.resolve(cur, '..');
  }
  throw new Error('sync-content: cannot find package.json ancestor of ' + __dirname);
}
const WEB_DIR = findWebDir();
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
  'content', // avoid recursion into dest
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

console.log(`[sync-content] REPO_ROOT=${REPO_ROOT}`);
console.log(`[sync-content] WEB_DIR=${WEB_DIR}`);
console.log(`[sync-content] DEST=${DEST}`);

rmrf(DEST);
mkdirp(DEST);
copyDir(REPO_ROOT, DEST);

// Mirror web/data/*.md into content/data/ (FDI legal handbook planning docs)
function copyWebDataMarkdown() {
  const src = path.join(WEB_DIR, 'data');
  const dst = path.join(DEST, 'data');
  if (!fs.existsSync(src)) return;
  function walk(dir, rel = '') {
    for (const entry of fs.readdirSync(dir)) {
      const sp = path.join(dir, entry);
      const relPath = rel ? `${rel}/${entry}` : entry;
      const st = fs.statSync(sp);
      if (st.isDirectory()) {
        walk(sp, relPath);
      } else if (entry.endsWith('.md')) {
        const dp = path.join(dst, relPath);
        mkdirp(path.dirname(dp));
        fs.copyFileSync(sp, dp);
      }
    }
  }
  walk(src);
}
copyWebDataMarkdown();

let count = 0;
function countFiles(dir) {
  for (const e of fs.readdirSync(dir)) {
    const p = path.join(dir, e);
    if (fs.statSync(p).isDirectory()) countFiles(p);
    else if (e.endsWith('.md')) count++;
  }
}
countFiles(DEST);
console.log(`[sync-content] done — ${count} markdown files`);