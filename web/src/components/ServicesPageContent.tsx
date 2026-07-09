"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LIFECYCLE_PHASES,
  SERVICES,
  TYPICAL_JOURNEY,
  COMPANY_POSITIONING,
  TIER_STYLES,
  getServicesByPhase,
  type LifecyclePhase,
  type ServiceItem,
} from "@/lib/services";

function docHref(slug?: string[]) {
  if (!slug?.length) return null;
  return `/docs/${slug.join("/")}`;
}

function ModeBadge({ mode, label }: { mode: ServiceItem["mode"]; label: string }) {
  const styles = {
    self: "bg-white border-[var(--border)] text-[var(--foreground)]",
    partner: "bg-violet-50 border-violet-200 text-violet-800",
    hybrid: "bg-sky-50 border-sky-200 text-sky-800",
  };
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border ${styles[mode]}`}>
      {label}
    </span>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const tier = TIER_STYLES[service.tier];
  const href = docHref(service.docSlug);

  return (
    <article
      className={`p-5 rounded-xl border bg-white transition-shadow hover:shadow-md ${
        service.featured ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/20" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-mono text-sm font-bold text-[var(--accent)]">{service.id}</span>
            {service.featured && (
              <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                Phổ biến
              </span>
            )}
          </div>
          <h4 className="font-semibold text-base leading-snug">{service.name}</h4>
          {service.nameZh && (
            <p className="text-xs text-[var(--muted)] mt-0.5">{service.nameZh}</p>
          )}
        </div>
        <span className={`text-[10px] font-semibold px-2 py-1 rounded-md shrink-0 ${tier.className}`}>
          {tier.label}
        </span>
      </div>

      <dl className="space-y-2 text-sm mb-4">
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">Khi nào</dt>
          <dd className="text-[var(--foreground)]">{service.when}</dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]">Deliverable</dt>
          <dd className="text-[var(--muted)]">{service.deliverable}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--border)]">
        <div>
          <div className="text-lg font-bold text-[var(--accent)]">
            {service.priceUsd}
            <span className="text-xs font-normal text-[var(--muted)] ml-1">USD</span>
          </div>
          <div className="text-xs text-[var(--muted)]">{service.duration}</div>
        </div>
        <ModeBadge mode={service.mode} label={service.modeLabel} />
      </div>

      {href && (
        <Link href={href} className="inline-block mt-3 text-xs font-medium text-[var(--accent)] hover:underline">
          Tài liệu chi tiết →
        </Link>
      )}
    </article>
  );
}

function PhaseSection({ phase, defaultOpen }: { phase: LifecyclePhase; defaultOpen?: boolean }) {
  const services = getServicesByPhase(phase.id);
  const phaseDoc = docHref(phase.docSlug);

  return (
    <section id={phase.id} className="scroll-mt-24">
      <div className={`p-6 rounded-2xl border-2 ${phase.border} ${phase.color.split(" ")[0]}/30 mb-4`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm ${phase.color}`}>
                {phase.short}
              </span>
              <div>
                <h2 className="text-xl font-bold tracking-tight">{phase.name}</h2>
                <p className="text-sm text-[var(--muted)]">{phase.nameZh}</p>
              </div>
            </div>
            <p className="text-sm italic text-[var(--muted)] mb-2">"{phase.mindset}"</p>
            <p className="text-xs font-medium text-[var(--muted)]">Thời gian typic: {phase.duration}</p>
          </div>
          {phaseDoc && (
            <Link
              href={phaseDoc}
              className="shrink-0 text-sm font-medium text-[var(--accent)] hover:underline"
            >
              Đọc thêm →
            </Link>
          )}
        </div>
      </div>

      {services.length === 0 ? (
        <p className="text-sm text-[var(--muted)] px-2">Không có gói riêng — xem Hub hoặc giai đoạn liền kề.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      )}
    </section>
  );
}

export function ServicesPageContent() {
  const [activePhase, setActivePhase] = useState<string | "all">("all");
  const featured = SERVICES.filter((s) => s.featured);

  const visiblePhases =
    activePhase === "all"
      ? LIFECYCLE_PHASES
      : LIFECYCLE_PHASES.filter((p) => p.id === activePhase);

  return (
    <>
      {/* Hero */}
      <header className="mb-10">
        <div className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-3">
          Catalog v1 · Vòng đời 9 giai đoạn
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Dịch vụ theo vòng đời doanh nghiệp</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-6">
          {COMPANY_POSITIONING.tagline}. Trọng tâm địa bàn:{" "}
          <strong className="text-[var(--foreground)]">{COMPANY_POSITIONING.provinces}</strong>
          {" · "}
          {COMPANY_POSITIONING.logistics}
          {" · "}
          {COMPANY_POSITIONING.hub}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/docs/03-departments/04-san-pham/service-catalog-v1"
            className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
          >
            Catalog đầy đủ (markdown) →
          </Link>
          <Link
            href="/docs/03-departments/04-san-pham/fdi-lifecycle-full-map"
            className="inline-flex items-center px-4 h-10 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Bản đồ vòng đời G0–G8 →
          </Link>
        </div>
      </header>

      {/* Lifecycle diagram */}
      <section className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-white overflow-x-auto">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-4">
          Vòng đời nhà máy FDI Trung Quốc tại Việt Nam
        </h2>
        <div className="flex items-stretch gap-1 min-w-[720px]">
          {LIFECYCLE_PHASES.map((p, i) => (
            <div key={p.id} className="flex items-stretch flex-1 min-w-0">
              <button
                type="button"
                onClick={() => setActivePhase(p.id)}
                className={`flex-1 p-2 rounded-lg text-center transition-all border ${
                  activePhase === p.id
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] shadow-sm"
                    : "border-transparent hover:bg-stone-50"
                }`}
              >
                <div className={`text-xs font-bold mb-1 ${p.color.split(" ")[1]}`}>{p.short}</div>
                <div className="text-[10px] leading-tight text-[var(--muted)] line-clamp-2 hidden lg:block">
                  {p.name.replace(" & ", "\n")}
                </div>
              </button>
              {i < LIFECYCLE_PHASES.length - 1 && (
                <div className="flex items-center text-[var(--muted)] px-0.5">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            type="button"
            onClick={() => setActivePhase("all")}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
              activePhase === "all"
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "border-[var(--border)] hover:bg-stone-50"
            }`}
          >
            Xem tất cả giai đoạn
          </button>
          {LIFECYCLE_PHASES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePhase(p.id)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                activePhase === p.id
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "border-[var(--border)] hover:bg-stone-50"
              }`}
            >
              {p.short}
            </button>
          ))}
        </div>
      </section>

      {/* Featured packages */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Gói phổ biến</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      {/* By phase */}
      <section className="mb-12 space-y-12">
        <h2 className="text-xl font-bold">
          {activePhase === "all" ? "Dịch vụ theo từng giai đoạn" : `Giai đoạn ${activePhase}`}
        </h2>
        {visiblePhases.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} />
        ))}
      </section>

      {/* Typical journey */}
      <section className="mb-12 p-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-stone-50 to-white">
        <h2 className="text-xl font-bold mb-2">Lộ trình dịch vụ điển hình</h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          Một nhà máy Trung Quốc mới vào Việt Nam — từ tư vấn miễn phí đến retainer vận hành, và khi cần di dời hoặc về nước.
        </p>
        <div className="space-y-4">
          {TYPICAL_JOURNEY.map((step) => (
            <div key={step.phase} className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="shrink-0 w-24 text-sm font-bold text-[var(--accent)]">{step.phase}</div>
              <div className="flex flex-wrap gap-2">
                {step.services.map((id) => {
                  const s = SERVICES.find((x) => x.id === id);
                  if (!s) return null;
                  return (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-[var(--border)]"
                    >
                      <span className="font-mono text-[var(--accent)]">{id}</span>
                      {s.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)] mt-6">
          Giá trị lifetime 1 khách (ước tính): 40.000 – 150.000 USD nếu giữ retainer G5.
        </p>
      </section>

      {/* Tier legend */}
      <section className="mb-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {Object.entries(TIER_STYLES).map(([key, style]) => (
          <div key={key} className={`p-4 rounded-xl border border-[var(--border)] ${style.className} bg-opacity-50`}>
            <div className="text-xs font-bold uppercase tracking-wide">{style.label}</div>
            <p className="text-[10px] mt-1 opacity-80">
              {key === "entry" && "A0, làm quen"}
              {key === "policy" && "TN, HP, IRC, setup"}
              {key === "logistics" && "Hải quan, XNK, cảng"}
              {key === "hub" && "Pháp lý, KT, kết nối"}
              {key === "exit" && "G7 di dời, G8 thoái"}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="p-6 rounded-xl border border-dashed border-[var(--border)] bg-gray-50/50">
        <h2 className="font-semibold mb-2">Bắt đầu từ đâu?</h2>
        <p className="text-sm text-[var(--muted)] mb-4">
          Chưa chắc vào Việt Nam → <strong>A0</strong> miễn phí. Đã có ý định → <strong>A1</strong> báo cáo desk.
          NM đang chạy → <strong>B3 + H3</strong> retainer. Cần chuyển tỉnh / đóng NM → <strong>G7/G8-Pack</strong>.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs/03-departments/03-kinh-doanh/pricing-official" className="text-sm text-[var(--accent)] hover:underline">
            Bảng giá chính thức →
          </Link>
          <Link href="/docs/03-departments/03-kinh-doanh/bundle-onepager-zh" className="text-sm text-[var(--accent)] hover:underline">
            One-pager 中文 →
          </Link>
          <Link href="/operations" className="text-sm text-[var(--accent)] hover:underline">
            Bảng vận hành nội bộ →
          </Link>
        </div>
      </section>
    </>
  );
}
