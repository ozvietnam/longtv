"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RelatedPagesGrid } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";
import {
  COLLECTION_STEPS,
  topicLabel,
  type ArticleBacklogItem,
  type LegalSource,
  type LibraryShelf,
} from "@/lib/library-shared";

type Props = {
  shelves: LibraryShelf[];
  sources: LegalSource[];
  backlog: ArticleBacklogItem[];
  stats: {
    publishedCount: number;
    backlogCount: number;
    backlogTodo: number;
    sourceCount: number;
    sourceP0: number;
    lastUpdated: string;
  };
};

const STATUS_STYLES: Record<string, string> = {
  published: "bg-emerald-50 text-emerald-800 border-emerald-200",
  verified: "bg-sky-50 text-sky-800 border-sky-200",
  draft: "bg-amber-50 text-amber-800 border-amber-200",
  todo: "bg-stone-100 text-stone-600 border-stone-200",
};

function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase();
  const style = STATUS_STYLES[key] ?? STATUS_STYLES.todo;
  const label =
    key === "verified" ? "Đã verify desk" : key === "draft" ? "Draft" : key === "todo" ? "Chưa viết" : status;
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full border ${style}`}>
      {label}
    </span>
  );
}

export function LibraryPageContent({ shelves, sources, backlog, stats }: Props) {
  const [backlogFilter, setBacklogFilter] = useState<"all" | "P0" | "P1" | "P2">("all");
  const [activeShelf, setActiveShelf] = useState<string | "all">("all");

  const filteredBacklog = useMemo(() => {
    if (backlogFilter === "all") return backlog;
    return backlog.filter((b) => b.priority === backlogFilter);
  }, [backlog, backlogFilter]);

  const visibleShelves = activeShelf === "all" ? shelves : shelves.filter((s) => s.id === activeShelf);

  return (
    <div className="space-y-14">
      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border-2 border-[var(--accent)] bg-[var(--accent-soft)]">
          <div className="text-3xl font-bold text-[var(--accent)]">{stats.publishedCount}</div>
          <div className="text-sm font-medium mt-1">Bài đã có</div>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-white">
          <div className="text-3xl font-bold">{stats.backlogTodo}</div>
          <div className="text-sm text-[var(--muted)] mt-1">Bài sắp viết</div>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-white">
          <div className="text-3xl font-bold">{stats.sourceCount}</div>
          <div className="text-sm text-[var(--muted)] mt-1">Nguồn pháp luật</div>
        </div>
        <div className="p-4 rounded-xl border border-[var(--border)] bg-white">
          <div className="text-3xl font-bold">{stats.sourceP0}</div>
          <div className="text-sm text-[var(--muted)] mt-1">Nguồn P0</div>
        </div>
      </section>

      {/* Quy trình thu thập */}
      <section>
        <h2 className="text-xl font-bold mb-2">Quy trình thu thập tri thức FDI</h2>
        <p className="text-sm text-[var(--muted)] mb-6 max-w-2xl">
          Mỗi bài trong cẩm nang phải đi qua 7 bước — nguồn pháp luật trước, bài viết sau. Dữ liệu lưu tại{" "}
          <code className="text-xs bg-stone-100 px-1.5 py-0.5 rounded">web/data/fdi-legal/</code>.
        </p>
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COLLECTION_STEPS.map((step) => (
            <li
              key={step.step}
              className="p-4 rounded-xl border border-[var(--border)] bg-white flex gap-3"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-white text-sm font-bold flex items-center justify-center">
                {step.step}
              </span>
              <div>
                <div className="font-semibold text-sm">{step.title}</div>
                <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Kệ sách đã có */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold">Thư viện — bài đã có</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Nghiên cứu, playbook và tài liệu nội bộ theo chủ đề FDI
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveShelf("all")}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                activeShelf === "all"
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "border-[var(--border)] hover:border-[var(--accent)]"
              }`}
            >
              Tất cả
            </button>
            {shelves.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveShelf(s.id)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                  activeShelf === s.id
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                {s.icon} {s.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {visibleShelves.map((shelf) => (
            <div key={shelf.id}>
              <div className="mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span>{shelf.icon}</span>
                  {shelf.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">{shelf.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {shelf.articles.map((article) => (
                  <Link
                    key={article.docSlug}
                    href={`/docs/${article.docSlug}`}
                    className="group block p-4 rounded-xl border border-[var(--border)] bg-white hover:border-[var(--accent)] hover:shadow-sm transition"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {article.phase && (
                        <span className="text-[10px] font-mono font-bold text-[var(--accent)]">
                          {article.phase}
                        </span>
                      )}
                      <StatusBadge status={article.status} />
                    </div>
                    <h4 className="font-semibold text-sm group-hover:text-[var(--accent)] leading-snug">
                      {article.title}
                    </h4>
                    {article.description && (
                      <p className="text-xs text-[var(--muted)] mt-1.5 line-clamp-2">{article.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nguồn pháp luật */}
      <section className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-stone-50">
        <h2 className="text-xl font-bold mb-2">Registry nguồn pháp luật</h2>
        <p className="text-sm text-[var(--muted)] mb-6">
          {stats.sourceCount} văn bản nền tảng · cập nhật {stats.lastUpdated}. Mỗi bài cẩm nang phải trỏ về đây
          trước khi publish.
        </p>
        <div className="space-y-3">
          {sources.map((src) => (
            <details
              key={src.id}
              className="group rounded-xl border border-[var(--border)] bg-white overflow-hidden"
            >
              <summary className="cursor-pointer px-4 py-3 flex flex-wrap items-center justify-between gap-2 hover:bg-stone-50">
                <div className="flex flex-wrap items-center gap-2 min-w-0">
                  <span className="font-mono text-xs text-[var(--muted)]">{src.id}</span>
                  <span className="font-semibold text-sm">{src.title}</span>
                  <span className="text-xs text-[var(--muted)]">({src.document_no})</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      src.priority === "P0" ? "bg-red-100 text-red-800" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {src.priority}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-[var(--muted)]">{src.type}</span>
                </div>
              </summary>
              <div className="px-4 pb-4 pt-1 border-t border-[var(--border)] text-sm space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {src.topics.slice(0, 6).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                      {topicLabel(t)}
                    </span>
                  ))}
                </div>
                {src.extraction_targets.length > 0 && (
                  <div>
                    <div className="text-[10px] font-semibold uppercase text-[var(--muted)] mb-1">
                      Điều khoản cần trích
                    </div>
                    <ul className="text-xs text-[var(--muted)] list-disc list-inside space-y-0.5">
                      {src.extraction_targets.slice(0, 4).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {src.source_urls.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {src.source_urls.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--accent)] hover:underline truncate max-w-full"
                      >
                        Nguồn ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
        <Link
          href="/docs/data/fdi-legal/00-index"
          className="inline-block mt-4 text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Kế hoạch nghiên cứu pháp lý đầy đủ →
        </Link>
      </section>

      {/* Backlog bài viết */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold">Bài sắp viết — cẩm nang pháp lý</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              {stats.backlogCount} bài trong backlog · chỉ publish khi có nguồn + review luật sư
            </p>
          </div>
          <div className="flex gap-2">
            {(["all", "P0", "P1", "P2"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setBacklogFilter(p)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                  backlogFilter === p
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                {p === "all" ? "Tất cả" : p}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 border-b border-[var(--border)] text-left">
                <th className="px-4 py-3 font-semibold w-16">P</th>
                <th className="px-4 py-3 font-semibold w-28">ID</th>
                <th className="px-4 py-3 font-semibold">Bài viết</th>
                <th className="px-4 py-3 font-semibold hidden lg:table-cell">Câu hỏi khách hàng</th>
                <th className="px-4 py-3 font-semibold w-20">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredBacklog.map((item) => (
                <tr key={item.id} className="border-b border-[var(--border)] last:border-0 hover:bg-stone-50/50">
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-bold ${
                        item.priority === "P0" ? "text-red-600" : item.priority === "P1" ? "text-amber-600" : "text-stone-500"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-[var(--muted)]">{item.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-xs text-[var(--muted)] lg:hidden mt-1 line-clamp-2">{item.question}</div>
                  </td>
                  <td className="px-4 py-3 text-[var(--muted)] hidden lg:table-cell">{item.question}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={item.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link
          href="/docs/data/fdi-legal/article-backlog"
          className="inline-block mt-4 text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Backlog đầy đủ (markdown) →
        </Link>
      </section>

      <RelatedPagesGrid links={PAGE_RELATED["/cam-nang"]} />

      {/* Liên kết */}
      <section className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border)]">
        <Link
          href="/services"
          className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] font-medium"
        >
          Dịch vụ G0–G8 →
        </Link>
        <Link
          href="/docs/04-research/2026-07/00-index"
          className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] font-medium"
        >
          Nghiên cứu tháng 7 →
        </Link>
        <Link
          href="/kim"
          className="text-sm px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
        >
          Thư ký Kim — việc cần người →
        </Link>
      </section>
    </div>
  );
}
