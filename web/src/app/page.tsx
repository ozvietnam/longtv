import Link from "next/link";
import { DEPARTMENTS } from "@/lib/departments";
import { getAllDocs } from "@/lib/docs";
import { getAllDepartmentTasks } from "@/lib/tasks";

const HUB_LINKS = [
  {
    href: "/kim",
    title: "Thư ký Kim",
    subtitle: "Chỉ việc người thật làm",
    desc: "Gọi, ký, gặp, nộp hồ sơ — AI không thay thế. Mỗi owner tự nhận việc",
    accent: true,
    icon: "★",
  },
  {
    href: "/cam-nang",
    title: "Cẩm nang tri thức",
    subtitle: "Thư viện đầu tư nước ngoài (FDI)",
    desc: "Quy trình thu thập · bài đã có · nguồn pháp luật · backlog",
    accent: true,
    icon: "📚",
  },
  {
    href: "/docs/06-phases/00-1-feasibility-plan",
    title: "Giai đoạn đánh giá tiềm năng",
    subtitle: "Bước khởi đầu (00-1)",
    desc: "Thị trường · danh mục dịch vụ · quyết định tiếp tục",
    accent: true,
    icon: "01",
  },
  {
    href: "/services",
    title: "Dịch vụ công ty",
    subtitle: "9 giai đoạn vòng đời",
    desc: "Từ sang Việt Nam → vận hành → di dời / về nước",
    icon: "02",
  },
  {
    href: "/logistics",
    title: "Hậu cần & hải quan",
    subtitle: "Mảng logistics miền Bắc",
    desc: "Khai báo hải quan · nhập máy · vận chuyển · thuê ngoài theo tháng",
    accent: true,
    icon: "🚢",
  },
  {
    href: "/operations",
    title: "Bảng vận hành",
    subtitle: "5 phòng ban",
    desc: "TODO P0/P1 · assignee · tiến độ",
    icon: "03",
  },
  {
    href: "/hermes",
    title: "Hermes đã làm gì?",
    subtitle: "Wave 1 xong · Wave 2 đang chờ",
    desc: "Desk research có evidence · Kim field chưa tick done — xem trước khi duyệt",
    accent: true,
    icon: "🔬",
  },
  {
    href: "/docs/04-research/2026-07/00-index",
    title: "Nghiên cứu",
    subtitle: "Tháng 7/2026",
    desc: "Đối thủ · FDI · Thái Nguyên · vốn",
    icon: "04",
  },
];

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
      {/* Phase banner */}
      <section className="bg-[var(--accent)] text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Đang chạy · Giai đoạn đánh giá tiềm năng
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Đánh giá tiềm năng LONGTV
              </h1>
              <p className="text-white/85 max-w-xl text-sm md:text-base leading-relaxed">
                Công ty cổ phần tư vấn đầu tư nước ngoài (FDI) Trung Quốc → Việt Nam — Thái Nguyên & Hải Phòng ·
                Hậu cần miền Bắc. Mục tiêu: chứng minh thị trường có tiềm năng trước khi mở rộng.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/kim"
                className="inline-flex items-center justify-center px-5 h-11 rounded-full bg-white text-[var(--accent)] font-semibold text-sm hover:bg-white/90"
              >
                Giao Thư ký Kim →
              </Link>
              <Link
                href="/docs/06-phases/00-1-feasibility-plan"
                className="inline-flex items-center justify-center px-5 h-11 rounded-full border border-white/40 font-medium text-sm hover:bg-white/10"
              >
                Kế hoạch đánh giá tiềm năng
              </Link>
              <Link
                href="/operations"
                className="inline-flex items-center justify-center px-5 h-11 rounded-full border border-white/40 font-medium text-sm hover:bg-white/10"
              >
                Bảng vận hành
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 space-y-14">
        {/* Progress + insights */}
        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 p-6 rounded-2xl border-2 border-[var(--accent)] bg-white shadow-sm">
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mb-2">
              Tiến độ P0 tháng 7
            </div>
            <div className="text-4xl font-bold mb-1">
              {p0Done}/{p0Total}
              <span className="text-lg font-normal text-[var(--muted)] ml-2">việc</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 mt-4 mb-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-all"
                style={{ width: `${p0Pct}%` }}
              />
            </div>
            <div className="text-sm text-[var(--muted)]">{p0Pct}% hoàn thành · 5 phòng ban</div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
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
          <h2 className="text-xl font-bold mb-6">Truy cập nhanh</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HUB_LINKS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group block p-6 rounded-2xl border transition hover:shadow-md ${
                  card.accent
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] hover:bg-white"
                    : "border-[var(--border)] bg-white hover:border-[var(--accent)]"
                }`}
              >
                <div className="text-xs font-mono text-[var(--muted)] mb-3">{card.icon}</div>
                <h3 className="font-bold text-lg mb-0.5 group-hover:text-[var(--accent)]">{card.title}</h3>
                <div className="text-xs font-semibold text-[var(--accent)] mb-2">{card.subtitle}</div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Department progress */}
        <section>
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-xl font-bold">Tiến độ theo phòng ban</h2>
            <Link href="/operations" className="text-sm text-[var(--accent)] hover:underline">
              Chi tiết bảng vận hành →
            </Link>
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
        </section>

        {/* Service tiers summary */}
        <section className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-white">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold mb-2">Mô hình dịch vụ</h2>
              <p className="text-sm text-[var(--muted)] max-w-xl">
                3 tầng phục vụ nhà máy Trung Quốc dịch chuyển về Việt Nam
              </p>
            </div>
            <Link
              href="/services"
              className="shrink-0 text-sm px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
            >
              Xem danh mục đầy đủ
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
        </section>

        {/* Latest research */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-bold">Nghiên cứu mới nhất</h2>
            <Link href="/docs/04-research/2026-07/00-index" className="text-sm text-[var(--accent)] hover:underline">
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
      </div>
    </div>
  );
}
