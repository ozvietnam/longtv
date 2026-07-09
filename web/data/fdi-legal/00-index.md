---
title: "Kế hoạch xây dựng cẩm nang pháp lý FDI"
description: "Khung nghiên cứu để xây cẩm nang FDI: 100% vốn nước ngoài, góp vốn/mua cổ phần, IRC/ERC, môi trường và giấy phép sản xuất."
date: 2026-07-09
category: "data"
order: 45
tags: ["data", "FDI", "legal", "research", "V2"]
author: "Cursor"
---

# Kế hoạch xây dựng cẩm nang pháp lý FDI

> Mục tiêu: xây một kho dữ liệu pháp lý có kiểm chứng để LONGTV phát triển phần cẩm nang hướng dẫn trên trang chủ cho nhà đầu tư nước ngoài, đặc biệt nhóm nhà máy Trung Quốc dịch chuyển sản xuất về Việt Nam.

## Điểm vào chính

Để đọc theo dạng thư viện đã chia nhóm, dùng trang: [Thư viện pháp luật FDI Việt Nam](legal-library).

## 1. Rà soát yêu cầu

| Nhóm yêu cầu | Nội dung cần làm rõ | Output cần tạo |
|---|---|---|
| Văn bản pháp lý nền tảng | Luật Đầu tư, Luật Doanh nghiệp, văn bản hướng dẫn, điều kiện tiếp cận thị trường với nhà đầu tư nước ngoài | Thư viện nguồn pháp luật có URL, điều khoản trọng tâm, trạng thái hiệu lực |
| Mô hình 100% vốn nước ngoài | Điều kiện lập tổ chức kinh tế mới, IRC, ERC, góp vốn, tài khoản vốn đầu tư, nghĩa vụ sau thành lập | Bài hướng dẫn + checklist hồ sơ + decision tree |
| Mô hình góp vốn/mua cổ phần | Khi nào cần đăng ký M&A approval, ngưỡng sở hữu nước ngoài, điều kiện ngành nghề, đất đai/quốc phòng an ninh | Bài hướng dẫn + checklist điều kiện + timeline |
| Quy trình xin giấy phép đầu tư | Chủ trương đầu tư nếu có, IRC, ERC, điều chỉnh IRC/ERC, thời hạn pháp lý và rủi ro thực tế | Bài quy trình + bảng cơ quan xử lý |
| Môi trường | Phân loại dự án, đánh giá sơ bộ tác động môi trường, ĐTM, giấy phép môi trường, đăng ký môi trường | Bài hướng dẫn ĐTM/môi trường cho dự án sản xuất |
| Giấy phép sản xuất | Khu công nghiệp, thuê đất/xưởng, xây dựng, PCCC, môi trường, ngành nghề có điều kiện theo loại sản phẩm | Checklist giấy phép theo ngành sản xuất |
| Trang chủ/cẩm nang | Chuyển nghiên cứu thành bài viết dễ đọc cho khách hàng | Backlog bài viết, outline, trạng thái kiểm chứng |

## 2. Nguyên tắc nghiên cứu

1. **Nguồn chính thống trước**: ưu tiên Cổng thông tin văn bản pháp luật, Công báo Chính phủ, Bộ KH&ĐT, Bộ TN&MT, ban quản lý khu công nghiệp, UBND tỉnh.
2. **Tách luật gốc và diễn giải**: mỗi kết luận phải trỏ về điều khoản/văn bản; bài viết dịch sang ngôn ngữ khách hàng nhưng không thay thế tư vấn luật.
3. **Ghi trạng thái hiệu lực**: mỗi nguồn cần có ngày kiểm tra, tình trạng còn hiệu lực/sửa đổi/thay thế, và người kiểm chứng.
4. **Tạo dữ liệu trước khi viết bài**: không viết bài cẩm nang nếu chưa có source record trong `source-registry.json`.
5. **Chia theo hành trình nhà đầu tư**: bài viết phải trả lời "tôi là nhà đầu tư nước ngoài, muốn lập/mua/góp vốn/sản xuất thì đi bước nào trước?".

## 3. Cấu trúc thư mục

```text
web/data/fdi-legal/
├── legal-library.md         # Mục lục thư viện pháp luật chia nhóm
├── library/
│   ├── 01-investment-enterprise.md      # Đầu tư & doanh nghiệp
│   ├── 02-foreign-capital-forms.md      # 100% vốn nước ngoài, góp vốn/mua cổ phần
│   ├── 03-environment-manufacturing.md  # Môi trường & sản xuất
│   └── 04-industrial-zones-local.md     # KCN, đất đai & địa phương
├── 00-index.md              # Kế hoạch nghiên cứu và quy trình vận hành
├── article-backlog.md       # Hạng mục bài viết cẩm nang cần sản xuất
└── source-registry.json     # Registry nguồn pháp luật để team tiếp tục bổ sung
```

## 4. Ma trận nghiên cứu chính

| Chủ đề | Câu hỏi nghiên cứu | Nguồn bắt buộc đối chiếu | Ghi chú kiểm chứng |
|---|---|---|---|
| Greenfield FDI | Nhà đầu tư nước ngoài lập công ty mới tại Việt Nam cần IRC/ERC trong trường hợp nào? | Luật Đầu tư 2020; Nghị định 31/2021/NĐ-CP; Luật Doanh nghiệp 2020 | Cần cập nhật mọi nghị định sửa đổi sau 2024/2025 nếu có |
| 100% vốn nước ngoài | Ngành sản xuất/dịch vụ nào cho phép 100% vốn nước ngoài, ngành nào hạn chế? | Danh mục ngành nghề tiếp cận thị trường có điều kiện; cam kết WTO/FTA; cổng MPI | Cần lập bảng theo ngành mục tiêu của khách hàng |
| Góp vốn/mua cổ phần | Khi nào phải đăng ký việc góp vốn/mua cổ phần trước khi đổi cổ đông? | Luật Đầu tư 2020 Điều 24-26; Nghị định 31/2021/NĐ-CP | Đặc biệt kiểm tra ngưỡng trên 50%, ngành có điều kiện, đất ở khu nhạy cảm |
| IRC/ERC | Hồ sơ, cơ quan tiếp nhận, thời hạn xử lý và điểm dễ bị hỏi bổ sung là gì? | Luật Đầu tư; Luật Doanh nghiệp; biểu mẫu của cơ quan đăng ký đầu tư/kinh doanh | Tách dự án trong KCN và ngoài KCN |
| Môi trường | Dự án sản xuất nào cần ĐTM, giấy phép môi trường hoặc đăng ký môi trường? | Luật BVMT 2020; Nghị định 08/2022/NĐ-CP; văn bản sửa đổi; Thông tư 02/2022/TT-BTNMT | Phải phân loại theo nhóm I/II/III/IV và phụ lục ngành |
| Sản xuất | Ngoài IRC/ERC, dự án sản xuất cần giấy phép/điều kiện nào trước vận hành? | Môi trường, xây dựng, PCCC, khu công nghiệp, lao động, hóa chất/an toàn nếu có | Làm checklist theo loại nhà máy, không gom chung một câu trả lời |
| Địa phương | Thái Nguyên/Hải Phòng có ưu đãi, khu công nghiệp, đầu mối cơ quan nào phù hợp? | Website tỉnh, ban quản lý KCN/KKT, quyết định ưu đãi địa phương | Liên kết với research PL-004/PL-005 |

## 5. Quy trình tạo một bài cẩm nang

1. **Chốt câu hỏi khách hàng**: ví dụ "Có thể lập công ty 100% vốn Trung Quốc để sản xuất linh kiện ở Hải Phòng không?".
2. **Tạo source record** trong `source-registry.json` cho mọi văn bản liên quan.
3. **Trích điều khoản trọng tâm**: ghi rõ số điều/khoản, yêu cầu, điều kiện áp dụng, ngoại lệ.
4. **Lập decision tree**: điều kiện nào dẫn tới IRC, M&A approval, ĐTM, giấy phép môi trường, PCCC, xây dựng.
5. **Viết bài nháp** trong backlog với cảnh báo "không phải tư vấn pháp lý chính thức".
6. **Review pháp lý**: luật sư/đối tác xác nhận trước khi đưa lên trang chủ.
7. **Gắn ngày cập nhật**: bài phải có "last reviewed" để tránh dùng sai khi luật thay đổi.

## 6. Definition of Done cho phần cẩm nang

- Có tối thiểu 10 nguồn pháp luật nền tảng trong registry.
- Mỗi bài có ít nhất 3 tham chiếu nguồn hoặc đủ căn cứ pháp lý theo phạm vi bài.
- Có decision tree riêng cho: lập mới 100% vốn nước ngoài, góp vốn/mua cổ phần, dự án sản xuất cần ĐTM/giấy phép môi trường.
- Có checklist hồ sơ theo từng bước: trước đầu tư, nộp IRC/ERC, sau thành lập, trước vận hành sản xuất.
- Có cảnh báo rủi ro: ngành nghề có điều kiện, đất/quốc phòng an ninh, môi trường, PCCC, xây dựng, ngành sản xuất đặc thù.

## 7. Việc tiếp theo đề xuất

| Ưu tiên | Việc | Output |
|---|---|---|
| P0 | Điền đủ registry nguồn pháp luật nền tảng và xác minh hiệu lực | `source-registry.json` cập nhật, có ngày kiểm tra |
| P0 | Viết bài decision tree "100% vốn nước ngoài vs góp vốn/mua cổ phần" | Bài cẩm nang số 1 |
| P0 | Viết checklist IRC/ERC cho dự án sản xuất trong KCN | Bài cẩm nang số 2 |
| P1 | Viết bài phân loại môi trường/ĐTM/giấy phép môi trường | Bài cẩm nang số 3 |
| P1 | Lập bảng giấy phép sản xuất theo ngành | Data table + bài tổng hợp |
| P1 | Thu thập ưu đãi địa phương Thái Nguyên/Hải Phòng | Kết nối PL-004/PL-005 |
