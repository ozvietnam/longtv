/** Số liệu Giai đoạn 00-1 — nguồn: fdi-data-deep-dive, NSO, scorecard 2026-07-09 */

export type Confidence = "verified" | "secondary" | "desk" | "pending";

export type DataPoint = {
  label: string;
  value: string;
  unit?: string;
  period: string;
  source: string;
  sourceUrl?: string;
  confidence: Confidence;
  note?: string;
};

export const CONFIDENCE_META: Record<
  Confidence,
  { label: string; short: string; className: string; dot: string }
> = {
  verified: {
    label: "Chính thức (NSO/GSO)",
    short: "🟢",
    className: "bg-emerald-100 text-emerald-900 border-emerald-200",
    dot: "bg-emerald-500",
  },
  secondary: {
    label: "Báo chí / phân tích",
    short: "🟡",
    className: "bg-amber-100 text-amber-900 border-amber-200",
    dot: "bg-amber-500",
  },
  desk: {
    label: "Ước tính desk",
    short: "🔴",
    className: "bg-orange-100 text-orange-900 border-orange-200",
    dot: "bg-orange-500",
  },
  pending: {
    label: "Chưa có — cần Sở",
    short: "⚪",
    className: "bg-slate-100 text-slate-600 border-slate-200",
    dot: "bg-slate-400",
  },
};

export const VERDICT = {
  decision: "Go + Adjust",
  scorecardTotal: 38,
  scorecardMax: 50,
  scorecardPct: 76,
  threshold: 35,
  marketScore: 8.5,
  feasibilityScore: 7.5,
  competitiveScore: 8,
  riskScore: 6.5,
  headline:
    "LONGTV có tiềm năng nếu nhắm NM Trung Quốc Tier 2–3 tại Thái Nguyên & Hải Phòng — không tranh mega-project.",
  packages: "A1 Khảo sát 2 tỉnh + B1 Hải quan starter",
  condition: "Leader ký QĐ #005 · Hermes verify Sở/KCN · chốt % cổ đông TQ",
};

export const HEADLINE_METRICS: DataPoint[] = [
  {
    label: "FDI đăng ký toàn quốc",
    value: "38,42",
    unit: "tỷ USD",
    period: "2025",
    source: "NSO / VietnamPlus",
    sourceUrl: "https://en.vietnamplus.vn/fdi-inflows-into-vietnam-exceed-38-billion-usd-in-2025-post335419.vnp",
    confidence: "verified",
  },
  {
    label: "FDI giải ngân",
    value: "27,62",
    unit: "tỷ USD",
    period: "2025 (+9%)",
    source: "NSO",
    confidence: "verified",
    note: "Cao nhất 5 năm — thị trường đang triển khai dự án",
  },
  {
    label: "Vốn mới Trung Quốc",
    value: "3,64",
    unit: "tỷ USD",
    period: "2025 · hạng 2 (21%)",
    source: "NSO",
    confidence: "verified",
  },
  {
    label: "Dự án mới Trung Quốc",
    value: "1.275",
    unit: "dự án",
    period: "2025 · #1 số lượng",
    source: "Site Location Adviser",
    confidence: "secondary",
    note: "Vốn TB ~4,1 triệu USD/dự án — phù hợp NM vừa & nhỏ",
  },
];

export const FDI_BY_COUNTRY = [
  { country: "Singapore", valueB: 4.84, pct: 27.9, confidence: "verified" as Confidence },
  { country: "Trung Quốc", valueB: 3.64, pct: 21, confidence: "verified" as Confidence, highlight: true },
  { country: "Hồng Kông", valueB: 1.73, pct: 10, confidence: "verified" as Confidence },
  { country: "Nhật Bản", valueB: 1.62, pct: 9.4, confidence: "verified" as Confidence },
  { country: "Đài Loan", valueB: 0.966, pct: 5.6, confidence: "verified" as Confidence },
  { country: "Hàn Quốc", valueB: 0.896, pct: 5.2, confidence: "verified" as Confidence },
];

export const PROVINCIAL_FDI = [
  {
    province: "Thái Nguyên",
    valueB: 5.7,
    rank: 1,
    period: "6T/2026",
    confidence: "secondary" as Confidence,
    focus: true,
    note: "Chủ yếu mega Hàn/Đài — niche TQ Tier 2–3",
  },
  {
    province: "Nghệ An",
    valueB: 2.2,
    rank: 2,
    period: "6T/2026",
    confidence: "secondary" as Confidence,
    focus: false,
  },
  {
    province: "Hải Phòng",
    valueB: 1.7,
    rank: 3,
    period: "6T/2026",
    confidence: "secondary" as Confidence,
    focus: true,
    note: "Cảng + xuất khẩu — số theo kỳ cần đối chiếu Sở",
  },
  {
    province: "TP.HCM",
    valueB: 1.4,
    rank: 4,
    period: "6T/2026",
    confidence: "secondary" as Confidence,
    focus: false,
  },
  {
    province: "Bắc Ninh",
    valueB: 0.794,
    rank: 5,
    period: "6T/2026",
    confidence: "secondary" as Confidence,
    focus: false,
    note: "Đối thủ so sánh — không mở rộng",
  },
];

export const SECTOR_MIX = [
  { label: "Sản xuất chế biến", pct: 56.5, valueB: 9.8, confidence: "verified" as Confidence },
  { label: "Các ngành khác", pct: 43.5, valueB: 7.52, confidence: "verified" as Confidence },
];

export const SCORECARD_CRITERIA = [
  { id: 1, name: "Quy mô thị trường FDI TQ→VN", score: 4, evidence: "TQ #2 vốn 3,64 tỷ USD · NSO 2025" },
  { id: 2, name: "Nhu cầu TN + HP", score: 4, evidence: "TN #1 vốn mới 6T/2026 — niche TQ Tier 2–3" },
  { id: 3, name: "Khoảng trống vs đối thủ", score: 3, evidence: "10 đối thủ map — sweet spot giá vừa + 2 tỉnh" },
  { id: 4, name: "Khách mục tiêu (persona)", score: 4, evidence: "NM TQ 50–300 CN · persona v1" },
  { id: 5, name: "Sẵn sàng trả phí", score: 3, evidence: "Pricing draft — chưa validate khách thật" },
  { id: 6, name: "Catalog ≥80% hành trình", score: 4, evidence: "~82% · catalog v1 + 9 giai đoạn" },
  { id: 7, name: "Pháp lý khả thi", score: 4, evidence: "CTCP path · mã 7020" },
  { id: 8, name: "Vốn 2 tỷ đủ 6–12 tháng", score: 5, evidence: "Burn 270–750 tr << 2 tỷ" },
  { id: 9, name: "Lợi thế CTCP + TQ", score: 3, evidence: "QĐ #003 — % cổ đông chưa điền" },
  { id: 10, name: "Rủi ro chấp nhận được", score: 4, evidence: "Plan B có · Sở/KCN quản lý được" },
];

export const VERIFIED_CONCLUSIONS = [
  {
    title: "Thị trường FDI đủ lớn và TQ là nguồn vốn then chốt",
    body: "38,42 tỷ USD đăng ký 2025; Trung Quốc 3,64 tỷ USD vốn mới (#2, 21%) — nguồn NSO.",
    confidence: "verified" as Confidence,
  },
  {
    title: "Phân khúm LONGTV khớp hành vi đầu tư TQ",
    body: "1.275 dự án mới TQ (#1 số lượng) nhưng vốn TB ~4,1 triệu USD — deal nhỏ, nhiều lô; gói A1/B1 hợp lý hơn A3 full.",
    confidence: "secondary" as Confidence,
  },
  {
    title: "Sản xuất chiếm đa số vốn FDI mới",
    body: "9,8 tỷ USD (~56,5%) vào chế biến chế tạo 2025 — đúng hướng NM + logistics G5.",
    confidence: "verified" as Confidence,
  },
  {
    title: "Thái Nguyên #1 vốn mới nhưng không đồng nghĩa nhiều NM TQ nhỏ",
    body: "Q1/2026 bị kéo bởi Samsung/Posco tỷ USD级; LONGTV nhắm NM TQ 2–50 triệu USD qua chuỗi phụ.",
    confidence: "secondary" as Confidence,
  },
  {
    title: "Hải Phòng mạnh logistics & xuất khẩu",
    body: "Cảng Lạch Huyện + KCN Nam Đình Vũ — bổ sung mảng B cho khách xuất khẩu; số liệu theo kỳ cần Sở xác nhận.",
    confidence: "secondary" as Confidence,
  },
  {
    title: "Scorecard vượt ngưỡng Go",
    body: "38/50 (≥35) — đề xuất Go + Adjust: bán A1+B1, 2 tỉnh, virtual office, chưa scale A3.",
    confidence: "verified" as Confidence,
  },
];

export const PENDING_FIELD = [
  "FDI Trung Quốc theo tỉnh (TN, HP) — chính thức từ Sở",
  "Giá đất KCN Q3/2026 (USD/m²)",
  "Số NM TQ đang vận hành tại TN/HP",
  "Willingness to pay — cần 1–2 phỏng vấn khách thật",
];

export const PILLARS = [
  {
    id: "market",
    title: "Thị trường",
    score: 4,
    status: "desk-done",
    summary: "TQ #2 vốn · deal nhỏ nhiều lô · TN+HP hợp lý",
    href: "/docs/04-research/2026-07/fdi-data-deep-dive",
  },
  {
    id: "catalog",
    title: "Catalog dịch vụ",
    score: 4,
    status: "done",
    summary: "9 giai đoạn · catalog v1 · /logistics live",
    href: "/docs/03-departments/04-san-pham/service-catalog-v1",
  },
  {
    id: "feasibility",
    title: "Khả thi triển khai",
    score: 5,
    status: "done",
    summary: "Vốn 2 tỷ >> burn · CTCP path rõ",
    href: "/docs/04-research/2026-07/startup-budget",
  },
  {
    id: "investor",
    title: "Đánh giá đầu tư",
    score: 4,
    status: "desk-done",
    summary: "Investor pack · Bear/Base/Bull · chờ cap table",
    href: "/docs/06-phases/investor-pack/00-index",
  },
];
