"use client";

import Link from "next/link";
import {
  LOGISTICS_FAQ,
  LOGISTICS_HERO,
  LOGISTICS_ROUTES,
  LOGISTICS_SCENARIOS,
  LOGISTICS_SCOPE,
  LOGISTICS_SERVICE_IDS,
  LOGISTICS_TRANSACTIONAL_PRICING,
  LOGISTICS_VOLUME_TARGETS,
  LOGISTICS_WORKFLOW,
} from "@/lib/logistics";
import { getServiceById, TIER_STYLES, type ServiceItem } from "@/lib/services";

function LogisticsServiceCard({ service }: { service: ServiceItem }) {
  const tier = TIER_STYLES[service.tier];

  return (
    <article className="p-5 rounded-xl border border-amber-200 bg-white hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <span className="font-mono text-sm font-bold text-amber-800">{service.id}</span>
          <h3 className="font-semibold text-base mt-1">{service.name}</h3>
          {service.nameZh && <p className="text-xs text-[var(--muted)]">{service.nameZh}</p>}
        </div>
        <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${tier.className}`}>{tier.label}</span>
      </div>
      <p className="text-sm text-[var(--muted)] mb-3">{service.deliverable}</p>
      <div className="flex flex-wrap items-end justify-between gap-2 pt-3 border-t border-amber-100">
        <div>
          <div className="text-lg font-bold text-amber-900">{service.priceUsd}</div>
          <div className="text-xs text-[var(--muted)]">{service.duration}</div>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-800">{service.modeLabel}</span>
      </div>
    </article>
  );
}

export function LogisticsPageContent() {
  const packages = LOGISTICS_SERVICE_IDS.map((id) => getServiceById(id)).filter(
    (s): s is ServiceItem => Boolean(s),
  );

  return (
    <>
      {/* Hero */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1.5 rounded-full mb-4">
          {LOGISTICS_HERO.badge}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 max-w-4xl">{LOGISTICS_HERO.title}</h1>
        <p className="text-sm text-[var(--muted)] mb-4">{LOGISTICS_HERO.titleZh}</p>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-2">{LOGISTICS_HERO.subtitle}</p>
        <p className="text-sm font-medium text-amber-900 mb-6">{LOGISTICS_HERO.provinces}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/03-departments/04-san-pham/service-catalog-v1"
            className="inline-flex items-center px-5 h-11 rounded-full bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700"
          >
            Catalog hậu cần (tài liệu) →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Toàn bộ dịch vụ 9 giai đoạn →
          </Link>
          <Link
            href="/docs/03-departments/03-kinh-doanh/pricing-official"
            className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Bảng giá →
          </Link>
        </div>
      </header>

      {/* Packages */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-2">4 gói hậu cần & hải quan</h2>
        <p className="text-sm text-[var(--muted)] mb-6 max-w-2xl">
          Mua lẻ từng gói hoặc kết hợp theo giai đoạn nhà máy. LONGTV điều phối — đối tác thực hiện khai báo / vận
          chuyển khi cần giấy phép làm dịch vụ hải quan (GPLS).
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {packages.map((service) => (
            <LogisticsServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mb-14 p-6 md:p-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white">
        <h2 className="text-2xl font-bold mb-2">Chuỗi công việc điển hình</h2>
        <p className="text-sm text-[var(--muted)] mb-8">
          Từ lúc chuẩn bị vào Việt Nam đến khi nhà máy vận hành ổn định xuất nhập khẩu.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOGISTICS_WORKFLOW.map((item) => (
            <div key={item.step} className="relative p-4 rounded-xl bg-white border border-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <span className="font-mono text-xs font-bold text-amber-800">{item.code}</span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-[var(--muted)] mb-2">{item.desc}</p>
              <p className="text-[10px] font-medium text-amber-900">{item.timing}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)] mt-6">
          Lộ trình bán điển hình:{" "}
          <span className="font-mono text-amber-800">
            Khởi động hải quan → Nhập máy → Vận chuyển → Thuê ngoài theo tháng
          </span>
        </p>
      </section>

      {/* Transactional pricing */}
      <section className="mb-14 p-6 md:p-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Bảng giá giao dịch (desk · 07/2026)</h2>
            <p className="text-sm text-[var(--muted)]">
              Hải quan · trucking · C/O — biên gộp ~14–22% trên cont. Chi tiết:{" "}
              <Link href={LOGISTICS_VOLUME_TARGETS.benchmarkDoc} className="text-amber-800 font-medium hover:underline">
                khảo sát giá →
              </Link>
            </p>
          </div>
          <div className="text-sm rounded-xl border border-amber-200 bg-white px-4 py-3">
            <div className="text-xs text-[var(--muted)] uppercase tracking-wide font-semibold mb-1">Mục tiêu tháng 6</div>
            <div>
              Base <strong>{LOGISTICS_VOLUME_TARGETS.month6.base}</strong> · Stretch{" "}
              <strong>{LOGISTICS_VOLUME_TARGETS.month6.stretch}</strong>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-amber-100 bg-white mb-4">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-amber-50/80 text-left text-xs uppercase tracking-wide text-[var(--muted)]">
                <th className="px-4 py-3 font-semibold">Mã</th>
                <th className="px-4 py-3 font-semibold">Dịch vụ</th>
                <th className="px-4 py-3 font-semibold">Giá (VND)</th>
                <th className="px-4 py-3 font-semibold">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {LOGISTICS_TRANSACTIONAL_PRICING.map((row) => (
                <tr key={row.code} className="border-t border-amber-50">
                  <td className="px-4 py-3 font-mono font-bold text-amber-900">{row.code}</td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">
                    {row.priceVnd}
                    <span className="text-[var(--muted)] font-normal"> /{row.unit}</span>
                  </td>
                  <td className="px-4 py-3 text-[var(--muted)] text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[var(--muted)] leading-relaxed">
          GP ước tính {LOGISTICS_VOLUME_TARGETS.gpPerCont} mỗi cont (khai báo + trucking + C/O blended). Mục tiêu{" "}
          <strong>500 cont/tháng</strong> là đỉnh Stretch — Base tháng 6 khoảng 50–80 cont/tháng với 2–3 NM xuất khẩu.
        </p>
      </section>

      {/* Scenarios */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6">Khách nào phù hợp?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {LOGISTICS_SCENARIOS.map((scenario) => (
            <div key={scenario.title} className="p-5 rounded-xl border border-[var(--border)] bg-white">
              <h3 className="font-semibold mb-1">{scenario.title}</h3>
              <p className="text-xs text-[var(--muted)] mb-3">{scenario.profile}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {scenario.packages.map((id) => (
                  <span
                    key={id}
                    className="text-xs font-mono font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-900"
                  >
                    {id}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[var(--muted)]">{scenario.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Routes */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4">Tuyến logistics miền Bắc</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 text-left">
                <th className="px-4 py-3 font-semibold">Điểm đi</th>
                <th className="px-4 py-3 font-semibold">Phương thức</th>
                <th className="px-4 py-3 font-semibold">Điểm đến</th>
                <th className="px-4 py-3 font-semibold">Thời gian ước</th>
              </tr>
            </thead>
            <tbody>
              {LOGISTICS_ROUTES.map((route) => (
                <tr key={`${route.from}-${route.to}`} className="border-t border-[var(--border)]">
                  <td className="px-4 py-3">{route.from}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{route.via}</td>
                  <td className="px-4 py-3">{route.to}</td>
                  <td className="px-4 py-3 font-medium text-amber-900">{route.days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Scope */}
      <section className="mb-14 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/50">
          <h2 className="text-lg font-bold text-emerald-900 mb-4">LONGTV làm gì</h2>
          <ul className="space-y-2 text-sm">
            {LOGISTICS_SCOPE.weDo.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
          <h2 className="text-lg font-bold text-stone-800 mb-4">LONGTV không làm (Y1)</h2>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {LOGISTICS_SCOPE.weDont.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-stone-400 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4">Câu hỏi thường gặp</h2>
        <div className="space-y-3">
          {LOGISTICS_FAQ.map((item) => (
            <details key={item.q} className="group rounded-xl border border-[var(--border)] bg-white p-4">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                {item.q}
                <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-[var(--muted)] mt-3 pl-0">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="p-6 md:p-8 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/30">
        <h2 className="text-xl font-bold mb-2">Bắt đầu từ đâu?</h2>
        <p className="text-sm text-[var(--muted)] mb-5 max-w-2xl">
          Chưa vào Việt Nam → kết hợp <strong>A1</strong> khảo sát + <strong>B1</strong> khởi động hải quan. Nhà máy
          đang chạy → <strong>B3</strong> dịch vụ thuê ngoài theo tháng. Cần thỏa thuận đại lý hải quan → Lãnh đạo xử
          lý{" "}
          <Link href="/kim" className="text-amber-800 font-medium hover:underline">
            việc KIM-076
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/07-operations/sop-b1-on-site"
            className="text-sm font-medium text-amber-800 hover:underline"
          >
            Quy trình khảo sát hiện trường & hải quan →
          </Link>
          <Link
            href="/docs/03-departments/04-san-pham/factory-operations-playbook-vn"
            className="text-sm font-medium text-amber-800 hover:underline"
          >
            Sổ tay vận hành giai đoạn sản xuất →
          </Link>
          <Link
            href="/docs/03-departments/03-kinh-doanh/bundle-onepager-zh"
            className="text-sm font-medium text-amber-800 hover:underline"
          >
            One-pager 中文 →
          </Link>
        </div>
      </section>
    </>
  );
}
