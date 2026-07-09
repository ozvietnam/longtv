import fs from "fs";
import path from "path";
import { getAllDocs } from "./docs";
import type { ArticleBacklogItem, LegalSource, LibraryArticle, LibraryShelf } from "./library-shared";
import sourceRegistry from "../../data/fdi-legal/source-registry.json";

export type { ArticleBacklogItem, LegalSource, LibraryArticle, LibraryShelf } from "./library-shared";
export { COLLECTION_STEPS, topicLabel } from "./library-shared";

const SHELF_DEFS: Omit<LibraryShelf, "articles">[] = [
  {
    id: "lifecycle",
    title: "Vòng đời đầu tư (9 giai đoạn)",
    description: "Hành trình nhà máy Trung Quốc từ quyết định sang Việt Nam đến vận hành và thoái vốn.",
    icon: "G",
  },
  {
    id: "market",
    title: "Thị trường & số liệu",
    description: "Đầu tư nước ngoài Trung Quốc → Việt Nam, Thái Nguyên, Hải Phòng — số liệu và phân tích bàn.",
    icon: "📊",
  },
  {
    id: "site",
    title: "Chọn địa điểm & chính sách",
    description: "Thái Nguyên vs Hải Phòng, khu công nghiệp, ưu đãi tỉnh, kịch bản gọi Sở.",
    icon: "📍",
  },
  {
    id: "legal",
    title: "Pháp lý & thành lập",
    description: "Giấy đầu tư (IRC), giấy doanh nghiệp (ERC), pháp nhân, checklist hồ sơ, mô hình trọn gói.",
    icon: "⚖",
  },
  {
    id: "operations",
    title: "Vận hành nhà máy",
    description: "Hải quan, sản xuất, hậu cần — sổ tay vận hành giai đoạn sản xuất.",
    icon: "🏭",
  },
  {
    id: "investor",
    title: "Đầu tư & chiến lược",
    description: "Bộ hồ sơ nhà đầu tư, khung 5 bước, mô hình dịch vụ tổng hợp.",
    icon: "📈",
  },
];

const SHELF_SLUGS: Record<string, { slug: string; phase?: string; status?: LibraryArticle["status"] }[]> = {
  lifecycle: [
    { slug: "03-departments/04-san-pham/fdi-lifecycle-full-map", phase: "G0–G8" },
    { slug: "03-departments/04-san-pham/fdi-journey-service-map", phase: "G0–G6" },
    { slug: "03-departments/04-san-pham/service-catalog-v1", phase: "G0–G8" },
    { slug: "03-departments/04-san-pham/services-page-source" },
  ],
  market: [
    { slug: "04-research/2026-07/fdi-data", phase: "G1", status: "draft" },
    { slug: "04-research/2026-07/fdi-data-deep-dive", phase: "G1", status: "verified" },
    { slug: "06-phases/00-1-market-memo", phase: "G1" },
    { slug: "04-research/2026-07/competitors", phase: "G1" },
  ],
  site: [
    { slug: "04-research/2026-07/why-tn-hp", phase: "G2" },
    { slug: "04-research/2026-07/kcn-desk-research", phase: "G2" },
    { slug: "04-research/2026-07/thai-nguyen-fdi-policy", phase: "G2", status: "draft" },
    { slug: "04-research/2026-07/hai-phong-fdi-policy", phase: "G2" },
    { slug: "04-research/2026-07/provincial-incentives", phase: "G2" },
    { slug: "03-departments/04-san-pham/package-a1-deliverable", phase: "G2" },
    { slug: "03-departments/01-chien-luoc/field-call-scripts", phase: "G2" },
  ],
  legal: [
    { slug: "04-research/2026-07/legal-licenses", phase: "G3" },
    { slug: "03-departments/02-phap-ly/ctcp-ho-so-checklist", phase: "G3" },
    { slug: "03-departments/02-phap-ly/ctcp-timeline", phase: "G3" },
    { slug: "03-departments/02-phap-ly/all-in-one-licensed-entities", phase: "G3" },
    { slug: "04-research/2026-07/legal-g7-g8-relocation-exit", phase: "G7–G8" },
    { slug: "04-research/2026-07/legal-entity-comparison" },
  ],
  operations: [
    { slug: "03-departments/04-san-pham/factory-operations-playbook-vn", phase: "G5" },
    { slug: "07-operations/all-in-one-operational-manual", phase: "G5" },
  ],
  investor: [
    { slug: "06-phases/investor-pack/00-index" },
    { slug: "06-phases/investor-pack/01-executive-summary" },
    { slug: "06-phases/investor-pack/03-investment-project-5-steps" },
    { slug: "03-departments/01-chien-luoc/all-in-one-service-complex" },
    { slug: "03-departments/01-chien-luoc/hp-tn-operational-matrix" },
  ],
};

function resolveShelfArticles(): LibraryShelf[] {
  const docs = getAllDocs();
  const bySlug = new Map(docs.map((d) => [d.meta.slug.join("/"), d]));

  return SHELF_DEFS.map((shelf) => {
    const entries = SHELF_SLUGS[shelf.id] ?? [];
    const articles: LibraryArticle[] = [];

    for (const entry of entries) {
      const doc = bySlug.get(entry.slug);
      if (!doc) continue;
      articles.push({
        title: doc.meta.title,
        description: doc.meta.description,
        docSlug: entry.slug,
        phase: entry.phase,
        status: entry.status ?? "published",
      });
    }

    return { ...shelf, articles };
  }).filter((s) => s.articles.length > 0);
}

/** Parse bảng backlog từ article-backlog.md */
export function parseArticleBacklog(content: string): ArticleBacklogItem[] {
  const items: ArticleBacklogItem[] = [];
  let section = "";
  let inTable = false;

  for (const line of content.split("\n")) {
    if (line.startsWith("## ")) {
      section = line.replace(/^##\s+/, "").trim();
      inTable = false;
      continue;
    }
    if (line.includes("| P | ID | Bài viết |")) {
      inTable = true;
      continue;
    }
    if (!inTable) continue;
    if (!line.startsWith("| P")) {
      if (line.startsWith("##")) inTable = false;
      continue;
    }
    if (line.includes("|---|")) continue;

    const cells = line.split("|").map((s) => s.trim());
    if (cells.length < 8) continue;
    const priority = cells[1];
    if (!/^P\d$/.test(priority)) continue;

    items.push({
      priority,
      id: cells[2],
      title: cells[3],
      question: cells[4],
      sources: cells[5],
      status: cells[6],
      section,
    });
  }

  return items;
}

function readArticleBacklogFile(): string {
  const filePath = path.join(process.cwd(), "data", "fdi-legal", "article-backlog.md");
  return fs.readFileSync(filePath, "utf-8");
}

export function getLegalSources(): LegalSource[] {
  return sourceRegistry.sources as LegalSource[];
}

export function getArticleBacklog(): ArticleBacklogItem[] {
  return parseArticleBacklog(readArticleBacklogFile());
}

export function getLibraryShelves(): LibraryShelf[] {
  return resolveShelfArticles();
}

export function getLibraryStats() {
  const shelves = getLibraryShelves();
  const backlog = getArticleBacklog();
  const sources = getLegalSources();

  return {
    publishedCount: shelves.reduce((n, s) => n + s.articles.length, 0),
    backlogCount: backlog.length,
    backlogTodo: backlog.filter((b) => b.status === "todo").length,
    sourceCount: sources.length,
    sourceP0: sources.filter((s) => s.priority === "P0").length,
    lastUpdated: sourceRegistry.last_updated,
  };
}
