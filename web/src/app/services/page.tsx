import Link from "next/link";
import { getDocBySlug } from "@/lib/docs";

export const metadata = {
  title: "Dịch vụ · LongTV",
  description: "Catalog dịch vụ LONGTV: Hub kết nối, chính sách 2 tỉnh, logistics miền Bắc.",
};

const TIERS = [
  {
    id: "hub",
    name: "Hub",
    subtitle: "Trung tâm kết nối",
    scope: "Toàn VN",
    description: "Thông tin, pháp lý, kế toán — giữ khách lâu dài",
    color: "border-indigo-300 bg-indigo-50/50",
    accent: "text-indigo-700",
    services: [
      { id: "H1", name: "Kho tri thức & cập nhật chính sách", mode: "Tự làm" },
      { id: "H2", name: "Tư vấn pháp lý kinh doanh & đầu tư", mode: "Tự làm + luật sư" },
      { id: "H3", name: "Kế toán · kiểm toán · hạch toán SX", mode: "Đối tác CPA" },
      { id: "H4", name: "Kết nối mạng lưới (KCN, Sở, đối tác)", mode: "Tự làm" },
    ],
  },
  {
    id: "a",
    name: "Mảng A",
    subtitle: "Chính sách & chính quyền",
    scope: "Thái Nguyên + Hải Phòng",
    description: "Khảo sát, xin ưu đãi, thiết lập nhà máy cho NM TQ dịch chuyển",
    color: "border-emerald-300 bg-emerald-50/50",
    accent: "text-emerald-700",
    packages: [
      { id: "A1", name: "Khảo sát & định vị", time: "2–3 tuần", price: "80–150 tr" },
      { id: "A2", name: "Xin chính sách & làm việc CQ", time: "1–3 tháng", price: "50–100 tr + fee" },
      { id: "A3", name: "Thiết lập & dịch chuyển NM", time: "3–6 tháng", price: "200–500 tr" },
    ],
  },
  {
    id: "b",
    name: "Mảng B",
    subtitle: "Logistics & hải quan",
    scope: "Miền Bắc",
    description: "Hải quan, vận chuyển, chuỗi XNK-SX cho NM đang vận hành",
    color: "border-amber-300 bg-amber-50/50",
    accent: "text-amber-800",
    packages: [
      { id: "B1", name: "Hải quan & khai báo", time: "Starter", price: "30–60 tr" },
      { id: "B2", name: "Logistics & vận chuyển", time: "Theo shipment", price: "Báo giá tuyến" },
      { id: "B3", name: "Chuỗi XNK-SX (retainer)", time: "6–12 tháng", price: "15–40 tr/tháng" },
    ],
  },
];

const ADVANTAGES = [
  "CTCP + tập đoàn TQ — uy tín 2 đầu",
  "Chính sách sâu 2 tỉnh — không làm loãng cả nước",
  "Logistics miền Bắc — scale sau khi có khách A",
  "Hub pháp lý + kế toán — giữ khách lâu dài",
  "Công cụ Oz — hải quan số hóa",
];

export default function ServicesPage() {
  const catalogDoc = getDocBySlug(["03-departments", "04-san-pham", "service-catalog-v0.2"]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-3">
          SP-001 · Catalog v0.2
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Dịch vụ LONGTV</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">
          CTCP tư vấn đầu tư — <strong>2 mảng + Hub</strong>: chính sách tại Thái Nguyên & Hải Phòng,
          logistics toàn miền Bắc, trung tâm kết nối pháp lý & kế toán cho nhà đầu tư nước ngoài.
        </p>
        <div className="flex gap-3 flex-wrap mt-6">
          {catalogDoc && (
            <Link
              href={`/docs/${catalogDoc.meta.slug.join("/")}`}
              className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
            >
              Tài liệu catalog đầy đủ →
            </Link>
          )}
          <Link
            href="/docs/decisions/003-strategy-july-2026"
            className="inline-flex items-center px-4 h-10 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Quyết định #003
          </Link>
        </div>
      </header>

      {/* 3 tiers */}
      <section className="grid lg:grid-cols-3 gap-6 mb-12">
        {TIERS.map((tier) => (
          <div key={tier.id} className={`p-6 rounded-xl border-2 ${tier.color}`}>
            <div className={`text-xs font-bold uppercase tracking-wider ${tier.accent} mb-1`}>
              {tier.name}
            </div>
            <h2 className="text-xl font-bold mb-1">{tier.subtitle}</h2>
            <div className="text-sm text-[var(--muted)] mb-3">{tier.scope}</div>
            <p className="text-sm mb-5">{tier.description}</p>

            {tier.services && (
              <ul className="space-y-2">
                {tier.services.map((s) => (
                  <li key={s.id} className="text-sm flex justify-between gap-2">
                    <span>
                      <span className="font-mono text-xs text-[var(--muted)]">{s.id}</span> {s.name}
                    </span>
                    <span className="text-xs text-[var(--muted)] shrink-0">{s.mode}</span>
                  </li>
                ))}
              </ul>
            )}

            {tier.packages && (
              <ul className="space-y-3">
                {tier.packages.map((p) => (
                  <li key={p.id} className="p-3 rounded-lg bg-white/80 border border-white">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="font-semibold text-sm">
                        <span className="font-mono text-xs text-[var(--muted)]">{p.id}</span> {p.name}
                      </span>
                      <span className="text-xs font-medium text-[var(--accent)] shrink-0">{p.price}</span>
                    </div>
                    <div className="text-xs text-[var(--muted)] mt-1">{p.time}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Sales packages table */}
      <section className="mb-12 p-6 rounded-xl border border-[var(--border)] bg-white">
        <h2 className="text-xl font-bold mb-4">Gói bán hàng (draft)</h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          Giá chưa chốt — Hermes đang research pricing (Issue #8). Ưu tiên 3 gói đầu: A1 + B1 + H3.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left text-[var(--muted)]">
                <th className="py-2 pr-4 font-medium">Gói</th>
                <th className="py-2 pr-4 font-medium">Mảng</th>
                <th className="py-2 pr-4 font-medium">Giá (draft)</th>
                <th className="py-2 font-medium">Khách mục tiêu</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Khảo sát 2 tỉnh", "A1", "80–150 triệu VND", "Chủ NM TQ đang cân nhắc"],
                ["Xin chính sách", "A2", "50–100 tr + success fee", "Đã chọn tỉnh"],
                ["Thiết lập NM", "A3", "200–500 tr (project)", "Cam kết đầu tư"],
                ["Hải quan starter", "B1", "30–60 tr", "NM mới vào VN"],
                ["Logistics pack", "B2", "Theo shipment", "Có hàng TQ→VN"],
                ["SX-XNK retainer", "B3", "15–40 tr/tháng", "NM đang chạy"],
              ].map(([name, segment, price, target]) => (
                <tr key={segment} className="border-b border-[var(--border)] last:border-0">
                  <td className="py-3 pr-4 font-medium">{name}</td>
                  <td className="py-3 pr-4 font-mono text-xs">{segment}</td>
                  <td className="py-3 pr-4">{price}</td>
                  <td className="py-3 text-[var(--muted)]">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Advantages */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Lợi thế cạnh tranh</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ADVANTAGES.map((item, i) => (
            <div key={i} className="p-4 rounded-lg border border-[var(--border)] bg-white text-sm">
              <span className="font-mono text-xs text-[var(--accent)] mr-2">{i + 1}.</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="p-6 rounded-xl border border-dashed border-[var(--border)] bg-gray-50/50">
        <h2 className="font-semibold mb-3">Đang nghiên cứu & làm rõ</h2>
        <ul className="text-sm text-[var(--muted)] space-y-2">
          <li>→ KD-004: Chốt pricing 3 gói bán đầu (A1 + B1 + H3)</li>
          <li>→ SP-004: Deliverable chi tiết gói A1</li>
          <li>→ Leader: Xác nhận tên & tỷ lệ cổ đông TQ</li>
        </ul>
        <Link href="/operations" className="inline-block mt-4 text-sm text-[var(--accent)] hover:underline">
          Xem việc đang giao cho từng phòng →
        </Link>
      </section>
    </div>
  );
}
