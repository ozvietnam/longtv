import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { SITE_FOOTER_LINKS, SITE_HEADER_NAV } from "@/lib/site-pages";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LongTV — Đánh giá tiềm năng & Shareholder briefing",
  description:
    "CTCP tư vấn FDI TQ→VN. Giai đoạn 00-1: dashboard cổ đông · mô hình kinh doanh · hậu cần · nghiên cứu.",
};

function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight">
            Long<span className="text-[var(--accent)]">TV</span>
          </span>
          <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            00-1
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {SITE_HEADER_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.highlight
                  ? "font-semibold text-[var(--accent)] hover:opacity-80"
                  : "hover:text-[var(--accent)] font-medium"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-bold mb-2">LongTV</div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              CTCP tư vấn FDI Trung Quốc → Việt Nam. Trình cổ đông giai đoạn 00-1 trước khi mở rộng vận hành.
            </p>
          </div>
          {SITE_FOOTER_LINKS.map((group) => (
            <div key={group.label}>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">{group.label}</div>
              <div className="flex flex-col gap-2 text-sm">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      link.accent
                        ? "hover:text-[var(--accent)] font-medium text-[var(--accent)]"
                        : "hover:text-[var(--accent)]"
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-xs text-[var(--muted)] pt-6 border-t border-[var(--border)] flex flex-wrap gap-x-4 gap-y-1">
          <span>
            Build {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local"} · {new Date().toISOString().slice(0, 10)}
          </span>
          <a
            href="https://github.com/ozvietnam/longtv"
            className="hover:text-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ozvietnam/longtv ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
