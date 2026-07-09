---
title: "Nguyên tắc làm việc"
description: "3 nguyên tắc cốt lõi + nguyên tắc phụ — file chung mọi phòng ban và kế hoạch tháng đều tham chiếu."
date: 2026-07-08
category: "principles"
order: 1
tags: ["principles", "workflow", "operations"]
author: "Sếp Thắng"
---

# LONGTV — Nguyên tắc làm việc

> **File chung.** Mọi phòng ban, kế hoạch tháng và nhân sự mới đều đọc file này trước khi bắt đầu.

---

## 3 nguyên tắc cốt lõi

| # | Nguyên tắc | Ý nghĩa | Output cụ thể |
|---|-----------|---------|---------------|
| **1** | **Khai vấn định hướng từng tháng** | Mỗi tháng chọn 1–2 mục tiêu chiến lược, khai vấn 3–4 phương án, chốt 1 hướng | `02-monthly-roadmap/YYYY-MM.md` |
| **2** | **Chia thẳng cho phòng ban** | Mục tiêu tháng được bóc thành việc cụ thể, gán ngay cho phòng — không để treo ở cấp founder | `03-departments/<phong>/TODO.md` |
| **3** | **Todo ưu tiên → lắp nhân sự → chạy** | Mỗi phòng có bảng P0/P1/P2, cột assignee/status; khi có người, gán tên và bắt đầu — không cần viết lại quy trình | Cùng file TODO + cập nhật trên web |

### Luồng vận hành

```
Khai vấn tháng mới (ngày 1–3)
  → Chốt 1–2 mục tiêu P0
  → Bóc task → 5 phòng ban
  → Ghi TODO.md mỗi phòng
  → Lắp assignee
  → Thực thi + cập nhật status trên web
  → Review tháng (ngày 25–30)
```

**Web all-in:** Vừa bàn định hướng, vừa xây kế hoạch, vừa thực thi — tất cả trên [kho tri thức LongTV](https://github.com/ozvietnam/longtv).

---

## Nguyên tắc phụ (vận hành)

- **Một nguồn sự thật:** Git repo = kế hoạch + thực thi; web chỉ là giao diện đọc/cập nhật.
- **Content viết ở root repo:** Research, decisions, roadmap, clarifications đều viết ở root; `web/content/` chỉ là bản mirror tự sync trước build.
- **Không làm việc ngoài khung V1–V7:** Mọi việc phải map về 1 tầng V (tránh lan man). Xem [Cây vấn đề lớn](/docs/01-project-structure/00-MACRO_PROBLEMS).
- **Chốt trước, làm sau:** Tháng mới bắt đầu bằng khai vấn (30–60 phút), không nhảy thẳng vào làm.
- **Done = có bằng chứng:** Mỗi task `done` phải có link/file/kết quả đính kèm ở cột Evidence.
- **Plug-and-play nhân sự:** Template task đủ rõ để người mới đọc → làm ngay, không cần briefing 2 giờ.

---

## 5 phòng ban thực thi

| Phòng ban | Folder | Map V-layer | Trách nhiệm |
|-----------|--------|-------------|-------------|
| **Chiến lược & Rủi ro** | `03-departments/01-chien-luoc/` | V1, V7 | Định hướng tháng, thị trường, Plan B |
| **Pháp lý & Chính sách** | `03-departments/02-phap-ly/` | V2 | Thành lập, giấy phép, ưu đãi 2 tỉnh |
| **Kinh doanh & GTM** | `03-departments/03-kinh-doanh/` | V3 | Pipeline, kênh, pricing |
| **Sản phẩm dịch vụ** | `03-departments/04-san-pham/` | V4 | Catalog, gói dịch vụ, đối tác |
| **Vận hành & Tài chính** | `03-departments/05-van-hanh-tc/` | V5, V6 | HR, SOP, KPI, dòng tiền |

---

## Template bảng TODO (dùng chung mọi phòng)

```markdown
## Tháng YYYY-MM | Phòng: [Tên]

| P | ID | Task | V-layer | Assignee | Status | Deadline | Evidence |
|---|-----|------|---------|----------|--------|----------|----------|
| P0 | CL-001 | ... | V1.4 | @tên | todo | 2026-07-15 | |
| P1 | CL-002 | ... | V7.5 | — | blocked | | |
```

### Định nghĩa cột

| Cột | Quy tắc |
|-----|---------|
| **P** | P0 = bắt buộc xong trong tháng · P1 = nên xong · P2 = có thì tốt |
| **ID** | Mã phòng + số thứ tự (VD: `CL-001`, `PL-002`, `KD-003`) |
| **V-layer** | Map về 1 mục trong [cây V1–V7](/docs/01-project-structure/00-MACRO_PROBLEMS) |
| **Assignee** | `@tên` khi đã gán · `—` khi chưa có người |
| **Status** | `todo` → `doing` → `review` → `done` · hoặc `blocked` |
| **Evidence** | Link file, screenshot, hoặc đường dẫn kết quả khi `done` |

### Cách cập nhật

1. Sửa file `03-departments/<phong>/TODO.md` trong repo
2. Commit + push lên GitHub
3. Web tự sync và hiển thị sau vài phút (Vercel auto-deploy)

---

## Tham chiếu

- [Phương pháp Top-Down · Multi-Option](/docs/00-methodology)
- [Lộ trình tháng 7/2026](/docs/02-monthly-roadmap/2026-07)
- [QĐ #004 — Pipeline content](/docs/decisions/004-content-pipeline)
- [Cây vấn đề V1–V7](/docs/01-project-structure/00-MACRO_PROBLEMS)
