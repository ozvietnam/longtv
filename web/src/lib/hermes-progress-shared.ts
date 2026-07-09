import type { KimJob } from "./kim-queue-shared";

export type HermesClTask = {
  priority: string;
  id: string;
  task: string;
  vLayer: string;
  assignee: string;
  status: string;
  deadline: string;
  evidence: string;
};

export type Wave1Deliverable = {
  id: string;
  title: string;
  href: string;
  note?: string;
};

export type HermesProgressSummary = {
  wave1Count: number;
  kimJobs: KimJob[];
  kimDone: number;
  kimDoing: number;
  kimTodo: number;
  kimOverdue: KimJob[];
  clTasks: HermesClTask[];
  clDone: number;
  clDoing: number;
  clTodo: number;
};

export const HERMES_WAVE1_DONE: Wave1Deliverable[] = [
  {
    id: "CL-001",
    title: "Bảng 10 đối thủ tư vấn FDI TQ→VN",
    href: "/docs/04-research/2026-07/competitors",
  },
  {
    id: "PL-001",
    title: "So sánh TNHH vs CTCP (Leader chốt CTCP)",
    href: "/docs/04-research/2026-07/legal-entity-comparison",
  },
  {
    id: "VT-001",
    title: "Ngân sách khởi điểm 6 tháng",
    href: "/docs/04-research/2026-07/startup-budget",
  },
  {
    id: "CL-002",
    title: "Chính sách FDI Thái Nguyên — desk research",
    href: "/docs/04-research/2026-07/thai-nguyen-fdi-policy",
    note: "Chờ call Sở xác minh (KIM-010)",
  },
  {
    id: "—",
    title: "Chính sách FDI Hải Phòng — desk research",
    href: "/docs/04-research/2026-07/hai-phong-fdi-policy",
    note: "Chờ call Sở xác minh (KIM-011)",
  },
  {
    id: "CL-003",
    title: "KCN Yên Bình + Nam Đình Vũ — desk research",
    href: "/docs/04-research/2026-07/kcn-desk-research",
    note: "Chờ call Ban QLKCN (KIM-012, 013)",
  },
];

export const HERMES_DOC_LINKS = [
  {
    href: "/docs/03-departments/01-chien-luoc/hermes-work-pack-2026-07",
    title: "Gói việc Wave 2",
    desc: "Bản đồ ưu tiên · field · thu thập tài liệu",
  },
  {
    href: "/docs/03-departments/01-chien-luoc/hermes-directive-log",
    title: "Nhật ký chỉ đạo",
    desc: "Chỉ đạo #002, #003 từ Leader",
  },
  {
    href: "/docs/decisions/006-hermes-wave2-approval",
    title: "QĐ #006 — Duyệt Wave 2",
    desc: "2026-07-09",
  },
  {
    href: "/docs/03-departments/01-chien-luoc/field-call-scripts",
    title: "Script gọi Sở & KCN",
    desc: "Ghi chép sau mỗi cuộc gọi",
  },
];
