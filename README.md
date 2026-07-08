# LONGTV — Kho tri thức & Vận hành dự án

> Công ty dịch vụ tư vấn đầu tư — giúp nhà máy Trung Quốc dịch chuyển sản xuất về **Thái Nguyên** & **Hải Phòng**.

Repo này vừa là **kho tri thức nội bộ**, vừa là **hệ thống vận hành**: khai vấn định hướng → phân công phòng ban → thực thi trên web.

## Quy ước nền tảng để làm mượt

- **Tài liệu business viết ở repo root**: `04-research/`, `decisions/`, `03-departments/`, `05-clarifications/`...
- **Web không đọc trực tiếp root**: trước khi dev/build, script `sync-content` copy toàn bộ markdown root sang `web/content/`
- **Không edit tay `web/content/`** trừ khi debug rất đặc biệt

Chi tiết: [decisions/004-content-pipeline.md](decisions/004-content-pipeline.md)

## Bắt đầu nhanh

### Đọc trên web

## Deploy Vercel

**Quan trọng:** Trong Vercel Project Settings → Build & Deployment:

| Setting | Giá trị |
|---------|---------|
| **Root Directory** | `web` *(khuyến nghị)* hoặc để trống + dùng `vercel.json` ở repo root |
| **Framework** | Next.js |
| **Build Command** | `npm run build` *(nếu root=web)* hoặc auto từ `vercel.json` |

Sau mỗi push `main`, Vercel tự build. `prebuild` chạy `sync-content` trước khi build.

Live: https://web-plum-nu-91.vercel.app


```bash
cd web
npm install
npm run dev
```

Mở http://localhost:3000

### Cấu trúc repo

```
longtv/
├── 00-WORKING_PRINCIPLES.md    ← Nguyên tắc làm việc (FILE CHUNG)
├── 00-methodology.md           ← Phương pháp Top-Down · Multi-Option
├── 01-project-structure/       ← Cây vấn đề V1–V7
├── 02-monthly-roadmap/         ← Khai vấn & định hướng từng tháng
├── 03-departments/             ← 5 phòng ban + TODO ưu tiên
├── decisions/                  ← Log quyết định
├── 05-clarifications/          ← Thông tin team cần làm rõ / điền đầu vào
└── web/                        ← Next.js app (giao diện web)
```

## Nguyên tắc làm việc (3 bước)

| # | Nguyên tắc | Output |
|---|-----------|--------|
| 1 | **Khai vấn định hướng từng tháng** | `02-monthly-roadmap/YYYY-MM.md` |
| 2 | **Chia thẳng cho phòng ban** | `03-departments/<phong>/TODO.md` |
| 3 | **Todo ưu tiên → lắp nhân sự → chạy** | Gán assignee, cập nhật status trên web |

Chi tiết: [00-WORKING_PRINCIPLES.md](00-WORKING_PRINCIPLES.md)

## Luồng vận hành hàng tháng

```
Ngày 1–3:  Khai vấn tháng mới → chốt 1–2 mục tiêu P0
           ↓
           Bóc task → ghi TODO.md cho 5 phòng ban
           ↓
Tuần 2–3:  Lắp assignee → thực thi → cập nhật status + evidence
           ↓
Ngày 25–30: Review tháng → chuẩn bị khai vấn tháng sau
```

## 5 phòng ban

| Phòng | Folder | V-layer |
|-------|--------|---------|
| Chiến lược & Rủi ro | `03-departments/01-chien-luoc/` | V1, V7 |
| Pháp lý & Chính sách | `03-departments/02-phap-ly/` | V2 |
| Kinh doanh & GTM | `03-departments/03-kinh-doanh/` | V3 |
| Sản phẩm dịch vụ | `03-departments/04-san-pham/` | V4 |
| Vận hành & Tài chính | `03-departments/05-van-hanh-tc/` | V5, V6 |

## Cách cập nhật task

1. Mở `03-departments/<phong>/TODO.md`
2. Sửa cột **Assignee**, **Status**, **Evidence**
3. Commit + push lên GitHub
4. Web tự sync (script `sync-content` chạy trước mỗi build)

### Status chuẩn

`todo` → `doing` → `review` → `done` · hoặc `blocked`

### Priority

- **P0** — Bắt buộc xong trong tháng
- **P1** — Nên xong
- **P2** — Có thì tốt

## Thêm tài liệu mới

1. Tạo file `.md` ở root hoặc trong folder tương ứng
2. Thêm frontmatter:

```yaml
---
title: "Tiêu đề"
description: "Mô tả ngắn"
date: 2026-07-08
category: "roadmap"   # principles | roadmap | departments | decisions
order: 10
tags: ["tag1"]
author: "Tên"
---
```

3. Push — web tự hiển thị tại `/docs/<đường-dẫn-file>`

## Liên kết quan trọng

- [Nguyên tắc làm việc](00-WORKING_PRINCIPLES.md)
- [Lộ trình tháng 7/2026](02-monthly-roadmap/2026-07.md)
- [Yêu cầu làm rõ từ team](05-clarifications/00-team-input-requirements.md)
- [Pipeline content → web](decisions/004-content-pipeline.md)
- [Cây vấn đề V1–V7](01-project-structure/00-MACRO_PROBLEMS.md)
- [GitHub](https://github.com/ozvietnam/longtv)
