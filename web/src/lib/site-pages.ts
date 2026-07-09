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

/** Gợi ý liên kết theo ngữ cảnh trang */
export const PAGE_RELATED: Record<string, { href: string; title: string; desc: string }[]> = {
  "/services": [
    SITE_HUBS.logistics,
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    { href: "/docs/03-departments/03-kinh-doanh/pricing-official", title: "Bảng giá chính thức", desc: "USD + VND" },
    SITE_HUBS.operations,
  ],
  "/co-dong": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.logistics,
    SITE_HUBS.hermes,
    { href: "/docs/06-phases/investor-pack/00-index", title: "Investor Pack", desc: "DT 6T/1N/2N" },
  ],
  "/operations": [
    SITE_HUBS.kim,
    SITE_HUBS.roadmap,
    SITE_HUBS.departments,
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
  ],
  "/kim": [
    SITE_HUBS.hermes,
    SITE_HUBS.operations,
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    { href: "/docs/05-clarifications/what-is-kim", title: "Kim là gì?", desc: "Định nghĩa cho team" },
  ],
  "/hermes": [
    SITE_HUBS.kim,
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.camNang,
    SITE_HUBS.operations,
  ],
  "/phases": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.hermes,
    { href: "/docs/decisions/005-phase-00-1-go", title: "QĐ #005 Go GĐ2", desc: "Chờ Leader ký" },
    SITE_HUBS.roadmap,
  ],
  "/departments": [SITE_HUBS.operations, SITE_HUBS.roadmap, SITE_HUBS.kim],
  "/roadmap": [SITE_HUBS.operations, SITE_HUBS.departments, SITE_HUBS.kim, { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc }],
  "/cam-nang": [SITE_HUBS.hermes, { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc }, SITE_HUBS.services],
  "/logistics": [
    { href: SITE_PHASE_001.href, title: SITE_PHASE_001.title, desc: SITE_PHASE_001.desc },
    SITE_HUBS.coDong,
    { href: "/docs/03-departments/05-van-hanh-tc/financial-model-3yr", title: "Financial model", desc: "Đối chiếu DT/GP logistics" },
    SITE_HUBS.services,
  ],
};

export const HOME_HUB_GROUPS = [
  {
    label: "Cổ đông & đánh giá 00-1",
    ids: ["assessment", "co-dong", "hermes"],
  },
  {
    label: "Vận hành nội bộ",
    ids: ["operations", "cam-nang"],
  },
  {
    label: "Dịch vụ & thị trường",
    ids: ["services", "logistics", "research"],
  },
] as const;
