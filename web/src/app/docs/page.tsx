import Link from "next/link";
import { getAllDocs, getDocsByCategory } from "@/lib/docs";

export const metadata = { title: "Tài liệu · LongTV" };

const CATEGORY_LABELS: Record<string, string> = {
  repo: "📁 Kho tài liệu chính thức",
  desktop: "🗂️ Kho longtv trên máy",
  principles: "⚙️ Nguyên tắc làm việc",
  methodology: "📐 Phương pháp",
  roadmap: "📅 Lộ trình tháng",
  phases: "🚦 Giai đoạn",
  departments: "🏢 Phòng ban",
  decisions: "✅ Quyết định",
  clarifications: "📝 Yêu cầu làm rõ",
  services: "🧩 Dịch vụ",
  data: "🧭 Kế hoạch & dữ liệu nghiên cứu",
  "legal-library": "📚 Thư viện pháp luật",
};

function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] || category;
}

export default function DocsIndex() {
  const docs = getAllDocs();
  const grouped = getDocsByCategory();

  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const order = ["principles", "methodology", "roadmap", "phases", "departments", "services", "decisions", "clarifications", "legal-library", "data", "repo", "desktop"];
    return (order.indexOf(a) === -1 ? 99 : order.indexOf(a)) - (order.indexOf(b) === -1 ? 99 : order.indexOf(b));
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Tất cả tài liệu</h1>
        <p className="text-[var(--muted)]">
          {docs.length} tài liệu trong kho tri thức. Mỗi tài liệu được viết theo phương pháp
          <strong> Top-down · Multi-option</strong>: vấn đề lớn → chẻ nhỏ → khai vấn đa phương án.
        </p>
      </header>

      {sortedCategories.map((category) => {
        const items = grouped[category];
        return (
        <section key={category} className="mb-12">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] mb-4 pb-2 border-b border-[var(--border)]">
            {categoryLabel(category)}
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
      );
      })}
    </div>
  );
}