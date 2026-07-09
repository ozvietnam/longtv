import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "LongTV — Kho tri thức dự án",
  description: "Công ty dịch vụ tư vấn đầu tư nhà máy Trung Quốc về Thái Nguyên & Hải Phòng. Kho tài liệu nội bộ team.",
};

function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Long<span className="text-[var(--accent)]">TV</span>
          </span>
          <span className="text-xs text-[var(--muted)] hidden sm:inline">Kho tri thức dự án</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-sm flex-wrap justify-end">
          <Link href="/" className="hover:text-[var(--accent)]">Trang chủ</Link>
          <Link href="/docs/00-WORKING_PRINCIPLES" className="hover:text-[var(--accent)]">Nguyên tắc</Link>
          <Link href="/roadmap" className="hover:text-[var(--accent)]">Lộ trình</Link>
          <Link href="/departments" className="hover:text-[var(--accent)]">Phòng ban</Link>
          <Link href="/docs/06-phases/00-1-feasibility-plan" className="hover:text-[var(--accent)]">Đánh giá</Link>
          <Link href="/docs/services/00-index" className="hover:text-[var(--accent)]">Dịch vụ</Link>
          <Link href="/docs/services/policy-government" className="hover:text-[var(--accent)] hidden md:inline">Chính sách</Link>
          <Link href="/docs" className="hover:text-[var(--accent)]">Tài liệu</Link>
          <Link href="/phases" className="hover:text-[var(--accent)] hidden sm:inline">Các pha</Link>
          <Link href="/decisions" className="hover:text-[var(--accent)] hidden sm:inline">Quyết định</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-[var(--muted)] flex justify-between flex-wrap gap-4">
        <div>
          <span className="font-semibold text-[var(--foreground)]">LongTV</span> · Kho tri thức nội bộ
        </div>
        <div>
          <a href="https://github.com/ozvietnam/longtv" className="hover:text-[var(--accent)]" target="_blank" rel="noopener noreferrer">
            GitHub ↗
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