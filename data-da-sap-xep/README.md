# Data đã sắp xếp: Không gian văn hóa Hồ Chí Minh online

Mục tiêu của bộ data này là làm đầu vào cho AI/dev xây lại một website "Không gian văn hóa Hồ Chí Minh" thống nhất, dễ mở rộng và tốt hơn bản Canva gốc.

Nguồn đã lọc:

- Trang hub Canva: `CB2 - Không gian văn hóa Hồ Chí Minh`
- Các trang con: Carrd, Canva, Netlify gallery, AnyFlip, Google Form
- Wikipedia tiếng Việt: Hồ Chí Minh
- Tư liệu Văn kiện Đảng: Tiểu sử Chủ tịch Hồ Chí Minh
- Các file tác phẩm đang có trong workspace

## 1. Cây thư mục nội dung đề xuất

```text
khong-gian-van-hoa-ho-chi-minh/
├── 00-trang-chu/
│   ├── hero
│   ├── gioi-thieu-ngan
│   ├── quick-facts
│   ├── dieu-huong-6-khu-vuc
│   └── tim-kiem-toan-site
│
├── 01-ho-so-ho-chi-minh/
│   ├── factsheet
│   ├── ten-goi-bi-danh-but-danh
│   ├── vai-tro-lich-su
│   ├── danh-hieu-di-san
│   └── nguon-tham-khao
│
├── 02-timeline-cuoc-doi-su-nghiep/
│   ├── 1890-1911-xuat-than-tuoi-tre
│   ├── 1911-1930-hanh-trinh-tim-duong-cuu-nuoc
│   ├── 1930-1945-thanh-lap-dang-va-cach-mang-thang-tam
│   ├── 1945-1954-nha-nuoc-moi-va-khang-chien-chong-phap
│   ├── 1955-1969-lanh-dao-mien-bac-dau-tranh-thong-nhat
│   └── 1975-1990-di-san-va-ton-vinh
│
├── 03-cuoc-doi-va-su-nghiep-cua-bac/
│   ├── noi-bac-sinh-ra
│   ├── ngoi-truong-bac-day
│   ├── noi-ra-di-tim-duong-cuu-nuoc
│   ├── hanh-trinh-cuu-nuoc
│   ├── noi-viet-tuyen-ngon-doc-lap
│   └── noi-khai-sinh-viet-nam-dan-chu-cong-hoa
│
├── 04-tu-tuong-dao-duc-giao-duc-y-te/
│   ├── tu-tuong-giao-duc
│   ├── hoc-di-doi-voi-hanh
│   ├── duc-va-tai
│   ├── hoc-suot-doi
│   ├── y-duc-luong-y-nhu-tu-mau
│   └── quiz-tu-anh-chu-den-anh-nguoi
│
├── 05-tac-pham-va-tu-lieu/
│   ├── tuyen-ngon-doc-lap
│   ├── ban-an-che-do-thuc-dan-phap
│   ├── duong-kach-menh
│   ├── nhat-ky-trong-tu
│   ├── sua-doi-loi-lam-viec
│   ├── loi-keu-goi-toan-quoc-khang-chien
│   ├── di-chuc
│   └── tac-pham-van-tho-bao-chi-khac
│
├── 06-am-nhac-ve-bac/
│   ├── playlist
│   ├── the-ca-khuc
│   ├── audio-video-link
│   ├── cam-nhan-va-boi-canh
│   └── minigame-do-vui-nho-bac
│
├── 07-tuong-dai-bac-tren-the-gioi/
│   ├── ban-do-the-gioi
│   ├── gallery-20-quoc-gia
│   ├── thong-tin-dia-diem
│   └── y-nghia-ngoai-giao-van-hoa
│
├── 08-nhung-mau-chuyen-ve-bac/
│   ├── bac-ho-va-nguoi-thay-thuoc
│   ├── phai-cham-chi-hoc-tap
│   ├── thoi-gian-quy-bau-lam
│   ├── doi-ban-tay
│   └── bac-ho-voi-tinh-than-tu-hoc
│
├── 09-guong-sang-chi-bo-2/
│   ├── anh-su-kien-2024
│   ├── anh-su-kien-2025
│   ├── anh-su-kien-2026
│   ├── ho-so-ca-nhan-tap-the
│   └── cau-chuyen-lam-theo-bac-hom-nay
│
└── 10-nguon-va-kiem-chung/
    ├── nguon-chinh-thong
    ├── nguon-bach-khoa
    ├── nguon-web-goc
    ├── ban-quyen-media
    └── ghi-chu-bien-tap
```

## 2. Thứ tự ưu tiên khi build web

1. **Trang chủ**: giới thiệu nhanh, 6 khu vực, tìm kiếm.
2. **Timeline**: đây là xương sống của toàn bộ website.
3. **Hồ sơ Hồ Chí Minh**: factsheet, tên gọi, vai trò, danh hiệu.
4. **Cuộc đời và sự nghiệp**: chuyển phần Carrd cũ thành timeline/gallery có caption.
5. **Tư tưởng - giáo dục - y tế**: chuyển Google Form thành quiz tương tác có giải thích.
6. **Tác phẩm và tư liệu**: tận dụng các file tác phẩm đang có trong repo.
7. **Âm nhạc về Bác**: playlist, thẻ bài hát, minigame.
8. **Tượng đài thế giới**: gallery + bản đồ.
9. **Mẩu chuyện về Bác**: story cards + bài học + câu hỏi suy ngẫm.
10. **Gương sáng Chi bộ 2**: ảnh sự kiện + profile + caption.

## 3. Bộ file trong thư mục này

```text
data-da-sap-xep/
├── README.md
└── structured-content.json
```

`structured-content.json` là bản JSON đã gom gọn để AI/dev dùng trực tiếp.

