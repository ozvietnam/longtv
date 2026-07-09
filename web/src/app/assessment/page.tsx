import { FeasibilityAssessmentContent } from "@/components/FeasibilityAssessmentContent";

export const metadata = {
  title: "Giai đoạn 00-1 — Đánh giá tiềm năng · LongTV",
  description:
    "Dashboard trình cổ đông: scorecard 38/50, số liệu FDI xác minh, biểu đồ thị trường TN+HP, kết luận Go + Adjust.",
};

export default function AssessmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <FeasibilityAssessmentContent />
    </div>
  );
}
