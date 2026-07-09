import Link from "next/link";
import { getAllDocs } from "@/lib/docs";

export default function Home() {
  const docs = getAllDocs();
  const featured = docs.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="py-12 md:py-20 border-b border-[var(--border)]">
        <div className="max-w-3xl">
          <div className="inline-block text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-4">
            Dự án · Khởi động 2026-07-08
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            Trung tâm kết nối đầu tư <span className="text-[var(--accent)]">TQ ↔ VN</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-8">
            CTCP có tập đoàn Trung Quốc đồng hành — <strong>chính sách & chính quyền</strong> tại Thái Nguyên, Hải Phòng;
            <strong> logistics & hải quan</strong> toàn miền Bắc; <strong>pháp lý & kế toán</strong> cho nhà đầu tư nước ngoài.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/docs/00-WORKING_PRINCIPLES"
              className="inline-flex items-center px-5 h-11 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
            >
              Nguyên tắc làm việc
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] font-medium hover:bg-white"
            >
              Lộ trình tháng 7
            </Link>
            <Link
              href="/docs/services/00-index"
              className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] font-medium hover:bg-white"
            >
              Dịch vụ
            </Link>
            <Link
              href="/docs/services/policy-government"
              className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] font-medium hover:bg-white"
            >
              Chính sách 2 tỉnh
            </Link>
            <Link
              href="/departments"
              className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] font-medium hover:bg-white"
            >
              Phòng ban & TODO
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 border-b border-[var(--border)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat label="Tỉnh trọng tâm" value="2" suffix="tỉnh" />
          <Stat label="Vấn đề lớn (V)" value="7" suffix="tầng" />
          <Stat label="Tài liệu" value={docs.length.toString()} suffix="bài" />
          <Stat label="Trạng thái" value="P1" suffix="Xây dựng" />
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-12">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tài liệu mới nhất</h2>
          <Link href="/docs" className="text-sm text-[var(--accent)] hover:underline">
            Tất cả →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((doc) => (
            <Link
              key={doc.meta.slug.join("/")}
              href={`/docs/${doc.meta.slug.join("/")}`}
              className="group block p-6 rounded-lg border border-[var(--border)] bg-white hover:border-[var(--accent)] transition"
            >
              <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                {doc.meta.category}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)]">
                {doc.meta.title}
              </h3>
              {doc.meta.description && (
                <p className="text-sm text-[var(--muted)] line-clamp-3">{doc.meta.description}</p>
              )}
              <div className="text-xs text-[var(--muted)] mt-4 font-mono">
                /{doc.meta.slug.join("/")}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold tracking-tight">
        {value} <span className="text-base font-normal text-[var(--muted)]">{suffix}</span>
      </div>
      <div className="text-sm text-[var(--muted)] mt-1">{label}</div>
    </div>
  );
}