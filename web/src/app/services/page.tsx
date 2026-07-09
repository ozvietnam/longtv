import { ServicesPageContent } from "@/components/ServicesPageContent";

export const metadata = {
  title: "Dịch vụ theo vòng đời · LongTV",
  description:
    "Dịch vụ LONGTV cho nhà máy FDI Trung Quốc: từ quyết định sang VN, thành lập, vận hành sản xuất, đến di dời tỉnh hoặc thoái vốn về nước.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <ServicesPageContent />
    </div>
  );
}
