---
title: "Mô hình tài chính 3 năm — LONGTV"
description: "Dự phóng khách hàng, doanh thu, chi phí và runway: 6 tháng, 1 năm, 2 năm (Bear/Base/Bull)."
date: 2026-07-09
category: "departments"
order: 25
tags: ["finance", "forecast", "V6.4", "revenue", "VT"]
author: "Cursor · Tư vấn nội bộ"
---

# Mô hình tài chính 3 năm — LONGTV

> **Owner:** Vận hành & TC · **Cập nhật:** Hàng quý sau khi có actuals  
> Tham chiếu: [QĐ #003](/docs/decisions/003-strategy-july-2026) · [pricing-official](/docs/03-departments/03-kinh-doanh/pricing-official) · [org-model](/docs/03-departments/00-org-model)

---

## 1. Giả định chung

| Giả định | Giá trị | Ghi chú |
|----------|---------|---------|
| Tỷ giá quy đổi | **25.000 VND/USD** | Báo cáo nội bộ |
| Vốn điều lệ | **2.000 triệu VND** | CTCP |
| Văn phòng | Virtual **3–5M/tháng** T7–T12; co-working +5M từ T1/2027 nếu ≥3 khách/tháng | |
| Headcount | 8–10 (T7–9) → 12–15 (T10–12) → 18–25 (Y2) | [org-model](/docs/03-departments/00-org-model) |
| Giá trung bình A1 | **$3.250** | Mid-range pricing |
| Giá trung bình B1 | **$10.000** + CPEX đi lại ~$500–1k | |
| Bundle Khởi đầu TN | **$3.200** | |
| Bundle Full Setup | **$16.000** | |
| Retainer C1 | **$1.500/tháng** | Từ khách tháng 6+ sau B1 |
| Gross margin dịch vụ | **58%** consulting · **18–28%** logistics giao dịch | Tách margin — xem [logistics-pricing-benchmark](/docs/04-research/2026-07/logistics-pricing-benchmark) |
| GP blended (năm 1) | **~35–42%** | Mix consulting + logistics tăng dần |
| Pilot discount | **30%** cho 3 khách đầu | Case study |
| **Logistics — cont/tháng (tháng 6)** | Bear 15 · Base 65 · Stretch **500** | Mục tiêu anh: 500 cont = Bull 12–18T, không Base 6T |
| **GP/cont logistics (desk)** | **~980k VND** (~14%) | HQ + trucking + C/O blended |
| **Giá khai báo xuất (desk)** | 750k VND/cont bán | Cost đối tác ~500k |
| **Trucking HP→TN 20DC** | 5,9M bán / 5,35M cost | Markup ~10% |

---

## 2. Cấu trúc chi phí (OPEX)

### Giai đoạn bootstrap (T7–T9/2026) — ~55–75M/tháng

| Hạng mục | VND/tháng |
|----------|-----------|
| TGĐ (lương / thù lao) | 25–35M |
| 2 Sales (1 full T8+, 1 part T9) | 15–25M |
| Virtual office + SaaS | 5–8M |
| Marketing / GTM | 8–12M |
| Kế toán thuê ngoài + admin | 5–8M |
| Đi lại (trung bình) | 5–10M |
| **Tổng** | **63–98M** |

### Giai đoạn first revenue (T10–T12/2026) — ~90–125M/tháng

| Hạng mục | VND/tháng |
|----------|-----------|
| Lương full team 8–10 | 60–90M |
| Văn phòng + công cụ | 5–10M |
| Marketing | 10–15M |
| Đi lại (tăng theo B1) | 10–20M |
| **Tổng** | **85–135M** |

### Năm 2 (2027) — ~120–160M/tháng

+1 Sales Exec, PM dự án onsite, spike pháp lý theo deal.

---

## 3. Dự phóng theo mốc thời gian

### 3.1. Sau 6 tháng (T7–T12/2026)

> **Cập nhật 2026-07-09:** Bổ sung doanh thu **logistics giao dịch** (hải quan + trucking + C/O) — có thể phát sinh **độc lập** gói A1. Benchmark: [logistics-pricing-benchmark](/docs/04-research/2026-07/logistics-pricing-benchmark).

| Chỉ số | Bear | Base | Bull (Stretch logistics) |
|--------|------|------|--------------------------|
| **Khách trả phí consulting (tích lũy)** | 1 | 3–4 | 5–6 |
| A1 / bundle | 1 | 2–3 | 3–4 |
| B1 setup / B3 retainer | 0 | 1 (B1) + 0–1 B3 | 1–2 |
| **Cont xử lý (tích lũy 6T)** | 60–90 | **200–350** | **1.500–2.000** (~500/tháng T12) |
| Khách logistics-only | 0–1 | 1–2 | 3–5 |
| **Doanh thu consulting USD** | 2.3k* | 12–18k | 22–30k |
| **Doanh thu logistics VND** | 60–90M | **250–450M** | **10–14 tỷ** |
| **Tổng doanh thu VND** | ~120–150M | **450–750M** | **11–15 tỷ** |
| **OPEX 6T tích lũy** | ~400M | ~480M | ~650–800M |
| **Gross profit blended** | ~30–45M | **120–200M** | **1,7–2,5 tỷ** |
| **Net (GP − OPEX)** | **−355M** | **−280 đến −360M** | **+0,9 đến +1,8 tỷ** |
| Pipeline qualified | 3 | 8–10 | 15+ |

*\*Bear consulting: 1 A1 pilot giảm 30% ($3.25k × 0.7)*

**Cách đọc mục tiêu 500 cont/tháng:**

| Mức | Ý nghĩa | Khả thi tháng 6? |
|-----|---------|------------------|
| **500 cont/tháng** | ~3,6 tỷ DT logistics/tháng · cần 3–8 NM lớn | 🟡 **Stretch** — chỉ Bull nếu có anchor sẵn |
| **50–80 cont/tháng** | ~400–600M DT logistics/tháng | ✅ **Base** với 2–3 NM + MOU GPLS |
| **15–20 cont/tháng** | Pilot 1 NM | ✅ Bear / tháng 1–2 |

**Nhận xét 6 tháng:** Consulting vẫn chưa hòa vốn ở Base. **Logistics có thể mang dòng tiền sớm hơn** nếu ký B3 retainer hoặc NM đang xuất khẩu — nhưng margin **~14–22%** trên cont, không phải 58%. Mục tiêu 500 cont đặt làm **đỉnh Bull** hoặc mốc **tháng 12–18**, không thay thế Base planning.

---

### 3.2. Sau 1 năm (T7/2026 – T6/2027)

| Chỉ số | Bear | Base | Bull |
|--------|------|------|------|
| **Khách tích lũy** | 4–5 | 8–12 | 15–18 |
| Khách active (có HĐ trong 90 ngày) | 2–3 | 5–7 | 8–10 |
| **Doanh thu năm USD** | 18–25k | 55–80k | 100–130k |
| **Doanh thu VND** | 450M–625M | 1,4–2,0 tỷ | 2,5–3,3 tỷ |
| OPEX năm | ~1,1 tỷ | ~1,3 tỷ | ~1,5 tỷ |
| Gross profit | ~260–360M | ~810M–1,16 tỷ | ~1,45–1,9 tỷ |
| **EBITDA** | **−750M đến −840M** | **−140M đến +160M** | **−50M đến +400M** |
| Retainer khách (cuối năm) | 0–1 | 2–4 | 5–8 |
| Headcount | 10–12 | 12–15 | 15–18 |

**Mix doanh thu Base (năm 1):**

| Nguồn | % doanh thu | USD / VND |
|-------|-------------|-----------|
| A1 / A2 | 35% | 20–28k |
| B1 setup / B3 retainer | 25% | 14–20k |
| **Logistics transactional** (HQ+trucking+C/O) | **30%** | **~400–600M VND** |
| Bundle | 5% | 3–5k |
| Retainer C1 (hub) | 5% | 3–4k |

> Năm 1 Base: logistics ~**800–1.200 cont** tích lũy (65–100 cont/tháng cuối năm) — không 500 cont/tháng ngay tháng 6 trừ Bull.

---

### 3.3. Sau 2 năm (T7/2026 – T6/2028)

| Chỉ số | Bear | Base | Bull |
|--------|------|------|------|
| **Khách tích lũy** | 12–15 | 25–35 | 40–50 |
| **Doanh thu năm 2 (chỉ Y2)** | $45–60k | $125–170k | $220–320k |
| **Doanh thu tích lũy 2N** | $63–85k | $180–250k | $320–450k |
| EBITDA margin (Y2) | 0–5% | 12–18% | 22–28% |
| Retainer MRR (cuối Y2) | $1.5–3k | $5–8k | $12–18k |
| Headcount | 15–18 | 20–25 | 28–35 |
| Tỉnh phục vụ | TN + HP | TN + HP + 1 tỉnh | + Bắc Ninh / Hưng Yên |

**Chiến lược doanh thu Y2 (Base):**

- Upsell 40% khách A1 → B1 hoặc bundle
- 2 MOU KCN (giới thiệu lead) → +3–5 lead/năm
- Logistics mảng B: **30%** doanh thu năm 1 (tăng từ 25%) — cont + retainer B3

---

## 4. Bảng doanh thu theo quý (Base case)

| Quý | Khách mới | Doanh thu USD | Doanh thu VND | OPEX VND | Net |
|-----|-----------|---------------|---------------|----------|-----|
| Q3/2026 | 0–1 | 0–3k | 0–75M | 180M | −180M |
| Q4/2026 | 1–2 | 5–8k | 125–200M | 280M | −80 đến −155M |
| Q1/2027 | 2–3 | 10–15k | 250–375M | 330M | −80 đến +45M |
| Q2/2027 | 2–3 | 15–22k | 375–550M | 360M | +15 đến +190M |
| Q3/2027 | 3–4 | 18–25k | 450–625M | 390M | +60 đến +235M |
| Q4/2027 | 2–3 | 12–18k | 300–450M | 400M | −100 đến +50M |
| **Tổng 6Q** | **10–16** | **55–80k** | **1,4–2,0 tỷ** | **~1,94 tỷ** | **−540M đến +60M** |

---

## 5. Runway & vốn

| Kịch bản | Tổng net burn 18 tháng | Còn lại từ quỹ 500M ops | Còn lại từ 2B (nếu dùng tối đa 1,5B ops) |
|----------|------------------------|-------------------------|------------------------------------------|
| Bear | ~1,2 tỷ | ❌ Cần bổ sung hoặc cắt mạnh | ✅ ~500M buffer |
| Base | ~0,6–0,9 tỷ | 🟡 Sát | ✅ ~1,1 tỷ buffer |
| Bull | ~0,3–0,5 tỷ | ✅ | ✅ ~1,5 tỷ buffer |

**Khuyến nghị:** Giữ **≥600M** quỹ vận hành không chạm vào trước tháng 12 — phần còn lại của 2B là vốn DN + dự phòng.

---

## 6. Unit economics (Base)

| Metric | Giá trị | Công thức |
|--------|---------|-----------|
| ARPU khách năm 1 | ~$6.5–7k | $55–80k / 8–12 khách |
| CAC (referral-heavy) | $200–800 | Marketing / khách mới |
| LTV 3 năm (desk) | $25–60k | A1→B1→retainer path |
| LTV/CAC | >30x | Giai đoạn referral |
| Payback CAC | <2 tháng | Sau deal đầu |
| Thời gian A1→B1 | 4–8 tháng | Pipeline assumption |

---

## 7. Cách cập nhật mô hình

1. Ghi **actual** vào [burn-tracker](burn-tracker) hàng tuần
2. CRM: cột Giá trị × Xác suất = **weighted pipeline**
3. Mỗi quý: so sánh Bear/Base/Bull → điều chỉnh headcount
4. Sau deal đầu: thay ARPU giả định bằng **giá thực tế**

---

## 8. Việc tiếp theo (Leader)

- [ ] Xác nhận kịch bản mục tiêu (Bear/Base/Bull) cho năm 1
- [ ] Điền quỹ hoạt động khả dụng vào burn-tracker
- [ ] Review sau Q4/2026 — điều chỉnh Q1/2027 forecast

## Liên kết

- [Use of funds 2B](use-of-funds-2b)
- [Break-even](break-even-analysis)
- [Strategy 3yr](/docs/03-departments/01-chien-luoc/strategy-3yr)
- [Investment verdict](/docs/06-phases/investor-pack/00-investment-verdict)
