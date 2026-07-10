import Link from "next/link";
import { Phase001Banner, RelatedPagesGrid, StickyPageNav } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";

export const metadata = { title: "Các pha triển khai · LongTV" };

const PHASE_SECTIONS = [
  { id: "hien-tai", label: "Đang chạy" },
  { id: "da-xong", label: "00-1 xong" },
  { id: "tuong-lai", label: "Tương lai" },
] as const;

const PHASES_ACTIVE = [
  {
    id: "phase-system-2",
    title: "Giai đoạn 2 · Hệ thống chi tiết",
    status: "active",
    desc: "SOP A1, CTCP, sales pilot — sau khi Leader ký QĐ #005.",
    href: "/docs/06-phases/02-giai-doan-2-overview",
  },
];

const PHASES_DONE = [
  {
    id: "00-1",
    title: "00-1 · Đánh giá tiềm năng",
    desc: "Desk research + scorecard 38/50 → Go + Adjust. Field verify → Hermes Wave 2.",
    href: "/assessment",
    links: [
      { href: "/docs/06-phases/00-1-feasibility-plan", label: "Kế hoạch markdown" },
      { href: "/hermes", label: "Tiến độ Hermes" },
      { href: "/docs/06-phases/00-1-thuc-trang", label: "Thực trạng" },
      { href: "/logistics", label: "Hậu cần" },
    ],
  },
  {
    id: "phase-3",
    title: "P3 · Nghiên cứu & khảo sát",
    desc: "Desk tháng 7 xong — field Hermes.",
    href: "/docs/04-research/2026-07/00-index",
  },
];

const PHASES_FUTURE = [
  { id: "phase-1", title: "P1 · Xây dựng dự án", desc: "Vấn đề lớn → chẻ nhỏ → cấu trúc cây vấn đề.", href: "/docs/01-project-structure/00-MACRO_PROBLEMS" },
  { id: "phase-2", title: "P2 · Khai vấn đa phương án", desc: "Đưa ra nhiều phương án cho từng bài toán con.", href: null },
  { id: "phase-4", title: "P4 · 3 phương án mô hình KD", desc: "Lean / Boutique / Platform — anh chọn 1.", href: null },
  { id: "phase-5", title: "P5 · Business Plan v1", desc: "Sau Go từ 00-1 — org, SOP, KPI, dòng tiền.", href: null },
];

export default function PhasesIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Các pha triển khai</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          Lộ trình từ <strong>đánh giá tiềm năng (00-1)</strong> → <strong>lean launch (GĐ2)</strong> → các pha P1–P5 dài hạn.
        </p>
      </header>

      <Phase001Banner compact />
      <StickyPageNav sections={PHASE_SECTIONS} />

      <section id="hien-tai" className="scroll-mt-32 mb-12">
        <h2 className="text-xl font-bold mb-4">Đang chạy</h2>
        {PHASES_ACTIVE.map((p) => (
          <div key={p.id} className="p-6 rounded-xl border-2 border-[var(--accent)] bg-white mb-4">
            <div className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-2">Giai đoạn hiện tại</div>
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-[var(--muted)] mb-4">{p.desc}</p>
            {p.href && (
              <Link href={p.href} className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90">
                Đọc Giai đoạn 2 →
              </Link>
            )}
          </div>
        ))}
      </section>

      <section id="da-xong" className="scroll-mt-32 mb-12">
        <h2 className="text-xl font-bold mb-4">Đã hoàn thành (desk)</h2>
        <div className="space-y-3">
          {PHASES_DONE.map((p) => (
            <div key={p.id} className="p-5 rounded-lg border border-green-200 bg-green-50/40">
              <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-[var(--muted)] mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.href && (
                  <Link href={p.href} className="text-sm px-3 py-1.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90">
                    Dashboard →
                  </Link>
                )}
                {"links" in p &&
                  p.links?.map((l) => (
                    <Link key={l.href} href={l.href} className="text-xs px-2 py-1 rounded-full border border-green-300 bg-white hover:border-green-500">
                      {l.label}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="tuong-lai" className="scroll-mt-32 mb-10">
        <h2 className="text-xl font-bold mb-4">Chưa bắt đầu</h2>
        <ol className="space-y-3">
          {PHASES_FUTURE.map((p) => (
            <li key={p.id} className="p-5 rounded-lg border border-[var(--border)] bg-white">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-[var(--muted)] mt-1">{p.desc}</p>
              {p.href && (
                <Link href={p.href} className="text-sm text-[var(--accent)] hover:underline mt-2 inline-block">
                  Xem tài liệu →
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <RelatedPagesGrid links={PAGE_RELATED["/phases"]} />
    </div>
  );
}
