import Link from "next/link";
import { getAllDocs } from "@/lib/docs";

export const metadata = { title: "Phòng ban · LongTV" };

const DEPARTMENTS = [
  {
    id: "01-chien-luoc",
    name: "Chiến lược & Rủi ro",
    vLayer: "V1, V7",
    color: "border-blue-200",
  },
  {
    id: "02-phap-ly",
    name: "Pháp lý & Chính sách",
    vLayer: "V2",
    color: "border-purple-200",
  },
  {
    id: "03-kinh-doanh",
    name: "Kinh doanh & GTM",
    vLayer: "V3",
    color: "border-green-200",
  },
  {
    id: "04-san-pham",
    name: "Sản phẩm dịch vụ",
    vLayer: "V4",
    color: "border-orange-200",
  },
  {
    id: "05-van-hanh-tc",
    name: "Vận hành & Tài chính",
    vLayer: "V5, V6",
    color: "border-gray-300",
  },
];

function countP0Tasks(content: string): number {
  const lines = content.split("\n");
  let inTable = false;
  let count = 0;
  for (const line of lines) {
    if (line.startsWith("| P |")) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith("| P0 |")) count++;
    if (inTable && line.startsWith("## ") && !line.includes("Tháng")) break;
  }
  return count;
}

export default function DepartmentsIndex() {
  const docs = getAllDocs();
  const todoDocs = docs.filter((d) => d.meta.slug.join("/").endsWith("/TODO"));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">5 phòng ban thực thi</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          Mục tiêu tháng được <strong>chia thẳng</strong> cho từng phòng. Mỗi phòng có bảng TODO ưu tiên P0/P1/P2 —
          lắp nhân sự vào là chạy ngay.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEPARTMENTS.map((dept) => {
          const todoDoc = todoDocs.find((d) => d.meta.slug.join("/").includes(dept.id));
          const p0Count = todoDoc ? countP0Tasks(todoDoc.content) : 0;

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
                <div className="text-sm text-[var(--muted)] mb-4">
                  <span className="font-semibold text-[var(--foreground)]">{p0Count}</span> task P0 tháng 7
                </div>
              )}
              <div className="flex gap-2 flex-wrap">
                <Link
                  href={`/docs/03-departments/${dept.id}/TODO`}
                  className="text-sm px-3 py-1.5 rounded-full bg-[var(--accent)] text-white font-medium hover:opacity-90"
                >
                  Xem TODO
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
