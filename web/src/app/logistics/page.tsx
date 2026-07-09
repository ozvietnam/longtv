import { LogisticsPageContent } from "@/components/LogisticsPageContent";

export const metadata = {
  title: "Logistics & hải quan · LongTV",
  description:
    "Dịch vụ hải quan, khai báo XNK, nhập thiết bị, vận chuyển TQ→Hải Phòng và retainer chuỗi nhập–sản xuất–xuất khẩu cho nhà máy FDI miền Bắc.",
};

export default function LogisticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <LogisticsPageContent />
    </div>
  );
}
