/** Liên kết nội bộ chuẩn — dùng xuyên suốt các trang hub */

export const SITE_PHASE_001 = {
  href: "/assessment",
  eyebrow: "Giai đoạn 00-1 · Shareholder briefing",
  title: "Đánh giá tiềm năng & khả thi",
  desc: "Dashboard scorecard 38/50 · FDI xác minh · Go + Adjust",
  planHref: "/docs/06-phases/00-1-feasibility-plan",
} as const;

export const SITE_HUBS = {
  kim: { href: "/kim", title: "Thư ký Kim", desc: "Việc người thật — gọi, ký, field" },
  hermes: { href: "/hermes", title: "Hermes", desc: "Wave 1 desk · Wave 2 field" },
  operations: { href: "/operations", title: "Bảng vận hành", desc: "TODO 5 phòng ban P0/P1" },
  services: { href: "/services", title: "Dịch vụ", desc: "9 giai đoạn vòng đời FDI" },
  logistics: { href: "/logistics", title: "Hậu cần & hải quan", desc: "200 cont/tháng · bảng giá" },
  coDong: { href: "/co-dong", title: "Cổ đông", desc: "Oz · nền tảng hậu cần số" },
  camNang: { href: "/cam-nang", title: "Cẩm nang", desc: "Thư viện FDI · nguồn pháp luật" },
  phases: { href: "/phases", title: "Các pha", desc: "00-1 → Giai đoạn 2 → P1–P5" },
  roadmap: { href: "/roadmap", title: "Lộ trình tháng", desc: "Khai vấn → task phòng ban" },
  departments: { href: "/departments", title: "5 phòng ban", desc: "Profile + TODO từng phòng" },
} as const;

export type SiteNavLink = {
  href: string;
  label: string;
  highlight?: boolean;
  /** Nhóm hiển thị trên mobile menu */
  section?: "shareholder" | "business" | "ops" | "docs";
};

export const SITE_NAV_SECTIONS: Record<NonNullable<SiteNavLink["section"]>, string> = {
  shareholder: "Trình cổ đông",
  business: "Mô hình kinh doanh",
  ops: "Vận hành nội bộ",
  docs: "Tài liệu",
};

/** Header — ưu tiên mắt chủ tịch & cổ đông */
export const SITE_HEADER_NAV: SiteNavLink[] = [
  { href: "/assessment", label: "Đánh giá 00-1", highlight: true, section: "shareholder" },
  { href: "/co-dong", label: "Cổ đông", highlight: true, section: "shareholder" },
  { href: "/hermes", label: "Hermes", highlight: true, section: "shareholder" },
  { href: "/phases", label: "Các pha", section: "shareholder" },
  { href: "/services", label: "Dịch vụ", section: "business" },
  { href: "/logistics", label: "Hậu cần & hải quan", highlight: true, section: "business" },
  { href: "/operations", label: "Vận hành", section: "ops" },
  { href: "/kim", label: "Kim", section: "ops" },
  { href: "/cam-nang", label: "Cẩm nang", section: "ops" },
  { href: "/roadmap", label: "Lộ trình", section: "ops" },
  { href: "/departments", label: "Phòng ban", section: "ops" },
  { href: "/docs", label: "Tài liệu", section: "docs" },
];

/** Mobile — trang chủ trước, sau đó theo luồng cổ đông */
export const SITE_MOBILE_NAV: SiteNavLink[] = [
  { href: "/", label: "Trang chủ" },
  ...SITE_HEADER_NAV,
  { href: "/decisions", label: "Quyết định", section: "docs" },
];

export const SITE_FOOTER_LINKS: { label: string; links: { href: string; label: string; accent?: boolean }[] }[] = [
  {
    label: "Trình cổ đông",
    links: [
      { href: "/assessment", label: "Dashboard 00-1", accent: true },
      { href: "/co-dong", label: "Cổ đông & Oz", accent: true },
      { href: "/hermes", label: "Tiến độ Hermes" },
      { href: "/phases", label: "Lộ trình các pha" },
      { href: "/docs/06-phases/investor-pack/00-index", label: "Investor Pack" },
    ],
  },
  {
    label: "Mô hình kinh doanh",
    links: [
      { href: "/services", label: "Dịch vụ" },
      { href: "/logistics", label: "Hậu cần & hải quan", accent: true },
      { href: "/docs/04-research/2026-07/00-index", label: "Nghiên cứu tháng 7" },
    ],
  },
  {
    label: "Vận hành nội bộ",
    links: [
      { href: "/operations", label: "Bảng vận hành" },
      { href: "/kim", label: "Thư ký Kim" },
      { href: "/cam-nang", label: "Cẩm nang tri thức" },
      { href: "/roadmap", label: "Lộ trình tháng 7" },
    ],
  },
];

/** Lộ trình đọc gợi ý cho cổ đông — hiển thị trên trang chủ */
export const HOME_SHAREHOLDER_PATH = [
  { href: "/assessment", label: "Đánh giá 00-1", step: "1" },
  { href: "/co-dong", label: "Cổ đông", step: "2" },
  { href: "/services", label: "Dịch vụ", step: "3" },
  { href: "/logistics", label: "Hậu cần & DT", step: "4" },
  { href: "/hermes", label: "Bằng chứng nghiên cứu", step: "5" },
] as const;

/** Thẻ hub trang chủ — thứ tự trong object không quan trọng, nhóm quyết định hiển thị */
export const HOME_HUB_CARDS = {
  assessment: {
    id: "assessment",
    href: "/assessment",
    title: "Giai đoạn đánh giá tiềm năng",
    subtitle: "Dashboard 00-1 · Biểu đồ",
    desc: "Scorecard 38/50 · FDI xác minh · kết luận Go — trình cổ đông",
    accent: true,
    icon: "01",
  },
  "co-dong": {
    id: "co-dong",
    href: "/co-dong",
    title: "Cổ đông",
    subtitle: "Oz là trụ cột giai đoạn đầu",
    desc: "Năng lực GitHub · lõi HS code/XNK · nền tảng hậu cần",
    accent: true,
    icon: "OZ",
  },
  hermes: {
    id: "hermes",
    href: "/hermes",
    title: "Hermes đã làm gì?",
    subtitle: "Wave 1 xong · Wave 2 đang chờ",
    desc: "Desk research có evidence · field verify — xem trước khi duyệt",
    accent: true,
    icon: "🔬",
  },
  phases: {
    id: "phases",
    href: "/phases",
    title: "Lộ trình các pha",
    subtitle: "00-1 → Giai đoạn 2 → P1–P5",
    desc: "Pha đang chạy · đã xong · lộ trình dài hạn",
    icon: "↗",
  },
  services: {
    id: "services",
    href: "/services",
    title: "Dịch vụ công ty",
    subtitle: "9 giai đoạn vòng đời",
    desc: "Từ sang Việt Nam → vận hành → di dời / về nước",
    icon: "02",
  },
  logistics: {
    id: "logistics",
    href: "/logistics",
    title: "Hậu cần & hải quan",
    subtitle: "Mảng logistics miền Bắc",
    desc: "Khai báo hải quan · nhập máy · 200 cont/tháng · bảng giá & GP",
    accent: true,
    icon: "🚢",
  },
  research: {
    id: "research",
    href: "/docs/04-research/2026-07/00-index",
    title: "Nghiên cứu",
    subtitle: "Tháng 7/2026",
    desc: "Đối thủ · FDI · Thái Nguyên · vốn",
    icon: "04",
  },
  operations: {
    id: "operations",
    href: "/operations",
    title: "Bảng vận hành",
    subtitle: "5 phòng ban · Thư ký Kim",
    desc: "TODO P0/P1 · việc người thật (Kim) · tiến độ từng phòng",
    icon: "03",
  },
  "cam-nang": {
    id: "cam-nang",
    href: "/cam-nang",
    title: "Cẩm nang tri thức",
    subtitle: "Thư viện đầu tư nước ngoài (FDI)",
    desc: "Quy trình thu thập · bài đã có · nguồn pháp luật · backlog",
    icon: "📚",
  },
} as const;

export type HomeHubCardId = keyof typeof HOME_HUB_CARDS;

/** Gợi ý liên kết theo ngữ cảnh trang — cổ đông / chiến lược trước */
export const PAGE_RELATED: Record<string, { href: string; title: string; desc: string }[]> = {
  "/services": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.coDong,
    SITE_HUBS.logistics,
    { href: "/docs/03-departments/03-kinh-doanh/pricing-official", title: "Bảng giá chính thức", desc: "USD + VND" },
    SITE_HUBS.operations,
  ],
  "/co-dong": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.logistics,
    { href: "/docs/06-phases/investor-pack/00-index", title: "Investor Pack", desc: "DT 6T/1N/2N" },
    SITE_HUBS.hermes,
  ],
  "/operations": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.kim,
    SITE_HUBS.roadmap,
    SITE_HUBS.departments,
  ],
  "/kim": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.hermes,
    SITE_HUBS.operations,
    { href: "/docs/05-clarifications/what-is-kim", title: "Kim là gì?", desc: "Định nghĩa cho team" },
  ],
  "/hermes": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.coDong,
    SITE_HUBS.logistics,
    SITE_HUBS.camNang,
  ],
  "/phases": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.coDong,
    SITE_HUBS.hermes,
    { href: "/docs/decisions/005-phase-00-1-go", title: "QĐ #005 Go GĐ2", desc: "Chờ Leader ký" },
  ],
  "/departments": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.operations,
    SITE_HUBS.roadmap,
    SITE_HUBS.kim,
  ],
  "/roadmap": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.operations,
    SITE_HUBS.departments,
    SITE_HUBS.kim,
  ],
  "/cam-nang": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.hermes,
    SITE_HUBS.services,
    SITE_HUBS.coDong,
  ],
  "/logistics": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.coDong,
    { href: "/docs/03-departments/05-van-hanh-tc/financial-model-3yr", title: "Financial model", desc: "Đối chiếu DT/GP logistics" },
    SITE_HUBS.services,
  ],
};

export const HOME_HUB_GROUPS: {
  label: string;
  desc?: string;
  ids: HomeHubCardId[];
}[] = [
  {
    label: "Trình cổ đông & đánh giá khả thi",
    desc: "Bắt đầu từ đây nếu muốn hiểu dự án",
    ids: ["assessment", "co-dong", "hermes", "phases"],
  },
  {
    label: "Mô hình kinh doanh & thị trường",
    desc: "Dịch vụ, doanh thu, nghiên cứu",
    ids: ["services", "logistics", "research"],
  },
  {
    label: "Vận hành nội bộ",
    desc: "Dành cho team — TODO & tri thức",
    ids: ["operations", "cam-nang"],
  },
];
