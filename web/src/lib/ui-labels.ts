/** Nhãn giao diện — tiếng Việt chính, thuật ngữ tiếng Anh trong ngoặc. */

export const JOB_STATUS_LABELS: Record<string, string> = {
  todo: "Cần làm",
  doing: "Đang làm",
  done: "Đã xong",
  blocked: "Bị chặn",
};

export const JOB_PRIORITY_LABELS: Record<string, string> = {
  P0: "Ưu tiên cao (P0)",
  P1: "Ưu tiên trung bình (P1)",
  P2: "Ưu tiên thấp (P2)",
};

export const PHASE_JOURNEY_LABELS: Record<string, string> = {
  "G0–G1": "Bước 0–1 · Quyết định & tìm hiểu",
  G2: "Bước 2 · Khảo sát & chọn địa điểm",
  "G3–G4": "Bước 3–4 · Thành lập & thiết lập nhà máy",
  G5: "Bước 5 · Vận hành sản xuất",
  G6: "Bước 6 · Mở rộng quy mô",
  G7: "Bước 7 · Di dời tỉnh",
  G8: "Bước 8 · Thoái vốn / về Trung Quốc",
};
