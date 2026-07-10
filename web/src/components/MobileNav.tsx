"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_MOBILE_NAV, SITE_NAV_SECTIONS, type SiteNavLink } from "@/lib/site-pages";

function MobileNavItem({ link, onNavigate }: { link: SiteNavLink; onNavigate: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={`py-2.5 text-sm border-b border-[var(--border)] last:border-0 ${
        link.highlight ? "font-semibold text-[var(--accent)]" : "font-medium hover:text-[var(--accent)]"
      }`}
    >
      {link.label}
    </Link>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  let lastSection: SiteNavLink["section"] | undefined;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg border border-[var(--border)] bg-white"
        aria-label="Menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {open && (
        <nav className="absolute top-16 left-0 right-0 bg-white border-b border-[var(--border)] shadow-lg z-50 px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {SITE_MOBILE_NAV.map((link) => {
            const showSection = link.section && link.section !== lastSection;
            if (link.section) lastSection = link.section;

            return (
              <div key={link.href}>
                {showSection && link.section && (
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] pt-3 pb-1 first:pt-0">
                    {SITE_NAV_SECTIONS[link.section]}
                  </div>
                )}
                <MobileNavItem link={link} onNavigate={close} />
              </div>
            );
          })}
        </nav>
      )}
    </div>
  );
}
