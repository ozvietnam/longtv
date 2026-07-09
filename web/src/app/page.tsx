import Link from "next/link";
import { DEPARTMENTS } from "@/lib/departments";
import { getAllDocs } from "@/lib/docs";
import { VERDICT } from "@/lib/feasibility-data";
import { getAllDepartmentTasks } from "@/lib/tasks";
import { HOME_HUB_CARDS, HOME_HUB_GROUPS, HOME_SHAREHOLDER_PATH } from "@/lib/site-pages";

const INSIGHTS = [
  { label: "Đầu tư nước ngoài mới (6T/2026)", value: "34,65 tỷ USD", note: "Toàn quốc, +61% so với cùng kỳ" },
  { label: "Thái Nguyên", value: "Dẫn đầu", note: "~5,7 tỷ USD vốn FDI mới" },
  { label: "Trung Quốc", value: "Hạng 2", note: "21% vốn FDI mới năm 2025" },
  { label: "Phân khúc LONGTV", value: "Tầng 2–3", note: "Chuỗi cung ứng nhà máy Trung Quốc" },
];

export default function Home() {
  const docs = getAllDocs();
  const deptTasks = getAllDepartmentTasks();
  const allP0 = deptTasks.flatMap((d) => d.tasks.filter((t) => t.priority === "P0"));
  const p0Done = allP0.filter((t) => t.status === "done").length;
  const p0Total = allP0.length;
  const p0Pct = p0Total > 0 ? Math.round((p0Done / p0Total) * 100) : 0;

  const research = docs.filter((d) => d.meta.slug.join("/").startsWith("04-research/")).slice(0, 4);

  return (
    <div>
      {/* Hero — ưu tiên cổ đông */}
      <section className="bg-[var(--accent)] text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Shareholder briefing · Giai đoạn 00-1
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Đánh giá tiềm năng LONGTV
              </h1>
              <p className="text-white/85 max-w-xl text-sm md:text-base leading-relaxed">
                CTCP tư vấn FDI Trung Quốc → Việt Nam — Thái Nguyên & Hải Phòng · Hậu cần miền Bắc.
                Trang này trình bày theo thứ tự quan tâm của cổ đông: khả thi → đối tác → mô hình KD → bằng chứng.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center px-5 h-11 rounded-full bg-white text-[var(--accent)] font-semibold text-sm hover:bg-white/90"
                >
                  Dashboard 00-1 →
                </Link>
                <Link
                  href="/co-dong"
                  className="inline-flex items-center justify-center px-5 h-11 rounded-full border border-white/40 font-medium text-sm hover:bg-white/10"
                >
                  Cổ đông & Oz
                </Link>
              </div>
              <Link href="/operations" className="text-center text-xs text-white/70 hover:text-white">
                Team nội bộ → Bảng vận hành
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 space-y-10">
        {/* Verdict strip */}
        <section className="p-5 md:p-6 rounded-2xl border-2 border-[var(--accent)] bg-[var(--accent-soft)]/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-bold px-3 py-1.5 rounded-full bg-white border border-[var(--accent)]/30">
                {VERDICT.scorecardTotal}/{VERDICT.scorecardMax} điểm
              </span>
              <span className="text-sm font-semibold text-[var(--accent)]">{VERDICT.decision}</span>
            </div>
            <p className="text-sm text-[var(--foreground)] max-w-3xl leading-relaxed">{VERDICT.headline}</p>
            <Link
              href="/assessment"
              className="shrink-0 text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Xem biểu đồ & scorecard →
            </Link>
          </div>
        </section>

        {/* Lộ trình đọc gợi ý */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
            Đọc theo thứ tự (gợi ý cho cổ đông)
          </h2>
          <ol className="flex flex-wrap gap-2">
            {HOME_SHAREHOLDER_PATH.map((step, i) => (
              <li key={step.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-[var(--muted)] text-xs hidden sm:inline">→</span>}
                <Link
                  href={step.href}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--border)] bg-white text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  {step.label}
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Thị trường & phân khúc */}
        <section>
          <h2 className="text-xl font-bold mb-4">Thị trường & phân khúc</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INSIGHTS.map((item) => (
              <div key={item.label} className="p-5 rounded-xl border border-[var(--border)] bg-white">
                <div className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-2xl font-bold text-[var(--accent)]">{item.value}</div>
                <div className="text-sm text-[var(--muted)] mt-1">{item.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hub navigation */}
        <section>
          <h2 className="text-xl font-bold mb-2">Truy cập nhanh</h2>
          <p className="text-sm text-[var(--muted)] mb-6">Nhóm trên cùng dành cho cổ đông; nhóm dưới cho team vận hành.</p>
          <div className="space-y-8">
            {HOME_HUB_GROUPS.map((group) => (
              <div key={group.label}>
                <div className="mb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">{group.label}</h3>
                  {group.desc && <p className="text-xs text-[var(--muted)] mt-0.5">{group.desc}</p>}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.ids.map((id) => {
                    const card = HOME_HUB_CARDS[id];
                    return (
                      <Link
                        key={card.href}
                        href={card.href}
                        className={`group block p-6 rounded-2xl border transition hover:shadow-md ${
                          "accent" in card && card.accent
                            ? "border-[var(--accent)] bg-[var(--accent-soft)] hover:bg-white"
                            : "border-[var(--border)] bg-white hover:border-[var(--accent)]"
                        }`}
                      >
                        <div className="text-xs font-mono text-[var(--muted)] mb-3">{card.icon}</div>
                        <h4 className="font-bold text-lg mb-0.5 group-hover:text-[var(--accent)]">{card.title}</h4>
                        <div className="text-xs font-semibold text-[var(--accent)] mb-2">{card.subtitle}</div>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">{card.desc}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest research */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">Nghiên cứu & bằng chứng</h2>
              <p className="text-sm text-[var(--muted)] mt-1">Desk research tháng 7 — đối chiếu với dashboard 00-1</p>
            </div>
            <Link href="/docs/04-research/2026-07/00-index" className="text-sm text-[var(--accent)] hover:underline shrink-0">
              Tất cả →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {research.map((doc) => (
              <Link
                key={doc.meta.slug.join("/")}
                href={`/docs/${doc.meta.slug.join("/")}`}
                className="group flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--accent)] transition"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center font-bold text-sm shrink-0">
                  R
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold group-hover:text-[var(--accent)] line-clamp-1">{doc.meta.title}</h3>
                  {doc.meta.description && (
                    <p className="text-sm text-[var(--muted)] line-clamp-2 mt-1">{doc.meta.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Service tiers summary */}
        <details className="rounded-2xl border border-[var(--border)] bg-white">
          <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <div>
              <h2 className="text-xl font-bold">Mô hình dịch vụ</h2>
              <p className="text-sm text-[var(--muted)] mt-1">3 tầng phục vụ nhà máy Trung Quốc dịch chuyển về Việt Nam</p>
            </div>
            <span className="text-sm text-[var(--muted)] shrink-0">Mở rộng ↓</span>
          </summary>
          <div className="px-6 pb-6 pt-0">
            <div className="flex justify-end mb-4">
              <Link
                href="/services"
                className="shrink-0 text-sm px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
              >
                Danh mục đầy đủ →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  tier: "Trung tâm kết nối (hub)",
                  scope: "Toàn quốc",
                  items: "Pháp lý · Kế toán · Kết nối đối tác",
                },
                {
                  tier: "Mảng chính sách & đầu tư",
                  scope: "Thái Nguyên + Hải Phòng",
                  items: "Khảo sát · Xin ưu đãi · Thiết lập nhà máy",
                },
                {
                  tier: "Mảng hậu cần & hải quan",
                  scope: "Miền Bắc",
                  items: "Khai báo hải quan · Vận chuyển · Thuê ngoài theo tháng",
                },
              ].map((t) => (
                <div key={t.tier} className="p-5 rounded-xl bg-[var(--accent-soft)] border border-red-100">
                  <div className="font-bold text-[var(--accent)]">{t.tier}</div>
                  <div className="text-xs text-[var(--muted)] mb-2">{t.scope}</div>
                  <div className="text-sm">{t.items}</div>
                </div>
              ))}
            </div>
          </div>
        </details>

        {/* Vận hành nội bộ — gom P0 + phòng ban */}
        <details className="rounded-2xl border border-dashed border-[var(--border)] bg-stone-50/50">
          <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <div>
              <h2 className="text-xl font-bold">Vận hành nội bộ</h2>
              <p className="text-sm text-[var(--muted)] mt-1">
                Tiến độ P0: {p0Done}/{p0Total} ({p0Pct}%) · Kim & TODO trong bảng vận hành
              </p>
            </div>
            <span className="text-sm text-[var(--muted)] shrink-0">Mở rộng ↓</span>
          </summary>
          <div className="px-6 pb-6 pt-0 space-y-6">
            <div className="flex justify-end">
              <Link href="/operations" className="text-sm text-[var(--accent)] font-medium hover:underline">
                Bảng vận hành →
              </Link>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)] bg-white max-w-sm">
              <div className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mb-2">
                Tiến độ P0 tháng 7
              </div>
              <div className="text-3xl font-bold mb-1">
                {p0Done}/{p0Total}
                <span className="text-base font-normal text-[var(--muted)] ml-2">việc</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100 mt-3 overflow-hidden">
                <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${p0Pct}%` }} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {deptTasks.map((dept) => {
                const meta = DEPARTMENTS.find((d) => d.id === dept.deptId);
                const p0 = dept.tasks.filter((t) => t.priority === "P0");
                const done = p0.filter((t) => t.status === "done").length;
                const pct = p0.length > 0 ? Math.round((done / p0.length) * 100) : 0;

                return (
                  <Link
                    key={dept.deptId}
                    href={`/operations#${dept.deptId}`}
                    className={`p-4 rounded-xl border bg-white hover:shadow-sm transition ${meta?.color || "border-[var(--border)]"}`}
                  >
                    <div className="text-xs text-[var(--muted)] mb-1">{meta?.vLayer}</div>
                    <div className="font-semibold text-sm leading-tight mb-3 min-h-[2.5rem]">{dept.deptName}</div>
                    <div className="text-lg font-bold">
                      {done}/{p0.length}
                      <span className="text-xs font-normal text-[var(--muted)] ml-1">P0</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100 mt-2 overflow-hidden">
                      <div className="h-full bg-[var(--accent)] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
