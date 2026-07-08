# Bật live web — 1 lần duy nhất

GitHub Pages **chưa được bật** trên repo nên link 404. Làm **1 trong 2 cách** (30 giây):

## Cách 1 — Khuyến nghị (dễ nhất)

1. Mở: **https://github.com/ozvietnam/longtv/settings/pages**
2. **Build and deployment → Source:** chọn **Deploy from a branch**
3. **Branch:** `main` · **Folder:** `/docs` → **Save**
4. Đợi 1–2 phút → mở **https://ozvietnam.github.io/longtv/**

## Cách 2 — Nhánh gh-pages

1. Cùng trang Settings → Pages
2. **Branch:** `gh-pages` · **Folder:** `/ (root)` → **Save**
3. Link: **https://ozvietnam.github.io/longtv/**

---

## Sau khi bật

Mỗi push `main` → GitHub Actions tự build + cập nhật `docs/` và `gh-pages`.

| Trang | URL |
|-------|-----|
| Trang chủ | https://ozvietnam.github.io/longtv/ |
| Giai đoạn 00-1 | https://ozvietnam.github.io/longtv/docs/06-phases/00-1-feasibility-plan/ |
| Dịch vụ | https://ozvietnam.github.io/longtv/services/ |
| Vận hành | https://ozvietnam.github.io/longtv/operations/ |

## Vercel (tùy chọn)

URL cũ https://web-plum-nu-91.vercel.app đang lag bản cũ — cần reconnect:

1. https://vercel.com/new → Import `ozvietnam/longtv`
2. **Root Directory:** `web`
3. Deploy

Hoặc Project Settings → Root Directory = `web` → Redeploy.
