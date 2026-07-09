import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import { markdownToHtml } from "@/lib/markdown";

export async function generateStaticParams() {
  return getAllDocs().map((doc) => ({ slug: doc.meta.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: "Không tìm thấy · LongTV" };
  return {
    title: `${doc.meta.title} · LongTV`,
    description: doc.meta.description,
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const html = await markdownToHtml(doc.content);
  const all = getAllDocs();
  const currentIdx = all.findIndex((d) => d.meta.slug.join("/") === slug.join("/"));
  const prev = currentIdx > 0 ? all[currentIdx - 1] : null;
  const next = currentIdx < all.length - 1 ? all[currentIdx + 1] : null;
  const slugKey = slug.join("/");
  const showAssessmentBack =
    slug[0] === "services" ||
    slug[0] === "data" ||
    slugKey === "03-departments/04-san-pham/service-catalog-v0.2" ||
    slugKey === "03-departments/04-san-pham/build-vs-partner" ||
    slugKey === "decisions/003-strategy-july-2026";

  return (
    <article className="max-w-5xl mx-auto px-6 py-12">
      <nav className="text-sm text-[var(--muted)] mb-6">
        <Link href="/" className="hover:text-[var(--accent)]">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link href="/docs" className="hover:text-[var(--accent)]">Tài liệu</Link>
        {slug.map((s, i) => (
          <span key={i}>
            <span className="mx-2">/</span>
            <span className="font-mono">{s}</span>
          </span>
        ))}
      </nav>

      {showAssessmentBack && (
        <Link
          href="/assessment"
          className="mb-8 inline-flex h-10 items-center rounded-full border border-[var(--border)] bg-white px-4 text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          ← Quay lại trang đánh giá tiềm năng & khả thi
        </Link>
      )}

      <header className="mb-10 pb-6 border-b border-[var(--border)]">
        {doc.meta.category && (
          <div className="text-xs uppercase tracking-wider text-[var(--accent)] mb-3 font-semibold">
            {doc.meta.category}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
          {doc.meta.title}
        </h1>
        {doc.meta.description && (
          <p className="text-lg text-[var(--muted)] leading-relaxed">{doc.meta.description}</p>
        )}
      </header>

      <div className="prose-longtv max-w-none" dangerouslySetInnerHTML={{ __html: html }} />

      <nav className="mt-16 pt-8 border-t border-[var(--border)] flex justify-between gap-4">
        {prev ? (
          <Link href={`/docs/${prev.meta.slug.join("/")}`} className="group flex-1 p-4 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--accent)]">
            <div className="text-xs text-[var(--muted)] mb-1">← Trước</div>
            <div className="font-semibold group-hover:text-[var(--accent)]">{prev.meta.title}</div>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link href={`/docs/${next.meta.slug.join("/")}`} className="group flex-1 p-4 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--accent)] text-right">
            <div className="text-xs text-[var(--muted)] mb-1">Tiếp →</div>
            <div className="font-semibold group-hover:text-[var(--accent)]">{next.meta.title}</div>
          </Link>
        ) : <div className="flex-1" />}
      </nav>
    </article>
  );
}