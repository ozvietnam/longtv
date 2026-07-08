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

// Canonical content is authored in the repository root.
// Before dev/build, scripts/sync-content.mjs mirrors root markdown into /web/content.
// The web app reads ONLY from that mirrored folder so local dev and Vercel behave identically.
const CONTENT_ROOT = path.join(process.cwd(), 'content');

const EXCLUDED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.vercel',
  'out',
  '.turbo',
  'web',
  'src',
  'public',
  'scripts',
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
  const files = walkMarkdown(CONTENT_ROOT);

  for (const f of files) {
    const doc = readDocFromFile(f, CONTENT_ROOT);
    if (!doc) continue;
    docs.push(doc);
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