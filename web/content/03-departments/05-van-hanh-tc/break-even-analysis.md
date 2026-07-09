---
title: "Phân tích hòa vốn — LONGTV"
description: "V6.3 — Số deal/tháng và thời điểm hòa vốn vận hành với burn 90–125M và margin 58%."
date: 2026-07-09
category: "departments"
order: 27
tags: ["finance", "break-even", "V6.3"]
author: "Cursor · Tư vấn nội bộ"
---

# Phân tích hòa vốn — LONGTV (V6.3)

> **Công thức cốt lõi:** `Doanh thu × Gross margin ≥ OPEX` → hòa vốn vận hành

---

## 1. Tham số hiện tại

| Tham số | Giá trị | Nguồn |
|---------|---------|-------|
| OPEX tháng (bootstrap) | **55–75M** VND | T7–T9, chưa full sales |
| OPEX tháng (full lean) | **90–125M** VND | [burn-tracker](burn-tracker) |
| Gross margin | **58%** | [financial-model-3yr](financial-model-3yr) |
| A1 trung bình | **$3.250** ≈ **81M** VND | Pricing mid |
| B1 trung bình | **$10.000** ≈ **250M** VND | |
| Bundle Khởi đầu | **$3.200** ≈ **80M** VND | |

---

## 2. Hòa vốn tháng (full lean)

**OPEX = 100M/tháng** (làm tròn)

```
Doanh thu cần = OPEX / GM = 100M / 0.58 ≈ 172M VND/tháng
               ≈ $6.900 USD/tháng
```

### Quy đổi sang deal

| Mix doanh thu tháng | Deal tương đương |
|---------------------|------------------|
| 100% A1 | **~2,1 deal A1/tháng** |
| 70% A1 + 30% B1 | **~1,5 A1 + 0,2 B1/tháng** |
| 50% A1 + 50% B1 | **~1,1 A1 + 0,35 B1/tháng** |
| 1 B1/tháng | Dư ~48M GP — đủ cover OPEX |

**Kết luận:** Với team full lean, cần **~2 gói A1/tháng** hoặc **~1 B1/2–3 tháng** để hòa vốn vận hành.

---

## 3. Hòa vốn bootstrap (T7–T9)

**OPEX = 65M/tháng**

```
Doanh thu cần = 65M / 0.58 ≈ 112M VND/tháng ≈ $4.500/tháng
```

→ **~1,4 A1/tháng** hoặc **1 A1 + retainer nhỏ**.

Giai đoạn đầu **chưa có 2 sales full** — hòa vốn không phải mục tiêu T7–T8; mục tiêu là **1 Won trong 60 ngày**.

---

## 4. Thời điểm hòa vốn (timeline)

| Giai đoạn | OPEX/tháng | Doanh thu/tháng (base) | Trạng thái |
|-----------|------------|------------------------|------------|
| T7–T8/2026 | 55–65M | 0–20M | 🔴 Burn |
| T9–T10/2026 | 75–90M | 30–60M | 🔴 Burn |
| T11–T12/2026 | 90–100M | 50–80M | 🟡 Gần |
| Q1/2027 | 100–110M | 80–120M | 🟡 Hòa vốn tháng tốt |
| Q2/2027 | 110–125M | 120–180M | 🟢 Hòa vốn ổn định |

**Hòa vốn vận hành ổn định (base):** **Tháng 14–18** kể từ T7/2026 (~Q2/2027).

**Hòa vốn tích lũy (đã bù hết lỗ lũy kế):** **Tháng 24–30** (Y2) — bình thường với consulting.

---

## 5. Điểm hòa vốn theo kịch bản

| Kịch bản | Tháng hòa vốn vận hành | Điều kiện |
|----------|------------------------|----------|
| Bear | Tháng 20–24 hoặc không | ≤1 deal/quý |
| Base | Tháng 14–18 | 2 A1/quý + 1 B1/nửa năm |
| Bull | Tháng 10–12 | Kênh TQ mạnh + 2 B1/năm |

---

## 6. Đòn bẩy cải thiện hòa vốn

| Hành động | Tiết kiệm / tháng | Trade-off |
|-----------|-------------------|-----------|
| Delay sales #2 đến có 1 Won | 10–15M | Chậm pipeline |
| Virtual thay co-working | 5–10M | Ít không gian họp |
| Cắt marketing 50% (Plan B) | 5–8M | Ít lead |
| Tăng giá A1 floor $3.5k | +10% revenue/deal | Mất price-sensitive |
| Retainer C1 sau B1 | 37M/khách/tháng | Cần delivery tốt |

---

## 7. Ngưỡng cảnh báo

| Chỉ số | Ngưỡng vàng | Ngưỡng đỏ |
|--------|-------------|-----------|
| Doanh thu rolling 3 tháng | ≥150M | <80M |
| Deal/tháng (quy đổi A1) | ≥1.5 | <0.5 |
| Runway | ≥9 tháng | <6 tháng |
| Gross margin thực | ≥55% | <45% |

→ Kích hoạt [Plan B](/docs/04-research/2026-07/plan-b-no-revenue) khi **2 chỉ số đỏ** cùng lúc.

---

## 8. Slide pitch (1 slide)

**Break-even:** ~2 A1/month at $3.25k · Target month 15 (Q2 2027) · 2B capital = 18+ months runway at full burn

---

## Liên kết

- [Financial model 3yr](financial-model-3yr)
- [Use of funds](use-of-funds-2b)
- [KPI tháng](kpi-thang)
