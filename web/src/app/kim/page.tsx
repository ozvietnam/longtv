import { KimQueueContent } from "@/components/KimQueueContent";
import { getKimQueue } from "@/lib/kim-queue";

export const metadata = {
  title: "Giao Thư ký Kim · LongTV",
  description:
    "Hộp việc cần người thật — gọi Sở, ký quyết định, khách hàng, pháp lý. Leader xử lý tập trung tại đây.",
};

export default function KimPage() {
  const jobs = getKimQueue();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <KimQueueContent jobs={jobs} />
    </div>
  );
}
