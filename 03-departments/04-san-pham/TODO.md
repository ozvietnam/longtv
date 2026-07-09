---
title: "TODO — Sản phẩm dịch vụ"
description: "Bảng phân công công việc tháng 7/2026 — Phòng Sản phẩm dịch vụ."
date: 2026-07-08
category: "departments"
order: 27
tags: ["todo", "product", "2026-07"]
author: "Sếp Thắng"
---

# TODO — Sản phẩm dịch vụ

## Tháng 2026-07 | Phòng: Sản phẩm dịch vụ

| P | ID | Task | V-layer | Assignee | Status | Deadline | Evidence |
|---|-----|------|---------|----------|--------|----------|----------|
| P0 | SP-001 | Service catalog v0.2 — 2 mảng + Hub (chính sách 2 tỉnh, logistics miền Bắc) | V4.1, V4.2 | @cursor | done | 2026-07-18 | /docs/03-departments/04-san-pham/service-catalog-v0.2 |
| P0 | SP-002 | Lập bảng "Tự làm vs Đối tác" cho từng hạng mục dịch vụ | V4.4 | @cursor | done | 2026-07-21 | /docs/03-departments/04-san-pham/build-vs-partner |
| P0 | SP-006 | Tách dịch vụ tư vấn pháp lý kinh doanh & đầu tư thành trang dịch vụ riêng | V4.2, V4.4 | @cursor | review | 2026-07-09 | /docs/services/legal-consulting |
| P0 | SP-007 | Tách dịch vụ chính sách & chính quyền 2 tỉnh thành trang dịch vụ riêng | V4.2 | @cursor | review | 2026-07-09 | /docs/services/policy-government |
| P0 | SP-008 | Tạo trang đánh giá tiềm năng & khả thi để trình cổ đông, có sơ đồ và liên kết nội bộ | V4.2, V7 | @cursor | review | 2026-07-09 | /assessment |
| P1 | SP-003 | Brainstorm 3–5 sản phẩm đi kèm (customs checklist, HS code lookup, logistics intro) | V4.3 | — | todo | 2026-07-25 | |
| P1 | SP-004 | Định nghĩa deliverable cụ thể cho gói Khảo sát (báo cáo gồm những gì?) | V4.2 | — | todo | 2026-07-28 | |
| P2 | SP-005 | Đánh giá khả năng tích hợp công cụ Oz (hs-code-api, xnk-webapp) vào gói dịch vụ | V4.3 | — | todo | 2026-07-31 | |

## Hướng dẫn thực hiện

### SP-001 — Service catalog v0.1

| Gói | Mô tả ngắn | Deliverable | Thời gian ước tính |
|-----|------------|-------------|-------------------|
| **Khảo sát** | Đánh giá site, chính sách, chi phí 2 tỉnh | Báo cáo 15–20 trang + bảng so sánh | 2–3 tuần |
| **Thiết lập** | Hỗ trợ IRC/ERC, giấy phép, thuê đất/KCN | Công ty VN hoạt động được | 2–4 tháng |
| **Vận hành** | Hỗ trợ vận hành 6 tháng đầu (HR, logistics, customs) | NM chạy ổn định | 6 tháng |

### SP-002 — Tự làm vs Đối tác

Ví dụ: Khảo sát thị trường = tự làm · Thành lập pháp nhân = đối tác luật · Customs = tự làm (có công cụ Oz) · Thuê đất = đối tác KCN.

### SP-006 — Tách trang dịch vụ pháp lý

Tách H2 khỏi catalog tổng thành trang dịch vụ riêng. Trang phải nêu rõ phạm vi LONGTV tự làm, phần nào cần luật sư/đối tác đủ điều kiện, deliverable theo từng gói, input khách hàng cần cung cấp và liên kết sang thư viện pháp luật FDI.

### SP-007 — Tách trang dịch vụ chính sách

Tách Mảng A khỏi catalog tổng thành trang dịch vụ riêng. Trang phải nêu rõ A1/A2/A3, deliverable bán hàng, input khách hàng cần cung cấp, ranh giới giữa LONGTV điều phối và phần cần xác nhận từ cơ quan/đối tác chuyên môn.

### SP-008 — Trang đánh giá tiềm năng & khả thi

Tạo dashboard trình cổ đông, route `/assessment`, gồm kết luận nhanh, scorecard, sơ đồ mô hình 2 mảng + hub, ma trận tiềm năng/khả thi, rủi ro/đối sách và liên kết nội bộ sang các trang dịch vụ, thư viện pháp luật, service catalog, quyết định chiến lược. Các trang nguồn liên quan cần có nút quay lại dashboard.
