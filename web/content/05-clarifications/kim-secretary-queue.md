---
title: "Hộp việc — Thư ký Kim"
description: "Danh sách công việc cần người thật xử lý — Leader tập trung tại /kim trên web."
date: "2026-07-09"
category: "clarifications"
order: 10
tags: ["kim", "human", "queue", "secretary"]
author: "Cursor"
---

# Hộp việc Thư ký Kim

> **Quy tắc:** Chỉ ghi việc cần **tương tác con người** (gọi điện, ký, gặp, nộp hồ sơ, bán hàng thật). Việc desk/AI đã xong → link Evidence, không đưa vào đây.
>
> **Leader:** Xử lý tập trung tại [trang /kim](/kim) trên web.

---

## Cách cập nhật

1. Thêm/sửa dòng bảng dưới đây
2. `status`: `todo` · `doing` · `done` · `blocked`
3. Commit → deploy → trang `/kim` tự cập nhật

---

## Hàng chờ (bảng chính)

| P | ID | Việc | Owner | Status | Hạn | Tài liệu / script |
|---|-----|------|-------|--------|-----|-------------------|
| P0 | KIM-001 | **Ký QĐ #005** — Go Giai đoạn 2 | Leader | todo | 2026-07-15 | /docs/decisions/005-phase-00-1-go |
| P0 | KIM-002 | Điền **tên CTCP**, **% cổ đông TQ**, quy mô tập đoàn | Leader | todo | 2026-07-15 | /docs/05-clarifications/00-team-input-requirements |
| P0 | KIM-003 | **Duyệt bảng giá** chính thức (pricing v1) | Leader | todo | 2026-07-12 | /docs/03-departments/03-kinh-doanh/pricing-official |
| P0 | KIM-004 | Điền **WeChat / email / SĐT** lên one-pager & pitch | Leader | todo | 2026-07-12 | /docs/03-departments/03-kinh-doanh/bundle-onepager-zh |
| P0 | KIM-010 | **Gọi Sở KH&ĐT Thái Nguyên** — xác minh FDI TQ, quỹ hỗ trợ, IRC | Hermes | doing | 2026-07-18 | /docs/03-departments/01-chien-luoc/field-call-scripts |
| P0 | KIM-011 | **Gọi Sở KH&ĐT Hải Phòng** — chính sách 2026, KCN còn quỹ | Hermes | todo | 2026-07-21 | /docs/04-research/2026-07/hai-phong-fdi-policy |
| P0 | KIM-012 | **Call Ban QLKCN Yên Bình** — giá đất Q3/2026, quỹ lô nhỏ | Hermes | todo | 2026-07-21 | /docs/04-research/2026-07/kcn-desk-research |
| P0 | KIM-013 | **Call Ban QLKCN Nam Đình Vũ** — giá & onboarding FDI TQ | Hermes | todo | 2026-07-21 | /docs/04-research/2026-07/kcn-desk-research |
| P0 | KIM-020 | **Luật sư review** mẫu HĐ / NDA / MOU trước khi ký khách | Luật đối tác | todo | 2026-07-20 | /docs/03-departments/02-phap-ly/templates/00-index |
| P1 | KIM-030 | **Bật GitHub Pages** — Settings → main / docs | Leader | todo | 2026-07-10 | /docs/DEPLOY |
| P1 | KIM-031 | **Nộp hồ sơ đăng ký CTCP** (khi KIM-002 xong) | Leader + Luật | todo | 2026-08-15 | /docs/03-departments/02-phap-ly/ctcp-ho-so-checklist |
| P1 | KIM-040 | **Gửi ≥2 proposal A1** cho khách TQ thật | Sales | todo | 2026-08-31 | /docs/03-departments/03-kinh-doanh/proposal-template-a1 |
| P1 | KIM-041 | **Phỏng vấn 1** NM TQ đang vận hành tại VN (validate pricing) | Leader / KD | todo | 2026-08-31 | — |
| P1 | KIM-050 | **Ký MOU** đối tác luật (white-label B2) | Leader | todo | 2026-08-15 | /docs/03-departments/02-phap-ly/templates/mou-doi-tac-luat |
| P1 | KIM-051 | **Đàm phán MOU** Ban QLKCN (giới thiệu NĐT) | Leader | todo | 2026-08-31 | /docs/03-departments/02-phap-ly/templates/mou-kcn |
| P2 | KIM-060 | Kết nối **Vercel** auto-deploy từ GitHub | Leader | todo | — | /docs/DEPLOY |
| P2 | KIM-061 | Chọn **virtual office** & ký HĐ thuê địa chỉ | Leader | todo | 2026-08-01 | /docs/04-research/2026-07/plan-b-no-revenue |
| P1 | KIM-070 | **Làm slide deck investor** 15 slide từ outline | Leader | todo | 2026-07-20 | /docs/03-departments/03-kinh-doanh/investor-pitch-deck |
| P1 | KIM-071 | **Dry-run pitch** 15 phút + ghi hình | Leader | todo | 2026-07-25 | /docs/06-phases/investor-pack/01-executive-summary |
| P1 | KIM-072 | **Chốt cap table** % cổ đông VN/TQ | Leader | todo | 2026-07-15 | /docs/05-clarifications/cap-table-v1 |
| P2 | KIM-073 | **JD + equity** Phó TGĐ / Trưởng KD (tuyển C-level) | Leader | todo | 2026-08-15 | /docs/05-clarifications/cap-table-v1 |
| P2 | KIM-074 | **Setup data room** folder due diligence | VT | todo | 2026-08-01 | /docs/06-phases/investor-pack/02-pitch-gap-checklist |
| P1 | KIM-075 | **Review financial model** — chọn Bear/Base/Bull năm 1 | Leader | todo | 2026-07-12 | /docs/03-departments/05-van-hanh-tc/financial-model-3yr |
| P1 | KIM-076 | **MOU đại lý hải quan** có GPLS (All-in-one logistics) | Leader | todo | 2026-08-15 | /docs/03-departments/02-phap-ly/all-in-one-licensed-entities |
| P2 | KIM-077 | **Verify CIT** KKT Đình Vũ–Cát Hải 2026 | Hermes | todo | 2026-07-21 | /docs/06-phases/investor-pack/03-investment-project-5-steps |
| P2 | KIM-078 | **Pilot Full Setup** — đo timeline thực vs 3 tháng | Leader / KD | todo | 2026-09-30 | /docs/03-departments/01-chien-luoc/all-in-one-service-complex |
| P2 | KIM-079 | **Draft SOP-FULL** 12 tuần từ Operational Manual | Cursor / PM | todo | 2026-08-15 | /docs/07-operations/all-in-one-operational-manual |
| P0 | KIM-080 | **Brief LONGTV 1 trang A4** — gửi Sở/KCN trước call | Hermes | doing | 2026-07-12 | /docs/03-departments/01-chien-luoc/hermes-field-brief-template |
| P1 | KIM-081 | **Thu thập URL địa phương** TN & HP → source-registry | Hermes | todo | 2026-07-25 | /docs/data/fdi-legal/source-registry.json |
| P1 | KIM-082 | **Map 20 nhà máy TQ** tại TN + HP | Hermes | todo | 2026-07-30 | /docs/04-research/2026-07/fdi-data |
| P1 | KIM-083 | **Desk note quy trình EPE** tại Thái Nguyên | Hermes | todo | 2026-07-28 | /docs/04-research/2026-07/thai-nguyen-fdi-policy |
| P1 | KIM-084 | **Verify hiệu lực** 3 nguồn P0 trong Cẩm nang | Hermes | todo | 2026-07-28 | /docs/cam-nang |
| P1 | KIM-085 | **Cập nhật fdi-data** sau field (số liệu theo quốc gia) | Hermes | todo | 2026-07-28 | /docs/04-research/2026-07/fdi-data |
| P1 | KIM-086 | **Infographic 1 trang** "Vì sao TN + HP" | Hermes | todo | 2026-07-25 | /docs/04-research/2026-07/why-tn-hp |
| P2 | KIM-087 | **Subscribe** báo cáo quý Cục Đầu tư nước ngoài | Hermes | todo | 2026-07-15 | /docs/04-research/2026-07/fdi-data |
| P2 | KIM-088 | **Draft địa phương** Cẩm nang FDI-HB-013 & 014 | Hermes | todo | 2026-07-31 | /docs/data/fdi-legal/article-backlog |

---

## Phân loại nhanh

| Loại | ID |
|------|-----|
| Ký / quyết định | KIM-001, 003 |
| Điền thông tin công ty | KIM-002, 004 |
| Gọi Sở / KCN | KIM-010 – 013, 077 |
| Pháp lý / MOU | KIM-020, 050, 051 |
| Thành lập CTCP | KIM-031 |
| Bán hàng / khách thật | KIM-040, 041 |
| Hạ tầng web | KIM-030, 060 |
| Đầu tư & pitch | KIM-070 – 075, 072 |
| All-in-one / UNIDO | KIM-076 – 079 |
| **Hermes research** | KIM-080 – 088 |

---

## Sau khi xong

- Đổi `Status` → `done`
- Ghi kết quả ngắn vào file research liên quan (hoặc comment PR)
- Việc desk tương ứng → tick TODO phòng ban tại [/operations](/operations)
