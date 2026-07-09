"use client";

import type { Confidence } from "@/lib/feasibility-data";
import { CONFIDENCE_META } from "@/lib/feasibility-data";

export function ConfidenceBadge({ level, compact }: { level: Confidence; compact?: boolean }) {
  const meta = CONFIDENCE_META[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border ${meta.className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
      {compact ? meta.short : meta.label}
    </span>
  );
}

export function ScoreRing({
  value,
  max,
  label,
  sublabel,
}: {
  value: number;
  max: number;
  label: string;
  sublabel?: string;
}) {
  const pct = Math.round((value / max) * 100);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e7e5e4" strokeWidth="10" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold tracking-tight text-[var(--accent)]">
            {value}
            <span className="text-lg text-[var(--muted)] font-normal">/{max}</span>
          </span>
          <span className="text-xs font-semibold text-[var(--muted)]">{pct}%</span>
        </div>
      </div>
      <div className="text-center mt-3">
        <div className="font-bold">{label}</div>
        {sublabel && <div className="text-xs text-[var(--muted)] mt-0.5">{sublabel}</div>}
      </div>
    </div>
  );
}

export function HorizontalBarChart({
  items,
  maxPct,
  valueFormatter,
}: {
  items: { label: string; pct: number; sublabel?: string; highlight?: boolean; confidence?: Confidence }[];
  maxPct?: number;
  valueFormatter?: (pct: number) => string;
}) {
  const max = maxPct ?? Math.max(...items.map((i) => i.pct), 1);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.label}>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className={`text-sm font-semibold truncate ${item.highlight ? "text-[var(--accent)]" : ""}`}>
                {item.label}
              </span>
              {item.confidence && <ConfidenceBadge level={item.confidence} compact />}
            </div>
            <span className="text-sm font-mono font-bold shrink-0">
              {valueFormatter ? valueFormatter(item.pct) : `${item.pct}%`}
            </span>
          </div>
          <div className="h-3 rounded-full bg-stone-100 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                item.highlight
                  ? "bg-gradient-to-r from-red-600 to-red-400"
                  : "bg-gradient-to-r from-stone-400 to-stone-300"
              }`}
              style={{ width: `${(item.pct / max) * 100}%` }}
            />
          </div>
          {item.sublabel && <p className="text-xs text-[var(--muted)] mt-1">{item.sublabel}</p>}
        </div>
      ))}
    </div>
  );
}

export function ProvincialBarChart({
  items,
}: {
  items: {
    province: string;
    valueB: number;
    rank: number;
    focus?: boolean;
    note?: string;
    confidence: Confidence;
  }[];
}) {
  const max = Math.max(...items.map((i) => i.valueB));

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.province}>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold text-[var(--muted)]">#{item.rank}</span>
              <span className={`font-semibold ${item.focus ? "text-[var(--accent)]" : ""}`}>{item.province}</span>
              {item.focus && (
                <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  Trọng tâm
                </span>
              )}
              <ConfidenceBadge level={item.confidence} compact />
            </div>
            <span className="text-sm font-mono font-bold shrink-0">{item.valueB} tỷ USD</span>
          </div>
          <div className="h-4 rounded-lg bg-stone-100 overflow-hidden">
            <div
              className={`h-full rounded-lg ${
                item.focus
                  ? "bg-gradient-to-r from-red-700 via-red-500 to-amber-400"
                  : "bg-gradient-to-r from-stone-350 to-stone-300 bg-stone-300"
              }`}
              style={{ width: `${(item.valueB / max) * 100}%` }}
            />
          </div>
          {item.note && <p className="text-xs text-[var(--muted)] mt-1.5 leading-relaxed">{item.note}</p>}
        </div>
      ))}
    </div>
  );
}

export function DonutChart({
  segments,
  centerLabel,
  centerValue,
}: {
  segments: { label: string; pct: number; color: string }[];
  centerLabel: string;
  centerValue: string;
}) {
  let acc = 0;
  const gradient = segments
    .map((s) => {
      const start = acc;
      acc += s.pct;
      return `${s.color} ${start}% ${acc}%`;
    })
    .join(", ");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <div className="relative w-44 h-44 shrink-0">
        <div
          className="w-full h-full rounded-full"
          style={{ background: `conic-gradient(${gradient})` }}
        />
        <div className="absolute inset-4 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
          <span className="text-2xl font-bold text-[var(--accent)]">{centerValue}</span>
          <span className="text-[10px] text-[var(--muted)] text-center px-2 leading-tight">{centerLabel}</span>
        </div>
      </div>
      <div className="space-y-3 flex-1 w-full">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ background: s.color }} />
            <div className="flex-1 flex justify-between gap-2 text-sm">
              <span className="font-medium">{s.label}</span>
              <span className="font-mono font-bold">{s.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScorecardBars({
  items,
}: {
  items: { id: number; name: string; score: number; evidence: string }[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 rounded-xl border border-[var(--border)] bg-white hover:border-red-200 transition-colors"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-sm font-semibold leading-snug">
              <span className="text-[var(--muted)] font-mono text-xs mr-2">#{item.id}</span>
              {item.name}
            </span>
            <div className="flex gap-0.5 shrink-0">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`w-2.5 h-6 rounded-sm ${n <= item.score ? "bg-[var(--accent)]" : "bg-stone-200"}`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-[var(--muted)] leading-relaxed">{item.evidence}</p>
        </div>
      ))}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  unit,
  period,
  confidence,
  note,
}: {
  label: string;
  value: string;
  unit?: string;
  period: string;
  confidence: Confidence;
  note?: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-[var(--border)] bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)] leading-tight">{label}</span>
        <ConfidenceBadge level={confidence} compact />
      </div>
      <div className="flex items-baseline gap-1.5 mb-1">
        <span className="text-3xl font-bold tracking-tight text-[var(--accent)]">{value}</span>
        {unit && <span className="text-sm font-medium text-[var(--muted)]">{unit}</span>}
      </div>
      <div className="text-xs font-mono text-[var(--muted)]">{period}</div>
      {note && <p className="text-xs text-stone-600 mt-2 leading-relaxed border-t border-stone-100 pt-2">{note}</p>}
    </div>
  );
}
