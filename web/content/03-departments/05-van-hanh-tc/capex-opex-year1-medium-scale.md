---
title: "CAPEX & OPEX năm 1 — Quy mô tầm trung (HP + TN)"
description: "Bảng tổng hợp nhu cầu vốn 6,65 tỷ VND — 2 chi nhánh All-in-one; đối chiếu kịch bản bootstrap 2 tỷ."
date: 2026-07-09
category: "departments"
order: 31
tags: ["CAPEX", "OPEX", "finance", "excel", "hai-phong", "thai-nguyen"]
author: "Cursor · Tư vấn nội bộ"
---

# CAPEX & OPEX năm 1 — Quy mô tầm trung

> **File Excel:** [financial-plan-all-in-one-year1.xlsx](financial-plan-all-in-one-year1.xlsx)  
> **Tái tạo file:** `python3 scripts/generate-financial-plan-excel.py`  
> **Quy mô:** Doanh nghiệp tầm trung — 2 chi nhánh vật lý, kho thuê, ~16–18 FTE ([headcount-matrix](all-in-one-headcount-matrix))

---

## 1. Tóm tắt nhu cầu vốn năm đầu

| Hạng mục | Hải Phòng (VND) | Thái Nguyên (VND) | **Tổng hệ thống** | Tỷ trọng |
|----------|-----------------|-------------------|-------------------|----------|
| **1. CAPEX** | 845,000,000 | 615,000,000 | **1,460,000,000** | 22,0% |
| **2. OPEX** | 2,876,000,000 | 2,314,000,000 | **5,190,000,000** | 78,0% |
| **TỔNG NĂM 1** | **3,721,000,000** | **2,929,000,000** | **6,650,000,000** | 100% |

*Làm tròn tỷ trọng từ tổng 6,65 tỷ.*

---

## 2. So sánh 2 kịch bản vốn

| Kịch bản | Nhu cầu năm 1 | Khi nào dùng |
|----------|---------------|--------------|
| **Bootstrap** ([use-of-funds-2b](use-of-funds-2b)) | **~2,0 tỷ** vốn điều lệ + ~500M ops | **Y1 hiện tại** — virtual office, MOU đối tác |
| **Tầm trung** (file này) | **6,65 tỷ** | **Y2–Y3** — 2 VP + kho + full team |
| **Chênh lệch** | **~4,65 tỷ** | Gọi vốn vòng 2 / tín dụng / giải ngân theo mốc |

**Kết luận tư vấn:** Số liệu **6,65 tỷ** là **mục tiêu vận hành trơn tru** (đúng bảng nhân sự anh mô tả) — **không** thay thế quyết định **2 tỷ bootstrap** đã chốt QĐ #003. Dùng file Excel để pitch **lộ trình scale** và **nhu cầu vốn giai đoạn 2**.

---

## 3. Chi tiết CAPEX (1,46 tỷ)

| Hạng mục | HP | TN | Ghi chú |
|----------|-----|-----|---------|
| Giấy phép & pháp lý thương hiệu | 185M | 140M | MOU công ty luật, mã đại lý HQ, GP bưu chính |
| Hạ tầng VP (cọc + nội thất tiếp khách TQ) | 385M | 295M | HP Lê Hồng Phong/Đình Vũ · TN Yên Bình |
| CNTT (WMS, CRM, ECUS5-VNACCS) | 275M | 180M | Bản quyền / setup năm 1 |
| **Tổng CAPEX** | **845M** | **615M** | **1,46 tỷ** |

→ [all-in-one-licensed-entities](/docs/03-departments/02-phap-ly/all-in-one-licensed-entities)

---

## 4. Chi tiết OPEX (5,19 tỷ / năm)

| Hạng mục | HP | TN | Ghi chú |
|----------|-----|-----|---------|
| Lương — pháp lý (IRC, ERC, ĐTM, PCCC) | 960M | 720M | 4 + 3 FTE |
| Lương — logistics (HQ, kho hiện trường) | 1.080M | 648M | Chứng chỉ TCHQ |
| Lương — BD/PM (HSK 5–6) | 360M | 312M | Guanxi |
| Thuê kho & bốc xếp | 336M | 280M | Consolidation HP · phụ trợ TN |
| Marketing TQ (Baidu, WeChat, hội thảo) | 80M | 60M | |
| Thuê VP (OPEX) + điện nước | 36M | 30M | Sau cọc CAPEX |
| Tuyển dụng / HR (TN) | — | 150M | Cạnh tranh LĐ Samsung hub |
| SaaS, đi lại, admin | 24M | 114M | |
| **Tổng OPEX** | **2.876M** | **2.314M** | **5,19 tỷ** |

---

## 5. Hướng dẫn file Excel

| Tab | Nội dung |
|-----|----------|
| **Tổng Quan Dự Án** | Bảng tổng hợp `=SUM()` / tham chiếu CAPEX & OPEX · so sánh 2 tỷ vs 6,65 tỷ |
| **CAPEX** | 3 dòng chi tiết × 2 tỉnh — sửa ô số → tổng tự cập nhật |
| **OPEX** | 8 dòng chi tiết × 2 tỉnh — phân tách HP (đô thị loại I, cận cảng) vs TN |

**Cách dùng:** Nhân đôi file → chỉnh % lương / m² thuê kho theo báo giá thực → cập nhật [financial-model-3yr](financial-model-3yr) kịch bản Bull.

---

## 6. Liên kết UNIDO Bước 3

| Chỉ số | Bootstrap (2B) | Tầm trung (6,65B) |
|--------|----------------|-------------------|
| NPV @12% | +400–500M ([fs-metrics](feasibility-study-fs-metrics)) | Cần DT scale Y2 |
| IRR | ~19% | Cần model riêng |
| Payback | ~3,2 năm | ~4–5 năm (ước desk) |

---

## 7. Việc Leader

- [ ] Xác nhận kịch bản pitch: **2 tỷ now** + **6,65 tỷ scale roadmap**
- [ ] Điền báo giá thực VP HP (Lê Hồng Phong) vào tab CAPEX
- [ ] KIM-075: chọn Bear/Base/Bull có tính đến giai đoạn tầm trung

## Liên kết

- [Operational Manual](/docs/07-operations/all-in-one-operational-manual)
- [Investor pack](/docs/06-phases/investor-pack/00-index)
