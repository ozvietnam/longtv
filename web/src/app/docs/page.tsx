import Link from "next/link";
import { getAllDocs, getDocsByCategory } from "@/lib/docs";

export const metadata = { title: "Tài liệu · LongTV" };

export default function DocsIndex() {
  const docs = getAllDocs();
  const grouped = getDocsByCategory();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Tất cả tài liệu</h1>
        <p className="text-[var(--muted)]">
          {docs.length} tài liệu trong kho tri thức. Mỗi tài liệu được viết theo phương pháp
          <strong> Top-down · Multi-option</strong>: vấn đề lớn → chẻ nhỏ → khai vấn đa phương án.
        </p>
      </header>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] mb-4 pb-2 border-b border-[var(--border)]">
            {category === "repo" ? "📁 Web — Content chính thức" : category === "desktop" ? "🗂️ Kho longtv trên máy" : category}
            <span className="ml-2 text-[var(--foreground)]">({items.length})</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {items.map((doc) => (
              <Link
                key={doc.meta.slug.join("/")}
                href={`/docs/${doc.meta.slug.join("/")}`}
                className="block p-5 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--accent)] transition"
              >
                <h3 className="font-semibold mb-1.5">{doc.meta.title}</h3>
                {doc.meta.description && (
                  <p className="text-sm text-[var(--muted)] line-clamp-2">{doc.meta.description}</p>
                )}
                <div className="text-xs text-[var(--muted)] mt-3 font-mono">
                  /docs/{doc.meta.slug.join("/")}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}