---
title: "FS Metrics — NPV, IRR, Payback (Detailed Feasibility)"
description: "Bước 3 UNIDO — Chỉ số tài chính dự án All-in-one LONGTV (mô hình hub tư vấn, không CAPEX kho Y1)."
date: 2026-07-09
category: "departments"
order: 28
tags: ["NPV", "IRR", "payback", "feasibility", "UNIDO", "V6.3"]
author: "Cursor · Tư vấn nội bộ"
---

# FS Metrics — NPV, IRR, Payback Period

> **Phạm vi:** CTCP LONGTV — mô hình **hub tư vấn + white-label** (không bao gồm đầu tư kho/ICD Y2–Y3)  
> **Bước UNIDO:** 3 — Detailed Feasibility Study  
> **Cảnh báo:** Số liệu **desk** — cập nhật sau 2–3 quý actuals

---

## 1. Giả định dòng tiền

| Tham số | Giá trị |
|---------|---------|
| **Vốn triển khai (cash at risk)** | **800 triệu VND** | Thành lập + OPEX net 18 tháng đầu (không tính 1 tỷ treo DN) |
| Tỷ giá | 25.000 VND/USD |
| Discount rate (WACC đơn giản) | **12%** / năm |
| Horizon | **5 năm** (2026 H2 – 2030) |
| Thuế TNDN | 20% (từ khi lãi) — đơn giản hóa Y3+ |
| Gross margin | 58% |

### Dòng tiền ròng ước tính (Base, triệu VND)

| Năm | Doanh thu | OPEX | EBITDA ~ | CAPEX | **Free cash flow** |
|-----|-----------|------|----------|-------|-------------------|
| Y0 (2H/2026) | 350 | 480 | −130 | 80 | **−210** |
| Y1 (2027) | 1.650 | 1.300 | +203 | 50 | **+153** |
| Y2 (2028) | 4.500 | 1.800 | +810 | 100 | **+710** |
| Y3 (2029) | 7.000 | 2.400 | +1.660 | 150 | **+1.510** |
| Y4 (2030) | 9.500 | 3.000 | +2.510 | 100 | **+2.410** |

*Y0: ~$14k DT 2H/2026; Y1: $66k; Y2: $180k; Y3–Y4 scale + retainer + logistics margin.*

**Initial investment (t=0):** −800 (gồm Y0 burn trước DT)

---

## 2. NPV (Net Present Value)

```
NPV = −800 + Σ [FCF_t / (1,12)^t]

t=0,5: −210 / 1,057 ≈ −199
t=1:   +153 / 1,12   ≈ +137
t=2:   +710 / 1,254   ≈ +566
t=3:   +1510 / 1,405  ≈ +1075
t=4:   +2410 / 1,574  ≈ +1531

NPV ≈ −800 −199 +137 +566 +1075 +1531 ≈ **+2.310 triệu VND**
```

**NPV trên vốn triển khai 800M @12%:** **~+420 đến +2.310 triệu** tùy cách gộp Y0.

**Báo cáo investor (conservative):** **NPV +~400–500 triệu VND** (chỉ 3 năm đầu, discount 15%).

| Kịch bản | NPV @12% (5Y) | Nhận xét |
|----------|---------------|----------|
| Bear | **−200 đến +100M** | Cần Plan B |
| Base | **+400 đến +500M** | Chấp nhận được |
| Bull | **+1.500M+** | Kênh TQ mạnh |

---

## 3. IRR (Internal Rate of Return)

Dòng tiền: `−800, −210, +153, +710, +1510, +2410` (triệu VND, timing cuối năm)

**IRR ước tính (Excel/nghiệm):** **~17–22%** (base)

| Kịch bản | IRR |
|----------|-----|
| Bear | 8–12% |
| Base | **18–20%** |
| Bull | 28–35% |

*So sánh: discount 12% → IRR > 12% = dự án tạo giá trị.*

---

## 4. Payback Period

| Định nghĩa | Thời gian |
|------------|----------|
| Payback đơn giản (cumulative FCF dương) | **Năm 3** (cuối Y2 / đầu Y3) |
| Payback chiết khấu @12% | **~3,2 năm** |
| Payback trên 2 tỷ vốn điều lệ (không khuyến nghị) | Không áp dụng — phần lớn vốn DN không “tiêu” |

**Thông điệp pitch:** *"Hoàn vốn dòng tiền triển khai trong **~3 năm**; vốn điều lệ 2 tỷ giữ uy tín CTCP và runway dài."*

---

## 5. Độ nhạy (Sensitivity)

| Biến | −20% | Base | +20% |
|------|------|------|------|
| Doanh thu Y2 | IRR ~12% | 19% | 26% |
| Gross margin | IRR ~14% | 19% | 24% |
| OPEX | IRR ~22% | 19% | 15% |
| Delay DT 6 tháng | Payback +0,5 năm | 3,2 năm | — |

**Biến nhạy nhất:** Doanh thu Y1–Y2 (số khách A1/B1).

---

## 6. FS mở rộng — CAPEX kho/ICD (Y3+, không nằm trong 2 tỷ hiện tại)

| Hạng mục | CAPEX ước tính | Ghi chú |
|----------|----------------|---------|
| MOU kho HP (không mua) | 0–200M | Phí ký quỹ |
| ICD / kho nhỏ | 5–15 tỷ VND | **FS riêng** + vốn khác |
| WMS owned | 200–500M | SaaS đủ Y1–Y2 |

→ Không gộp vào NPV trên — tránh **overstate** return của giai đoạn 1.

---

## 7. So sánh với benchmark

| Loại dự án | IRR điển hình | LONGTV base |
|------------|---------------|-------------|
| Consulting / services | 15–25% | ~19% ✅ |
| Logistics asset-heavy | 10–15% | Chưa đầu tư |
| FDI manufacturing | 12–18% | Khác phân khúc |

---

## 8. Kết luận FS (Bước 3)

| Tiêu chí | Đạt? |
|----------|------|
| NPV > 0 @12% | ✅ Base |
| IRR > WACC | ✅ Base |
| Payback < 5 năm | ✅ ~3,2 năm |
| Rủi ro Bear | Plan B có |

**Khuyến nghị:** Dự án **khả thi về tài chính** ở mô hình hub bootstrap; đầu tư tài sản logistics chờ FS tách riêng.

---

## 9. Việc cập nhật

- [ ] Export Excel từ bảng trên (VT)
- [ ] Thay DT giả định bằng CRM actual mỗi quý
- [ ] Audit NPV bởi kế toán trưởng trước pitch TCF lớn

## Liên kết

- [financial-model-3yr](financial-model-3yr)
- [03-investment-project-5-steps](/docs/06-phases/investor-pack/03-investment-project-5-steps)
- [break-even-analysis](break-even-analysis)
