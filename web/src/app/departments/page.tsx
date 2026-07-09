import Link from "next/link";
import { DEPARTMENTS } from "@/lib/departments";
import { getAllDocs } from "@/lib/docs";
import { countTasksByStatus, parseTodoTable } from "@/lib/tasks";
import { Phase001Banner, RelatedPagesGrid } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";

export const metadata = { title: "Phòng ban · LongTV" };

export default function DepartmentsIndex() {
  const docs = getAllDocs();
  const todoDocs = docs.filter((d) => d.meta.slug.join("/").endsWith("/TODO"));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">5 phòng ban thực thi</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          Mục tiêu tháng được <strong>chia thẳng</strong> cho từng phòng. Mỗi phòng có bảng TODO ưu tiên P0/P1/P2 —
          lắp nhân sự vào là chạy ngay.
        </p>
        <div className="flex gap-3 flex-wrap mt-5">
          <Link
            href="/operations"
            className="text-sm px-4 py-2 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
          >
            Bảng vận hành tổng
          </Link>
          <Link
            href="/docs/03-departments/00-org-model"
            className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
          >
            Mô hình tổ chức
          </Link>
        </div>
      </header>

      <Phase001Banner compact />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEPARTMENTS.map((dept) => {
          const todoDoc = todoDocs.find((d) => d.meta.slug.join("/") === dept.todoSlug);
          const tasks = todoDoc ? parseTodoTable(todoDoc.content) : [];
          const p0Count = tasks.filter((t) => t.priority === "P0").length;
          const p0Done = tasks.filter((t) => t.priority === "P0" && t.status === "done").length;
          const counts = countTasksByStatus(tasks);

          return (
            <div
              key={dept.id}
              className={`p-6 rounded-lg border bg-white ${dept.color}`}
            >
              <div className="text-xs uppercase tracking-wider text-[var(--muted)] mb-2">
                {dept.vLayer}
              </div>
              <h2 className="text-lg font-bold mb-3">{dept.name}</h2>
              {todoDoc && (
                <div className="text-sm text-[var(--muted)] mb-4 space-y-1">
                  <div>
                    P0: <span className="font-semibold text-[var(--foreground)]">{p0Done}/{p0Count}</span> hoàn thành
                  </div>
                  <div className="text-xs">
                    {counts.done} done · {counts.doing} doing · {counts.todo} todo
                  </div>
                </div>
              )}
              <div className="flex gap-2 flex-wrap">
                <Link
                  href={`/docs/${dept.todoSlug}`}
                  className="text-sm px-3 py-1.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
                >
                  Xem TODO
                </Link>
                <Link
                  href={`/operations#${dept.id}`}
                  className="text-sm px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
                >
                  Bảng vận hành
                </Link>
                <Link
                  href={`/docs/03-departments/${dept.id}/00-profile`}
                  className="text-sm px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
                >
                  Giới thiệu
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <RelatedPagesGrid links={PAGE_RELATED["/departments"]} />

      <section className="mt-12 p-6 rounded-lg border border-[var(--border)] bg-white">
        <h2 className="font-semibold mb-2">Cách cập nhật task</h2>
        <ol className="text-sm text-[var(--muted)] space-y-1 list-decimal list-inside">
          <li>Sửa file <code className="font-mono text-xs bg-gray-100 px-1 rounded">03-departments/&lt;phong&gt;/TODO.md</code> trong repo</li>
          <li>Cập nhật cột Assignee, Status, Evidence</li>
          <li>Commit + push → web tự deploy</li>
        </ol>
      </section>
    </div>
  );
}
