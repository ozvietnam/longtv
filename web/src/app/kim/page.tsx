import { KimQueueContent } from "@/components/KimQueueContent";
import { getKimQueue } from "@/lib/kim-queue";

export const metadata = {
  title: "Thư ký Kim — việc cần người thật · LongTV",
  description:
    "Hàng chờ việc chỉ con người tự hoàn thiện và đi làm: gọi Sở, ký, gặp khách, nộp hồ sơ. AI không thay thế.",
};

export default function KimPage() {
  const jobs = getKimQueue();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <KimQueueContent jobs={jobs} initialFilter="open" />
    </div>
  );
}
