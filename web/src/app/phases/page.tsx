import Link from "next/link";

export const metadata = { title: "Các pha triển khai · LongTV" };

const PHASES = [
  {
    id: "00-1",
    title: "00-1 · Đánh giá tiềm năng",
    status: "done-desk",
    desc: "Desk research + scorecard 38/50 → Go + Adjust. Field verify chuyển Hermes Wave 2.",
    href: "/docs/06-phases/00-1-feasibility-plan",
    links: [
      { href: "/hermes", label: "Tiến độ Hermes" },
      { href: "/docs/06-phases/00-1-thuc-trang", label: "Thực trạng 00-1" },
    ],
  },
  {
    id: "phase-system-2",
    title: "Giai đoạn 2 · Hệ thống chi tiết",
    status: "active",
    desc: "SOP A1, CTCP, sales pilot — sau khi Leader ký QĐ #005.",
    href: "/docs/06-phases/02-giai-doan-2-overview",
  },
  { id: "phase-1", title: "P1 · Xây dựng dự án", status: "pending", desc: "Vấn đề lớn → chẻ nhỏ → cấu trúc cây vấn đề.", href: "/docs/01-project-structure/00-MACRO_PROBLEMS" },
  { id: "phase-3", title: "P3 · Nghiên cứu & khảo sát thị trường", status: "done-desk", desc: "Desk tháng 7 xong — field Hermes. Xem /hermes.", href: "/docs/04-research/2026-07/00-index" },
  { id: "phase-2", title: "P2 · Khai vấn đa phương án", status: "pending", desc: "Đưa ra nhiều phương án cho từng bài toán con.", href: null },
  { id: "phase-4", title: "P4 · Ra 3 phương án mô hình kinh doanh", status: "pending", desc: "Lean / Boutique / Platform — anh chọn 1.", href: null },
  { id: "phase-5", title: "P5 · Business Plan v1 + triển khai", status: "pending", desc: "Sau Go từ 00-1 — org, SOP, KPI, dòng tiền.", href: null },
];

const STATUS_BADGE: Record<string, { label: string; className: string }> = {
  active: { label: "ĐANG CHẠY", className: "bg-[var(--accent)] text-white" },
  "done-desk": { label: "DESK XONG", className: "bg-green-600 text-white" },
  pending: { label: "", className: "" },
};

export default function PhasesIndex() {
  const current = PHASES.find((p) => p.status === "active");

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Các pha triển khai</h1>
        <p className="text-[var(--muted)]">
          <strong>Giai đoạn 00-1</strong> desk hoàn thành (38/50 · Go + Adjust). Đang chuyển sang{" "}
          <strong>Giai đoạn 2</strong> — field verify qua Hermes Wave 2.
        </p>
        <Link href="/hermes" className="inline-block mt-3 text-sm text-violet-700 font-medium hover:underline">
          Xem tiến độ Hermes →
        </Link>
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
            Đọc Giai đoạn 2 →
          </Link>
        </section>
      )}

      <section className="mb-10 p-5 rounded-xl border border-green-200 bg-green-50/50">
        <h2 className="font-bold text-green-900 mb-1">00-1 — Desk đã xong</h2>
        <p className="text-sm text-[var(--muted)] mb-3">
          Memo · scorecard · catalog v1 · logistics · investor pack. Cập nhật 2026-07-09.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/docs/06-phases/00-1-feasibility-plan"
            className="text-sm px-3 py-1.5 rounded-full bg-white border border-green-200 font-medium hover:border-green-400"
          >
            Kế hoạch 00-1 →
          </Link>
          <Link
            href="/docs/06-phases/00-1-thuc-trang"
            className="text-sm px-3 py-1.5 rounded-full bg-white border border-green-200 font-medium hover:border-green-400"
          >
            Thực trạng →
          </Link>
          <Link
            href="/hermes"
            className="text-sm px-3 py-1.5 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700"
          >
            Hermes →
          </Link>
        </div>
      </section>

      <ol className="space-y-3">
        {PHASES.map((p) => {
          const badge = STATUS_BADGE[p.status];
          return (
            <li
              key={p.id}
              className={`p-5 rounded-lg border bg-white ${
                p.status === "active" ? "border-[var(--accent)]" : p.status === "done-desk" ? "border-green-200" : "border-[var(--border)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="font-semibold text-lg">{p.title}</h2>
                    {badge.label && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}>
                        {badge.label}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--muted)]">{p.desc}</p>
                  {p.href && (
                    <Link href={p.href} className="text-sm text-[var(--accent)] hover:underline mt-2 inline-block">
                      Xem tài liệu →
                    </Link>
                  )}
                  {"links" in p && p.links && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {p.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="text-xs px-2 py-1 rounded-full border border-violet-200 text-violet-800 hover:bg-violet-50"
                        >
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
