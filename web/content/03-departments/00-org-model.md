---
title: "Mô hình tổ chức CTCP — Giai đoạn khởi động"
description: "Đề xuất cơ cấu giám đốc, 5 phòng ban, đội sales và phân luồng công việc vận hành LONGTV (vốn 2 tỷ, QĐ #003)."
date: 2026-07-08
category: "departments"
order: 5
tags: ["org", "headcount", "sales", "operations"]
author: "Cursor · Sếp Thắng"
---

# Mô hình tổ chức — Giai đoạn khởi động

> **Trạng thái:** Đề xuất v0.1 — Leader review & chỉnh số liệu khi tuyển thật.
> Tham chiếu [QĐ #003](/docs/decisions/003-strategy-july-2026): CTCP, vốn 2 tỷ VND, cổ đông gồm tập đoàn TQ.

---

## Tóm tắt nhanh

| Hạng mục | Số lượng (tháng 7–9) | Ghi chú |
|----------|----------------------|---------|
| **Giám đốc** | **1** Tổng GD (+ 0 Phó TGĐ) | Sếp Thắng — kiêm Trưởng Chiến lược |
| **Phòng ban vận hành** | **5** | Đã có folder + TODO trên web |
| **Sales / BD** | **2** FTE | 1 Trưởng nhóm KD + 1 Sales Exec song ngữ |
| **Chuyên môn cốt lõi** | **3–4** FTE (kiêm) | Pháp lý PM, Sản phẩm PM, Kế toán part-time |
| **Hỗ trợ vận hành** | **1** FTE | Admin · hành chính · IT cơ bản |
| **Ảo / nền tảng** | **2** vai | Hermes (research), Cursor (coach/ops) |
| **Tổng nhân sự tương đương** | **~8–10** | Nhiều vai kiêm nhiệm giai đoạn bootstrap |

---

## Sơ đồ tổ chức (v0.1)

```
                    ┌─────────────────────┐
                    │  Tổng Giám đốc (1)  │
                    │  Sếp Thắng          │
                    │  kiêm Tr. Chiến lược│
                    └──────────┬──────────┘
                               │
     ┌─────────┬─────────┬─────┴─────┬─────────┬─────────┐
     ▼         ▼         ▼           ▼         ▼         ▼
  Chiến    Pháp lý   Kinh doanh   Sản phẩm  Vận hành
  lược     & CS      & GTM        dịch vụ   & TC
  (V1,V7)  (V2)      (V3)         (V4)      (V5,V6)
     │         │         │           │         │
     │         │    ┌────┴────┐      │         │
     │         │    │ Sales 2 │      │         │
     │         │    │ BD+Exec │      │         │
     └─────────┴────┴─────────┴──────┴─────────┘
                               │
                    ┌──────────┴──────────┐
                    │  Nền tảng (ảo)      │
                    │  Hermes · Cursor    │
                    └─────────────────────┘
```

---

## 1 giám đốc — phân vai

| Vai trò | Số | Người đề xuất | Trách nhiệm |
|---------|-----|---------------|-------------|
| **Tổng Giám đốc** | 1 | Sếp Thắng | Chốt chiến lược tháng, quyết định lớn, đại diện CTCP với Sở/KCN/đối tác TQ |
| **Phó Tổng Giám đốc** | 0 *(mở khi scale)* | — | Kích hoạt khi ≥3 deal song song hoặc mở chi nhánh thứ 2 |

**Nguyên tắc giai đoạn 1:** Một đầu mối quyết định — tránh 2 giám đốc cùng quyền khi team <15 người.

---

## 5 phòng ban — map trách nhiệm

| # | Phòng ban | Trưởng phòng (đề xuất) | FTE phòng | Output chính |
|---|-----------|------------------------|-----------|--------------|
| 1 | **Chiến lược & Rủi ro** | Tổng GD (kiêm) | 0.5 | Roadmap tháng, đối thủ, Plan B |
| 2 | **Pháp lý & Chính sách** | Luật sư đối tác + PM nội bộ | 1–1.5 | CTCP, IRC, ưu đãi 2 tỉnh |
| 3 | **Kinh doanh & GTM** | Trưởng nhóm Sales | **2** (sales) | Pipeline, persona, pricing |
| 4 | **Sản phẩm dịch vụ** | PM sản phẩm | 1 | [Catalog v0.2](/docs/03-departments/04-san-pham/service-catalog-v0.2), gói bán |
| 5 | **Vận hành & Tài chính** | Kế toán trưởng (part) + Admin | 1.5 | Burn rate, SOP, hợp đồng |

Mỗi phòng có file TODO riêng → xem tổng hợp trên [Bảng vận hành](/operations).

---

## 2 sales — cơ cấu đội kinh doanh

| Vai trò | Số | Profile | KPI tháng 7–9 |
|---------|-----|---------|---------------|
| **Trưởng nhóm KD / BD Manager** | 1 | 3+ năm B2B, biết TQ hoặc FDI, có network KCN/Sở | 5 qualified lead, 2 proposal |
| **Sales Executive** | 1 | Song ngữ Việt–Trung, outbound WeChat/LinkedIn | 20 outreach, 3 meeting booked |

**Không tuyển thêm sales** cho đến khi:
- Có ≥1 hợp đồng ký (gói A1 hoặc B1), **và**
- Trưởng nhóm KD utilization >70%

**Giai đoạn 2 (tháng 10–12):** +1 Sales Exec nếu pipeline >10 lead active.

---

## Lộ trình tăng nhân sự

| Giai đoạn | Thời điểm | Headcount | Trigger mở rộng |
|-----------|-----------|-----------|-----------------|
| **Bootstrap** | T7–T9/2026 | 8–10 | Chốt CTCP, catalog, 5 TODO chạy |
| **First revenue** | T10–T12/2026 | 12–15 | 1–2 hợp đồng ký, cần PM dự án onsite |
| **Scale** | 2027 | 18–25 | Retainer B3, mở logistics hub HP |

---

## Luồng đẩy việc: Leader → phòng ban

```
Khai vấn tháng (Tổng GD)
    → Chốt 1–2 mục tiêu P0 trong roadmap
    → Bóc task vào 5 file TODO.md
    → Gán Trưởng phòng + Assignee
    → Theo dõi trên /operations
    → Review cuối tháng (done = có Evidence)
```

| Bước | Ai làm | Công cụ |
|------|--------|---------|
| 1. Định hướng | Tổng GD | `02-monthly-roadmap/YYYY-MM.md` |
| 2. Chia việc | Tổng GD + Cursor | `03-departments/*/TODO.md` |
| 3. Nghiên cứu sâu & field | **Hermes** (R) · **Cursor** điều phối (A) | `04-research/` · [hermes-directive-log](/docs/03-departments/01-chien-luoc/hermes-directive-log) |
| 4. Thực thi | Trưởng phòng + nhân sự | Cột Assignee trong TODO |
| 5. Giám sát | Tổng GD | [Bảng vận hành](/operations) |

---

## Ma trận RACI (rút gọn)

| Việc | Tổng GD | Trưởng phòng | Sales | Hermes | Cursor |
|------|---------|--------------|-------|--------|--------|
| Chốt chiến lược tháng | **A** | C | I | C | C |
| Ký hợp đồng khách | **A** | C | **R** | — | I |
| Nghiên cứu đối thủ/pháp lý | I | C | — | **R** | A |
| Cập nhật TODO & web | I | **R** | R | R | **A** |
| **Kim — việc người thật** | **A/R** | I | **R** | **R** | **I** (chỉ chuẩn bị tài liệu, không làm thay) |
| Catalog & pricing | A | C | C | C | **R** |

*A = Accountable · R = Responsible · C = Consulted · I = Informed*

---

## Việc Leader cần chốt

- [ ] Xác nhận **1 hay 2 sales** cho quý 3 (đề xuất: 2)
- [ ] Chỉ định **Trưởng phòng** tạm (có thể kiêm) cho Pháp lý, Sản phẩm, Vận hành
- [ ] Điền [yêu cầu làm rõ](/docs/05-clarifications/00-team-input-requirements) — tên CTCP, % cổ đông TQ
- [ ] Link mô hình này vào task VT-004 khi hoàn thành
