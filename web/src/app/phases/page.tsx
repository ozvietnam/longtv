import Link from "next/link";

export const metadata = { title: "Các pha triển khai · LongTV" };

const PHASES = [
  { id: "phase-1", title: "P1 · Xây dựng dự án", status: "active", desc: "Vấn đề lớn → chẻ nhỏ → cấu trúc cây vấn đề." },
  { id: "phase-2", title: "P2 · Khai vấn đa phương án", status: "pending", desc: "Đưa ra nhiều phương án cho từng bài toán con." },
  { id: "phase-3", title: "P3 · Nghiên cứu & khảo sát thị trường", status: "pending", desc: "Số liệu FDI, đối thủ, ưu đãi 2 tỉnh." },
  { id: "phase-4", title: "P4 · Ra 3 phương án mô hình kinh doanh", status: "pending", desc: "Lean / Boutique / Platform — anh chọn 1." },
  { id: "phase-5", title: "P5 · Business Plan v1 + triển khai", status: "pending", desc: "Sơ đồ tổ chức, lộ trình 12 tuần, dòng tiền, KPI." },
];

export default function PhasesIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Các pha triển khai</h1>
        <p className="text-[var(--muted)]">
          Mỗi pha có mục tiêu rõ ràng và deliverable cụ thể. Đánh dấu <strong>active</strong> khi đang chạy.
        </p>
      </header>

      <ol className="space-y-3">
        {PHASES.map((p) => (
          <li
            key={p.id}
            className={`p-5 rounded-lg border bg-white ${
              p.status === "active" ? "border-[var(--accent)] ring-1 ring-[var(--accent)]" : "border-[var(--border)]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-semibold text-lg">{p.title}</h2>
                  {p.status === "active" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)] text-white font-medium">
                      ĐANG CHẠY
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)]">{p.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}