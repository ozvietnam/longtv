import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function markdownToHtml(md: string): Promise<string> {
  const file = await remark().use(gfm).use(html, { sanitize: false }).process(md);
  return String(file);
}