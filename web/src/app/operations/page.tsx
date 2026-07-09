import Link from "next/link";
import { DEPARTMENTS } from "@/lib/departments";
import { Phase001Banner, RelatedPagesGrid, StickyPageNav } from "@/components/page/PageChrome";
import { PAGE_RELATED } from "@/lib/site-pages";
import {
  countTasksByPriority,
  countTasksByStatus,
  getAllDepartmentTasks,
  type TodoTask,
} from "@/lib/tasks";

export const metadata = {
  title: "Bảng vận hành · LongTV",
  description: "Danh sách công việc theo phòng ban — đẩy việc từ Leader xuống 5 phòng vận hành.",
};

const STATUS_STYLES: Record<string, string> = {
  done: "bg-green-100 text-green-800",
  doing: "bg-blue-100 text-blue-800",
  todo: "bg-gray-100 text-gray-700",
  blocked: "bg-red-100 text-red-800",
};

const PRIORITY_STYLES: Record<string, string> = {
  P0: "bg-red-50 text-red-700 border-red-200",
  P1: "bg-amber-50 text-amber-800 border-amber-200",
  P2: "bg-gray-50 text-gray-600 border-gray-200",
};

function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status.toLowerCase()] || "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${style}`}>
      {status}
    </span>
  );
}

function TaskRow({ task }: { task: TodoTask }) {
  const evidence = task.evidence.trim();
  const isLink = evidence.startsWith("/docs/") || evidence.startsWith("[");

  return (
    <tr className="border-b border-[var(--border)] last:border-0 hover:bg-gray-50/50">
      <td className="py-3 pr-3">
        <span
          className={`inline-block px-1.5 py-0.5 rounded border text-xs font-mono font-semibold ${PRIORITY_STYLES[task.priority] || ""}`}
        >
          {task.priority}
        </span>
      </td>
      <td className="py-3 pr-3 font-mono text-xs whitespace-nowrap">{task.id}</td>
      <td className="py-3 pr-3 text-sm max-w-md">{task.task}</td>
      <td className="py-3 pr-3 text-xs text-[var(--muted)] whitespace-nowrap">{task.assignee}</td>
      <td className="py-3 pr-3">
        <StatusBadge status={task.status} />
      </td>
      <td className="py-3 pr-3 text-xs font-mono text-[var(--muted)] whitespace-nowrap">
        {task.deadline}
      </td>
      <td className="py-3 text-xs">
        {evidence && isLink ? (
          evidence.startsWith("[") ? (
            <span className="text-[var(--accent)]">{evidence}</span>
          ) : (
            <Link href={evidence} className="text-[var(--accent)] hover:underline font-mono">
              {evidence.replace("/docs/", "")}
            </Link>
          )
        ) : evidence ? (
          <span className="text-[var(--muted)]">{evidence}</span>
        ) : (
          <span className="text-[var(--muted)]">—</span>
        )}
      </td>
    </tr>
  );
}

const OPS_SECTIONS = [
  { id: "tong-quan", label: "Tổng quan" },
  { id: "phong-ban", label: "5 phòng ban" },
  { id: "huong-dan", label: "Hướng dẫn" },
] as const;

export default function OperationsPage() {
  const deptTasks = getAllDepartmentTasks();
  const allTasks = deptTasks.flatMap((d) => d.tasks);
  const statusTotals = countTasksByStatus(allTasks);
  const priorityTotals = countTasksByPriority(allTasks);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Bảng vận hành công ty</h1>
        <p className="text-[var(--muted)] max-w-3xl leading-relaxed">
          Việc từ <strong>khai vấn tháng</strong> được đẩy thẳng xuống{" "}
          <strong>5 phòng ban</strong>. Mỗi phòng có TODO riêng — Leader theo dõi tiến độ tại đây.
        </p>
        <div className="flex gap-3 flex-wrap mt-5">
          <Link
            href="/kim"
            className="text-sm px-4 py-2 rounded-full bg-[var(--accent-soft)] border border-[var(--accent)]/30 text-[var(--accent)] font-semibold hover:bg-white"
          >
            → Thư ký Kim — người thật tự làm (không AI)
          </Link>
          <Link
            href="/docs/05-clarifications/what-is-kim"
            className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
          >
            Kim là gì?
          </Link>
          <Link
            href="/docs/03-departments/00-org-model"
            className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
          >
            Mô hình tổ chức
          </Link>
          <Link
            href="/roadmap"
            className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
          >
            Lộ trình tháng 7
          </Link>
          <Link
            href="/departments"
            className="text-sm px-4 py-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
          >
            5 phòng ban
          </Link>
        </div>
      </header>

      <Phase001Banner compact />
      <StickyPageNav sections={OPS_SECTIONS} />

      {/* Org snapshot */}
      <section id="tong-quan" className="scroll-mt-32 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Giám đốc" value="1" note="Tổng GD (kiêm Chiến lược)" />
          <StatCard label="Phòng ban" value="5" note="V1–V7 map đủ" />
          <StatCard label="Sales" value="2" note="BD Manager + Exec" />
          <StatCard label="Task P0" value={String(priorityTotals.P0)} note={`${statusTotals.done} done / ${statusTotals.todo} todo`} />
        </div>

        <div className="grid md:grid-cols-5 gap-3">
        {deptTasks.map((dept) => {
          const deptMeta = DEPARTMENTS.find((d) => d.id === dept.deptId);
          const counts = countTasksByStatus(dept.tasks);
          const p0 = dept.tasks.filter((t) => t.priority === "P0").length;
          const p0Done = dept.tasks.filter((t) => t.priority === "P0" && t.status === "done").length;

          return (
            <a
              key={dept.deptId}
              href={`#${dept.deptId}`}
              className={`block p-4 rounded-lg border bg-white ${deptMeta?.color || ""} hover:shadow-sm transition`}
            >
              <div className="text-xs text-[var(--muted)] mb-1">{deptMeta?.vLayer}</div>
              <div className="font-semibold text-sm mb-2 leading-tight">{dept.deptName}</div>
              <div className="text-2xl font-bold">
                {p0Done}/{p0}
                <span className="text-xs font-normal text-[var(--muted)] ml-1">P0</span>
              </div>
              <div className="text-xs text-[var(--muted)] mt-1">
                {counts.done} done · {counts.todo} todo
              </div>
            </a>
          );
        })}
        </div>
      </section>

      {/* Task tables per department */}
      <div id="phong-ban" className="scroll-mt-32">
      {deptTasks.map((dept) => {
        const deptMeta = DEPARTMENTS.find((d) => d.id === dept.deptId);
        if (dept.tasks.length === 0) return null;

        return (
          <section key={dept.deptId} id={dept.deptId} className="mb-12 scroll-mt-24">
            <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
              <div>
                <h2 className="text-xl font-bold">{dept.deptName}</h2>
                <div className="text-sm text-[var(--muted)]">{deptMeta?.vLayer}</div>
              </div>
              <Link
                href={`/docs/${dept.todoSlug}`}
                className="text-sm text-[var(--accent)] hover:underline"
              >
                Sửa TODO →
              </Link>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-white">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] text-xs text-[var(--muted)] bg-gray-50">
                    <th className="py-2 px-3 font-medium">P</th>
                    <th className="py-2 px-3 font-medium">ID</th>
                    <th className="py-2 px-3 font-medium">Task</th>
                    <th className="py-2 px-3 font-medium">Assignee</th>
                    <th className="py-2 px-3 font-medium">Status</th>
                    <th className="py-2 px-3 font-medium">Deadline</th>
                    <th className="py-2 px-3 font-medium">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {dept.tasks.map((task) => (
                    <TaskRow key={task.id} task={task} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      </div>

      <RelatedPagesGrid links={PAGE_RELATED["/operations"]} />

      <section id="huong-dan" className="scroll-mt-32 p-6 rounded-lg border border-[var(--border)] bg-white">
        <h2 className="font-semibold mb-2">Cách cập nhật</h2>
        <ol className="text-sm text-[var(--muted)] space-y-1 list-decimal list-inside">
          <li>Leader chốt mục tiêu tháng → ghi vào <code className="font-mono text-xs bg-gray-100 px-1 rounded">02-monthly-roadmap/</code></li>
          <li>Bóc task → sửa <code className="font-mono text-xs bg-gray-100 px-1 rounded">03-departments/&lt;phong&gt;/TODO.md</code></li>
          <li>Gán Assignee, cập nhật Status + Evidence khi xong</li>
          <li>Commit + push → trang này tự cập nhật sau deploy</li>
        </ol>
      </section>
    </div>
  );
}

function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="p-4 rounded-lg border border-[var(--border)] bg-white">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm font-medium mt-1">{label}</div>
      <div className="text-xs text-[var(--muted)] mt-0.5">{note}</div>
    </div>
  );
}
