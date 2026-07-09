import { KimQueueContent } from "@/components/KimQueueContent";
import { getKimQueue } from "@/lib/kim-queue";

export const metadata = {
  title: "Thư ký Kim — việc cần người thật · LongTV",
  description:
    "Hàng chờ việc chỉ con người tự hoàn thiện và đi làm: gọi Sở, ký, gặp khách, nộp hồ sơ. AI không thay thế.",
};

type KimPageProps = {
  searchParams?: Promise<{ filter?: string }>;
};

export default async function KimPage({ searchParams }: KimPageProps) {
  const jobs = getKimQueue();
  const params = searchParams ? await searchParams : {};
  const initialFilter =
    params.filter === "hermes" || params.filter === "leader" || params.filter === "p0" || params.filter === "all"
      ? params.filter
      : "open";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <KimQueueContent jobs={jobs} initialFilter={initialFilter} />
    </div>
  );
}
