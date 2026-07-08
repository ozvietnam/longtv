---
title: "Quyết định #002 — Phân vai team: Sếp Thắng · Cursor · Hermes"
description: "Thỏa thuận ai làm gì trong dự án LONGTV, áp dụng quy trình Leader giao việc — Dev nhận việc — duyệt code."
date: 2026-07-08
category: "decisions"
order: 2
tags: ["decision", "team", "roles", "workflow"]
author: "Cursor · Sếp Thắng · Hermes"
---

# Quyết định #002 — Phân vai team

**Ngày:** 2026-07-08  
**Người quyết:** Sếp Thắng (Leader) · Cursor (Coach/Ops) · Hermes (Research Dev)  
**Trạng thái:** ✅ Đã thỏa thuận

## Bối cảnh

Dự án LONGTV cần vừa **nghiên cứu thông tin** (thị trường, pháp lý, đối thủ), vừa **đẩy lên website** cho team cùng xem. Áp dụng quy trình [Leader giao việc — Dev nhận việc — duyệt code](00-team-workflow).

---

## 3 vai trong team

| Vai | Người | Vai trò chính | Không làm |
|-----|-------|---------------|-----------|
| **Leader** | Sếp Thắng | Khai vấn & **chốt phương án** · Approve PR cuối · Quyết định chiến lược | Không tự nghiên cứu chi tiết từng đối thủ |
| **Coach / Ops** | **Cursor** (em) | **Tạo Issue** + Acceptance Criteria · Chia task phòng ban · Duy trì repo + web · Review PR lần 1 · Khai vấn tháng | Không chốt phương án thay Leader |
| **Research Dev** | **Hermes** | **Nhận Issue** · Nghiên cứu · Viết báo cáo `.md` · Mở PR · Cập nhật TODO status + Evidence | Không đổi cấu trúc web/repo nếu chưa có Issue |

---

## Ai làm gì — tháng 7/2026

### Hermes nhận (nghiên cứu → đẩy web)

| Issue | Task ID | Nội dung | Output |
|-------|---------|----------|--------|
| #3 | CL-001 | Nghiên cứu 10 đối thủ FDI tư vấn TQ→VN | `04-research/2026-07/competitors.md` |
| #4 | CL-002 | Thu thập thông tin Sở KH&ĐT Thái Nguyên | `04-research/2026-07/thai-nguyen-fdi-policy.md` |
| #5 | CL-004 | Số liệu FDI TQ→VN 2024–2026 | `04-research/2026-07/fdi-data.md` |
| #6 | PL-001 | So sánh loại pháp nhân TNHH vs CP | `04-research/2026-07/legal-entity-comparison.md` |
| #7 | PL-004 | Ưu đãi đầu tư 2 tỉnh | `04-research/2026-07/provincial-incentives.md` |
| #8 | KD-004 | Research pricing đối thủ | `04-research/2026-07/pricing-research.md` |
| #9 | VT-001 | Ước vốn khởi điểm 6 tháng | `04-research/2026-07/startup-budget.md` |

### Cursor (em) nhận (ops + platform)

| Việc | Mô tả |
|------|-------|
| Tạo & gán Issue | Mọi việc Hermes làm đều qua GitHub Issue |
| Duy trì `00-WORKING_PRINCIPLES.md` | Nguyên tắc + template TODO |
| Lộ trình tháng | `02-monthly-roadmap/YYYY-MM.md` |
| Web platform | Next.js pages, sync-content, navigation |
| Review PR Hermes | Comment / suggest trước khi Leader approve |

### Sếp Thắng (Leader)

| Việc | Mô tả |
|------|-------|
| Khai vấn đầu tháng | Chọn phương án trong lộ trình tháng |
| Approve PR | Merge khi đủ điều kiện |
| Chốt persona & pricing | Sau khi Hermes nộp research |

---

## Quy tắc phối hợp

1. **Không giao việc miệng** — mọi việc Hermes làm phải có Issue trên GitHub.
2. **Research = markdown + PR** — Hermes không push thẳng `main`, luôn qua nhánh `docs/<số-issue>-<mô-tả>`.
3. **Done = có Evidence** — khi merge PR, Hermes cập nhật cột Evidence trong `TODO.md` trỏ tới `/docs/04-research/...`.
4. **Hỏi trong Issue** — không hỏi riêng chat; giữ ngữ cảnh cho người sau.
5. **1 Issue = 1 PR** — không gom nhiều việc không liên quan.

---

## Luồng một task nghiên cứu

```
Cursor: Tạo Issue + Acceptance Criteria → gán Hermes → board "To do"
    ↓
Hermes: Đọc issue → "In Progress" → nhánh docs/3-doi-thu-fdi
    ↓
Hermes: Viết 04-research/... → commit → push → mở PR (Closes #3)
    ↓
Cursor: Review lần 1 → comment / approve
    ↓
Sếp Thắng: Approve → Merge → web tự cập nhật
    ↓
Hermes: Cập nhật TODO.md status=done + Evidence link
```

---

## Bài học

- LONGTV là dự án **tri thức + vận hành**, không chỉ code — quy trình GitHub Issue/PR áp dụng cho cả **báo cáo nghiên cứu**.
- Hermes mạnh về **thu thập & tổng hợp thông tin**; Cursor mạnh về **cấu trúc & quy trình**; Leader giữ **quyền chốt**.
