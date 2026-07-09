"use client";

import Link from "next/link";
import {
  ConfidenceBadge,
  DonutChart,
  HorizontalBarChart,
  MetricCard,
  ProvincialBarChart,
  ScorecardBars,
  ScoreRing,
} from "@/components/feasibility/Charts";
import {
  FDI_BY_COUNTRY,
  HEADLINE_METRICS,
  PENDING_FIELD,
  PILLARS,
  PROVINCIAL_FDI,
  SCORECARD_CRITERIA,
  SECTOR_MIX,
  VERDICT,
  VERIFIED_CONCLUSIONS,
} from "@/lib/feasibility-data";

export function FeasibilityAssessmentContent() {
  return (
    <div className="fa-page">
      {/* Hero */}
      <section className="fa-hero">
        <div className="fa-hero-grid">
          <div>
            <p className="fa-eyebrow">Giai đoạn 00-1 · Shareholder briefing</p>
            <h1 className="fa-title">Đánh giá tiềm năng & khả thi</h1>
            <p className="fa-lead">{VERDICT.headline}</p>
            <div className="fa-hero-actions">
              <Link href="/docs/06-phases/00-1-feasibility-plan" className="fa-btn fa-btn-ghost">
                Kế hoạch đầy đủ (markdown) →
              </Link>
              <Link href="/docs/04-research/2026-07/fdi-data-deep-dive" className="fa-btn fa-btn-ghost">
                Nguồn số liệu đào sâu →
              </Link>
              <Link href="/hermes" className="fa-btn fa-btn-ghost">
                Tiến độ Hermes →
              </Link>
            </div>
          </div>

          <aside className="fa-verdict-card">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <ScoreRing
                value={VERDICT.scorecardTotal}
                max={VERDICT.scorecardMax}
                label="Scorecard 00-1"
                sublabel={`Ngưỡng Go ≥ ${VERDICT.threshold}`}
              />
              <div className="flex-1 space-y-3 w-full">
                <div className="fa-verdict-pill">
                  <span>Quyết định</span>
                  <strong className="text-[var(--accent)]">{VERDICT.decision}</strong>
                </div>
                <div className="fa-verdict-pill">
                  <span>Gói bán đầu</span>
                  <strong>{VERDICT.packages}</strong>
                </div>
                <div className="fa-verdict-pill">
                  <span>Điều kiện</span>
                  <strong className="text-sm font-semibold leading-snug">{VERDICT.condition}</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Headline metrics */}
      <section className="fa-section">
        <SectionHeader
          title="Số liệu then chốt — đã xác minh desk"
          subtitle="🟢 NSO/GSO · 🟡 báo chí phân tích · nguồn: fdi-data-deep-dive tháng 7/2026"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HEADLINE_METRICS.map((m) => (
            <MetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              unit={m.unit}
              period={m.period}
              confidence={m.confidence}
              note={m.note}
            />
          ))}
        </div>
      </section>

      {/* Charts row 1 */}
      <section className="fa-section">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="fa-chart-card">
            <SectionHeader
              title="Vốn FDI mới theo quốc gia"
              subtitle="2025 · tổng vốn mới 17,32 tỷ USD (NSO)"
              compact
            />
            <HorizontalBarChart
              items={FDI_BY_COUNTRY.map((c) => ({
                label: c.country,
                pct: c.pct,
                highlight: c.highlight,
                confidence: c.confidence,
                sublabel: `${c.valueB} tỷ USD`,
              }))}
            />
            <p className="text-xs text-[var(--muted)] mt-4 leading-relaxed">
              Trung Quốc <strong>#2 giá trị</strong> nhưng <strong>#1 số dự án</strong> — khớp phân khúc NM vừa & nhỏ
              LONGTV.
            </p>
          </div>

          <div className="fa-chart-card">
            <SectionHeader
              title="Cơ cấu vốn FDI mới — sản xuất"
              subtitle="2025 · NSO"
              compact
            />
            <DonutChart
              segments={[
                { label: SECTOR_MIX[0].label, pct: SECTOR_MIX[0].pct, color: "#b91c1c" },
                { label: SECTOR_MIX[1].label, pct: SECTOR_MIX[1].pct, color: "#d6d3d1" },
              ]}
              centerValue="56,5%"
              centerLabel="SX chế biến"
            />
            <p className="text-xs text-[var(--muted)] mt-4">
              9,8 tỷ USD vào manufacturing — củng cố mảng A (thiết lập NM) + B (hải quan XNK).
            </p>
          </div>
        </div>
      </section>

      {/* Provincial */}
      <section className="fa-section">
        <div className="fa-chart-card">
          <SectionHeader
            title="FDI mới theo tỉnh — miền Bắc & trọng tâm LONGTV"
            subtitle="6 tháng đầu 2026 · 🟡 Vietnam.vn — cần đối chiếu Cục ĐTNN / Sở"
          />
          <ProvincialBarChart items={PROVINCIAL_FDI} />
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-950 leading-relaxed">
            <strong>Đọc đúng số liệu:</strong> Thái Nguyên #1 không đồng nghĩa hàng trăm NM TQ nhỏ — Q1/2026 chủ yếu
            mega-project Hàn/Đài (Samsung bán dẫn ~4 tỷ USD). LONGTV nhắm NM TQ Tier 2–3 (2–50 triệu USD).
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="fa-section">
        <SectionHeader title="Bốn trụ cột đánh giá" subtitle="Trạng thái sau nghiên cứu sâu · 09/07/2026" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => (
            <Link key={p.id} href={p.href} className="fa-pillar-card group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{p.title}</span>
                <span className="text-2xl font-bold text-[var(--accent)]">{p.score}/5</span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed group-hover:text-stone-800">{p.summary}</p>
              <span className="text-xs text-[var(--accent)] font-semibold mt-3 inline-block group-hover:underline">
                Chi tiết →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Scorecard */}
      <section className="fa-section">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className="fa-chart-card sticky top-20">
              <SectionHeader title="Scorecard 10 tiêu chí" compact />
              <div className="flex justify-center py-4">
                <ScoreRing
                  value={VERDICT.scorecardTotal}
                  max={VERDICT.scorecardMax}
                  label="Tổng điểm"
                  sublabel="Đề xuất Go + Adjust"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Ngưỡng Go</span>
                  <span className="font-bold">≥ 35/50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Kết quả</span>
                  <span className="font-bold text-green-700">Vượt +3 điểm</span>
                </div>
              </div>
              <Link
                href="/docs/06-phases/00-1-scorecard"
                className="block mt-4 text-center text-sm text-[var(--accent)] font-semibold hover:underline"
              >
                Scorecard đầy đủ →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ScorecardBars items={SCORECARD_CRITERIA} />
          </div>
        </div>
      </section>

      {/* Verified conclusions */}
      <section className="fa-section">
        <SectionHeader
          title="Kết luận bám số liệu"
          subtitle="Chỉ chốt những gì có nguồn desk — phần còn lại ghi rõ cần field"
        />
        <div className="grid md:grid-cols-2 gap-4">
          {VERIFIED_CONCLUSIONS.map((c, i) => (
            <div key={c.title} className="fa-conclusion-card">
              <div className="flex items-start gap-3">
                <span className="fa-conclusion-num">{i + 1}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-bold leading-snug">{c.title}</h3>
                    <ConfidenceBadge level={c.confidence} compact />
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pending field */}
      <section className="fa-section">
        <div className="fa-pending-card">
          <SectionHeader
            title="Chưa xác thực — cần Hermes field"
            subtitle="Không đưa vào pitch khách cho đến khi Sở/KCN xác nhận"
            compact
          />
          <ul className="grid sm:grid-cols-2 gap-3 mt-4">
            {PENDING_FIELD.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-slate-400 mt-0.5">⚪</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/hermes" className="fa-btn fa-btn-primary">
              Dashboard Hermes →
            </Link>
            <Link href="/kim?filter=hermes" className="fa-btn fa-btn-ghost">
              Việc Kim Hermes →
            </Link>
          </div>
        </div>
      </section>

      {/* Service flow */}
      <section className="fa-section">
        <SectionHeader title="Mô hình triển khai — 3 mảng" subtitle="Lead NM TQ → chính sách → pháp lý → logistics" />
        <div className="fa-flow">
          {[
            { step: "01", title: "Lead nhà máy TQ", desc: "Dịch chuyển sản xuất · Tier 2–3" },
            { step: "A", title: "Chính sách 2 tỉnh", desc: "TN + HP · KCN · ưu đãi", href: "/docs/services/policy-government" },
            { step: "Hub", title: "Pháp lý & FDI", desc: "IRC/ERC · CTCP · luật đối tác", href: "/docs/services/legal-consulting" },
            { step: "B", title: "Logistics miền Bắc", desc: "Hải quan · XNK · tuyến TQ→HP", href: "/logistics" },
            { step: "→", title: "Pipeline dài hạn", desc: "Retainer G5 · mở rộng G6–G8" },
          ].map((node, i) =>
            node.href ? (
              <Link key={node.step} href={node.href} className="fa-flow-node group">
                <span>{node.step}</span>
                <strong>{node.title}</strong>
                <p>{node.desc}</p>
              </Link>
            ) : (
              <div key={node.step} className={`fa-flow-node ${i === 0 || i === 4 ? "fa-flow-muted" : ""}`}>
                <span>{node.step}</span>
                <strong>{node.title}</strong>
                <p>{node.desc}</p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Footer links */}
      <section className="fa-section pb-4">
        <div className="fa-link-grid">
          {[
            { href: "/docs/06-phases/00-1-market-memo", title: "Memo tiềm năng", desc: "TAM/SAM · persona · rủi ro" },
            { href: "/docs/06-phases/investor-pack/00-index", title: "Investor Pack", desc: "DT 6T/1N/2N · pitch gap" },
            { href: "/docs/04-research/2026-07/competitors", title: "10 đối thủ", desc: "CL-001 · sweet spot LONGTV" },
            { href: "/docs/decisions/005-phase-00-1-go", title: "QĐ #005 Go GĐ2", desc: "Chờ Leader ký" },
            { href: "/services", title: "Catalog dịch vụ", desc: "9 giai đoạn vòng đời" },
            { href: "/docs/06-phases/00-1-thuc-trang", title: "Thực trạng 00-1", desc: "Gap P0/P1 chi tiết" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="fa-link-card">
              <strong>{l.title}</strong>
              <span>{l.desc}</span>
            </Link>
          ))}
        </div>
        <p className="text-center text-xs text-[var(--muted)] mt-8">
          Số liệu cập nhật 2026-07-09 · Nguồn:{" "}
          <Link href="/docs/04-research/2026-07/fdi-data-deep-dive" className="text-[var(--accent)] hover:underline">
            fdi-data-deep-dive
          </Link>
          {" · "}
          <Link href="/docs/06-phases/00-1-feasibility-plan" className="text-[var(--accent)] hover:underline">
            Kế hoạch markdown
          </Link>
        </p>
      </section>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  compact,
}: {
  title: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <header className={compact ? "mb-5" : "mb-6"}>
      <h2 className={`font-bold tracking-tight ${compact ? "text-xl" : "text-2xl"}`}>{title}</h2>
      {subtitle && <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{subtitle}</p>}
    </header>
  );
}
