import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
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
  title: "LongTV — Kho tri thức & Vận hành",
  description:
    "CTCP tư vấn FDI TQ→VN. Giai đoạn 00-1: đánh giá tiềm năng · Dịch vụ · Bảng vận hành 5 phòng ban.",
};

const NAV_LINKS = [
  { href: "/docs/06-phases/00-1-feasibility-plan", label: "00-1" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/operations", label: "Vận hành" },
  { href: "/roadmap", label: "Lộ trình" },
  { href: "/departments", label: "Phòng ban" },
  { href: "/docs", label: "Tài liệu" },
];

function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight">
            Long<span className="text-[var(--accent)]">TV</span>
          </span>
          <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            00-1
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--accent)] font-medium">
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
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold mb-2">LongTV</div>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Trung tâm kết nối đầu tư TQ↔VN. Kho tri thức + vận hành nội bộ.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">Truy cập</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-[var(--accent)]">Dịch vụ</Link>
              <Link href="/operations" className="hover:text-[var(--accent)]">Bảng vận hành</Link>
              <Link href="/docs/06-phases/00-1-feasibility-plan" className="hover:text-[var(--accent)]">Giai đoạn 00-1</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">Repo</div>
            <a
              href="https://github.com/ozvietnam/longtv"
              className="text-sm hover:text-[var(--accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ozvietnam/longtv ↗
            </a>
          </div>
        </div>
        <div className="text-xs text-[var(--muted)] pt-6 border-t border-[var(--border)]">
          Build {process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local"} ·{" "}
          {new Date().toISOString().slice(0, 10)}
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
