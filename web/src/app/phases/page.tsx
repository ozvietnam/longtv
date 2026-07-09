import Link from "next/link";

export const metadata = { title: "Các pha triển khai · LongTV" };

const PHASES = [
  {
    id: "00-1",
    title: "00-1 · Đánh giá tiềm năng",
    status: "active",
    desc: "Thị trường + catalog FDI đủ + scorecard → Go/No-Go. Chưa xây hệ thống chi tiết.",
    href: "/docs/06-phases/00-1-feasibility-plan",
  },
  { id: "phase-1", title: "P1 · Xây dựng dự án", status: "active", desc: "Vấn đề lớn → chẻ nhỏ → cấu trúc cây vấn đề.", href: "/docs/01-project-structure/00-MACRO_PROBLEMS" },
  { id: "phase-2", title: "P2 · Khai vấn đa phương án", status: "pending", desc: "Đưa ra nhiều phương án cho từng bài toán con.", href: null },
  { id: "phase-3", title: "P3 · Nghiên cứu & khảo sát thị trường", status: "pending", desc: "Số liệu FDI, đối thủ, ưu đãi 2 tỉnh — gộp trong 00-1.", href: "/docs/04-research/2026-07/00-index" },
  { id: "phase-4", title: "P4 · Ra 3 phương án mô hình kinh doanh", status: "pending", desc: "Lean / Boutique / Platform — anh chọn 1.", href: null },
  { id: "phase-5", title: "P5 · Business Plan v1 + triển khai", status: "pending", desc: "Sau Go từ 00-1 — org, SOP, KPI, dòng tiền.", href: null },
  {
    id: "phase-system-2",
    title: "Giai đoạn 2 · Hệ thống chi tiết",
    status: "pending",
    desc: "Org scale, SOP, CRM, sales — bàn sau khi 00-1 Go.",
    href: null,
  },
];

export default function PhasesIndex() {
  const current = PHASES.find((p) => p.id === "00-1");

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Các pha triển khai</h1>
        <p className="text-[var(--muted)]">
          <strong>Giai đoạn 00-1</strong> đang chạy: đánh giá tiềm năng trước khi đầu tư xây hệ thống chi tiết (Giai đoạn 2).
        </p>
      </header>

      {current && current.href && (
        <section className="mb-12 p-6 rounded-lg border-2 border-[var(--accent)] bg-white">
          <div className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-2">
            Giai đoạn hiện tại
          </div>
          <h2 className="text-2xl font-bold mb-2">{current.title}</h2>
          <p className="text-[var(--muted)] mb-4">{current.desc}</p>
          <Link
            href={current.href}
            className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
          >
            Đọc kế hoạch 00-1 →
          </Link>
        </section>
      )}

      <ol className="space-y-3">
        {PHASES.map((p) => (
          <li
            key={p.id}
            className={`p-5 rounded-lg border bg-white ${
              p.status === "active" ? "border-[var(--accent)]" : "border-[var(--border)]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h2 className="font-semibold text-lg">{p.title}</h2>
                  {p.status === "active" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)] text-white font-medium">
                      ĐANG CHẠY
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)]">{p.desc}</p>
                {p.href && p.id !== "00-1" && (
                  <Link href={p.href} className="text-sm text-[var(--accent)] hover:underline mt-2 inline-block">
                    Xem tài liệu →
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
