import Link from "next/link";
import { LibraryPageContent } from "@/components/LibraryPageContent";
import { Phase001Banner } from "@/components/page/PageChrome";
import {
  getArticleBacklog,
  getLegalSources,
  getLibraryShelves,
  getLibraryStats,
} from "@/lib/library";

export const metadata = {
  title: "Cẩm nang tri thức FDI · LongTV",
  description:
    "Thư viện tri thức FDI TQ→VN: quy trình thu thập, bài đã có, nguồn pháp luật và backlog cẩm nang pháp lý.",
};

export default function CamNangPage() {
  const shelves = getLibraryShelves();
  const sources = getLegalSources();
  const backlog = getArticleBacklog();
  const stats = getLibraryStats();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          Kho tri thức FDI
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Cẩm nang tri thức</h1>
        <p className="text-lg text-[var(--muted)] max-w-3xl leading-relaxed">
          Thu thập từng bước — nguồn pháp luật, nghiên cứu thị trường, playbook vận hành — phục vụ nhà đầu tư
          Trung Quốc dịch chuyển sản xuất về Thái Nguyên & Hải Phòng.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link
            href="/services"
            className="inline-flex items-center px-4 h-10 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:opacity-90"
          >
            Vòng đời G0–G8 →
          </Link>
          <Link
            href="/docs/data/fdi-legal/00-index"
            className="inline-flex items-center px-4 h-10 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-stone-50"
          >
            Kế hoạch data pháp lý
          </Link>
        </div>
      </header>

      <Phase001Banner compact />

      <LibraryPageContent shelves={shelves} sources={sources} backlog={backlog} stats={stats} />
    </div>
  );
}
