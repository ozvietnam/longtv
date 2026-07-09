export type ArticleBacklogItem = {
  priority: string;
  id: string;
  title: string;
  question: string;
  sources: string;
  status: string;
  section: string;
};

export type LibraryArticle = {
  title: string;
  description?: string;
  docSlug: string;
  phase?: string;
  status: "published" | "draft" | "verified";
};

export type LibraryShelf = {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: LibraryArticle[];
};

export type LegalSource = {
  id: string;
  title: string;
  document_no: string;
  authority: string;
  type: string;
  topics: string[];
  priority: string;
  status_to_verify: string;
  source_urls: string[];
  extraction_targets: string[];
  planned_outputs: string[];
};

export const COLLECTION_STEPS = [
  {
    step: 1,
    title: "Chốt câu hỏi khách hàng",
    detail: "VD: Có thể lập công ty 100% vốn TQ sản xuất linh kiện ở Hải Phòng không?",
  },
  {
    step: 2,
    title: "Tạo source record",
    detail: "Ghi mọi văn bản liên quan vào source-registry.json — nguồn chính thống trước.",
  },
  {
    step: 3,
    title: "Trích điều khoản trọng tâm",
    detail: "Số điều/khoản, yêu cầu, điều kiện áp dụng, ngoại lệ.",
  },
  {
    step: 4,
    title: "Lập decision tree",
    detail: "IRC → M&A approval → ĐTM → giấy phép môi trường → PCCC → xây dựng.",
  },
  {
    step: 5,
    title: "Viết bài nháp",
    detail: "Theo template trong article-backlog.md; ghi cảnh báo không phải tư vấn pháp lý.",
  },
  {
    step: 6,
    title: "Review pháp lý",
    detail: "Luật sư/đối tác xác nhận trước khi đưa lên cẩm nang công khai.",
  },
  {
    step: 7,
    title: "Gắn ngày cập nhật",
    detail: "Mỗi bài có last reviewed — tránh dùng sai khi luật thay đổi.",
  },
] as const;

const TOPIC_LABELS: Record<string, string> = {
  "foreign-investment": "Đầu tư nước ngoài",
  irc: "IRC",
  erc: "ERC",
  "capital-contribution": "Góp vốn",
  "share-purchase": "Mua cổ phần",
  "market-access": "Tiếp cận thị trường",
  environment: "Môi trường",
  eia: "ĐTM",
  manufacturing: "Sản xuất",
  "industrial-zone": "KCN/KKT",
  land: "Đất đai",
};

export function topicLabel(topic: string) {
  return TOPIC_LABELS[topic] ?? topic;
}
