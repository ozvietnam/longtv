export type KimJob = {
  priority: string;
  id: string;
  task: string;
  owner: string;
  status: string;
  deadline: string;
  docLink: string;
};

export const OWNER_GROUPS: Record<string, { label: string; className: string }> = {
  Leader: { label: "Lãnh đạo (Leader)", className: "bg-[var(--accent-soft)] text-[var(--accent)]" },
  Hermes: { label: "Nghiên cứu (Hermes)", className: "bg-violet-100 text-violet-800" },
  "Luật đối tác": { label: "Luật sư đối tác", className: "bg-slate-100 text-slate-700" },
  Sales: { label: "Kinh doanh (Sales)", className: "bg-emerald-100 text-emerald-800" },
  "Leader + Luật": { label: "Lãnh đạo + Luật", className: "bg-amber-100 text-amber-900" },
  "Leader / KD": { label: "Lãnh đạo / Kinh doanh", className: "bg-amber-100 text-amber-900" },
  VT: { label: "Vận hành tài chính", className: "bg-sky-100 text-sky-800" },
};

export const JOB_CATEGORIES = [
  {
    id: "sign",
    label: "Ký & quyết định",
    ids: ["KIM-001", "KIM-003"],
  },
  {
    id: "info",
    label: "Điền thông tin công ty",
    ids: ["KIM-002", "KIM-004"],
  },
  {
    id: "field",
    label: "Gọi cơ quan & khu công nghiệp",
    ids: ["KIM-010", "KIM-011", "KIM-012", "KIM-013", "KIM-077"],
  },
  {
    id: "hermes-research",
    label: "Nghiên cứu & thu thập tài liệu (Hermes)",
    ids: [
      "KIM-080",
      "KIM-081",
      "KIM-082",
      "KIM-083",
      "KIM-084",
      "KIM-085",
      "KIM-086",
      "KIM-087",
      "KIM-088",
      "KIM-089",
      "KIM-090",
    ],
  },
  {
    id: "legal",
    label: "Pháp lý & thỏa thuận hợp tác (MOU)",
    ids: ["KIM-020", "KIM-050", "KIM-051"],
  },
  {
    id: "corp",
    label: "Thành lập công ty cổ phần (CTCP)",
    ids: ["KIM-031"],
  },
  {
    id: "sales",
    label: "Khách hàng thật",
    ids: ["KIM-040", "KIM-041"],
  },
  {
    id: "infra",
    label: "Hạ tầng web & văn phòng",
    ids: ["KIM-030", "KIM-060", "KIM-061"],
  },
  {
    id: "invest",
    label: "Đầu tư & trình bày (pitch)",
    ids: ["KIM-070", "KIM-071", "KIM-072", "KIM-073", "KIM-074", "KIM-075"],
  },
  {
    id: "allinone",
    label: "Dịch vụ trọn gói (all-in-one)",
    ids: ["KIM-076", "KIM-078", "KIM-079"],
  },
];
