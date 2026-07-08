import { getAllDocs } from "@/lib/docs";

export const metadata = { title: "Log quyết định · LongTV" };

export default function DecisionsIndex() {
  const docs = getAllDocs();
  const decisions = docs.filter((d) => d.meta.category === "decisions" || d.meta.slug[0] === "decisions");

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Log quyết định</h1>
        <p className="text-[var(--muted)]">
          Mỗi quyết định quan trọng được ghi lại với: bối cảnh → phương án → lý do chọn → kết quả.
          Không xoá — chỉ thêm.
        </p>
      </header>

      {decisions.length === 0 ? (
        <div className="p-8 rounded-lg border border-dashed border-[var(--border)] text-center text-[var(--muted)]">
          Chưa có quyết định nào được ghi. Khi có, sẽ hiện ở đây.
        </div>
      ) : (
        <ol className="space-y-3">
          {decisions.map((d) => (
            <li key={d.meta.slug.join("/")}>
              <a href={`/docs/${d.meta.slug.join("/")}`} className="block p-4 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--accent)]">
                <div className="font-semibold">{d.meta.title}</div>
                {d.meta.description && <div className="text-sm text-[var(--muted)] mt-1">{d.meta.description}</div>}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}