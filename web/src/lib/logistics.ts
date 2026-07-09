/**
 * Nội dung landing /logistics — đồng bộ với:
 * - 03-departments/04-san-pham/service-catalog-v1.md (nhóm Logistics)
 * - decisions/003-strategy-july-2026.md (mảng B)
 */

export const LOGISTICS_SERVICE_IDS = ["B1", "B1-ext", "B2-log", "B3"] as const;

export const LOGISTICS_HERO = {
  badge: "Mảng B · Logistics & hải quan",
  title: "Hải quan, vận chuyển & chuỗi XNK cho nhà máy FDI",
  titleZh: "海关物流与进出口运营",
  subtitle:
    "LONGTV đồng hành nhà máy Trung Quốc tại miền Bắc — từ khai báo hải quan, nhập dây chuyền, điều phối forwarder, đến retainer nhập–sản xuất–xuất khẩu.",
  provinces: "Thái Nguyên · Hải Phòng · cảng Lạch Huyện / ICD",
};

export const LOGISTICS_WORKFLOW = [
  {
    step: 1,
    title: "Hải quan starter",
    code: "B1",
    desc: "Thiết lập SOP XNK, training, checklist hồ sơ và mã HS ban đầu.",
    timing: "Trước / ngay sau IRC",
  },
  {
    step: 2,
    title: "Nhập thiết bị & dây chuyền",
    code: "B1-ext",
    desc: "Phân loại HS, tờ khai nhập máy móc từ TQ, tạm nhập–tái xuất nếu EPE.",
    timing: "Giai đoạn G4",
  },
  {
    step: 3,
    title: "Logistics pack",
    code: "B2-log",
    desc: "Báo giá tuyến TQ → Hải Phòng / cảng → KCN hoặc nhà máy; SOP giao nhận.",
    timing: "Khi có hàng đầu tiên",
  },
  {
    step: 4,
    title: "Retainer XNK",
    code: "B3",
    desc: "PM chuỗi nhập NVL → SX → xuất TP; đối soát BOM–hải quan hàng tháng.",
    timing: "NM đang vận hành (≥10 tờ khai/tháng)",
  },
];

export const LOGISTICS_SCENARIOS = [
  {
    title: "Nhà máy mới vào VN",
    profile: "50–200 CN · chưa có tài khoản hải quan",
    packages: ["B1", "B1-ext", "B2-log"],
    note: "Thường đi kèm khảo sát tỉnh (A1) hoặc on-site (B1 combo).",
  },
  {
    title: "Supply chain gần Samsung / Foxconn",
    profile: "Thái Nguyên · linh kiện nhập TQ",
    packages: ["B2-log", "B3"],
    note: "Trucking TN ↔ cảng HP khi cần xuất khẩu.",
  },
  {
    title: "Xuất khẩu qua Hải Phòng",
    profile: "NM tại HP hoặc Deep C / Nam Đình Vũ",
    packages: ["B1", "B2-log", "B3"],
    note: "Tận dụng cảng Lạch Huyện, ICD, kho ngoại quan (đối tác).",
  },
  {
    title: "Xuất máy về Trung Quốc",
    profile: "Giai đoạn thoái / chuyển tuyến",
    packages: ["B1-ext", "B2-log"],
    note: "Tờ khai xuất, tái xuất tạm nhập — xem thêm G8-Pack.",
  },
];

export const LOGISTICS_SCOPE = {
  weDo: [
    "Phân loại HS code & checklist hồ sơ XNK",
    "SOP hải quan + training 1–2 buổi cho team khách",
    "Khai báo / phối hợp đại lý hải quan có GPLS (MOU đối tác)",
    "Điều phối forwarder quốc tế & trucking nội địa miền Bắc",
    "PM chuỗi nhập–SX–xuất, đối soát BOM–chứng từ",
    "Tích hợp công cụ Oz (hs-code, xnk-webapp) khi triển khai",
  ],
  weDont: [
    "Không tự vận hành kho / ICD / đội xe riêng trong năm 1",
    "Không thay TCHQ quyết định phân loại hay thuế",
    "Không cam kết thời gian thông quan nếu hồ sơ khách chưa đủ",
    "Không làm logistics entity FDI cho cổ đông TQ góp vốn (Y1)",
  ],
};

export const LOGISTICS_ROUTES = [
  { from: "Thượng Hải / Quảng Châu", via: "Đường biển", to: "Cảng Hải Phòng / Lạch Huyện", days: "~3–7 ngày" },
  { from: "Cảng HP", via: "Trucking", to: "KCN Nam Đình Vũ / Deep C", days: "1 ngày" },
  { from: "Cảng HP", via: "Trucking", to: "KCN Yên Bình (Thái Nguyên)", days: "1–2 ngày" },
  { from: "Border TQ–VN", via: "Đường bộ", to: "KCN miền Bắc", days: "Theo tuyến" },
];

export const LOGISTICS_FAQ = [
  {
    q: "LONGTV có phải công ty giao nhận không?",
    a: "Không. LONGTV là tư vấn + PM chuỗi XNK, điều phối đối tác forwarder và đại lý hải quan có giấy phép.",
  },
  {
    q: "Khách chưa có IRC có làm hải quan được không?",
    a: "Một phần — có thể chuẩn bị SOP, phân loại HS, briefing. Tờ khai chính thức cần DN đã đăng ký XNK.",
  },
  {
    q: "Giá tính thế nào?",
    a: "Setup (B1/B1-ext) theo gói USD; logistics theo shipment; retainer B3 theo tháng. Xem bảng giá chính thức.",
  },
];
