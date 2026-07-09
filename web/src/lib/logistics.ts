/**
 * Nội dung landing /logistics — nhãn giao diện tiếng Việt + thuật ngữ tiếng Anh trong ngoặc.
 */

export const LOGISTICS_SERVICE_IDS = ["B1", "B1-ext", "B2-log", "B3"] as const;

export const LOGISTICS_HERO = {
  badge: "Mảng hậu cần & hải quan (logistics & customs)",
  title: "Hải quan, vận chuyển & chuỗi xuất nhập khẩu cho nhà máy đầu tư nước ngoài (FDI)",
  titleZh: "海关物流与进出口运营",
  subtitle:
    "LONGTV đồng hành nhà máy Trung Quốc tại miền Bắc — từ khai báo hải quan, nhập dây chuyền, điều phối đại lý vận tải (forwarder), đến dịch vụ thuê ngoài theo tháng (retainer) cho chuỗi nhập–sản xuất–xuất khẩu.",
  provinces: "Thái Nguyên · Hải Phòng · cảng Lạch Huyện · trung tâm logistics (ICD)",
};

export const LOGISTICS_WORKFLOW = [
  {
    step: 1,
    title: "Gói khởi điểm hải quan (starter)",
    code: "B1",
    desc: "Thiết lập quy trình xuất nhập khẩu, đào tạo, checklist hồ sơ và mã hàng hóa (HS code) ban đầu.",
    timing: "Trước / ngay sau giấy chứng nhận đầu tư (IRC)",
  },
  {
    step: 2,
    title: "Nhập thiết bị & dây chuyền",
    code: "B1-ext",
    desc: "Phân loại mã hàng, tờ khai nhập máy móc từ Trung Quốc, tạm nhập–tái xuất nếu là doanh nghiệp chế xuất (EPE).",
    timing: "Giai đoạn thiết lập nhà máy (bước 4)",
  },
  {
    step: 3,
    title: "Gói hậu cần & vận chuyển (logistics pack)",
    code: "B2-log",
    desc: "Báo giá tuyến Trung Quốc → Hải Phòng / cảng → khu công nghiệp hoặc nhà máy; quy trình giao nhận (SOP).",
    timing: "Khi có lô hàng đầu tiên",
  },
  {
    step: 4,
    title: "Dịch vụ thuê ngoài xuất nhập khẩu (retainer)",
    code: "B3",
    desc: "Quản lý chuỗi nhập nguyên liệu → sản xuất → xuất thành phẩm; đối soát định mức nguyên vật liệu (BOM) với hải quan hàng tháng.",
    timing: "Nhà máy đang vận hành (từ 10 tờ khai / tháng)",
  },
];

export const LOGISTICS_SCENARIOS = [
  {
    title: "Nhà máy mới vào Việt Nam",
    profile: "50–200 công nhân · chưa có tài khoản hải quan",
    packages: ["B1", "B1-ext", "B2-log"],
    note: "Thường đi kèm báo cáo khảo sát tỉnh (A1) hoặc khảo sát hiện trường (B1).",
  },
  {
    title: "Chuỗi cung ứng gần Samsung / Foxconn",
    profile: "Thái Nguyên · linh kiện nhập từ Trung Quốc",
    packages: ["B2-log", "B3"],
    note: "Vận tải đường bộ Thái Nguyên ↔ cảng Hải Phòng khi cần xuất khẩu.",
  },
  {
    title: "Xuất khẩu qua Hải Phòng",
    profile: "Nhà máy tại Hải Phòng hoặc khu Deep C / Nam Đình Vũ",
    packages: ["B1", "B2-log", "B3"],
    note: "Tận dụng cảng Lạch Huyện, trung tâm logistics (ICD), kho ngoại quan qua đối tác.",
  },
  {
    title: "Xuất máy móc về Trung Quốc",
    profile: "Giai đoạn thoái vốn / chuyển tuyến sản xuất",
    packages: ["B1-ext", "B2-log"],
    note: "Tờ khai xuất, tái xuất tạm nhập — xem thêm gói giải thể (G8).",
  },
];

export const LOGISTICS_SCOPE = {
  weDo: [
    "Phân loại mã hàng hóa (HS code) & checklist hồ sơ xuất nhập khẩu",
    "Quy trình hải quan + đào tạo 1–2 buổi cho đội ngũ khách hàng",
    "Khai báo / phối hợp đại lý hải quan có giấy phép làm dịch vụ (GPLS)",
    "Điều phối đại lý vận tải quốc tế (forwarder) & vận tải đường bộ nội địa miền Bắc",
    "Quản lý chuỗi nhập–sản xuất–xuất, đối soát định mức nguyên vật liệu (BOM) với chứng từ",
    "Tích hợp công cụ Oz (phân loại mã hàng, khai báo điện tử) khi triển khai",
  ],
  weDont: [
    "Không tự vận hành kho / trung tâm logistics (ICD) / đội xe riêng trong năm đầu",
    "Không thay Tổng cục Hải quan quyết định phân loại hay thuế",
    "Không cam kết thời gian thông quan nếu hồ sơ khách chưa đủ",
    "Không thành lập công ty logistics FDI cho cổ đông Trung Quốc góp vốn (năm 1)",
  ],
};

export const LOGISTICS_ROUTES = [
  {
    from: "Thượng Hải / Quảng Châu",
    via: "Đường biển",
    to: "Cảng Hải Phòng / Lạch Huyện",
    days: "~3–7 ngày",
  },
  {
    from: "Cảng Hải Phòng",
    via: "Vận tải đường bộ",
    to: "Khu công nghiệp Nam Đình Vũ / Deep C",
    days: "1 ngày",
  },
  {
    from: "Cảng Hải Phòng",
    via: "Vận tải đường bộ",
    to: "Khu công nghiệp Yên Bình (Thái Nguyên)",
    days: "1–2 ngày",
  },
  {
    from: "Biên giới Trung Quốc – Việt Nam",
    via: "Đường bộ",
    to: "Khu công nghiệp miền Bắc",
    days: "Theo tuyến",
  },
];

export const LOGISTICS_TRANSACTIONAL_PRICING = [
  { code: "L-HQ-01", name: "Khai báo xuất FCL (luồng xanh)", priceVnd: "750.000", unit: "cont", note: "Qua đại lý GPLS" },
  { code: "L-HQ-02", name: "Khai báo nhập FCL (cont đầu)", priceVnd: "1.000.000", unit: "cont", note: "" },
  { code: "L-TR-01", name: "Trucking HP → TN (20DC)", priceVnd: "5.900.000", unit: "cont", note: "Điều phối đối tác" },
  { code: "L-TR-02", name: "Trucking HP → TN (40DC)", priceVnd: "6.200.000", unit: "cont", note: "" },
  { code: "L-CO-01", name: "Xin C/O Form E (xuất khẩu)", priceVnd: "1.600.000", unit: "lần", note: "~30% lô xuất" },
] as const;

export const LOGISTICS_VOLUME_TARGETS = {
  month6: { bear: "15 cont/tháng", base: "65 cont/tháng", stretch: "500 cont/tháng" },
  gpPerCont: "~980.000 VND (~14%)",
  benchmarkDoc: "/docs/04-research/2026-07/logistics-pricing-benchmark",
} as const;

export const LOGISTICS_FAQ = [
  {
    q: "LONGTV có phải công ty giao nhận vận tải không?",
    a: "Không. LONGTV là tư vấn + quản lý dự án chuỗi xuất nhập khẩu, điều phối đối tác vận tải (forwarder) và đại lý hải quan có giấy phép.",
  },
  {
    q: "Khách chưa có giấy chứng nhận đầu tư (IRC) có làm hải quan được không?",
    a: "Một phần — có thể chuẩn bị quy trình, phân loại mã hàng, briefing. Tờ khai chính thức cần doanh nghiệp đã đăng ký xuất nhập khẩu.",
  },
  {
    q: "Giá tính thế nào?",
    a: "Gói thiết lập (B1, B1-ext) theo USD; vận chuyển theo từng lô hàng; dịch vụ thuê ngoài (B3) theo tháng. Xem bảng giá chính thức.",
  },
];
