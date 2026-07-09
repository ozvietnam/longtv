import Link from "next/link";
import { HermesProgressContent } from "@/components/HermesProgressContent";
import { summarizeHermesProgress } from "@/lib/hermes-progress";

export const metadata = {
  title: "Tiến độ Hermes — nghiên cứu & field · LongTV",
  description:
    "Tổng hợp Wave 1 đã xong, Wave 2 đang chờ người Hermes: gọi Sở/KCN, brief, thu thập tài liệu.",
};

export default function HermesPage() {
  const progress = summarizeHermesProgress();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <HermesProgressContent progress={progress} />
    </div>
  );
}
