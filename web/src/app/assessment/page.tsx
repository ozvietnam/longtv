import Link from "next/link";

export const metadata = {
  title: "Đánh giá tiềm năng & khả thi · LongTV",
  description: "Dashboard trình cổ đông về tiềm năng thị trường, tính khả thi và lộ trình triển khai LONGTV.",
};

const scoreCards = [
  {
    label: "Tiềm năng thị trường",
    score: "8.5/10",
    tone: "bg-red-50 border-red-200",
    note: "Dòng dịch chuyển sản xuất TQ -> VN vẫn có nhu cầu thông tin địa phương, chính sách và logistics.",
  },
  {
    label: "Tính khả thi giai đoạn đầu",
    score: "7.5/10",
    tone: "bg-amber-50 border-amber-200",
    note: "Khả thi nếu bắt đầu bằng 2 tỉnh trọng tâm, service nhỏ, đối tác chuyên môn rõ ràng.",
  },
  {
    label: "Lợi thế cạnh tranh",
    score: "8/10",
    tone: "bg-emerald-50 border-emerald-200",
    note: "CTCP + cổ đông TQ + hiểu địa phương + hub pháp lý/kế toán/logistics.",
  },
  {
    label: "Rủi ro cần kiểm soát",
    score: "6.5/10",
    tone: "bg-slate-50 border-slate-200",
    note: "Rủi ro pháp lý, năng lực giao hàng và phụ thuộc đối tác cần quản trị bằng RACI.",
  },
];

const workstreams = [
  {
    id: "A",
    title: "Chính sách & chính quyền",
    scope: "Thái Nguyên + Hải Phòng",
    href: "/docs/services/policy-government",
    points: ["Khảo sát địa điểm", "Ưu đãi/KCN", "Làm việc đầu mối tỉnh"],
  },
  {
    id: "B",
    title: "Logistics & hải quan",
    scope: "Miền Bắc",
    href: "/docs/services/00-index",
    points: ["HS code", "Forwarder", "SOP xuất-nhập-sản xuất"],
  },
  {
    id: "Hub",
    title: "Pháp lý, kế toán, dữ liệu",
    scope: "Toàn Việt Nam",
    href: "/docs/services/legal-consulting",
    points: ["IRC/ERC", "M&A/góp vốn", "Đối tác luật/CPA"],
  },
];

const evidenceLinks = [
  { title: "Dịch vụ chính sách 2 tỉnh", href: "/docs/services/policy-government", desc: "A1/A2/A3: khảo sát, xin chính sách, thiết lập nhà máy." },
  { title: "Dịch vụ tư vấn pháp lý", href: "/docs/services/legal-consulting", desc: "Phạm vi LONGTV PM + phần chuyển luật sư/đối tác." },
  { title: "Thư viện pháp luật FDI", href: "/docs/data/fdi-legal/legal-library", desc: "Nguồn luật chia nhóm: đầu tư, vốn nước ngoài, môi trường, KCN." },
  { title: "Service catalog v0.2", href: "/docs/03-departments/04-san-pham/service-catalog-v0.2", desc: "Catalog 2 mảng + hub đang dùng làm nguồn bán hàng." },
  { title: "Tự làm vs đối tác", href: "/docs/03-departments/04-san-pham/build-vs-partner", desc: "Ranh giới LONGTV tự làm và phần cần đối tác đủ điều kiện." },
  { title: "Quyết định chiến lược #003", href: "/docs/decisions/003-strategy-july-2026", desc: "CTCP, vốn 2 tỷ, cổ đông TQ và định vị 2 mảng." },
];

const risks = [
  { risk: "Pháp lý/ngành có điều kiện", mitigation: "Legal library + luật sư đối tác + không nhận legal opinion nếu chưa đủ điều kiện." },
  { risk: "Dàn trải địa bàn", mitigation: "Chỉ chốt 2 tỉnh đầu: Thái Nguyên và Hải Phòng." },
  { risk: "Giao hàng quá rộng", mitigation: "Tách gói A1/A2/A3, H2 pháp lý, B logistics; có RACI từng việc." },
  { risk: "Thiếu bằng chứng với cổ đông", mitigation: "Mỗi luận điểm link về nguồn nội bộ, research và thư viện pháp luật." },
];

export default function AssessmentPage() {
  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-[var(--border)] bg-gradient-to-br from-white via-red-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-[var(--accent)] font-semibold mb-4">
                Shareholder briefing · Potential & feasibility
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.03] mb-6">
                Đánh giá tiềm năng & khả thi của LONGTV
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-3xl">
                LONGTV có cửa đi rõ nếu tập trung vào nhà máy Trung Quốc dịch chuyển sản xuất về
                <strong> Thái Nguyên</strong> và <strong>Hải Phòng</strong>, bán trước các gói chính sách,
                pháp lý điều phối và logistics miền Bắc.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/docs/services/policy-government" className="inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white hover:opacity-90">
                  Xem dịch vụ chính sách
                </Link>
                <Link href="/docs/services/legal-consulting" className="inline-flex h-11 items-center rounded-full border border-[var(--border)] bg-white px-5 text-sm font-semibold hover:border-[var(--accent)]">
                  Xem dịch vụ pháp lý
                </Link>
                <Link href="/docs/data/fdi-legal/legal-library" className="inline-flex h-11 items-center rounded-full border border-[var(--border)] bg-white px-5 text-sm font-semibold hover:border-[var(--accent)]">
                  Thư viện pháp luật
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-red-100 bg-white/85 p-6 shadow-sm">
              <div className="text-sm font-semibold text-[var(--muted)] mb-4">Kết luận nhanh</div>
              <div className="space-y-4">
                <VerdictItem label="Nên đi tiếp" value="Có" detail="Nhưng phải bắt đầu hẹp: 2 tỉnh + 3 gói bán được." />
                <VerdictItem label="Gói bán đầu" value="A1 + H2" detail="Khảo sát chính sách 2 tỉnh + legal screening FDI." />
                <VerdictItem label="Điều kiện thành công" value="RACI rõ" detail="LONGTV PM core, phần pháp lý/CPA/môi trường qua đối tác." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-14">
        <section>
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Executive scorecard</p>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Chấm điểm nhanh cho cổ đông</h2>
            </div>
            <Link href="/docs/decisions/003-strategy-july-2026" className="hidden md:inline-flex text-sm font-semibold text-[var(--accent)] hover:underline">
              Xem QĐ chiến lược #003 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {scoreCards.map((card) => (
              <div key={card.label} className={`rounded-2xl border p-5 ${card.tone}`}>
                <div className="text-sm text-[var(--muted)]">{card.label}</div>
                <div className="mt-2 text-4xl font-bold tracking-tight">{card.score}</div>
                <p className="mt-4 text-sm leading-6 text-stone-700">{card.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--border)] bg-white p-6 md:p-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Operating model</p>
              <h2 className="text-3xl font-bold tracking-tight mt-2 mb-4">Sơ đồ hóa mô hình triển khai</h2>
              <p className="text-[var(--muted)] leading-7">
                Mô hình trình cổ đông nên nhìn như một hệ thống: khách hàng vào từ nhu cầu dịch chuyển,
                LONGTV phân luồng qua 2 mảng core và hub chuyên môn, sau đó tạo pipeline dự án dài hạn.
              </p>
            </div>
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-4">
                {workstreams.map((item) => (
                  <Link key={item.id} href={item.href} className="group rounded-2xl border border-[var(--border)] bg-stone-50 p-5 hover:border-[var(--accent)] hover:bg-white transition">
                    <div className="h-10 w-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold mb-4">
                      {item.id}
                    </div>
                    <h3 className="font-bold text-lg group-hover:text-[var(--accent)]">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)] mt-1">{item.scope}</p>
                    <ul className="mt-4 space-y-2 text-sm text-stone-700">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-dashed border-red-200 bg-red-50 p-4 text-sm text-stone-700">
                Đầu ra kỳ vọng: báo cáo chính sách → hồ sơ pháp lý → site/KCN → logistics vận hành → retainer.
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[var(--border)] bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Potential x feasibility</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2 mb-6">Ma trận ưu tiên triển khai</h2>
            <div className="grid grid-cols-2 gap-3">
              <MatrixCell title="Làm trước" subtitle="A1 chính sách 2 tỉnh" level="Cao tiềm năng / cao khả thi" active />
              <MatrixCell title="Làm sau khi có lead" subtitle="A3 setup nhà máy" level="Cao tiềm năng / khó hơn" />
              <MatrixCell title="Dùng để giữ khách" subtitle="H2 pháp lý + kế toán" level="Vừa tiềm năng / cao khả thi" />
              <MatrixCell title="Scale chọn lọc" subtitle="B logistics retainer" level="Phụ thuộc khách vận hành" />
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Risk control</p>
            <h2 className="text-3xl font-bold tracking-tight mt-2 mb-6">Rủi ro và đối sách</h2>
            <div className="space-y-4">
              {risks.map((item) => (
                <div key={item.risk} className="rounded-2xl border border-stone-200 p-4">
                  <div className="font-semibold">{item.risk}</div>
                  <div className="text-sm text-[var(--muted)] mt-1 leading-6">{item.mitigation}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-semibold">Internal evidence map</p>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Liên kết nội bộ để trình cổ đông</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {evidenceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-2xl border border-[var(--border)] bg-white p-5 hover:border-[var(--accent)] transition">
                <h3 className="font-bold group-hover:text-[var(--accent)]">{link.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-2 leading-6">{link.desc}</p>
                <div className="text-xs font-mono text-[var(--muted)] mt-4">{link.href}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function VerdictItem({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm text-[var(--muted)]">{label}</div>
        <div className="text-lg font-bold text-[var(--accent)]">{value}</div>
      </div>
      <div className="mt-2 text-sm leading-6 text-stone-700">{detail}</div>
    </div>
  );
}

function MatrixCell({ title, subtitle, level, active = false }: { title: string; subtitle: string; level: string; active?: boolean }) {
  return (
    <div className={`min-h-40 rounded-2xl border p-4 ${active ? "border-[var(--accent)] bg-red-50" : "border-stone-200 bg-stone-50"}`}>
      <div className="text-xs uppercase tracking-wider text-[var(--muted)]">{level}</div>
      <div className="mt-3 text-lg font-bold">{title}</div>
      <div className="mt-2 text-sm text-stone-700">{subtitle}</div>
    </div>
  );
}
