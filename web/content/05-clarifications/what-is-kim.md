---
title: "Kim là gì? — Định nghĩa cho cả team"
description: "Thư ký Kim = hàng chờ việc chỉ con người thật tự làm. AI/Cursor không thay thế, không tick xong thay người."
date: 2026-07-09
category: "clarifications"
order: 9
tags: ["kim", "human", "definition", "team"]
author: "Cursor · Leader duyệt khái niệm"
---

# Kim là gì?

> **Một câu:** **Kim** (Thư ký Kim) là **danh sách việc bắt buộc có người thật tự hoàn thiện và đi làm** — AI **không** thay thế được.

Trang web: [/kim](/kim) · File hàng chờ: [kim-secretary-queue](/docs/05-clarifications/kim-secretary-queue)

---

## Kim KHÔNG phải là gì

| Hiểu nhầm | Sự thật |
|-----------|---------|
| "Kim = việc của Leader" | Kim là việc **của mọi owner người** (Leader, Hermes, Sales, Luật đối tác…) |
| "Hermes trong Kim = AI làm" | **Hermes là người** — gọi Sở, thu thập tài liệu thật. AI chỉ soạn script/brief |
| "Cursor tick `done` là xong" | **Chỉ người đã làm** mới được đổi status → `done` |
| "Research desk = Kim" | Desk research → `04-research/` hoặc TODO phòng ban, **không** vào Kim |
| "Build web / deploy = Kim" | Việc kỹ thuật AI/Cursor → [/operations](/operations), không Kim |

---

## Kim LÀ gì

Việc **không thể hoàn thành** chỉ bằng viết tài liệu hay chạy bot — cần **hành động con người** trên thực tế:

| Loại | Ví dụ |
|------|--------|
| Gọi / gặp | Gọi Sở KH&ĐT, họp khu công nghiệp, gặp khách |
| Ký / quyết định | Ký QĐ, ký hợp đồng, chốt bảng giá, cap table |
| Nộp / đăng ký | Nộp hồ sơ CTCP, đăng ký dịch vụ, bật Vercel/GitHub |
| Bán hàng thật | Gửi proposal, pitch, phỏng vấn khách, ký MOU |
| Thu thập thật | Subscribe báo cáo MPI, verify qua cuộc gọi, tham quan hiện trường |

Mã việc: **KIM-001, KIM-002, …** — xem bảng đầy đủ tại [kim-secretary-queue](/docs/05-clarifications/kim-secretary-queue).

---

## Ai làm việc Kim?

| Owner trong Kim | Vai trò |
|-----------------|---------|
| **Leader** | Ký, chốt chiến lược, khách quan trọng, thành lập CTCP |
| **Hermes** | Gọi Sở/KCN, field verify, thu thập tài liệu & số liệu thật |
| **Sales** | Proposal, khách hàng |
| **Luật đối tác** | Review hợp đồng, nộp hồ sơ pháp lý |

**Cursor / AI:** chuẩn bị script, brief, template, cập nhật research **sau khi** người báo kết quả — **không** ghi nhận hoàn thành thay owner.

---

## Kim vs các kho việc khác

```text
┌─────────────────────────────────────────────────────────────┐
│  KIM (/kim)          →  Người thật phải đi làm              │
├─────────────────────────────────────────────────────────────┤
│  /operations         →  TODO phòng ban (desk + người)       │
│  04-research/        →  Nghiên cứu, evidence sau field      │
│  Cursor              →  Web, sync, PR, điều phối Hermes     │
└─────────────────────────────────────────────────────────────┘
```

| Câu hỏi | Vào Kim? |
|---------|----------|
| Cần gọi điện cho Sở? | ✅ Có |
| Cần Leader ký tên? | ✅ Có |
| Chỉ đọc web và viết báo cáo? | ❌ Không — research |
| Cursor build trang /logistics? | ❌ Không — ops kỹ thuật |
| Hermes đã gọi xong, cần cập nhật file? | ❌ Không — research (sau khi Kim `done`) |

---

## Quy trình chuẩn

1. **Thêm việc** vào `kim-secretary-queue.md` nếu và chỉ nếu cần người thật  
2. **Owner người** nhận việc → `doing` → **tự làm** (gọi, ký, gặp…)  
3. **Xong** → owner (hoặc Leader xác nhận) đổi `done`  
4. **Cursor** cập nhật research / evidence từ kết quả người báo — không bước 3 thay người  

---

## Liên quan Hermes

[Gói việc Hermes](/docs/03-departments/01-chien-luoc/hermes-work-pack-2026-07) có nhiều mục **trong Kim** vì cần **Hermes người** gọi điện, đi field, subscribe dịch vụ.

Cursor **điều phối** Hermes ([chỉ đạo](/docs/03-departments/01-chien-luoc/hermes-directive-log)) — **không** thay Hermes thực hiện call.

---

**Cập nhật:** 2026-07-09 · Áp dụng cho toàn team LONGTV
