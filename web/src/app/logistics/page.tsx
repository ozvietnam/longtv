import { LogisticsPageContent } from "@/components/LogisticsPageContent";

export const metadata = {
  title: "Hậu cần & hải quan · LongTV",
  description:
    "Dịch vụ hải quan, khai báo xuất nhập khẩu, nhập thiết bị, vận chuyển Trung Quốc→Hải Phòng và dịch vụ thuê ngoài theo tháng cho nhà máy đầu tư nước ngoài miền Bắc.",
};

export default function LogisticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <LogisticsPageContent />
    </div>
  );
}
