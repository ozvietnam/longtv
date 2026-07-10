import Link from "next/link";
import { SITE_PHASE_001 } from "@/lib/site-pages";

export function StickyPageNav({ sections }: { sections: readonly { id: string; label: string }[] }) {
  return (
    <nav className="sticky top-16 z-10 -mx-6 px-6 py-3 mb-10 bg-[var(--background)]/95 backdrop-blur border-b border-[var(--border)]">
      <div className="flex gap-1 overflow-x-auto text-sm">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="shrink-0 px-3 py-1.5 rounded-full text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] font-medium transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function PageSection({
  id,
  title,
  desc,
  children,
  className = "",
}: {
  id: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-32 mb-14 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        {desc && <p className="text-sm text-[var(--muted)] max-w-3xl">{desc}</p>}
      </div>
      {children}
    </section>
  );
}

export function KpiCard({
  label,
  value,
  note,
  highlight,
}: {
  label: string;
  value: string;
  note?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-xl border bg-white ${
        highlight ? "border-[var(--accent)] bg-[var(--accent-soft)]/40" : "border-[var(--border)]"
      }`}
    >
      <div className="text-xs text-[var(--muted)] uppercase font-semibold mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {note && <div className="text-xs text-[var(--muted)] mt-1">{note}</div>}
    </div>
  );
}

/** Banner 00-1 — dùng trên trang cần gắn shareholder briefing */
export function Phase001Banner({ compact }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="mb-6">
        <Link
          href={SITE_PHASE_001.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
        >
          {SITE_PHASE_001.eyebrow} — {SITE_PHASE_001.title} →
        </Link>
      </div>
    );
  }

  return (
    <aside className="mb-8 p-5 md:p-6 rounded-2xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--accent-soft)]/60 to-white">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
        {SITE_PHASE_001.eyebrow}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <Link href={SITE_PHASE_001.href} className="text-xl font-bold hover:text-[var(--accent)] transition-colors">
            {SITE_PHASE_001.title} →
          </Link>
          <p className="text-sm text-[var(--muted)] mt-1">{SITE_PHASE_001.desc}</p>
        </div>
        <Link
          href={SITE_PHASE_001.planHref}
          className="shrink-0 inline-flex items-center px-4 h-10 rounded-full border border-[var(--border)] bg-white text-sm font-medium hover:border-[var(--accent)]"
        >
          Kế hoạch markdown
        </Link>
      </div>
    </aside>
  );
}

export function RelatedPagesGrid({
  links,
  title = "Trang liên quan",
}: {
  links: { href: string; title: string; desc: string }[];
  title?: string;
}) {
  if (links.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--accent)] hover:shadow-sm transition"
          >
            <div className="font-semibold text-sm mb-1">{l.title}</div>
            <div className="text-xs text-[var(--muted)] leading-relaxed">{l.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
