---
title: "Quyết định #001 — Chọn Next.js + Vercel cho nền tảng nội bộ"
description: "Nền tảng web tin tức nội bộ team dùng Next.js 16 + Vercel, kết nối GitHub repo ozvietnam/longtv. Markdown là source of truth."
date: 2026-07-08
category: "decisions"
order: 1
tags: ["decision", "platform", "tech"]
author: "Hermes · Sếp Thắng"
---

# Quyết định #001 — Nền tảng nội bộ

**Ngày:** 2026-07-08
**Người quyết:** Sếp Thắng + Hermes
**Trạng thái:** ✅ Đã triển khai

## Bối cảnh

Cần một nơi để mọi người trong team cùng đọc tài liệu dự án online, dạng trang tin tức, dễ phân chia trang, dễ tìm kiếm.

## Phương án đã cân nhắc

| # | Phương án | Ưu | Nhược | Kết luận |
|---|-----------|----|-------|----------|
| A | Notion / Wiki | Team quen thuộc | Khó custom, SEO yếu, dữ liệu khoá trong Notion | ❌ |
| B | Hugo / Jekyll (static) | Nhẹ, nhanh | Phải tự setup CI/CD, ít dynamic | ❌ |
| C | **Next.js + Vercel + GitHub** | Auto-deploy khi push, free tier đủ, markdown-friendly, SEO tốt, custom thoải mái | Phải viết code | ✅ |
| D | WordPress | UI quen | Phải mua host, bảo trì nặng, không version-controlled | ❌ |

## Lý do chọn C

1. **Markdown là source of truth** — mỗi người có thể sửa file `.md` trong repo GitHub → web tự động cập nhật sau vài giây. Không cần vào CMS.
2. **Free tier đủ dùng** — Vercel hobby plan miễn phí cho dự án nội bộ team nhỏ.
3. **GitHub làm backend** — mọi thay đổi đều có version, có review, có rollback.
4. **Mở rộng dễ** — sau này muốn thêm form đăng ký khách, dashboard, hay search thì Next.js handle hết.
5. **Markdown root vẫn là nguồn thật** — web chỉ nên đọc bản mirror đã sync để deploy ổn định.

## Kết quả

- Repo: https://github.com/ozvietnam/longtv
- Web: deploy trên Vercel (sẽ cập nhật link sau khi deploy)
- Source code: `web/`
- Kho tài liệu chuẩn: **repo root markdown** → mirror sang `web/content/`

## Bài học

- Phải đọc docs của Next.js 16 vì có breaking changes so với version cũ.
- Markdown frontmatter (title, description, order) giúp web hiển thị đẹp mà không cần database.
- Khi Vercel/project root là `web`, cần có pipeline mirror content rõ ràng để tránh lỗi “merge rồi nhưng live không thấy”.