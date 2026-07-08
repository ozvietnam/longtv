---
title: "Quy trình phối hợp Leader — Dev (LONGTV)"
description: "Áp dụng quy trình giao việc qua GitHub Issue, nhánh chuẩn, PR và duyệt code cho dự án LONGTV."
date: 2026-07-08
category: "methodology"
order: 2
tags: ["workflow", "github", "leader", "dev"]
author: "Cursor · Sếp Thắng"
---

# Quy trình phối hợp Leader — Dev

> Dựa trên tài liệu *Quy trình Leader giao việc — Dev nhận việc và duyệt code v2*, điều chỉnh cho LONGTV (markdown + web, không chỉ code app).

---

## 1. Leader / Coach giao việc

**Ai giao:** Sếp Thắng (Leader) hoặc Cursor (Coach/Ops) thay mặt Leader.

| Bước | Việc làm |
|------|----------|
| 1 | Tạo **Issue** trên GitHub — không giao miệng |
| 2 | Tiêu đề mẫu: `[Research] CL-001 — Nghiên cứu 10 đối thủ FDI` |
| 3 | Mô tả: mục đích, phạm vi, **Acceptance Criteria** |
| 4 | Gắn **Label**: `research` / `feature` / `docs` / `chore` + `P0` / `P1` / `P2` |
| 5 | **Assignee** — đúng 1 người (thường là Hermes cho research) |
| 6 | Thêm vào **Project board** cột `To do` |
| 7 | Báo trong chat kèm link Issue |

### Mẫu Issue

```markdown
## Mô tả
Team cần bảng so sánh 10 đối thủ tư vấn FDI TQ→VN để định vị LONGTV.

## Acceptance Criteria
- [ ] Có bảng ≥10 đối thủ: tên, website, dịch vụ, giá (nếu có), điểm mạnh/yếu
- [ ] File lưu tại `04-research/2026-07/competitors.md`
- [ ] Có frontmatter (title, date, category: research)
- [ ] PR merge → hiển thị trên web tại `/docs/04-research/2026-07/competitors`
- [ ] Cập nhật TODO CL-001: status=done, Evidence=link

## Ghi chú
- Map V-layer: V1.4
- Task ID: CL-001
- Deadline: 2026-07-18
```

---

## 2. Dev (Hermes) nhận việc

| Bước | Việc làm |
|------|----------|
| 1 | Đọc Issue + Acceptance Criteria; hỏi lại **trong Issue** nếu chưa rõ |
| 2 | Chuyển thẻ board: `To do` → `In Progress` |
| 3 | `git checkout main && git pull origin main` |
| 4 | Tạo nhánh theo quy ước (xem bảng dưới) |
| 5 | Chỉ làm đúng phạm vi Issue |
| 6 | Commit theo Conventional Commits + `refs #<số>` |

### Quy ước đặt tên nhánh

```
<loại>/<số-issue>-<mo-ta-ngan-khong-dau>
```

| Loại | Dùng khi |
|------|----------|
| `docs` | Báo cáo nghiên cứu, cập nhật tài liệu markdown |
| `feature` | Tính năng web Next.js |
| `fix` | Sửa lỗi |
| `chore` | Cấu hình, dependency |

**Ví dụ LONGTV:**
- `docs/3-doi-thu-fdi` — Issue #3, nghiên cứu đối thủ
- `feature/12-trang-research-index` — thêm trang web

---

## 3. Đẩy code / nội dung lên GitHub

```bash
git fetch origin
git merge origin/main
git push origin docs/3-doi-thu-fdi
```

**Lưu ý:** Push xong **bắt buộc mở PR** — không push thẳng `main`.

---

## 4. Mở PR để Leader duyệt

| Bước | Việc làm |
|------|----------|
| 1 | Mở PR: base=`main`, compare=nhánh vừa push |
| 2 | Title: mô tả ngắn gọn |
| 3 | Body: `Closes #3` + mô tả thay đổi + checklist tự test |
| 4 | Chuyển board: `In Progress` → `In Review` |
| 5 | Cursor review lần 1 → Sếp Thắng approve & merge |

### PR template checklist

- [ ] Đúng phạm vi Issue
- [ ] File markdown có frontmatter
- [ ] `npm run build` trong `web/` pass (nếu đụng content/web)
- [ ] Đã cập nhật TODO Evidence (hoặc sẽ cập nhật ngay sau merge)

---

## 5. Leader duyệt

| Hành động | Ý nghĩa |
|-----------|---------|
| **Comment** | Góp ý, PR vẫn chờ |
| **Approve** | Đồng ý merge |
| **Request changes** | Phải sửa trước khi merge |

Sau **Approve + CI xanh** → Merge → Issue tự đóng → board `Done`.

---

## 6. Bảng trách nhiệm theo giai đoạn

| Giai đoạn | Leader (Sếp Thắng) | Coach (Cursor) | Dev (Hermes) |
|-----------|-------------------|----------------|--------------|
| Giao việc | Chốt ưu tiên | Tạo Issue + AC + assign | — |
| Nhận việc | — | Theo dõi board | Đọc issue, In Progress, tạo nhánh |
| Làm việc | — | Hỗ trợ nếu blocked | Research / viết md / code |
| Hoàn thành | — | Review PR lần 1 | Mở PR, In Review |
| Duyệt | Approve / Request changes | Comment, suggest | Sửa theo góp ý |
| Merge | Bấm Merge | — | Cập nhật TODO Evidence |

---

## 7. Thư mục output nghiên cứu

Hermes lưu báo cáo tại:

```
04-research/
└── 2026-07/
    ├── competitors.md
    ├── fdi-data.md
    ├── legal-entity-comparison.md
    └── ...
```

Sau merge, team đọc trên web: `/docs/04-research/2026-07/<tên-file>`.
