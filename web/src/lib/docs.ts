import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type DocMeta = {
  slug: string[];
  title: string;
  description?: string;
  date?: string;
  category?: string;
  tags?: string[];
  author?: string;
  order?: number;
};

export type Doc = {
  meta: DocMeta;
  content: string;
  raw: string;
};

// Web lives at <repo>/web. Markdown content lives at <repo>/root (siblings of /web).
// A prebuild script copies content from repo root into web/content/ before each build,
// so this code reads from ./content locally (Next.js server).
// See web/scripts/sync-content.mjs
const REPO_ROOT = path.resolve(process.cwd(), '..');
const REPO_CONTENT = path.join(process.cwd(), 'content');

// Local working copy on user's Desktop (dev-only — Vercel can't access user's machine)
const IS_PROD = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
const DESKTOP_CONTENT = IS_PROD ? '' : path.join(process.env.HOME || '', 'Desktop', 'longtv');

const EXCLUDED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.vercel',
  'out',
  '.turbo',
  'web', // never treat the Next.js project as content
]);

function safeReadDir(p: string): string[] {
  try {
    return fs.readdirSync(p);
  } catch {
    return [];
  }
}

const EXCLUDED_FILES = new Set([
  'AGENTS.md',
  'CLAUDE.md',
  'README.md',
]);

function walkMarkdown(dir: string, base: string = dir): string[] {
  const out: string[] = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of safeReadDir(dir)) {
    if (EXCLUDED_DIRS.has(entry)) continue;
    if (EXCLUDED_FILES.has(entry)) continue;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      out.push(...walkMarkdown(full, base));
    } else if (entry.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

function readDocFromFile(absPath: string, sourceRoot: string): Doc | null {
  try {
    const raw = fs.readFileSync(absPath, 'utf-8');
    const { data, content } = matter(raw);
    const rel = path.relative(sourceRoot, absPath).replace(/\\/g, '/');
    const slug = rel.replace(/\.md$/, '').split('/').filter(Boolean);
    const meta: DocMeta = {
      slug,
      title: (data.title as string) || slug[slug.length - 1] || 'Untitled',
      description: data.description as string | undefined,
      date: data.date as string | undefined,
      category: data.category as string | undefined,
      tags: (data.tags as string[] | undefined) || [],
      author: data.author as string | undefined,
      order: (data.order as number | undefined) ?? 999,
    };
    return { meta, content, raw };
  } catch {
    return null;
  }
}

export function getAllDocs(): Doc[] {
  const docs: Doc[] = [];
  const sources: { root: string; label: string }[] = [
    { root: REPO_CONTENT, label: 'repo' },
  ];
  if (DESKTOP_CONTENT && fs.existsSync(DESKTOP_CONTENT)) {
    sources.push({ root: DESKTOP_CONTENT, label: 'desktop' });
  }
  const seen = new Set<string>();

  for (const { root, label } of sources) {
    const files = walkMarkdown(root);
    for (const f of files) {
      const doc = readDocFromFile(f, root);
      if (!doc) continue;
      const key = doc.meta.slug.join('/');
      if (seen.has(key)) continue;
      seen.add(key);
      doc.meta.category = doc.meta.category || label;
      docs.push(doc);
    }
  }

  docs.sort((a, b) => {
    const orderDiff = (a.meta.order ?? 999) - (b.meta.order ?? 999);
    if (orderDiff !== 0) return orderDiff;
    return (a.meta.title || '').localeCompare(b.meta.title || '');
  });
  return docs;
}

export function getDocBySlug(slugParts: string[]): Doc | null {
  const docs = getAllDocs();
  const key = slugParts.join('/');
  return docs.find((d) => d.meta.slug.join('/') === key) || null;
}

export function getDocsByCategory(): Record<string, Doc[]> {
  const grouped: Record<string, Doc[]> = {};
  for (const doc of getAllDocs()) {
    const cat = doc.meta.category || 'uncategorized';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(doc);
  }
  return grouped;
}