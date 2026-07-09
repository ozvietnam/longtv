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
  Leader: { label: "Leader", className: "bg-[var(--accent-soft)] text-[var(--accent)]" },
  Hermes: { label: "Hermes", className: "bg-violet-100 text-violet-800" },
  "Luật đối tác": { label: "Luật", className: "bg-slate-100 text-slate-700" },
  Sales: { label: "Sales", className: "bg-emerald-100 text-emerald-800" },
  "Leader + Luật": { label: "Leader + Luật", className: "bg-amber-100 text-amber-900" },
  "Leader / KD": { label: "Leader / KD", className: "bg-amber-100 text-amber-900" },
  VT: { label: "VT", className: "bg-sky-100 text-sky-800" },
};

export const JOB_CATEGORIES = [
  {
    id: "sign",
    label: "Ký & quyết định",
    ids: ["KIM-001", "KIM-003"],
  },
  {
    id: "info",
    label: "Điền thông tin",
    ids: ["KIM-002", "KIM-004"],
  },
  {
    id: "field",
    label: "Gọi Sở / KCN",
    ids: ["KIM-010", "KIM-011", "KIM-012", "KIM-013"],
  },
  {
    id: "legal",
    label: "Pháp lý & MOU",
    ids: ["KIM-020", "KIM-050", "KIM-051"],
  },
  {
    id: "corp",
    label: "Thành lập CTCP",
    ids: ["KIM-031"],
  },
  {
    id: "sales",
    label: "Khách hàng thật",
    ids: ["KIM-040", "KIM-041"],
  },
  {
    id: "infra",
    label: "Web & văn phòng",
    ids: ["KIM-030", "KIM-060", "KIM-061"],
  },
  {
    id: "invest",
    label: "Đầu tư & pitch",
    ids: ["KIM-070", "KIM-071", "KIM-072", "KIM-073", "KIM-074", "KIM-075"],
  },
  {
    id: "allinone",
    label: "All-in-one / UNIDO",
    ids: ["KIM-076", "KIM-077", "KIM-078", "KIM-079"],
  },
];
