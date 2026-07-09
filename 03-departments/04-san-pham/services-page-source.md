---
title: "Trang dịch vụ web — vòng đời & catalog"
description: "Nguồn cấu trúc trang /services: 9 giai đoạn G0–G8 và danh mục dịch vụ LONGTV."
date: 2026-07-09
category: "departments"
order: 25
tags: ["product", "web", "services", "lifecycle"]
author: "Cursor"
---

# Trang dịch vụ website (`/services`)

> **UI:** `web/src/app/services/page.tsx` + `web/src/lib/services.ts`  
> **Nội dung chi tiết:** [service-catalog-v1](service-catalog-v1) · [fdi-lifecycle-full-map](fdi-lifecycle-full-map)

---

## Cấu trúc trang

| Phần | Nội dung |
|------|----------|
| Hero | Positioning + link catalog markdown |
| Sơ đồ G0–G8 | Timeline tương tác, lọc theo giai đoạn |
| Gói phổ biến | A0, A1, B1, B2, B3, G7-Pack, G8-Pack |
| Dịch vụ theo giai đoạn | Card: mã, tên, khi nào, deliverable, giá USD, ai làm |
| Lộ trình điển hình | A0 → A1 → … → G7/G8 |
| 5 tầng dịch vụ | Entry · Policy · Logistics · Hub · Exit |

---

## 9 giai đoạn vòng đời

| G | Tên | Dịch vụ chính |
|---|-----|----------------|
| G0 | Quyết định rời TQ | A0, H1 |
| G1 | Tiếp cận VN | A0, A1, H1 |
| G2 | Khảo sát & chọn địa điểm | A1, A2, B1, DD-01 |
| G3 | Thành lập pháp nhân | B2, A2, H2 |
| G4 | Setup nhà máy | A3-PM, B1-ext, ENV, HR-01, H3 |
| G5 | Vận hành sản xuất | B3, B2-log, H3, HR-02, C1 |
| G6 | Mở rộng | A1, B2, A3-PM |
| G7 | Di dời tỉnh | G7-01, G7-Pack |
| G8 | Thoái vốn / về TQ | G8-01, G8-Pack |

---

## Cập nhật dữ liệu

1. Sửa `web/src/lib/services.ts` (mã nguồn cho UI)
2. Đồng bộ mô tả dài trong `service-catalog-v1.md`
3. Chạy `npm run sync-content` trong `web/` trước build
4. Giá USD: tham chiếu [pricing-official](/docs/03-departments/03-kinh-doanh/pricing-official)

---

## Không hiển thị trên web

- Template HĐ pháp lý (nội bộ)
- Script call Sở (nội bộ)
- Burn tracker, KPI phòng
