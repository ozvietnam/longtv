---
title: "Service catalog v0.2 — 2 mảng + Hub"
description: "SP-001 — Catalog dịch vụ LONGTV sau quyết định #003: chính sách 2 tỉnh, logistics miền Bắc, trung tâm kết nối."
date: 2026-07-08
category: "departments"
order: 27
tags: ["product", "SP-001", "V4.1", "V4.2"]
author: "Cursor · Sếp Thắng"
---

# Service catalog v0.2

> Cập nhật theo [Quyết định #003](/docs/decisions/003-strategy-july-2026): **CTCP**, vốn **2 tỷ VND**, cổ đông gồm **tập đoàn TQ**.

---

## Tổng quan 3 tầng dịch vụ

| Tầng | Tên | Phạm vi | Khách hàng |
|------|-----|---------|------------|
| **Hub** | Trung tâm kết nối | Toàn VN (thông tin, pháp lý, kế toán) | NĐT nước ngoài, NM TQ |
| **Mảng A** | [Chính sách & chính quyền](/docs/services/policy-government) | **Thái Nguyên + Hải Phòng** | NM TQ muốn dịch chuyển |
| **Mảng B** | Logistics & hải quan | **Miền Bắc** (KCN + ngoài KCN) | NM/xí nghiệp SX-XNK |

---

## Hub — Trung tâm kết nối thông tin

| ID | Dịch vụ | Deliverable | Tự làm / Đối tác |
|----|---------|-------------|------------------|
| H1 | Kho tri thức & cập nhật chính sách | Bản tin, web nội bộ, brief tháng | ✅ Tự làm |
| H2 | [Tư vấn pháp lý kinh doanh & đầu tư](/docs/services/legal-consulting) | Legal scan, roadmap IRC/ERC, checklist góp vốn/M&A, giấy phép sản xuất | LONGTV PM + luật sư/đối tác đủ điều kiện |
| H3 | Kế toán · kiểm toán · hạch toán SX | BCTC, quyết toán thuế, cost accounting NM | Đối tác CPA + PM LONGTV |
| H4 | Kết nối mạng lưới (KCN, Sở, đối tác) | Giới thiệu, MOU, pipeline | ✅ Tự làm |

---

### H2 — Tư vấn pháp lý kinh doanh & đầu tư

H2 đã được tách thành trang dịch vụ riêng vì có ranh giới giấy phép hành nghề rõ ràng. LONGTV không tự nhận phần cần chữ ký/ý kiến pháp lý chính thức nếu chưa có luật sư hoặc đối tác đủ điều kiện.

| Nhóm | LONGTV tự làm | Chuyển luật sư/đối tác khi |
|---|---|---|
| Legal screening FDI | Intake dự án, rà sơ bộ ngành nghề, tỷ lệ vốn, địa điểm, red flags | Cần legal opinion chính thức |
| IRC/ERC roadmap | Lập timeline, checklist hồ sơ, cơ quan xử lý | Soạn/nộp hồ sơ pháp lý, đại diện làm việc chính thức |
| Góp vốn/mua cổ phần | Decision tree M&A approval, checklist due diligence | Soạn giao dịch, review hợp đồng, cập nhật IRC/ERC |
| Giấy phép sản xuất | Điều phối checklist môi trường, PCCC, xây dựng, ngành nghề | Hồ sơ cần đơn vị chuyên môn đủ điều kiện |

Trang chi tiết: [Dịch vụ tư vấn pháp lý kinh doanh & đầu tư](/docs/services/legal-consulting)

---

## Mảng A — Chính sách & chính quyền (2 tỉnh)

Trang chi tiết: [Dịch vụ chính sách & chính quyền 2 tỉnh](/docs/services/policy-government)

### Gói A1 — Khảo sát & định vị

| Hạng mục | Nội dung |
|----------|----------|
| Phạm vi | Thái Nguyên **hoặc** Hải Phòng **hoặc** so sánh 2 tỉnh |
| Deliverable | Báo cáo 20–30 trang: chính sách, KCN, chi phí, rủi ro |
| Thời gian | 2–3 tuần |
| Đầu ra | Khuyến nghị site + lộ trình xin chính sách |

### Gói A2 — Xin chính sách & làm việc chính quyền

| Hạng mục | Nội dung |
|----------|----------|
| Dịch vụ | Soạn hồ sơ ưu đãi, đặt lịch Sở KH&ĐT, Ban QLKCN |
| Deliverable | Biên bản làm việc, checklist hồ sơ, timeline IRC |
| Thời gian | 1–3 tháng |
| Lưu ý | Cần uy tín CTCP + tập đoàn TQ đồng hành |

### Gói A3 — Thiết lập & dịch chuyển nhà máy

| Hạng mục | Nội dung |
|----------|----------|
| Dịch vụ | IRC/ERC, thuê đất KCN, visa, khởi động vận hành |
| Deliverable | NM hoạt động tại VN |
| Thời gian | 3–6 tháng |
| Mô hình | LONGTV PM + đối tác luật/đất |

---

## Mảng B — Logistics & hải quan (miền Bắc)

> Áp dụng cho nhà máy/xí nghiệp có **xuất · nhập · sản xuất** — trong và **ngoài** KCN.

### Gói B1 — Hải quan & khai báo

| Hạng mục | Nội dung |
|----------|----------|
| Dịch vụ | Phân loại HS code, tờ khai XNK, quy trình nội địa hóa |
| Công cụ | hs-code-api, xnk-webapp (Oz) |
| Deliverable | SOP hải quan + training 1–2 buổi |
| Phạm vi | Miền Bắc (mở rộng từ Thái Nguyên/HP) |

### Gói B2 — Logistics & vận chuyển

| Hạng mục | Nội dung |
|----------|----------|
| Dịch vụ | Kết nối forwarder TQ→Hải Phòng/Cảng Bắc, vận chuyển nội địa |
| Deliverable | Báo giá 2–3 tuyến, SOP giao nhận |
| Mô hình | LONGTV điều phối + đối tác vận tải |

### Gói B3 — Chuỗi xuất-nhập-sản xuất (retainer)

| Hạng mục | Nội dung |
|----------|----------|
| Dịch vụ | End-to-end: nguyên liệu nhập → SX → thành phẩm xuất |
| Khách | NM đã vận hành, cần outsource phần XNK |
| Thời gian | Retainer 6–12 tháng |

---

## Bảng gói tổng hợp (bán hàng)

| Gói | Mảng | Giá (draft, chưa chốt) | Khách mục tiêu |
|-----|------|--------------------------|----------------|
| **Khảo sát 2 tỉnh** | A1 | 80–150 triệu VND | Chủ NM TQ đang cân nhắc |
| **Xin chính sách** | A2 | 50–100 tr + success fee | Đã chọn tỉnh |
| **Thiết lập NM** | A3 | 200–500 tr (project) | Cam kết đầu tư |
| **Hải quan starter** | B1 | 30–60 tr | NM mới vào VN |
| **Logistics pack** | B2 | Theo shipment | Có hàng TQ→VN |
| **SX-XNK retainer** | B3 | 15–40 tr/tháng | NM đang chạy |

*Pricing chi tiết: Hermes Issue #8*

---

## Lợi thế cạnh tranh (sau QĐ #003)

| # | Lợi thế |
|---|---------|
| 1 | **CTCP + tập đoàn TQ** — uy tín 2 đầu |
| 2 | **Chính sách sâu 2 tỉnh** — không làm loãng cả nước |
| 3 | **Logistics miền Bắc** — scale sau khi có khách A |
| 4 | **Hub pháp lý + kế toán** — giữ khách lâu dài |
| 5 | **Công cụ Oz** — hải quan số hóa |

---

## Việc tiếp theo

- [ ] KD-004: Chốt pricing 3 gói bán đầu (A1 + B1 + H3)
- [ ] SP-004: Deliverable chi tiết gói A1
- [ ] Leader: Xác nhận tên & tỷ lệ cổ đông TQ
