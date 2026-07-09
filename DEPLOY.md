# Bật live web — 1 lần duy nhất

GitHub Pages cần trỏ đúng nhánh có bản build. Làm **1 bước** (~30 giây):

## Bật Pages (khuyến nghị: nhánh gh-pages)

1. Mở: **https://github.com/ozvietnam/longtv/settings/pages**
2. **Build and deployment → Source:** chọn **Deploy from a branch**
3. **Branch:** `gh-pages` · **Folder:** `/ (root)` → **Save**
4. Đợi 1–2 phút → mở **https://ozvietnam.github.io/longtv/**

> Nhánh `gh-pages` đã có bản mới (Kim, investor pack, services G0–G8).  
> Nếu đang dùng `main` / `docs` mà build kẹt → đổi sang `gh-pages` như trên.

## Cách 2 — main / docs (dự phòng)

1. Cùng trang Settings → Pages
2. **Branch:** `main` · **Folder:** `/docs` → **Save**

`docs/` trên `main` cũng đã được cập nhật bản mới (PR #30).

---

## Sau khi bật

Mỗi push `main` → GitHub Actions tự build + cập nhật `docs/` và `gh-pages`.

**Nếu build Pages bị kẹt / lỗi:** đổi Source sang nhánh `gh-pages` · folder `/ (root)` → Save.

| Trang | URL |
|-------|-----|
| Trang chủ | https://ozvietnam.github.io/longtv/ |
| **Thư ký Kim** | https://ozvietnam.github.io/longtv/kim/ |
| Giai đoạn 00-1 | https://ozvietnam.github.io/longtv/docs/06-phases/00-1-feasibility-plan/ |
| Dịch vụ | https://ozvietnam.github.io/longtv/services/ |
| Vận hành | https://ozvietnam.github.io/longtv/operations/ |
| Investor pack | https://ozvietnam.github.io/longtv/docs/06-phases/investor-pack/00-index/ |

## Vercel (tùy chọn)

URL cũ https://web-plum-nu-91.vercel.app đang lag bản cũ — cần reconnect:

1. https://vercel.com/new → Import `ozvietnam/longtv`
2. **Root Directory:** `web`
3. Deploy

Hoặc Project Settings → Root Directory = `web` → Redeploy.
