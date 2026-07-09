# Live web — 1 link Vercel cho Leader

## Link chính (sau khi bật Vercel)

**Một URL duy nhất** — menu điều hướng, không cần nhớ từng link GitHub:

| | URL |
|---|-----|
| **Trang chủ** | https://web-plum-nu-91.vercel.app/ |
| Thư ký Kim | https://web-plum-nu-91.vercel.app/kim/ |
| Dịch vụ | https://web-plum-nu-91.vercel.app/services/ |
| Vận hành | https://web-plum-nu-91.vercel.app/operations/ |
| Investor pack | https://web-plum-nu-91.vercel.app/docs/06-phases/investor-pack/00-index/ |

> URL ngắn hơn (vd. `longtv.vercel.app`) — đặt trong Vercel → Project → Settings → Domains.

---

## Bật Vercel — 1 lần (~2 phút)

Project Vercel **đã tồn tại** nhưng đang lag bản cũ. Làm **một trong hai cách**:

### Cách A — Reconnect project cũ (nhanh nhất)

1. Mở: **https://vercel.com** → đăng nhập → project **web-plum-nu-91** (hoặc tên tương tự)
2. **Settings → Git** → Connect **ozvietnam/longtv** (nếu chưa nối)
3. **Settings → General → Root Directory** → chọn **`web`** → Save
4. Tab **Deployments** → **Redeploy** bản mới nhất (hoặc đợi auto-deploy sau push `main`)

### Cách B — Import mới

1. **https://vercel.com/new** → Import `ozvietnam/longtv`
2. **Root Directory:** `web` (bắt buộc)
3. Framework: Next.js (tự nhận) → **Deploy**

Sau đó mỗi merge `main` → Vercel tự build ~1 phút.

---

## GitHub Pages (dự phòng, không bắt buộc)

Chỉ dùng khi cần mirror công khai trên GitHub:

https://ozvietnam.github.io/longtv/

Lưu ý: URL có tiền tố `/longtv/` — kém tiện hơn Vercel.

---

## Tại sao trước đó dùng GitHub?

- Em (agent) **không vào được** tài khoản Vercel của anh để reconnect
- GitHub Pages bật được ngay từ repo, không cần token Vercel
- **Vercel mới là link chính** để Leader duyệt — chỉ cần reconnect 1 lần như trên
