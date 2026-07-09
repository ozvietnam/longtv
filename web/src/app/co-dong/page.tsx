import Link from "next/link";

export const metadata = {
  title: "Cổ đông · LongTV",
  description:
    "Trang cổ đông LONGTV: đánh giá Oz Việt Nam như lực lượng trụ cột giai đoạn đầu và nền tảng lõi cho dịch vụ hậu cần.",
};

const ozRepos = [
  {
    name: "hs-code-api",
    href: "https://github.com/ozvietnam/hs-code-api",
    role: "HS Code + tariff API",
    evidence: "AI HS suggestions, mô tả khai báo hải quan, tariff/dataset endpoints, Vercel Pro.",
    stack: "JavaScript · Gemini · Vercel",
  },
  {
    name: "hs-knowledge-api",
    href: "https://github.com/ozvietnam/hs-knowledge-api",
    role: "Knowledge graph biểu thuế XNK",
    evidence: "Knowledge graph 9 tầng, biểu thuế XNK 2026, Prisma/Postgres/pgvector, API suggest/describe.",
    stack: "TypeScript · Next.js · Prisma · Postgres · Gemini",
  },
  {
    name: "xnk-webapp",
    href: "https://github.com/ozvietnam/xnk-webapp",
    role: "Webapp tra cứu HS & chatbot XNK",
    evidence: "Tra cứu HS Code, thuế MFN/ACFTA, chatbot RAG, thủ tục/chứng từ/kiểm tra chuyên ngành.",
    stack: "Python · FastAPI · Next.js · Supabase · Docker",
  },
  {
    name: "wa26",
    href: "https://github.com/ozvietnam/wa26",
    role: "Webapp hải quan 2026",
    evidence: "11.871 mã HS 8 số, biểu thuế XNK 2026, 19 FTA, chatbot AI tư vấn phân loại/thuế.",
    stack: "TypeScript · Next.js · AI multi-provider",
  },
  {
    name: "hs-code-chatbot",
    href: "https://github.com/ozvietnam/hs-code-chatbot",
    role: "Chatbot HS Code",
    evidence: "Giao diện/logic chatbot hỗ trợ phân loại và hỏi đáp HS code.",
    stack: "JavaScript",
  },
  {
    name: "oz-rank-tracker",
    href: "https://github.com/ozvietnam/oz-rank-tracker",
    role: "SEO/rank tracking",
    evidence: "Theo dõi từ khóa SEO cho thutucxuatnhapkhau.com, hỗ trợ kênh inbound.",
    stack: "JavaScript · Vercel",
  },
];

const capabilityScores = [
  { label: "Hải quan & HS code", score: "9/10", note: "Có nhiều repo chuyên sâu, dữ liệu biểu thuế, API, chatbot." },
  { label: "Nền tảng hậu cần số", score: "8/10", note: "Đủ lõi tra cứu/AI/workflow để làm backend cho dịch vụ B1/B3." },
  { label: "Năng lực triển khai web/API", score: "8/10", note: "Next.js, FastAPI, Vercel, Docker, Postgres/Supabase." },
  { label: "Nguồn lực vận hành thực địa", score: "6/10", note: "Cần bổ sung đối tác forwarder/đại lý hải quan/Kim field." },
];

const gaps = [
  "Chưa chứng minh đủ năng lực tự vận hành kho, xe, ICD — năm đầu nên điều phối đối tác.",
  "Dịch vụ khai báo hải quan chính thức cần đại lý đủ điều kiện khi pháp luật yêu cầu.",
  "Cần chuẩn hóa dữ liệu HS/thuế thành SOP bán hàng B1/B3 cho khách nhà máy.",
  "Cần case pilot thực tế để chuyển từ năng lực công nghệ sang doanh thu hậu cần.",
];

export default function ShareholdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1.5 rounded-full mb-4">
          Cổ đông · Shareholder map
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">Cổ đông LONGTV</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">
          Trang này dùng để giới thiệu từng cổ đông/đối tác chiến lược. Phiên bản đầu ghi nhận <strong>Oz Việt Nam</strong>
          như lực lượng trụ cột trong giai đoạn đầu và nền tảng lõi cho dịch vụ hậu cần & hải quan.
        </p>
      </header>

      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mb-12">
        <div className="p-6 md:p-8 rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-stone-50">
          <div className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mb-3">Cổ đông #1</div>
          <h2 className="text-3xl font-bold tracking-tight mb-3">Oz Việt Nam</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            Oz hiện không chỉ là cổ đông công nghệ, mà là <strong>nền móng vận hành số cho mảng hậu cần</strong>:
            tra cứu HS code, biểu thuế XNK, mô tả khai báo, chatbot hải quan, knowledge graph và webapp hỗ trợ
            quy trình xuất nhập khẩu.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <Kpi value="11" label="repo public Oz trên GitHub" />
            <Kpi value="6" label="repo liên quan HS/XNK/webapp" />
            <Kpi value="2026" label="dữ liệu biểu thuế trọng tâm" />
          </div>
        </div>

        <div className="p-6 md:p-8 rounded-3xl border border-[var(--border)] bg-white">
          <h2 className="text-xl font-bold mb-4">Kết luận nguồn lực</h2>
          <div className="space-y-4">
            {capabilityScores.map((item) => (
              <div key={item.label} className="rounded-2xl border border-stone-200 p-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-lg font-bold text-[var(--accent)]">{item.score}</div>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mb-2">GitHub evidence</div>
            <h2 className="text-2xl font-bold">Dự án Oz đang có</h2>
          </div>
          <a
            href="https://github.com/ozvietnam"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-10 items-center rounded-full border border-[var(--border)] px-4 text-sm font-semibold hover:border-[var(--accent)]"
          >
            GitHub ozvietnam ↗
          </a>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {ozRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[var(--border)] bg-white p-5 hover:border-[var(--accent)] hover:shadow-sm transition"
            >
              <div className="font-mono text-sm font-bold text-[var(--accent)] mb-2">{repo.name}</div>
              <h3 className="font-bold mb-2 group-hover:text-[var(--accent)]">{repo.role}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{repo.evidence}</p>
              <div className="text-xs text-stone-500">{repo.stack}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6 mb-12">
        <div className="p-6 md:p-8 rounded-3xl border border-emerald-200 bg-emerald-50/50">
          <h2 className="text-2xl font-bold text-emerald-950 mb-4">Vì sao Oz là trụ cột giai đoạn đầu?</h2>
          <ol className="space-y-3 text-sm leading-relaxed">
            <li><strong>1. Có tài sản công nghệ sẵn:</strong> không phải xây từ trắng mảng HS code/XNK.</li>
            <li><strong>2. Có dữ liệu ngành sâu:</strong> biểu thuế, HS, quy định, mô tả khai báo là nền cho B1/B3.</li>
            <li><strong>3. Có năng lực web/API:</strong> đủ để biến tri thức thành công cụ bán dịch vụ và vận hành nội bộ.</li>
            <li><strong>4. Tạo khác biệt:</strong> LONGTV không chỉ môi giới KCN/luật, mà có lõi số về hậu cần.</li>
          </ol>
        </div>
        <div className="p-6 md:p-8 rounded-3xl border border-amber-200 bg-amber-50/60">
          <h2 className="text-2xl font-bold text-amber-950 mb-4">Khoảng trống cần bổ sung</h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            {gaps.map((gap) => (
              <li key={gap} className="flex gap-2">
                <span className="text-amber-700 shrink-0">•</span>
                <span>{gap}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12 rounded-3xl border border-[var(--border)] bg-white p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-5">Vai trò Oz trong dịch vụ hậu cần LONGTV</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["B1", "HS code starter", "Oz cung cấp lõi tra cứu HS, thuế, mô tả khai báo."],
            ["B1-ext", "Nhập máy/dây chuyền", "Dùng knowledge graph để giảm rủi ro phân loại và checklist hồ sơ."],
            ["B2", "Forwarder/logistics pack", "Oz không thay forwarder, nhưng tạo SOP và dữ liệu đối soát."],
            ["B3", "Retainer XNK", "Oz là backend dữ liệu cho chuỗi nhập–sản xuất–xuất khẩu."],
          ].map(([code, title, desc]) => (
            <div key={code} className="rounded-2xl border border-stone-200 p-4">
              <div className="font-mono text-sm font-bold text-[var(--accent)] mb-2">{code}</div>
              <div className="font-semibold mb-2">{title}</div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/logistics" className="inline-flex h-10 items-center rounded-full bg-[var(--accent)] px-4 text-sm font-semibold text-white hover:opacity-90">
            Xem dịch vụ hậu cần →
          </Link>
          <Link href="/docs/06-phases/00-1-feasibility-plan" className="inline-flex h-10 items-center rounded-full border border-[var(--border)] px-4 text-sm font-semibold hover:border-[var(--accent)]">
            Xem giai đoạn 00-1 →
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-[var(--border)] bg-stone-50 p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-3">Các cổ đông/đối tác khác</h2>
        <p className="text-[var(--muted)] leading-relaxed">
          Chưa nhập. Anh giới thiệu công ty/cổ đông nào tiếp theo, em sẽ bổ sung thành từng card cùng cấu trúc:
          nguồn lực hiện có, bằng chứng, vai trò trong LONGTV, khoảng trống cần bổ sung và liên kết tài liệu.
        </p>
      </section>
    </div>
  );
}

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-red-100 bg-white p-4">
      <div className="text-3xl font-bold text-[var(--accent)]">{value}</div>
      <div className="text-xs text-[var(--muted)] leading-snug mt-1">{label}</div>
    </div>
  );
}
