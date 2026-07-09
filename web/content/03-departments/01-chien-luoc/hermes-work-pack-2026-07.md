---
title: "Gói công việc Hermes — Wave 2 (tháng 7/2026)"
description: "Rà soát đầu mục cần mở rộng, nghiên cứu sâu và thu thập tài liệu — giao Hermes thực hiện."
date: 2026-07-09
category: "departments"
order: 22
tags: ["hermes", "research", "field", "wave-2"]
author: "Cursor"
---

# Gói công việc Hermes — Wave 2

> **Vai trò:** Nghiên cứu sâu + field verify + thu thập tài liệu cho LONGTV (CTCP tư vấn FDI TQ→VN, trọng tâm Thái Nguyên & Hải Phòng).
>
> **Leader xử lý:** KIM-001–004, 030, 060, 070–075 — tại [/kim](/kim).
>
> **Hermes xử lý:** Field call, desk research mở rộng, nguồn địa phương, số liệu FDI — bảng dưới.

---

## Đã hoàn thành (Wave 1)

| ID | Việc | Evidence |
|----|------|----------|
| CL-001 | Bảng 10 đối thủ FDI TQ→VN | [/docs/04-research/2026-07/competitors](/docs/04-research/2026-07/competitors) |
| PL-001 | So sánh TNHH vs CTCP (Leader chốt CTCP) | [/docs/04-research/2026-07/legal-entity-comparison](/docs/04-research/2026-07/legal-entity-comparison) |
| VT-001 | Ngân sách khởi điểm 6 tháng | [/docs/04-research/2026-07/startup-budget](/docs/04-research/2026-07/startup-budget) |
| CL-002 (desk) | Chính sách FDI Thái Nguyên — desk | [/docs/04-research/2026-07/thai-nguyen-fdi-policy](/docs/04-research/2026-07/thai-nguyen-fdi-policy) |
| — | Chính sách FDI Hải Phòng — desk | [/docs/04-research/2026-07/hai-phong-fdi-policy](/docs/04-research/2026-07/hai-phong-fdi-policy) |
| CL-003 (desk) | KCN Yên Bình + Nam Đình Vũ — desk | [/docs/04-research/2026-07/kcn-desk-research](/docs/04-research/2026-07/kcn-desk-research) |

---

## Wave 2 — Bản đồ ưu tiên

```text
Tuần 1 (P0)          Tuần 2–3 (P1)              Liên tục (P2)
────────────         ──────────────              ─────────────
Brief call (080)     Map 20 NM TQ (082)          Subscribe MPI (087)
Call Sở TN (010)     URL địa phương (081)        Update fdi-data Q3
Call Sở HP (011)     EPE desk TN (083)           Cẩm nang HB-013/014
Call KCN (012–013)   Verify nguồn PL (084)       Monitor luật HQ/WTO
Verify CIT (077)     Infographic TN+HP (086)
Cập nhật research    Draft HB địa phương (088)
sau mỗi call (085)
```

---

## A. Field — Gọi Sở & KCN (P0)

| Kim | CL | Việc | Hạn | Script / ghi chép |
|-----|-----|------|-----|-------------------|
| KIM-010 | CL-002 | Gọi **Sở KH&ĐT Thái Nguyên** | 2026-07-18 | [field-call-scripts §2](/docs/03-departments/01-chien-luoc/field-call-scripts) |
| KIM-011 | — | Gọi **Sở KH&ĐT Hải Phòng** | 2026-07-21 | [field-call-scripts §3](/docs/03-departments/01-chien-luoc/field-call-scripts) |
| KIM-012 | CL-003 | Call **Ban QLKCN Yên Bình** | 2026-07-21 | [field-call-scripts §4](/docs/03-departments/01-chien-luoc/field-call-scripts) |
| KIM-013 | CL-003 | Call **Ban QLKCN Nam Đình Vũ** | 2026-07-21 | [field-call-scripts §4](/docs/03-departments/01-chien-luoc/field-call-scripts) |
| KIM-077 | — | Verify **CIT KKT Đình Vũ–Cát Hải** 2026 | 2026-07-21 | [hp-tn-operational-matrix §7](/docs/03-departments/01-chien-luoc/hp-tn-operational-matrix) |

**Trước mỗi call:** hoàn thành KIM-080 (brief 1 trang).

**Sau mỗi call (bắt buộc):**

1. Điền bảng ghi chép trong [field-call-scripts](/docs/03-departments/01-chien-luoc/field-call-scripts)
2. Cập nhật file research tương ứng (TN / HP / KCN)
3. Tick checklist [hp-tn-operational-matrix §7](/docs/03-departments/01-chien-luoc/hp-tn-operational-matrix)
4. Đổi status Kim → `done` khi đủ số liệu + contact

**Escalate Leader khi:** Sở yêu cầu gặp TGĐ; đề xuất ký MOU; khách pilot cụ thể.

---

## B. Chuẩn bị call (P0)

| Kim | CL | Việc | Output | Hạn |
|-----|-----|------|--------|-----|
| KIM-080 | CL-009 | **Brief LONGTV 1 trang A4** cho Sở/KCN | [hermes-field-brief-template](/docs/03-departments/01-chien-luoc/hermes-field-brief-template) | 2026-07-12 |

Nội dung tối thiểu: tên công ty, mô hình tư vấn (không môi giới đất), 2 tỉnh trọng tâm, profile khách mẫu (ẩn danh), câu hỏi cần Sở trả lời.

---

## C. Thu thập tài liệu & nguồn địa phương (P1)

| Kim | CL | Việc | Output | Hạn |
|-----|-----|------|--------|-----|
| KIM-081 | CL-008 | Thu thập **URL chính thức** UBND / Sở / Ban QLKCN TN & HP | `web/data/fdi-legal/source-registry.json` → `LOCAL-THAI-NGUYEN-HAI-PHONG` | 2026-07-25 |
| KIM-084 | CL-012 | **Verify hiệu lực** 3 nguồn P0 trong registry | Ghi `verified_date` + note trong registry hoặc comment PR | 2026-07-28 |
| KIM-088 | — | Chuẩn bị **draft địa phương** cho Cẩm nang FDI-HB-013 & 014 | Note trong [article-backlog](/docs/data/fdi-legal/article-backlog) | 2026-07-31 |

**Checklist URL địa phương (tối thiểu 8 link):**

- [ ] UBND tỉnh Thái Nguyên — trang thu hút đầu tư
- [ ] Sở KH&ĐT Thái Nguyên — FDI / một cửa
- [ ] Ban QLKCN Yên Bình (hoặc Sở CN)
- [ ] UBND TP Hải Phòng — đầu tư
- [ ] Sở KH&ĐT Hải Phòng
- [ ] Ban QLKCN / HEZA KKT Đình Vũ–Cát Hải
- [ ] Ban QLKCN Nam Đình Vũ (hoặc Deep C)
- [ ] Văn bản ưu đãi địa phương còn hiệu lực (nếu có PDF/HTML công khai)

**3 nguồn P0 cần verify (KIM-084):** `LAW-INVESTMENT-2020`, `DECREE-INVESTMENT-31-2021`, `LAW-ENVIRONMENT-2020` — kiểm tra văn bản sửa đổi/bổ sung trước khi dùng trong Cẩm nang.

---

## D. Nghiên cứu sâu — Số liệu & thị trường (P1)

| Kim | CL | Việc | Output | Hạn |
|-----|-----|------|--------|-----|
| KIM-082 | CL-007 | **Map 20 nhà máy TQ** tại TN + HP | Bảng trong [fdi-data](/docs/04-research/2026-07/fdi-data) §8 action #3 | 2026-07-30 |
| KIM-085 | CL-010 | **Cập nhật fdi-data** sau field (FDI theo quốc gia tại 2 tỉnh) | [fdi-data](/docs/04-research/2026-07/fdi-data) + [fdi-data-deep-dive](/docs/04-research/2026-07/fdi-data-deep-dive) | 2026-07-28 |
| KIM-086 | — | **Infographic 1 trang** "Vì sao TN + HP" | PDF/MD phụ lục hoặc slide trong [why-tn-hp](/docs/04-research/2026-07/why-tn-hp) | 2026-07-25 |
| KIM-087 | — | Subscribe báo cáo quý **Cục Đầu tư nước ngoài** | Ghi email/list trong fdi-data | 2026-07-15 |

**Cột bảng map nhà máy (KIM-082):** Tên DN · Quốc gia gốc · Tỉnh/KCN · Ngành · Năm IRC (ước) · Nguồn · Ghi chú LONGTV (Tier 2/3? xuất khẩu?).

---

## E. Desk chuyên đề (P1–P2)

| Kim | CL | Việc | Output | Hạn |
|-----|-----|------|--------|-----|
| KIM-083 | CL-011 | **Desk note quy trình EPE** tại Thái Nguyên | § mới trong [thai-nguyen-fdi-policy](/docs/04-research/2026-07/thai-nguyen-fdi-policy) hoặc [hp-tn-operational-matrix](/docs/03-departments/01-chien-luoc/hp-tn-operational-matrix) | 2026-07-28 |

Hỏi Sở KH&ĐT / Hải quan khi call KIM-010: điều kiện EPE, đầu mối, timeline điển hình.

**Theo dõi (không gấp):**

- Memo WTO logistics FDI → [all-in-one-licensed-entities](/docs/03-departments/02-phap-ly/all-in-one-licensed-entities)
- Giấy phép con PL-002 → phối hợp Pháp lý khi có khách pilot

---

## Definition of Done

| Loại việc | Done khi |
|-----------|----------|
| Field call | Có tên + SĐT đầu mối, ≥3 câu trả lời số liệu, research file cập nhật, Kim `done` |
| Brief | File template điền đủ, Leader duyệt 1 lần (comment OK) |
| URL địa phương | ≥8 URL trong `source-registry.json`, mỗi URL có `title` + `topic` |
| Map 20 NM | ≥15 hàng có nguồn xác minh được; còn lại ghi `desk-estimate` |
| Verify pháp luật | 3 nguồn P0 có ghi chú hiệu lực + link consolidated |
| Infographic | 1 trang A4, dùng được trong pitch / gửi Sở |

---

## Liên kết nhanh

| Công cụ | URL |
|---------|-----|
| Hộp việc Hermes (lọc) | [/kim](/kim) → filter **Hermes** |
| Script gọi điện | [field-call-scripts](/docs/03-departments/01-chien-luoc/field-call-scripts) |
| Ma trận TN/HP | [hp-tn-operational-matrix](/docs/03-departments/01-chien-luoc/hp-tn-operational-matrix) |
| Cẩm nang & registry | [/cam-nang](/cam-nang) |
| TODO Chiến lược | [01-chien-luoc/TODO](/docs/03-departments/01-chien-luoc/TODO) |

---

**Cập nhật:** 2026-07-09 · Giao Hermes thực hiện Wave 2 — field verify là blocker cho investor verdict & scorecard field.
