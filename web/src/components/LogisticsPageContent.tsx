"use client";

import Link from "next/link";
import {
  LOGISTICS_6M_TARGET,
  LOGISTICS_6M_TOTALS,
  LOGISTICS_FAQ,
  LOGISTICS_HERO,
  LOGISTICS_PAGE_SECTIONS,
  LOGISTICS_PRICING_GROUPS,
  LOGISTICS_RAMP_MONTHS,
  LOGISTICS_ROUTES,
  LOGISTICS_SCENARIOS,
  LOGISTICS_SCOPE,
  LOGISTICS_SERVICE_IDS,
  LOGISTICS_SERVICE_LINES,
  LOGISTICS_VOLUME_TARGETS,
  LOGISTICS_WORKFLOW,
  monthLogisticsPnl,
  PER_CONT_BLENDED,
  PER_EXPORT_CONT,
  PER_IMPORT_CONT,
} from "@/lib/logistics";
import { Phase001Banner, RelatedPagesGrid, StickyPageNav } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";
import { getServiceById, TIER_STYLES, type ServiceItem } from "@/lib/services";

function formatMillion(vnd: number) {
  if (vnd >= 1_000_000_000) return `${(vnd / 1_000_000_000).toFixed(1)} tỷ`;
  return `${Math.round(vnd / 1_000_000)} tr`;
}

function formatVnd(n: number) {
  return n.toLocaleString("vi-VN");
}

function SectionHeading({ id, title, desc }: { id: string; title: string; desc?: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-6">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      {desc && <p className="text-sm text-[var(--muted)] max-w-3xl">{desc}</p>}
    </div>
  );
}

function LogisticsServiceCard({ service }: { service: ServiceItem }) {
  const tier = TIER_STYLES[service.tier];

  return (
    <article className="p-5 rounded-xl border border-amber-200 bg-white hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <span className="font-mono text-sm font-bold text-amber-800">{service.id}</span>
          <h3 className="font-semibold text-base mt-1">{service.name}</h3>
          {service.nameZh && <p className="text-xs text-[var(--muted)]">{service.nameZh}</p>}
        </div>
        <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${tier.className}`}>{tier.label}</span>
      </div>
      <p className="text-sm text-[var(--muted)] mb-3 flex-1">{service.deliverable}</p>
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

const PRICING_LINE_MAP = Object.fromEntries(LOGISTICS_SERVICE_LINES.map((l) => [l.code, l]));

export function LogisticsPageContent() {
  const packages = LOGISTICS_SERVICE_IDS.map((id) => getServiceById(id)).filter(
    (s): s is ServiceItem => Boolean(s),
  );
  const month6Pnl = monthLogisticsPnl(LOGISTICS_6M_TARGET.contPerMonthEnd);

  return (
    <>
      {/* Hero */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1.5 rounded-full mb-4">
          {LOGISTICS_HERO.badge}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 max-w-4xl">{LOGISTICS_HERO.title}</h1>
        <p className="text-sm text-[var(--muted)] mb-3">{LOGISTICS_HERO.titleZh}</p>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-2">{LOGISTICS_HERO.oneLiner}</p>
        <p className="text-sm font-medium text-amber-900 mb-6">{LOGISTICS_HERO.provinces}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#goi-dich-vu"
            className="inline-flex items-center px-5 h-11 rounded-full bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700"
          >
            Xem gói dịch vụ
          </a>
          <a
            href="#bang-gia"
            className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Bảng giá cont
          </a>
          <Link
            href={LOGISTICS_VOLUME_TARGETS.benchmarkDoc}
            className="inline-flex items-center px-5 h-11 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Tài liệu đầy đủ →
          </Link>
        </div>
      </header>

      {/* Liên kết 00-1 */}
      <Phase001Banner />

      {/* Sticky nav */}
      <nav className="sticky top-0 z-10 -mx-6 px-6 py-3 mb-10 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)]">
        <div className="flex gap-1 overflow-x-auto text-sm">
          {LOGISTICS_PAGE_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 px-3 py-1.5 rounded-full text-[var(--muted)] hover:text-amber-900 hover:bg-amber-50 font-medium transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* §1 Tổng quan */}
      <section className="mb-14">
        <SectionHeading
          id="tong-quan"
          title="Tổng quan"
          desc="LONGTV không phải forwarder — chúng tôi tư vấn, điều phối đối tác GPLS và forwarder, tích hợp Oz khi triển khai."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
            <div className="text-xs text-[var(--muted)] uppercase font-semibold mb-1">Mục tiêu tháng 6</div>
            <div className="text-2xl font-bold text-amber-900">200 cont</div>
            <div className="text-xs text-[var(--muted)] mt-1">tổng xuất + nhập</div>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border)] bg-white">
            <div className="text-xs text-[var(--muted)] uppercase font-semibold mb-1">Phân bổ điển hình</div>
            <div className="text-2xl font-bold">87 + 113</div>
            <div className="text-xs text-[var(--muted)] mt-1">xuất · nhập (+30%)</div>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border)] bg-white">
            <div className="text-xs text-[var(--muted)] uppercase font-semibold mb-1">GP / cont</div>
            <div className="text-2xl font-bold text-emerald-800">
              {(PER_CONT_BLENDED.gpVnd / 1_000_000).toFixed(2)}M
            </div>
            <div className="text-xs text-[var(--muted)] mt-1">biên ~{PER_CONT_BLENDED.marginPct}%</div>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border)] bg-white">
            <div className="text-xs text-[var(--muted)] uppercase font-semibold mb-1">Khởi điểm Oz</div>
            <div className="text-2xl font-bold">50 cont</div>
            <div className="text-xs text-[var(--muted)] mt-1">từ tháng 2 (T8)</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40">
            <h3 className="font-bold text-emerald-900 mb-3">LONGTV làm</h3>
            <ul className="space-y-2 text-sm">
              {LOGISTICS_SCOPE.weDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/40">
            <h3 className="font-bold text-stone-800 mb-3">LONGTV không làm (năm 1)</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {LOGISTICS_SCOPE.weDont.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-stone-400 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* §2 Gói dịch vụ */}
      <section className="mb-14">
        <SectionHeading
          id="goi-dich-vu"
          title="Gói dịch vụ"
          desc="4 gói theo giai đoạn nhà máy — setup một lần (USD) rồi chuyển sang phí theo cont hoặc retainer tháng."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {packages.map((service) => (
            <LogisticsServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="p-5 rounded-xl border border-amber-100 bg-amber-50/30">
          <h3 className="text-sm font-bold text-amber-900 mb-4 uppercase tracking-wide">Lộ trình điển hình</h3>
          <div className="grid md:grid-cols-4 gap-3">
            {LOGISTICS_WORKFLOW.map((item, i) => (
              <div key={item.step} className="relative">
                {i < LOGISTICS_WORKFLOW.length - 1 && (
                  <span className="hidden md:block absolute top-4 left-full w-full h-px bg-amber-200 -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 p-3 rounded-lg bg-white border border-amber-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-800">{item.code}</span>
                  </div>
                  <p className="text-xs font-medium mb-1">{item.title}</p>
                  <p className="text-[10px] text-[var(--muted)]">{item.timing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Khách nào phù hợp?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {LOGISTICS_SCENARIOS.map((scenario) => (
              <div key={scenario.title} className="p-4 rounded-xl border border-[var(--border)] bg-white">
                <h4 className="font-semibold mb-1">{scenario.title}</h4>
                <p className="text-xs text-[var(--muted)] mb-2">{scenario.profile}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {scenario.packages.map((id) => (
                    <span
                      key={id}
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900"
                    >
                      {id}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[var(--muted)]">{scenario.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §3 Bảng giá */}
      <section className="mb-14 p-6 md:p-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/80 to-white">
        <SectionHeading
          id="bang-gia"
          title="Bảng giá giao dịch"
          desc="Desk 07/2026 — phí theo container / lần C/O. LONGTV điều phối qua đại lý GPLS và hãng xe đối tác."
        />

        <div className="overflow-x-auto rounded-xl border border-amber-100 bg-white mb-4">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-amber-50/80 text-left text-xs uppercase tracking-wide text-[var(--muted)]">
                <th className="px-4 py-3 font-semibold">Nhóm</th>
                <th className="px-4 py-3 font-semibold">Mã</th>
                <th className="px-4 py-3 font-semibold">Dịch vụ</th>
                <th className="px-4 py-3 font-semibold">Giá bán</th>
                <th className="px-4 py-3 font-semibold">GP</th>
                <th className="px-4 py-3 font-semibold">Biên</th>
              </tr>
            </thead>
            <tbody>
              {LOGISTICS_PRICING_GROUPS.map((group) =>
                group.codes.map((code, idx) => {
                  const line = PRICING_LINE_MAP[code];
                  if (!line) return null;
                  return (
                    <tr key={code} className="border-t border-amber-50">
                      {idx === 0 ? (
                        <td
                          className="px-4 py-3 text-xs font-semibold text-amber-900 align-top"
                          rowSpan={group.codes.length}
                        >
                          {group.label}
                        </td>
                      ) : null}
                      <td className="px-4 py-3 font-mono font-bold text-amber-900">{line.code}</td>
                      <td className="px-4 py-3 text-xs">{line.name}</td>
                      <td className="px-4 py-3 font-mono whitespace-nowrap">
                        {formatVnd(line.sellVnd)}
                        <span className="text-[var(--muted)]"> /{line.unit}</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-emerald-800">{formatVnd(line.gpVnd)}</td>
                      <td className="px-4 py-3 font-semibold">{line.marginPct}%</td>
                    </tr>
                  );
                }),
              )}
            </tbody>
          </table>
        </div>

        <details className="group rounded-xl border border-amber-100 bg-white">
          <summary className="cursor-pointer list-none px-4 py-3 font-medium flex justify-between items-center text-sm">
            GP gộp theo cont (xuất · nhập · blended)
            <span className="text-[var(--muted)] group-open:rotate-180 transition-transform text-xs">▼</span>
          </summary>
          <div className="px-4 pb-4 border-t border-amber-50">
            <div className="grid sm:grid-cols-3 gap-3 mt-4 mb-3">
              <div className="p-3 rounded-lg bg-stone-50 text-sm">
                <div className="text-xs text-[var(--muted)] mb-1">1 cont xuất</div>
                <div className="font-mono font-bold">{(PER_EXPORT_CONT.total.gpVnd / 1_000_000).toFixed(2)}M GP</div>
                <div className="text-xs text-[var(--muted)]">{PER_EXPORT_CONT.total.marginPct}% biên</div>
              </div>
              <div className="p-3 rounded-lg bg-stone-50 text-sm">
                <div className="text-xs text-[var(--muted)] mb-1">1 cont nhập</div>
                <div className="font-mono font-bold">{(PER_IMPORT_CONT.total.gpVnd / 1_000_000).toFixed(2)}M GP</div>
                <div className="text-xs text-[var(--muted)]">{PER_IMPORT_CONT.total.marginPct}% biên</div>
              </div>
              <div className="p-3 rounded-lg bg-amber-50 text-sm">
                <div className="text-xs text-[var(--muted)] mb-1">Blended (nhập +30%)</div>
                <div className="font-mono font-bold text-emerald-800">
                  {(PER_CONT_BLENDED.gpVnd / 1_000_000).toFixed(2)}M GP
                </div>
                <div className="text-xs text-[var(--muted)]">{PER_CONT_BLENDED.marginPct}% biên</div>
              </div>
            </div>
            <p className="text-xs text-[var(--muted)]">
              Bảng giá chính thức:{" "}
              <Link href="/docs/03-departments/03-kinh-doanh/pricing-official" className="text-amber-800 hover:underline">
                pricing-official
              </Link>
            </p>
          </div>
        </details>
      </section>

      {/* §4 Mục tiêu 6T */}
      <section className="mb-14">
        <SectionHeading
          id="muc-tieu"
          title="Mục tiêu 6 tháng"
          desc="Ramp từ pilot Oz → 50 cont/tháng (T8) → 200 cont/tháng (T12). Số liệu dùng cho kế hoạch nội bộ & đối chiếu financial model."
        />

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl border-2 border-amber-300 bg-amber-50/50">
            <div className="text-xs uppercase font-semibold text-amber-900 mb-2">Tháng 6 (T12)</div>
            <div className="text-3xl font-bold text-amber-900 mb-1">{month6Pnl.cont} cont/tháng</div>
            <p className="text-sm text-[var(--muted)] mb-3">
              {month6Pnl.exportCont} xuất · {month6Pnl.importCont} nhập
            </p>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-[var(--muted)]">DT </span>
                <span className="font-mono font-semibold">{formatMillion(month6Pnl.revenueVnd)}</span>
              </div>
              <div>
                <span className="text-[var(--muted)]">GP </span>
                <span className="font-mono font-semibold text-emerald-800">{formatMillion(month6Pnl.gpVnd)}</span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-[var(--border)] bg-white">
            <div className="text-xs uppercase font-semibold text-[var(--muted)] mb-2">Tích lũy 6 tháng</div>
            <div className="text-3xl font-bold mb-1">{LOGISTICS_6M_TOTALS.cont} cont</div>
            <p className="text-sm text-[var(--muted)] mb-3">
              {LOGISTICS_6M_TOTALS.exportCont} xuất · {LOGISTICS_6M_TOTALS.importCont} nhập
            </p>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-[var(--muted)]">DT </span>
                <span className="font-mono font-semibold">~{LOGISTICS_6M_TOTALS.revenueBillion} tỷ</span>
              </div>
              <div>
                <span className="text-[var(--muted)]">GP </span>
                <span className="font-mono font-semibold text-emerald-800">~{LOGISTICS_6M_TOTALS.gpMillion} tr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual ramp bar */}
        <div className="mb-6 p-4 rounded-xl border border-[var(--border)] bg-white">
          <div className="flex items-end gap-1 h-24">
            {LOGISTICS_RAMP_MONTHS.map((m) => {
              const pct = (m.cont / LOGISTICS_6M_TARGET.contPerMonthEnd) * 100;
              return (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono font-bold text-amber-900">{m.cont}</span>
                  <div
                    className="w-full rounded-t bg-amber-500/80 min-h-[4px] transition-all"
                    style={{ height: `${pct}%` }}
                    title={`${m.label}: ${m.cont} cont`}
                  />
                  <span className="text-[9px] text-[var(--muted)] text-center leading-tight">{m.label.split(" · ")[0]}</span>
                </div>
              );
            })}
          </div>
        </div>

        <details className="group rounded-xl border border-[var(--border)] bg-white">
          <summary className="cursor-pointer list-none px-4 py-3 font-medium flex justify-between items-center text-sm">
            Bảng chi tiết theo tháng
            <span className="text-[var(--muted)] group-open:rotate-180 transition-transform text-xs">▼</span>
          </summary>
          <div className="overflow-x-auto border-t border-[var(--border)]">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="bg-stone-50 text-left text-xs uppercase tracking-wide text-[var(--muted)]">
                  <th className="px-4 py-3 font-semibold">Tháng</th>
                  <th className="px-4 py-3 font-semibold">Tổng</th>
                  <th className="px-4 py-3 font-semibold">Xuất</th>
                  <th className="px-4 py-3 font-semibold">Nhập</th>
                  <th className="px-4 py-3 font-semibold">DT</th>
                  <th className="px-4 py-3 font-semibold">GP</th>
                </tr>
              </thead>
              <tbody>
                {LOGISTICS_RAMP_MONTHS.map((m) => {
                  const pnl = monthLogisticsPnl(m.cont);
                  return (
                    <tr key={m.month} className="border-t border-[var(--border)]">
                      <td className="px-4 py-3">{m.label}</td>
                      <td className="px-4 py-3 font-mono font-bold">{m.cont}</td>
                      <td className="px-4 py-3 font-mono text-[var(--muted)]">{pnl.exportCont}</td>
                      <td className="px-4 py-3 font-mono text-[var(--muted)]">{pnl.importCont}</td>
                      <td className="px-4 py-3 font-mono">{formatMillion(pnl.revenueVnd)}</td>
                      <td className="px-4 py-3 font-mono text-emerald-800">{formatMillion(pnl.gpVnd)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </details>

        <p className="text-xs text-[var(--muted)] mt-4">
          Đối chiếu:{" "}
          <Link href="/docs/03-departments/05-van-hanh-tc/financial-model-3yr" className="text-amber-800 hover:underline">
            financial-model-3yr
          </Link>
          {" · "}
          <Link href={LOGISTICS_VOLUME_TARGETS.benchmarkDoc} className="text-amber-800 hover:underline">
            logistics-pricing-benchmark
          </Link>
        </p>
      </section>

      {/* §5 Tuyến & FAQ */}
      <section id="them" className="scroll-mt-24 mb-14">
        <SectionHeading id="tuyen" title="Tuyến logistics miền Bắc" />
        <div className="overflow-x-auto rounded-xl border border-[var(--border)] mb-10">
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

        <h2 className="text-2xl font-bold mb-4">Câu hỏi thường gặp</h2>
        <div className="space-y-3 mb-10">
          {LOGISTICS_FAQ.map((item) => (
            <details key={item.q} className="group rounded-xl border border-[var(--border)] bg-white p-4">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center text-sm">
                {item.q}
                <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-[var(--muted)] mt-3">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/30">
          <h2 className="text-xl font-bold mb-2">Bắt đầu từ đâu?</h2>
          <p className="text-sm text-[var(--muted)] mb-5 max-w-2xl">
            Chưa vào Việt Nam → <strong>A1</strong> + <strong>B1</strong>. Nhà máy đang chạy → <strong>B3</strong>{" "}
            retainer. Cần MOU đại lý GPLS →{" "}
            <Link href="/kim" className="text-amber-800 font-medium hover:underline">
              KIM-076
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/services" className="font-medium text-amber-800 hover:underline">
              Toàn bộ dịch vụ →
            </Link>
            <Link href="/docs/07-operations/sop-b1-on-site" className="font-medium text-amber-800 hover:underline">
              SOP khảo sát hiện trường →
            </Link>
          </div>
        </div>
      </section>

      <RelatedPagesGrid links={PAGE_RELATED["/logistics"]} />
    </>
  );
}
