"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Phase001Banner, RelatedPagesGrid, StickyPageNav } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";
import {
  HERMES_DOC_LINKS,
  HERMES_WAVE1_DONE,
  type HermesProgressSummary,
} from "@/lib/hermes-progress-shared";
import type { KimJob } from "@/lib/kim-queue-shared";
import type { HermesClTask } from "@/lib/hermes-progress-shared";
import { JOB_PRIORITY_LABELS, JOB_STATUS_LABELS } from "@/lib/ui-labels";

type Progress = HermesProgressSummary;

const STATUS_STYLES: Record<string, string> = {
  done: "bg-green-100 text-green-800",
  doing: "bg-blue-100 text-blue-800",
  todo: "bg-orange-100 text-orange-800",
  blocked: "bg-red-100 text-red-800",
};

type Wave2Filter = "all" | "open" | "p0" | "doing";

function KimMiniCard({ job }: { job: KimJob }) {
  const link = job.docLink.trim();
  const isDoc = link.startsWith("/docs/") || link.startsWith("/logistics") || link.startsWith("/cam-nang");

  return (
    <article className="p-4 rounded-xl border border-violet-100 bg-white hover:shadow-sm transition-shadow">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="font-mono text-xs font-bold text-violet-800">{job.id}</span>
        <span
          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[job.status.toLowerCase()] || "bg-gray-100"}`}
        >
          {JOB_STATUS_LABELS[job.status.toLowerCase()] ?? job.status}
        </span>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded border border-violet-200 text-violet-800">
          {JOB_PRIORITY_LABELS[job.priority] ?? job.priority}
        </span>
      </div>
      <p className="text-sm font-medium leading-snug mb-2">{job.task}</p>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)]">
        <span>
          Hạn: <span className="font-mono text-[var(--foreground)]">{job.deadline || "—"}</span>
        </span>
        {link && link !== "—" && isDoc && (
          <Link href={link} className="text-violet-700 font-medium hover:underline">
            Tài liệu →
          </Link>
        )}
      </div>
    </article>
  );
}

function ClMiniRow({ task }: { task: HermesClTask }) {
  const evidence = task.evidence.trim();
  const href = evidence.startsWith("/") ? evidence : null;

  return (
    <tr className="border-b border-[var(--border)] last:border-0">
      <td className="py-3 px-4 font-mono text-xs font-bold text-violet-800 whitespace-nowrap">{task.id}</td>
      <td className="py-3 px-4 text-sm">{task.task}</td>
      <td className="py-3 px-4">
        <span
          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${STATUS_STYLES[task.status.toLowerCase()] || "bg-gray-100"}`}
        >
          {JOB_STATUS_LABELS[task.status.toLowerCase()] ?? task.status}
        </span>
      </td>
      <td className="py-3 px-4 font-mono text-xs whitespace-nowrap">{task.deadline}</td>
      <td className="py-3 px-4">
        {href ? (
          <Link href={href} className="text-xs text-violet-700 font-medium hover:underline">
            Evidence →
          </Link>
        ) : (
          <span className="text-xs text-[var(--muted)]">—</span>
        )}
      </td>
    </tr>
  );
}

const HERMES_SECTIONS = [
  { id: "tom-tat", label: "Tóm tắt" },
  { id: "wave1", label: "Wave 1" },
  { id: "wave2", label: "Wave 2" },
  { id: "cl", label: "Chiến lược" },
] as const;

export function HermesProgressContent({ progress }: { progress: Progress }) {
  const [filter, setFilter] = useState<Wave2Filter>("open");

  const filteredKim = useMemo(() => {
    return progress.kimJobs.filter((j) => {
      if (filter === "open") return j.status !== "done";
      if (filter === "p0") return j.priority === "P0";
      if (filter === "doing") return j.status === "doing";
      return true;
    });
  }, [progress.kimJobs, filter]);

  const verdict =
    progress.kimDone === 0
      ? "Wave 1 desk research đã có trong repo. Wave 2 — việc Kim (gọi Sở, brief, field) chưa có mục nào tick done; Hermes cần tự làm và cập nhật."
      : `Wave 2: ${progress.kimDone}/${progress.kimJobs.length} việc Kim đã xong.`;

  return (
    <>
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-violet-800 mb-3 px-3 py-1.5 rounded-full bg-violet-100">
          Nghiên cứu & field · Đã duyệt QĐ #006
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-3">Hermes đã làm gì?</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">{verdict}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/kim?filter=hermes"
            className="inline-flex items-center px-4 h-10 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700"
          >
            Việc Kim của Hermes →
          </Link>
          <Link
            href="/docs/05-clarifications/what-is-kim"
            className="inline-flex items-center px-4 h-10 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-white"
          >
            Kim là gì? →
          </Link>
        </div>
      </header>

      <Phase001Banner compact />
      <StickyPageNav sections={HERMES_SECTIONS} />

      {/* Summary stats */}
      <section id="tom-tat" className="scroll-mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <StatCard label="Wave 1 (desk)" value={String(progress.wave1Count)} note="đã có evidence" highlight />
        <StatCard label="Kim đang mở" value={String(progress.kimTodo + progress.kimDoing)} note="chờ Hermes" />
        <StatCard label="Kim đang làm" value={String(progress.kimDoing)} note="KIM-010, 080" />
        <StatCard label="Kim đã xong" value={String(progress.kimDone)} note="người tick done" />
      </section>

      {/* Honest status banner */}
      <section className="mb-10 p-5 rounded-xl border-2 border-amber-200 bg-amber-50/80">
        <h2 className="font-bold text-amber-900 mb-2">Kết luận rà soát (2026-07-09)</h2>
        <ul className="text-sm text-amber-950 space-y-2 list-disc list-inside">
          <li>
            <strong>Đúng / đã có:</strong> 6 báo cáo desk Wave 1 (đối thủ, pháp nhân, ngân sách, FDI TN/HP, KCN) — link
            bên dưới.
          </li>
          <li>
            <strong>Chưa xong (cần người Hermes):</strong> Brief 1 trang (KIM-080) vẫn còn placeholder; chưa gọi Sở/KCN;
            chưa map 20 NM; chưa verify nguồn Cẩm nang.
          </li>
          <li>
            <strong>Quá hạn cần xử lý:</strong>{" "}
            {progress.kimOverdue.length > 0
              ? progress.kimOverdue.map((j) => j.id).join(", ")
              : "Không có (theo hạn trong queue)"}
            {progress.kimOverdue.some((j) => j.id === "KIM-087") && " — KIM-087 subscribe MPI"}
          </li>
        </ul>
      </section>

      {/* Wave 1 done */}
      <section id="wave1" className="scroll-mt-32 mb-12">
        <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
          <h2 className="text-2xl font-bold">Wave 1 — Đã hoàn thành (desk research)</h2>
          <span className="text-sm text-green-700 font-semibold">✓ Evidence trong repo</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {HERMES_WAVE1_DONE.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block p-5 rounded-xl border border-green-200 bg-green-50/50 hover:bg-white hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-green-800">{item.id}</span>
                <span className="text-green-600 text-sm">→</span>
              </div>
              <h3 className="font-semibold group-hover:text-green-800">{item.title}</h3>
              {item.note && <p className="text-xs text-[var(--muted)] mt-2">{item.note}</p>}
            </Link>
          ))}
        </div>
      </section>

      {/* Wave 2 Kim */}
      <section id="wave2" className="scroll-mt-32 mb-12">
        <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
          <h2 className="text-2xl font-bold">Wave 2 — Việc Kim (người Hermes)</h2>
          <Link href="/kim" className="text-sm text-violet-700 font-medium hover:underline">
            Mở hàng chờ Kim đầy đủ →
          </Link>
        </div>
        <p className="text-sm text-[var(--muted)] mb-4 max-w-2xl">
          {progress.kimJobs.length} việc giao Hermes · {progress.kimDone} done · {progress.kimDoing} doing ·{" "}
          {progress.kimTodo} todo
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(
            [
              ["open", "Đang mở"],
              ["doing", "Đang làm"],
              ["p0", "Ưu tiên cao (P0)"],
              ["all", "Tất cả"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                filter === key
                  ? "bg-violet-600 text-white border-violet-600"
                  : "border-[var(--border)] hover:bg-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {filteredKim.map((job) => (
            <KimMiniCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* CL tasks */}
      <section id="cl" className="scroll-mt-32 mb-12">
        <h2 className="text-2xl font-bold mb-4">TODO Chiến lược — assignee @hermes</h2>
        <p className="text-sm text-[var(--muted)] mb-4">
          {progress.clDone} done · {progress.clDoing} doing · {progress.clTodo} todo (trong bảng phòng Chiến lược)
        </p>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-white">
          <table className="w-full text-left min-w-[640px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-violet-50/50 text-xs uppercase tracking-wider text-[var(--muted)]">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Việc</th>
                <th className="py-3 px-4 font-semibold">Trạng thái</th>
                <th className="py-3 px-4 font-semibold">Hạn</th>
                <th className="py-3 px-4 font-semibold">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {progress.clTasks.map((task) => (
                <ClMiniRow key={task.id} task={task} />
              ))}
            </tbody>
          </table>
        </div>
        <Link
          href="/operations#chien-luoc"
          className="inline-block mt-3 text-sm text-violet-700 font-medium hover:underline"
        >
          Bảng vận hành phòng Chiến lược →
        </Link>
      </section>

      <RelatedPagesGrid links={PAGE_RELATED["/hermes"]} />

      {/* Related docs */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Tài liệu liên quan</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {HERMES_DOC_LINKS.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="p-4 rounded-xl border border-[var(--border)] bg-white hover:border-violet-300 hover:shadow-sm transition"
            >
              <div className="font-semibold text-violet-900">{doc.title}</div>
              <div className="text-sm text-[var(--muted)] mt-1">{doc.desc}</div>
            </Link>
          ))}
        </div>
      </section>
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
      className={`p-4 rounded-xl border bg-white ${highlight ? "border-violet-400 ring-1 ring-violet-200" : "border-[var(--border)]"}`}
    >
      <div className="text-3xl font-bold text-violet-700">{value}</div>
      <div className="text-sm font-medium mt-1">{label}</div>
      <div className="text-xs text-[var(--muted)]">{note}</div>
    </div>
  );
}
