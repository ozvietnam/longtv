"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Phase001Banner, RelatedPagesGrid } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";
import {
  JOB_CATEGORIES,
  OWNER_GROUPS,
  type KimJob,
} from "@/lib/kim-queue-shared";
import { JOB_PRIORITY_LABELS, JOB_STATUS_LABELS } from "@/lib/ui-labels";

const STATUS_STYLES: Record<string, string> = {
  done: "bg-green-100 text-green-800",
  doing: "bg-blue-100 text-blue-800",
  todo: "bg-orange-100 text-orange-800",
  blocked: "bg-red-100 text-red-800",
};

const PRIORITY_STYLES: Record<string, string> = {
  P0: "border-red-300 bg-red-50 text-red-800",
  P1: "border-amber-300 bg-amber-50 text-amber-900",
  P2: "border-gray-300 bg-gray-50 text-gray-600",
};

function OwnerBadge({ owner }: { owner: string }) {
  const style = OWNER_GROUPS[owner] || { label: owner, className: "bg-gray-100 text-gray-700" };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${style.className}`}>
      {style.label}
    </span>
  );
}

function JobCard({ job }: { job: KimJob }) {
  const link = job.docLink.trim();
  const isDoc = link.startsWith("/docs/");

  return (
    <article
      className={`p-5 rounded-xl border-2 bg-white transition-shadow hover:shadow-md ${
        job.priority === "P0" ? "border-[var(--accent)]/40" : "border-[var(--border)]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${PRIORITY_STYLES[job.priority] || ""}`}
          >
            {JOB_PRIORITY_LABELS[job.priority] ?? job.priority}
          </span>
          <span className="font-mono text-sm font-bold text-[var(--accent)]">{job.id}</span>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[job.status.toLowerCase()] || "bg-gray-100"}`}
          >
            {JOB_STATUS_LABELS[job.status.toLowerCase()] ?? job.status}
          </span>
        </div>
        <OwnerBadge owner={job.owner} />
      </div>

      <h3 className="font-semibold text-base leading-snug mb-3">{job.task}</h3>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="text-[var(--muted)]">
          Hạn: <span className="font-mono text-[var(--foreground)]">{job.deadline || "—"}</span>
        </span>
        {link && link !== "—" && isDoc && (
          <Link href={link} className="text-[var(--accent)] font-medium hover:underline text-xs">
            Mở tài liệu / script →
          </Link>
        )}
      </div>
    </article>
  );
}

type Filter = "all" | "open" | "leader" | "hermes" | "p0";

export function KimQueueContent({
  jobs,
  initialFilter = "open",
}: {
  jobs: KimJob[];
  initialFilter?: Filter;
}) {
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      if (filter === "open") return j.status !== "done";
      if (filter === "leader") return j.owner.includes("Leader");
      if (filter === "hermes") return j.owner === "Hermes";
      if (filter === "p0") return j.priority === "P0";
      return true;
    });
  }, [jobs, filter]);

  const openCount = jobs.filter((j) => j.status !== "done").length;
  const p0Open = jobs.filter((j) => j.priority === "P0" && j.status !== "done").length;
  const leaderOpen = jobs.filter((j) => j.owner.includes("Leader") && j.status !== "done").length;

  return (
    <>
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mb-3 px-3 py-1 rounded-full bg-[var(--accent-soft)]">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Cần người thật
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-3">Thư ký Kim — việc cần người thật</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">
          Mọi việc ở đây <strong>bắt buộc có người tự hoàn thiện và đi làm</strong>: gọi điện, ký, gặp, nộp hồ sơ,
          chốt khách, field thật. <strong>AI không thay thế</strong> — không tick xong thay owner.
        </p>
        <p className="text-sm text-[var(--muted)] mt-3 max-w-3xl">
          Leader, Hermes, Sales, Luật… mỗi người xem việc của mình. Desk research / build web →{" "}
          <Link href="/operations" className="text-[var(--accent)] font-medium hover:underline">
            Bảng vận hành
          </Link>
          , không phải Kim.{" "}
          <Link href="/docs/05-clarifications/what-is-kim" className="text-[var(--accent)] font-medium hover:underline">
            Định nghĩa Kim →
          </Link>
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/docs/05-clarifications/what-is-kim"
            className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90"
          >
            Kim là gì? →
          </Link>
          <Link
            href="/hermes"
            className="inline-flex items-center px-4 h-10 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700"
          >
            Hermes đã làm gì? →
          </Link>
          <Link
            href="/operations"
            className="inline-flex items-center px-4 h-10 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Bảng vận hành →
          </Link>
        </div>
      </header>

      <Phase001Banner compact />

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Đang mở" value={String(openCount)} note="cần làm + đang làm" highlight />
        <StatCard label="Ưu tiên cao (P0)" value={String(p0Open)} note="Tuần này" />
        <StatCard label="Việc lãnh đạo" value={String(leaderOpen)} note="Anh xử lý" />
        <StatCard label="Tổng hàng chờ" value={String(jobs.length)} note="Trong file Kim" />
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(
          [
            ["open", `Đang mở (${openCount})`],
            ["p0", "Ưu tiên cao (P0)"],
            ["leader", "Lãnh đạo"],
            ["hermes", "Nghiên cứu (Hermes)"],
            ["all", "Tất cả"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
              filter === key
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "border-[var(--border)] hover:bg-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* By category */}
      {JOB_CATEGORIES.map((cat) => {
        const catJobs = filtered.filter((j) => cat.ids.includes(j.id));
        if (catJobs.length === 0) return null;

        return (
          <section key={cat.id} className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              {cat.label}
              <span className="text-sm font-normal text-[var(--muted)]">({catJobs.length})</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {catJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Uncategorized in filter */}
      {filtered.filter((j) => !JOB_CATEGORIES.some((c) => c.ids.includes(j.id))).length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-bold mb-4">Khác</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {filtered
              .filter((j) => !JOB_CATEGORIES.some((c) => c.ids.includes(j.id)))
              .map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
          </div>
        </section>
      )}

      <section className="p-6 rounded-xl border border-dashed border-[var(--border)] bg-amber-50/30">
        <h2 className="font-semibold mb-2">Quy trình Kim (người thật)</h2>
        <ol className="text-sm text-[var(--muted)] space-y-2 list-decimal list-inside">
          <li>Owner người mở trang — lọc việc của mình (Lãnh đạo / Nghiên cứu Hermes / ưu tiên cao)</li>
          <li>Tự làm việc thật (gọi, ký, gặp…) — dùng kịch bản AI chuẩn bị sẵn nếu có</li>
          <li>
            Xong → <strong>chính owner</strong> đổi trạng thái <code className="text-xs bg-white px-1 rounded">done</code>{" "}
            (AI không tick thay)
          </li>
          <li>Sau đó báo kết quả — Cursor cập nhật file nghiên cứu (việc desk không nằm trong Kim)</li>
        </ol>
      </section>

      <RelatedPagesGrid links={PAGE_RELATED["/kim"]} />
    </>
  );
}

function StatCard({
  label,
  value,
  note,
  highlight,
}: {
  label: string;
  value: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`p-4 rounded-xl border bg-white ${highlight ? "border-[var(--accent)] ring-1 ring-[var(--accent)]/20" : "border-[var(--border)]"}`}
    >
      <div className="text-3xl font-bold text-[var(--accent)]">{value}</div>
      <div className="text-sm font-medium mt-1">{label}</div>
      <div className="text-xs text-[var(--muted)]">{note}</div>
    </div>
  );
}
