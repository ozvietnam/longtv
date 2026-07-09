---
title: "Playbook vận hành sản xuất — NM FDI TQ tại Việt Nam (G5)"
description: "Chi tiết quy trình hoạt động sản xuất: hải quan, logistics, thuế, lao động — map dịch vụ LONGTV."
date: 2026-07-09
category: "departments"
order: 27
tags: ["operations", "G5", "manufacturing", "customs"]
author: "Cursor"
---

# Playbook vận hành sản xuất tại Việt Nam (G5)

> **Đối tượng:** Nhà máy FDI Trung Quốc **đã có IRC**, đang hoặc sắp sản xuất tại TN/HP/miền Bắc.  
> **Map dịch vụ:** [service-catalog-v1](service-catalog-v1) · **Vòng đời:** [fdi-lifecycle-full-map](fdi-lifecycle-full-map)

---

## 1. Mô hình nhà máy typic (NM TQ Tier 2–3)

| Yếu tố | Mô tả |
|--------|-------|
| Quy mô | 50–300 công nhân, 1–2 xưởng |
| Ngành | Linh kiện điện tử, cơ khí, dệt may, lắp ráp |
| NVL | 40–80% nhập từ TQ hoặc ASEAN |
| Thành phẩm | Nội địa VN + xuất Mỹ/EU/ASEAN |
| Chế độ hải quan | **Gia công (EPE)** hoặc **SXKD thông thường** |
| Pháp nhân | CTCP 100% vốn ngoại hoặc liên doanh |

---

## 2. Sơ đồ chuỗi giá trị sản xuất

```
[TQ / ASEAN]          [Cảng HP / HCM]         [KCN TN/HP]
     │                      │                      │
     ▼                      ▼                      ▼
 Nhập NVL  ──────►  Thông quan  ──────►  Kho NVL  ──► Sản xuất ──► Kho TP ──► Xuất khẩu
     │                      │                      │         │           │
     └──────────────────────┴──────────────────────┴─────────┴───────────┘
                                    Hải quan + VAT + CIT
                                    BHXH + lao động
                                    Kế toán + kiểm toán
```

---

## 3. G5a — Hải quan & xuất nhập khẩu

### 3.1. Thiết lập ban đầu (một lần)

| # | Việc | Cơ quan | Dịch vụ LONGTV |
|---|------|---------|----------------|
| 1 | Đăng ký tài khoản hải quan điện tử | HQ | **B1** |
| 2 | Phân loại HS code (NVL + TP) | Nội bộ | **B1** + Oz |
| 3 | Đăng ký chế độ EPE (nếu gia công) | HQ | B1 🤝 |
| 4 | Khai báo BOM / định mức (EPE) | HQ | **B3** |
| 5 | Ký hợp đồng đại lý HQ (nếu dùng) | Forwarder | B2 |

### 3.2. Vận hành hàng ngày / theo lô

| Loại hàng | Tờ khai | Điểm lưu ý NM TQ |
|-----------|---------|------------------|
| NVL nhập từ TQ | NK | Invoice, packing list, C/O, phí vận chuyển |
| Linh kiện nội địa VN | Mua nội địa + VAT đầu vào | Chọn NCC có hóa đơn đỏ |
| Thành phẩm xuất | XK | Đối soát BOM EPE — **sai lệch = phạt** |
| Máy móc tạm nhập | Tạm nhập | Thời hạn tái xuất |
| Phế liệu / scrap | XK hoặc tiêu hủy | Quy định môi trường |

### 3.3. Rủi ro thường gặp (NM TQ)

| Rủi ro | Hậu quả | Giảm thiểu |
|--------|---------|------------|
| Khai sai HS code | Phạt, truy thu thuế | B1 + Oz lookup |
| BOM EPE không khớp thực tế | Phạt nặng | B3 đối soát định kỳ |
| Invoice related-party | Transfer pricing | H3 + CPA |
| Dùng hóa đơn không hợp lệ | Không khấu trừ VAT | H3 review NCC |

**Gói LONGTV:** **B1** (setup) → **B3** (retainer 6–12 tháng).

---

## 4. G5b — Logistics

| Tuyến | Mô tả | Dịch vụ |
|-------|-------|---------|
| **T1** | TQ (Guangdong/Fujian) → Hải Phòng (cảng) | B2 |
| **T2** | Cảng → KCN Thái Nguyên (đường bộ) | B2 |
| **T3** | KCN ↔ kho vật tư nội địa | B2 đối tác |
| **T4** | TP xuất → cảng → khách | B2 |

**KPI logistics:** Lead time door-to-door, chi phí/cont, tỷ lệ hàng hư hỏng.

---

## 5. G5c — Sản xuất & chất lượng

| Hạng mục | LONGTV | Ghi chú |
|----------|--------|---------|
| SOP sản xuất | ⬜ Không core | Khách TQ tự có hoặc đối tác ISO |
| Kiểm soát chất lượng | ⬜ | |
| An toàn lao động | 🤝 HR | Bắt buộc pháp luật VN |
| Giấy phép ngành (thực phẩm, hóa chất…) | 🤝 | Tùy ngành |

**LONGTV chỉ can thiệp** khi liên quan **hải quan đầu rao** (BOM, định mức hao hụt).

---

## 6. G5d — Tài chính, thuế, kiểm toán

### Chu kỳ báo cáo

| Chu kỳ | Việc | Bên làm |
|--------|------|---------|
| **Tháng** | Báo cáo VAT, hóa đơn | H3 CPA |
| **Quý** | Tạm nộp CIT (nếu có) | H3 |
| **Năm** | Quyết toán CIT, kiểm toán BCTC | H3 |
| **Năm** | Báo cáo lao động, BHXH | HR-02 |
| **Ad-hoc** | Thanh tra thuế, chuyển giá | H3 + luật |

### Chế độ thuế NM FDI (tham chiếu)

| Loại | Ghi chú |
|------|---------|
| CIT | Ưu đãi vùng — xem [provincial-incentives](/docs/04-research/2026-07/provincial-incentives) |
| VAT | 0% xuất khẩu; khấu trừ đầu vào |
| Thuế xuất khẩu | Tùy mặt hàng |
| Transfer pricing | Giao dịch công ty TQ mẹ–con VN |

---

## 7. G5e — Lao động & BHXH

| # | Việc | Tần suất | Dịch vụ |
|---|------|----------|---------|
| 1 | HĐLĐ lao động VN | Mỗi người | HR-02 🤝 |
| 2 | BHXH, BHYT, BHTN | Tháng | HR-02 |
| 3 | Lương tối thiểu vùng | Check hàng năm | HR-02 |
| 4 | GPLĐ người TQ (≤10% hoặc theo hạn mức) | 2 năm/lần | B2 add-on |
| 5 | Nội quy lao động, thỏa ước | Một lần + cập nhật | HR 🤝 |
| 6 | Sa thải / tranh chấp | Ad-hoc | Luật 🤝 |

**Mức lương tối thiểu vùng I (2026):** cần tra cứu mỗi năm — đưa vào báo cáo A1 phần chi phí.

---

## 8. Chu kỳ năm của một NM (calendar)

| Tháng | Việc điển hình |
|-------|----------------|
| T1 | Quyết toán CIT năm trước; kế hoạch SX |
| T2 | Cập nhật lương tối thiểu (nếu NĐ mới) |
| T3 | Kiểm toán BCTC |
| T4–T9 | Peak SX; kiểm tra BOM EPE |
| T10 | Rà soát hợp đồng thuê KCN |
| T11–T12 | Budget năm sau; xem G6/G7/G8 |

---

## 9. Dấu hiệu khách cần G7 hoặc G8

| Dấu hiệu | Giai đoạn | Gợi ý dịch vụ |
|----------|-----------|---------------|
| “Thuê đất tăng 30%” | G7 | G7-01 |
| “Khách chuyển đơn sang Thái Lan” | G8 | G8-01 |
| “Mẹ TQ muốn gom về một NM” | G7/G8 | G7 hoặc M&A 🤝 |
| “Liên tục lỗ 24 tháng” | G8 | G8-Pack |
| “Mở thêm xưởng HP” | G6/G7 | A1 HP + A3-PM |

**LONGTV proactive:** Retainer B3/H3 — review hàng quý, flag sớm.

---

## 10. Checklist “NM chạy ổn” (health check)

Dùng cho gói **C1** hoặc upsell audit:

- [ ] Tài khoản HQ active, không nợ phạt
- [ ] BOM EPE khớp sản xuất thực tế (± hao hụt cho phép)
- [ ] Quyết toán CIT/VAT đúng hạn 12 tháng qua
- [ ] BHXH đủ cho 100% lao động
- [ ] GPLĐ người TQ còn hiệu lực
- [ ] HĐ thuê KCN còn ≥12 tháng hoặc có kế hoạch gia hạn
- [ ] Kiểm toán không có ý kiến ngoại trừ nghiêm trọng

---

## Liên kết

- [Catalog v1](service-catalog-v1)
- [SOP B1 hải quan](/docs/07-operations/sop-b1-on-site)
- [Số liệu FDI đào sâu](/docs/04-research/2026-07/fdi-data-deep-dive)
