"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/kim", label: "Thư ký Kim" },
  { href: "/docs/06-phases/00-1-feasibility-plan", label: "Giai đoạn 00-1" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/operations", label: "Bảng vận hành" },
  { href: "/roadmap", label: "Lộ trình" },
  { href: "/departments", label: "Phòng ban" },
  { href: "/docs", label: "Tài liệu" },
  { href: "/phases", label: "Các pha" },
  { href: "/decisions", label: "Quyết định" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

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
        <nav className="absolute top-16 left-0 right-0 bg-white border-b border-[var(--border)] shadow-lg z-50 px-6 py-4 flex flex-col gap-1">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium hover:text-[var(--accent)] border-b border-[var(--border)] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
