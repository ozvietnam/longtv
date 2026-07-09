---
title: "All-in-One — Hạ tầng & Công nghệ (Tech-stack)"
description: "CRM, ECUS-VNACCS, WMS/TMS, văn phòng HP/TN, WeChat — lộ trình theo giai đoạn tránh chồng chéo dữ liệu."
date: 2026-07-09
category: "departments"
order: 30
tags: ["tech", "CRM", "WMS", "ECUS", "infrastructure", "all-in-one"]
author: "Cursor · Sếp Thắng"
---

# All-in-One — Hạ tầng & Công nghệ

> **Mục tiêu:** Một nguồn dữ liệu khách FDI xuyên suốt **Tiếp cận → Khảo sát → Nộp hồ sơ → Vận hành** — không chồng chéo Sheet/email/WeChat rời.

---

## 1. Kiến trúc tổng quan

```
                    ┌─────────────────────────────────┐
                    │     LONGTV Hub (PM + BD)        │
                    │  CRM · Kho tri thức web · WeChat │
                    └───────────┬─────────────────────┘
          ┌─────────────────────┼─────────────────────┐
          ▼                     ▼                     ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ Pháp lý     │      │ Hải quan    │      │ Kho / TMS   │
   │ (đối tác)   │      │ ECUS5-VNACCS│      │ WMS đối tác │
   └─────────────┘      └─────────────┘      └─────────────┘
```

| Lớp | Y1 | Y2 | Y3 |
|-----|----|----|-----|
| **Hub** | Sheet CRM + longtv web | Zoho/HubSpot | + API tích hợp |
| **HQ** | Oz tools + đối tác ECUS | Portal đối tác | Joint account |
| **Kho** | Email + đối tác | WMS read-only khách | TMS tracking |

---

## 2. Hệ thống phần mềm

### 2.1. CRM — theo dõi hành trình NĐT

| Giai đoạn | Công cụ | Chi phí |
|-----------|---------|---------|
| **Y1** | Google Sheet / Notion ([sales-pipeline](/docs/03-departments/03-kinh-doanh/sales-pipeline)) | Miễn phí |
| **Y2** | **Zoho CRM** hoặc HubSpot Starter | ~$15–50/user/tháng |
| **Y3** | CRM + automation WeChat lead | Tùy tích hợp |

**Pipeline stage map All-in-one:**

| Stage CRM | Milestone | Trụ |
|-----------|-----------|-----|
| Lead | A0 | BD |
| Qualified | Budget + timeline | BD |
| Khảo sát | A1 kickoff | PM |
| Nộp hồ sơ | IRC filed | Pháp lý |
| Thành lập | ERC + MST | Pháp lý |
| Vận hành | Tờ khai #1 | Logistics |
| Retainer | C1 active | PM |

### 2.2. Phần mềm khai Hải quan — ECUS5 / VNACCS

| Hạng mục | Chi tiết |
|----------|----------|
| **Y1** | Đối tác đại lý HQ khai thay — LONGTV **không** mở tài khoản ECUS |
| **Y2** | MOU: LONGTV nhân viên được cấp user phụ trên hệ đối tác |
| **Y3** | Đánh giá đăng ký **tài khoản đại lý** riêng (nếu đủ NV có chứng chỉ) |

**Điều kiện:** Chứng chỉ nghiệp vụ HQ TCHQ — [headcount-matrix](all-in-one-headcount-matrix)

**Công cụ nội bộ hiện có:** Oz HQ tools (pre-ECUS checklist, HS draft)

### 2.3. WMS & TMS — kho và vận tải

| Hệ thống | Chức năng | Giai đoạn |
|----------|-----------|-----------|
| **WMS** | Tồn kho, repack, labeling | Y2 MOU kho HP |
| **TMS** | Container tracking, Lạch Huyện → NM | Y2 |
| **Portal khách** | Real-time tra cứu (web/TQ) | Y3 |

**Y1:** Báo cáo tuần PDF/WeChat — không đầu tư WMS owned.

### 2.4. Kho tri thức & website

| Hạng mục | Trạng thái |
|----------|------------|
| Web 3 ngôn ngữ (VN/CN/EN) | 🟡 VN đủ; CN pitch/onpager |
| `/docs`, `/services`, `/kim` | ✅ |
| Oz longtv GitHub | ✅ |

---

## 3. Văn phòng & điểm chạm vật lý

| Điểm | Y1 (bootstrap) | Y2–Y3 (mục tiêu) |
|------|----------------|------------------|
| **Trụ sở / HN** | Virtual office | Co-working |
| **Chi nhánh HP** | Virtual + đi công tác | **Lê Hồng Phong** hoặc gần Đình Vũ — gần HEZA, HQ HP |
| **VP đại diện TN** | On-site theo lịch | Gần **KCN Yên Bình** / TP Thái Nguyên |
| **Kho / ICD** | Không | MOU đối tác Lạch Huyện |

**Chi phí Y1:** 3–5M/tháng virtual — [use-of-funds-2b](use-of-funds-2b)  
**Chi phí Y2 HP desk:** 8–15M/tháng (co-working + đi lại)

---

## 4. Công cụ truyền thông & Guanxi

| Kênh | Mục đích | Owner |
|------|----------|-------|
| **WeChat 企业号** | Nurture lead TQ, gửi báo cáo A1 | BD |
| Video ngắn (Douyin/Channels) | Luật VN bằng tiếng Trung | Marketing |
| One-pager CN | [bundle-onepager-zh](/docs/03-departments/03-kinh-doanh/bundle-onepager-zh) | KD |
| Email chính thức | HĐ, milestone | PM |

**KIM-004:** Điền WeChat / contact lên tài liệu CN.

---

## 5. Bảo mật & dữ liệu

| Quy tắc | Chi tiết |
|---------|----------|
| Dữ liệu khách | CRM + folder Drive theo mã KH-YYYY-NNN |
| Hồ sơ pháp lý | Chỉ luật đối tác + PM — NDA |
| ECUS | Tài khoản đối tác — không share password |
| Backup | Git repo nội bộ + Drive weekly |

---

## 6. Ngân sách công nghệ (VND/năm)

| Hạng mục | Y1 | Y2 | Y3 |
|----------|----|----|-----|
| SaaS (CRM, email, AI) | 24–48M | 60–120M | 120–200M |
| Web / hosting | 5–20M | 20–40M | 40M |
| ECUS (phí đối tác) | Pass-through | Pass-through | Own account? |
| WMS/TMS license | 0 | 50–100M | 100–200M |
| **Tổng** | **~30–70M** | **~130–260M** | **~260–440M** |

---

## 7. Checklist triển khai tech Y1

- [x] longtv web + `/kim` + `/operations`
- [x] Pipeline Sheet template
- [ ] WeChat doanh nghiệp verified
- [ ] MOU đại lý HQ + quy trình nhận tờ khai (KIM-076)
- [ ] Folder Drive chuẩn `KH-` structure
- [ ] Chọn Zoho vs HubSpot (Q4/2026)

---

## Liên kết

- [Service portfolio](/docs/03-departments/04-san-pham/all-in-one-service-portfolio)
- [Operational manual](/docs/07-operations/all-in-one-operational-manual)
- [HP vs TN matrix](/docs/03-departments/01-chien-luoc/hp-tn-operational-matrix)
