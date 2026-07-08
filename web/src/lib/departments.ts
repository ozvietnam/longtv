export type Department = {
  id: string;
  name: string;
  shortName: string;
  vLayer: string;
  color: string;
  todoSlug: string;
};

export const DEPARTMENTS: Department[] = [
  {
    id: "01-chien-luoc",
    name: "Chiến lược & Rủi ro",
    shortName: "Chiến lược",
    vLayer: "V1, V7",
    color: "border-blue-200",
  },
  {
    id: "02-phap-ly",
    name: "Pháp lý & Chính sách",
    shortName: "Pháp lý",
    vLayer: "V2",
    color: "border-purple-200",
  },
  {
    id: "03-kinh-doanh",
    name: "Kinh doanh & GTM",
    shortName: "Kinh doanh",
    vLayer: "V3",
    color: "border-green-200",
  },
  {
    id: "04-san-pham",
    name: "Sản phẩm dịch vụ",
    shortName: "Sản phẩm",
    vLayer: "V4",
    color: "border-orange-200",
  },
  {
    id: "05-van-hanh-tc",
    name: "Vận hành & Tài chính",
    shortName: "Vận hành",
    vLayer: "V5, V6",
    color: "border-gray-300",
  },
].map((d) => ({ ...d, todoSlug: `03-departments/${d.id}/TODO` }));

export function getDepartmentById(id: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.id === id);
}
