import Link from "next/link";
import { getAllDocs } from "@/lib/docs";

export const metadata = { title: "Lộ trình tháng · LongTV" };

const CATEGORY_LABELS: Record<string, string> = {
  roadmap: "Lộ trình tháng",
};

export default function RoadmapIndex() {
  const roadmaps = getAllDocs()
    .filter((d) => d.meta.category === "roadmap")
    .sort((a, b) => (b.meta.date || "").localeCompare(a.meta.date || ""));

  const current = roadmaps[0];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Lộ trình theo tháng</h1>
        <p className="text-[var(--muted)]">
          Mỗi tháng bắt đầu bằng <strong>khai vấn định hướng</strong> → chốt phương án → bóc task cho 5 phòng ban.
          Xem <Link href="/docs/00-WORKING_PRINCIPLES" className="text-[var(--accent)] hover:underline">Nguyên tắc làm việc</Link>.
        </p>
      </header>

      {current && (
        <section className="mb-12 p-6 rounded-lg border-2 border-[var(--accent)] bg-white">
          <div className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-2">
            Tháng hiện tại
          </div>
          <h2 className="text-2xl font-bold mb-2">{current.meta.title}</h2>
          {current.meta.description && (
            <p className="text-[var(--muted)] mb-4">{current.meta.description}</p>
          )}
          <Link
            href={`/docs/${current.meta.slug.join("/")}`}
            className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
          >
            Đọc lộ trình tháng →
          </Link>
        </section>
      )}

      <section>
        <h2 className="text-xs uppercase tracking-wider font-semibold text-[var(--muted)] mb-4">
          Tất cả lộ trình ({roadmaps.length})
        </h2>
        <ol className="space-y-3">
          {roadmaps.map((doc) => (
            <li key={doc.meta.slug.join("/")}>
              <Link
                href={`/docs/${doc.meta.slug.join("/")}`}
                className="block p-5 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--accent)] transition"
              >
                <div className="font-semibold">{doc.meta.title}</div>
                {doc.meta.date && (
                  <div className="text-xs text-[var(--muted)] mt-1 font-mono">{String(doc.meta.date)}</div>
                )}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
