/**
 * Nguồn dữ liệu trang /services — đồng bộ với:
 * - 03-departments/04-san-pham/service-catalog-v1.md
 * - 03-departments/04-san-pham/fdi-lifecycle-full-map.md
 */

export type ServiceMode = "self" | "partner" | "hybrid";

export type LifecyclePhase = {
  id: string;
  short: string;
  name: string;
  nameZh: string;
  duration: string;
  mindset: string;
  color: string;
  border: string;
  docSlug: string[];
};

export type ServiceItem = {
  id: string;
  name: string;
  nameZh?: string;
  phases: string[];
  tier: "entry" | "policy" | "logistics" | "hub" | "exit";
  tierLabel: string;
  when: string;
  deliverable: string;
  priceUsd: string;
  duration: string;
  mode: ServiceMode;
  modeLabel: string;
  docSlug?: string[];
  featured?: boolean;
};

export type ServiceFamily = {
  id: string;
  title: string;
  summary: string;
  serviceIds: string[];
};

export const LIFECYCLE_PHASES: LifecyclePhase[] = [
  {
    id: "G0",
    short: "Bước 0",
    name: "Quyết định rời Trung Quốc",
    nameZh: "决定离开中国",
    duration: "1–6 tháng",
    mindset: "Có nên sang Việt Nam? Chiến lược đa quốc gia (China+1) đi đâu?",
    color: "bg-stone-100 text-stone-800",
    border: "border-stone-300",
    docSlug: ["03-departments", "04-san-pham", "fdi-lifecycle-full-map"],
  },
  {
    id: "G1",
    short: "Bước 1",
    name: "Tiếp cận & tìm hiểu Việt Nam",
    nameZh: "了解越南",
    duration: "2–8 tuần",
    mindset: "VN có phù hợp ngành tôi không?",
    color: "bg-slate-100 text-slate-800",
    border: "border-slate-300",
    docSlug: ["03-departments", "04-san-pham", "fdi-lifecycle-full-map"],
  },
  {
    id: "G2",
    short: "Bước 2",
    name: "Khảo sát & chọn địa điểm",
    nameZh: "选址考察",
    duration: "1–3 tháng",
    mindset: "Thái Nguyên hay Hải Phòng? Giá đất?",
    color: "bg-emerald-100 text-emerald-900",
    border: "border-emerald-400",
    docSlug: ["03-departments", "04-san-pham", "package-a1-deliverable"],
  },
  {
    id: "G3",
    short: "Bước 3",
    name: "Cam kết & thành lập pháp nhân",
    nameZh: "投资承诺与公司设立",
    duration: "2–4 tháng",
    mindset: "Giấy chứng nhận đầu tư (IRC), công ty, con dấu?",
    color: "bg-teal-100 text-teal-900",
    border: "border-teal-400",
    docSlug: ["03-departments", "02-phap-ly", "ctcp-ho-so-checklist"],
  },
  {
    id: "G4",
    short: "Bước 4",
    name: "Thiết lập nhà máy",
    nameZh: "建厂准备",
    duration: "6–18 tháng",
    mindset: "Đất, xây, máy, tuyển người?",
    color: "bg-cyan-100 text-cyan-900",
    border: "border-cyan-400",
    docSlug: ["07-operations", "sop-b1-on-site"],
  },
  {
    id: "G5",
    short: "Bước 5",
    name: "Vận hành sản xuất",
    nameZh: "生产经营",
    duration: "3–15+ năm",
    mindset: "Nhập nguyên liệu, sản xuất, xuất khẩu, thuế?",
    color: "bg-amber-100 text-amber-900",
    border: "border-amber-400",
    docSlug: ["03-departments", "04-san-pham", "factory-operations-playbook-vn"],
  },
  {
    id: "G6",
    short: "Bước 6",
    name: "Mở rộng quy mô",
    nameZh: "扩大规模",
    duration: "Liên tục",
    mindset: "Thêm line, thêm vốn, tỉnh thứ 2?",
    color: "bg-violet-100 text-violet-900",
    border: "border-violet-400",
    docSlug: ["03-departments", "04-san-pham", "product-bundles"],
  },
  {
    id: "G7",
    short: "Bước 7",
    name: "Di dời sang tỉnh khác",
    nameZh: "省内迁移",
    duration: "6–24 tháng",
    mindset: "Chuyển nhà máy sang tỉnh khác trong Việt Nam?",
    color: "bg-orange-100 text-orange-900",
    border: "border-orange-400",
    docSlug: ["04-research", "2026-07", "legal-g7-g8-relocation-exit"],
  },
  {
    id: "G8",
    short: "Bước 8",
    name: "Thoái vốn / về Trung Quốc",
    nameZh: "撤资回国",
    duration: "12–36 tháng",
    mindset: "Đóng NM, máy về TQ, giải thể?",
    color: "bg-rose-100 text-rose-900",
    border: "border-rose-400",
    docSlug: ["04-research", "2026-07", "legal-g7-g8-relocation-exit"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "A0",
    name: "Tư vấn sơ bộ",
    nameZh: "免费咨询",
    phases: ["G0", "G1"],
    tier: "entry",
    tierLabel: "Tiếp cận",
    when: "Lead mới, chưa chắc vào Việt Nam",
    deliverable: "Cuộc gọi 30 phút + checklist PDF 10 mục",
    priceUsd: "Miễn phí",
    duration: "1 tuần",
    mode: "self",
    modeLabel: "LONGTV",
    featured: true,
  },
  {
    id: "A1",
    name: "Báo cáo nghiên cứu bàn (desk research)",
    nameZh: "投资考察报告",
    phases: ["G1", "G2", "G6", "G7"],
    tier: "policy",
    tierLabel: "Chính sách & địa điểm",
    when: "Chưa chọn tỉnh hoặc cần so sánh Thái Nguyên / Hải Phòng",
    deliverable: "Báo cáo PDF 15–20 trang + 10 slide + buổi trình bày 60 phút",
    priceUsd: "2.500 – 4.000",
    duration: "2–3 tuần",
    mode: "self",
    modeLabel: "LONGTV",
    docSlug: ["03-departments", "04-san-pham", "package-a1-deliverable"],
    featured: true,
  },
  {
    id: "H1",
    name: "Bản tin chính sách",
    phases: ["G0", "G1", "G5", "G6"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Cần cập nhật nghị định tỉnh, xu hướng đầu tư nước ngoài (FDI)",
    deliverable: "Bản tin tháng, tóm tắt chính sách",
    priceUsd: "Trong gói thuê ngoài (retainer) / miễn phí cho khách tiềm năng",
    duration: "Hàng tháng",
    mode: "self",
    modeLabel: "LONGTV",
  },
  {
    id: "A2",
    name: "Làm việc Sở & xin ưu đãi",
    nameZh: "政策申请与政府对接",
    phases: ["G2", "G3"],
    tier: "policy",
    tierLabel: "Chính sách & địa điểm",
    when: "Đã chọn tỉnh, cần ưu đãi & lộ trình giấy chứng nhận đầu tư (IRC)",
    deliverable: "Biên bản làm việc Sở / khu công nghiệp + checklist hồ sơ",
    priceUsd: "4.000 – 6.000",
    duration: "1–3 tháng",
    mode: "hybrid",
    modeLabel: "LONGTV + luật",
    docSlug: ["04-research", "2026-07", "provincial-incentives"],
  },
  {
    id: "B1",
    name: "Khảo sát hiện trường & khởi động hải quan",
    nameZh: "实地考察与海关入门",
    phases: ["G2", "G4", "G5", "G7", "G8"],
    tier: "logistics",
    tierLabel: "Hậu cần & hải quan (logistics)",
    when: "Cần gặp Sở / khu công nghiệp hoặc thiết lập xuất nhập khẩu (import-export)",
    deliverable: "2 ngày khảo sát hiện trường (on-site) + báo cáo bổ sung + quy trình xuất nhập khẩu",
    priceUsd: "8.000 – 12.000 + chi phí đi lại",
    duration: "4–6 tuần",
    mode: "self",
    modeLabel: "LONGTV",
    docSlug: ["07-operations", "sop-b1-on-site"],
    featured: true,
  },
  {
    id: "DD-01",
    name: "Thẩm định đất & đối tác (due diligence)",
    phases: ["G2"],
    tier: "policy",
    tierLabel: "Chính sách & địa điểm",
    when: "Trước khi ký thuê đất hoặc thỏa thuận hợp tác (MOU)",
    deliverable: "Báo cáo pháp lý quyền sử dụng đất",
    priceUsd: "3.000 – 8.000",
    duration: "2–4 tuần",
    mode: "partner",
    modeLabel: "Luật sư đối tác",
  },
  {
    id: "B2",
    name: "Thành lập pháp nhân & giấy đầu tư (IRC)",
    nameZh: "公司设立与投资执照",
    phases: ["G3", "G4", "G6", "G7"],
    tier: "policy",
    tierLabel: "Chính sách & địa điểm",
    when: "Cam kết đầu tư, cần công ty cổ phần / doanh nghiệp tại Việt Nam",
    deliverable:
      "Giấy chứng nhận đầu tư (IRC), giấy đăng ký doanh nghiệp (ERC), mã số thuế, con dấu — nhà máy sẵn sàng vận hành",
    priceUsd: "6.000 – 10.000",
    duration: "6–12 tuần",
    mode: "hybrid",
    modeLabel: "Luật + PM LONGTV",
    docSlug: ["03-departments", "02-phap-ly", "ctcp-ho-so-checklist"],
    featured: true,
  },
  {
    id: "A3-PM",
    name: "Quản lý dự án thiết lập nhà máy (PM)",
    nameZh: "建厂项目管理",
    phases: ["G4"],
    tier: "policy",
    tierLabel: "Chính sách & địa điểm",
    when: "Cần một đầu mối điều phối toàn bộ giai đoạn setup",
    deliverable: "Lộ trình tổng + checklist 50 hạng mục thiết lập nhà máy",
    priceUsd: "15.000 – 30.000",
    duration: "6 tháng",
    mode: "hybrid",
    modeLabel: "LONGTV quản lý dự án",
  },
  {
    id: "ENV-01",
    name: "Môi trường & phòng cháy chữa cháy (PCCC)",
    phases: ["G4"],
    tier: "policy",
    tierLabel: "Chính sách & địa điểm",
    when: "Ngành cần đánh giá tác động môi trường (ĐTM), giấy phép môi trường",
    deliverable: "ĐTM, giấy phép môi trường (tùy ngành)",
    priceUsd: "5.000 – 20.000",
    duration: "2–6 tháng",
    mode: "partner",
    modeLabel: "Tư vấn môi trường",
  },
  {
    id: "HR-01",
    name: "Tuyển dụng khởi điểm",
    phases: ["G4"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Nhà máy cần 20–100 lao động đầu tiên",
    deliverable: "Tuyển dụng + mẫu hợp đồng lao động",
    priceUsd: "Theo đầu người / dự án",
    duration: "1–2 tháng",
    mode: "partner",
    modeLabel: "Đối tác nhân sự",
  },
  {
    id: "B1-ext",
    name: "Nhập thiết bị / dây chuyền từ Trung Quốc",
    phases: ["G4"],
    tier: "logistics",
    tierLabel: "Hậu cần & hải quan (logistics)",
    when: "Máy móc từ Trung Quốc vào Việt Nam",
    deliverable: "Mã hàng hóa (HS code) + tờ khai nhập + tạm nhập",
    priceUsd: "2.000 – 5.000 / lô",
    duration: "Theo lô",
    mode: "self",
    modeLabel: "LONGTV + Oz",
  },
  {
    id: "B3",
    name: "Dịch vụ thuê ngoài chuỗi nhập–sản xuất–xuất (retainer)",
    nameZh: "进出口生产顾问",
    phases: ["G5"],
    tier: "logistics",
    tierLabel: "Hậu cần & hải quan (logistics)",
    when: "Nhà máy đang chạy, từ 10 tờ khai hải quan / tháng",
    deliverable: "Quản lý xuất nhập khẩu + đối soát định mức nguyên vật liệu (BOM) + báo cáo tháng",
    priceUsd: "2.000 – 5.000 / tháng",
    duration: "6–12 tháng",
    mode: "hybrid",
    modeLabel: "LONGTV + đại lý vận tải (forwarder)",
    docSlug: ["03-departments", "04-san-pham", "factory-operations-playbook-vn"],
    featured: true,
  },
  {
    id: "B2-log",
    name: "Gói hậu cần & vận chuyển (logistics pack)",
    nameZh: "物流方案",
    phases: ["G5"],
    tier: "logistics",
    tierLabel: "Hậu cần & hải quan (logistics)",
    when: "Hàng Trung Quốc → cảng Hải Phòng → khu công nghiệp",
    deliverable: "Báo giá 2–3 tuyến + quy trình giao nhận (SOP)",
    priceUsd: "1.500 – 3.000 + phí vận chuyển",
    duration: "Theo tuyến",
    mode: "hybrid",
    modeLabel: "Điều phối + đại lý vận tải (forwarder)",
  },
  {
    id: "H3",
    name: "Kế toán & thuế nhà máy",
    nameZh: "会计税务",
    phases: ["G4", "G5", "G8"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Vận hành & quyết toán thuế doanh nghiệp (CIT) / giá trị gia tăng (VAT)",
    deliverable: "Sổ sách, báo cáo tài chính, quyết toán thuế",
    priceUsd: "800 – 2.500 / tháng",
    duration: "Liên tục",
    mode: "partner",
    modeLabel: "Kế toán đối tác + LONGTV",
  },
  {
    id: "HR-02",
    name: "Tính lương & bảo hiểm xã hội (BHXH)",
    phases: ["G5"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Trả lương, BHXH hàng tháng",
    deliverable: "Tính lương + báo cáo lao động",
    priceUsd: "500 – 1.500 / tháng",
    duration: "Liên tục",
    mode: "partner",
    modeLabel: "HR đối tác",
  },
  {
    id: "H2",
    name: "Tư vấn pháp lý & rà soát hợp đồng",
    phases: ["G2", "G3", "G5", "G7", "G8"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Rà soát hợp đồng thuê đất, cam kết bảo mật (NDA), thỏa thuận hợp tác (MOU)",
    deliverable: "Bản ghi nhớ pháp lý, rà soát hợp đồng",
    priceUsd: "Theo phạm vi",
    duration: "Theo từng lần",
    mode: "hybrid",
    modeLabel: "LONGTV + luật",
    docSlug: ["03-departments", "02-phap-ly", "templates", "00-index"],
  },
  {
    id: "H4",
    name: "Kết nối khu công nghiệp, Sở & thỏa thuận (MOU)",
    phases: ["G2", "G6", "G7"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Cần đầu mối chính quyền / khu công nghiệp",
    deliverable: "Giới thiệu, thỏa thuận hợp tác (MOU), danh sách đối tác",
    priceUsd: "Trong gói / giới thiệu",
    duration: "Liên tục",
    mode: "self",
    modeLabel: "LONGTV",
  },
  {
    id: "C1",
    name: "Cố vấn tháng",
    phases: ["G5", "G6"],
    tier: "hub",
    tierLabel: "Trung tâm kết nối (hub)",
    when: "Cần 4 giờ tư vấn chiến lược / tháng",
    deliverable: "4 giờ tư vấn + hỗ trợ email",
    priceUsd: "1.500 / tháng",
    duration: "Liên tục",
    mode: "self",
    modeLabel: "LONGTV",
  },
  {
    id: "G7-01",
    name: "Đánh giá rủi ro chuyển tỉnh",
    nameZh: "迁址风险评估",
    phases: ["G7"],
    tier: "exit",
    tierLabel: "Di dời & thoái vốn",
    when: "Nhà máy muốn chuyển sang tỉnh khác trong Việt Nam",
    deliverable: "Bản ghi nhớ: phạt đất, mất ưu đãi, lộ trình",
    priceUsd: "3.000 – 5.000",
    duration: "2–3 tuần",
    mode: "self",
    modeLabel: "LONGTV",
    docSlug: ["04-research", "2026-07", "legal-g7-g8-relocation-exit"],
  },
  {
    id: "G7-Pack",
    name: "Gói di dời tỉnh (đầy đủ)",
    nameZh: "省内迁移全套",
    phases: ["G7"],
    tier: "exit",
    tierLabel: "Di dời & thoái vốn",
    when: "Thực hiện chuyển nhà máy sang tỉnh mới",
    deliverable: "Đánh giá rủi ro + báo cáo tỉnh mới + quản lý dự án + điều chỉnh giấy đầu tư (IRC)",
    priceUsd: "12.000 – 25.000",
    duration: "6–18 tháng",
    mode: "hybrid",
    modeLabel: "LONGTV quản lý dự án",
    featured: true,
  },
  {
    id: "G8-01",
    name: "Kế hoạch thoái vốn",
    nameZh: "撤资规划",
    phases: ["G8"],
    tier: "exit",
    tierLabel: "Di dời & thoái vốn",
    when: "Quyết định đóng nhà máy / về Trung Quốc",
    deliverable: "Lộ trình 12–36 tháng: thuế, lao động, đất, máy móc",
    priceUsd: "5.000 – 8.000",
    duration: "2–4 tuần",
    mode: "hybrid",
    modeLabel: "Pháp lý + kế toán đối tác",
  },
  {
    id: "G8-Pack",
    name: "Gói giải thể & về Trung Quốc (đầy đủ)",
    nameZh: "清算回国全套",
    phases: ["G8"],
    tier: "exit",
    tierLabel: "Di dời & thoái vốn",
    when: "Thực hiện giải thể, xuất máy móc về Trung Quốc",
    deliverable: "G8-01 + quyết toán thuế + giải thể + xuất máy",
    priceUsd: "15.000 – 40.000+",
    duration: "12–36 tháng",
    mode: "hybrid",
    modeLabel: "Luật + LONGTV",
    docSlug: ["04-research", "2026-07", "legal-g7-g8-relocation-exit"],
    featured: true,
  },
];

export const TYPICAL_JOURNEY = [
  { phase: "G0–G1", services: ["A0", "A1", "H1"] },
  { phase: "G2", services: ["A1", "A2", "B1", "DD-01"] },
  { phase: "G3–G4", services: ["B2", "A3-PM", "B1-ext", "H3"] },
  { phase: "G5", services: ["B3", "B2-log", "H3", "HR-02", "C1"] },
  { phase: "G6", services: ["A1", "B2", "A3-PM"] },
  { phase: "G7", services: ["G7-Pack"] },
  { phase: "G8", services: ["G8-Pack"] },
];

export const COMPANY_POSITIONING = {
  tagline:
    "Đồng hành nhà máy đầu tư nước ngoài (FDI) từ Trung Quốc — từ lúc sang Việt Nam đến khi mở rộng, di dời hoặc về nước",
  provinces: "Thái Nguyên & Hải Phòng",
  logistics: "Hậu cần & hải quan miền Bắc (logistics & customs)",
  hub: "Pháp lý · Kế toán · Kết nối khu công nghiệp & cơ quan",
};

export const SERVICE_FAMILIES: ServiceFamily[] = [
  {
    id: "logistics",
    title: "Nhóm hậu cần & hải quan (logistics & customs)",
    summary:
      "Chuỗi dịch vụ từ khai báo hải quan, phân loại mã hàng (HS code), nhập máy móc, điều phối đại lý vận tải (forwarder), đến dịch vụ thuê ngoài theo tháng (retainer) cho chuỗi nhập–sản xuất–xuất.",
    serviceIds: ["B1", "B1-ext", "B2-log", "B3"],
  },
];

export function getServicesByPhase(phaseId: string): ServiceItem[] {
  return SERVICES.filter((s) => s.phases.includes(phaseId));
}

export function getServiceById(id: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.id === id);
}

export const TIER_STYLES: Record<ServiceItem["tier"], { label: string; className: string }> = {
  entry: { label: "Tiếp cận", className: "bg-slate-100 text-slate-700" },
  policy: { label: "Chính sách & địa điểm", className: "bg-emerald-100 text-emerald-800" },
  logistics: { label: "Hậu cần & hải quan", className: "bg-amber-100 text-amber-900" },
  hub: { label: "Trung tâm kết nối (hub)", className: "bg-indigo-100 text-indigo-800" },
  exit: { label: "Di dời & thoái vốn", className: "bg-rose-100 text-rose-800" },
};
