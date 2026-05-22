# Data bổ sung: Hồ Chí Minh từ Wikipedia và Tư liệu Văn kiện Đảng

Nguồn:

- Wikipedia tiếng Việt: https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh
- Tư liệu Văn kiện Đảng: https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/tieu-su-chu-tich-ho-chi-minh-52

Ngày bóc tách: 2026-05-23, Asia/Saigon

Ghi chú: Đây là bản data tham khảo để xây web. Nội dung được tóm tắt và chuẩn hóa theo cấu trúc, không sao chép nguyên văn dài từ nguồn.

## 1. Cách dùng 2 nguồn

```text
nguon-du-lieu-ho-chi-minh/
├── wikipedia/
│   ├── dùng để lấy mục lục rộng, nhánh chủ đề phụ, tác phẩm, tên gọi, di sản, văn hóa đại chúng
│   ├── phù hợp cho phần "đọc thêm", "bản đồ kiến thức", "liên kết tham khảo"
│   └── cần kiểm chứng chéo với nguồn chính thống khi dùng cho nội dung lịch sử trọng tâm
└── tu-lieu-van-kien-dang/
    ├── dùng làm trục tiểu sử chính thống
    ├── phù hợp cho timeline, factsheet, các mốc cách mạng, vai trò lịch sử
    └── nên ưu tiên cho nội dung giáo dục/chính trị/công dân trong website
```

## 2. Factsheet nhân vật

```yaml
nhan_vat:
  ten_chinh: Hồ Chí Minh
  ten_luc_nho: Nguyễn Sinh Cung
  ten_khi_di_hoc: Nguyễn Tất Thành
  ten_hoat_dong_cach_mang: Nguyễn Ái Quốc
  ten_khac_noi_bat:
    - Văn Ba
    - Hồ Chí Minh
    - Trần Dân Tiên
    - T. Lan
  ngay_sinh: 19/05/1890
  noi_sinh: làng Kim Liên, xã Nam Liên/nay là xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An
  ngay_mat: 02/09/1969
  noi_mat: Hà Nội
  vai_tro_chinh:
    - lãnh tụ cách mạng Việt Nam
    - người sáng lập Đảng Cộng sản Việt Nam
    - Chủ tịch nước Việt Nam Dân chủ Cộng hòa
    - Thủ tướng Chính phủ Việt Nam Dân chủ Cộng hòa giai đoạn đầu
    - nhà văn, nhà thơ, nhà báo
    - nhân vật tiêu biểu của phong trào giải phóng dân tộc
  danh_hieu_di_san:
    - Anh hùng giải phóng dân tộc
    - Nhà văn hóa kiệt xuất của Việt Nam
```

## 3. Timeline lõi để dựng web

```text
timeline-ho-chi-minh/
├── 1890/
│   └── Sinh tại Kim Liên, Nam Đàn, Nghệ An; tên lúc nhỏ Nguyễn Sinh Cung.
├── 1911/
│   ├── 03/06: nhận thẻ nhân viên trên tàu Amiran Latusơ Tơrêvin với tên Văn Ba.
│   └── 05/06: rời cảng Nhà Rồng đến Pháp, mở đầu hành trình tìm đường cứu nước.
├── 1912-1917/
│   └── Đi qua nhiều nước ở châu Á, châu Âu, châu Mỹ, châu Phi; tiếp xúc đời sống lao động và các dân tộc thuộc địa.
├── 1917/
│   └── Từ Anh trở lại Pháp, tham gia phong trào Việt kiều và phong trào công nhân Pháp.
├── 1919/
│   └── Với tên Nguyễn Ái Quốc, gửi bản yêu sách tới Hội nghị Versailles.
├── 1920/
│   └── Tham dự Đại hội XVIII Đảng Xã hội Pháp; tán thành gia nhập Quốc tế Cộng sản; trở thành một trong những người sáng lập Đảng Cộng sản Pháp.
├── 1921-1922/
│   ├── Tham gia sáng lập Hội Liên hiệp các dân tộc thuộc địa.
│   └── Tham gia xuất bản báo Người cùng khổ/Le Paria.
├── 1923/
│   └── Sang Liên Xô, làm việc tại Quốc tế Cộng sản; tham dự các hội nghị/đại hội quốc tế.
├── 1924/
│   └── Đến Quảng Châu, Trung Quốc; hoạt động trong môi trường Quốc tế Cộng sản và phong trào cách mạng châu Á.
├── 1925/
│   ├── Thành lập Hội Việt Nam Cách mạng Thanh niên.
│   ├── Mở lớp huấn luyện cán bộ cách mạng.
│   ├── Ra tuần báo Thanh niên.
│   └── Các bài viết/bài giảng đặt nền tảng cho Đường Kách mệnh.
├── 1927/
│   └── Rời Quảng Châu, đi Liên Xô, Đức, Bỉ, Ý rồi trở lại châu Á.
├── 1928-1929/
│   └── Hoạt động trong phong trào Việt kiều yêu nước tại Xiêm/Thái Lan.
├── 1930/
│   └── Chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam tại Cửu Long, Hồng Kông.
├── 1931-1933/
│   ├── Bị chính quyền Anh bắt tại Hồng Kông.
│   └── Được trả tự do đầu năm 1933.
├── 1934-1938/
│   └── Nghiên cứu tại Liên Xô, tiếp tục theo dõi và chỉ đạo phong trào cách mạng trong nước.
├── 1938/
│   └── Rời Liên Xô sang Trung Quốc, chuẩn bị liên lạc để về nước.
├── 1941/
│   ├── 28/01: trở về Việt Nam sau hơn 30 năm xa Tổ quốc.
│   └── Tháng 5: triệu tập Hội nghị Trung ương 8; thành lập Việt Minh; xây dựng lực lượng và căn cứ cách mạng.
├── 1942-1943/
│   ├── Lấy tên Hồ Chí Minh khi sang Trung Quốc tìm liên minh quốc tế.
│   ├── Bị giam tại Quảng Tây hơn một năm.
│   └── Viết Nhật ký trong tù gồm 133 bài thơ chữ Hán.
├── 1944/
│   ├── Tháng 9: trở lại căn cứ Cao Bằng.
│   └── Tháng 12: chỉ thị thành lập Đội Việt Nam tuyên truyền giải phóng quân.
├── 1945/
│   ├── Tháng 5: về Tân Trào.
│   ├── Tháng 8: cùng Trung ương Đảng lãnh đạo Tổng khởi nghĩa.
│   └── 02/09: đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa.
├── 1946/
│   ├── 01/01: Chính phủ liên hiệp lâm thời do Hồ Chí Minh làm Chủ tịch.
│   ├── Tháng 1: Quốc hội khóa I bầu làm Chủ tịch nước Việt Nam Dân chủ Cộng hòa.
│   ├── 02/03: Chính phủ liên hiệp kháng chiến được thành lập.
│   ├── 03/11: được giao thành lập Chính phủ mới, giữ vai trò Chủ tịch nước kiêm Thủ tướng và kiêm Bộ trưởng Bộ Ngoại giao.
│   └── 19/12: kêu gọi toàn quốc kháng chiến chống thực dân Pháp.
├── 1951/
│   └── Đại hội II của Đảng bầu làm Chủ tịch Ban Chấp hành Trung ương Đảng.
├── 1954/
│   └── Kháng chiến chống Pháp kết thúc bằng chiến thắng Điện Biên Phủ.
├── 1955/
│   └── Sau khi miền Bắc được giải phóng, xác định hai nhiệm vụ chiến lược: xây dựng miền Bắc và đấu tranh thống nhất nước nhà.
├── 1956/
│   └── Được bầu làm Chủ tịch Đảng, kiêm Tổng Bí thư tại Hội nghị Trung ương mở rộng lần thứ X khóa II.
├── 1960/
│   └── Đại hội III bầu lại làm Chủ tịch Ban Chấp hành Trung ương Đảng Lao động Việt Nam.
├── 1964/
│   └── Động viên toàn dân trước chiến tranh phá hoại miền Bắc; khẳng định tinh thần độc lập, tự do.
├── 1969/
│   ├── 02/09: qua đời tại Hà Nội.
│   └── Để lại Di chúc lịch sử, nhấn mạnh đoàn kết, thống nhất, độc lập, dân chủ, giàu mạnh.
├── 1975/
│   └── Chiến dịch Hồ Chí Minh hoàn thành giải phóng miền Nam, thống nhất đất nước.
└── 1987-1990/
    └── UNESCO thông qua nghị quyết tôn vinh nhân dịp kỷ niệm 100 năm ngày sinh Hồ Chí Minh.
```

## 4. Nhóm nội dung nên đưa vào website mới

```text
content-modules/
├── hanh-trinh-tim-duong-cuu-nuoc/
│   ├── 1911-nha-rong
│   ├── 1912-1917-bon-chau
│   ├── 1919-versailles
│   ├── 1920-chuyen-bien-tu-yeu-nuoc-den-cong-san
│   ├── 1921-1925-phap-va-bao-chi-cach-mang
│   ├── 1923-lien-xo
│   ├── 1924-1927-quang-chau
│   └── 1928-1930-thai-lan-hong-kong-thanh-lap-dang
├── tro-ve-to-quoc-va-cach-mang-thang-tam/
│   ├── 1941-pac-bo-viet-minh
│   ├── 1942-1943-nhat-ky-trong-tu
│   ├── 1944-doi-viet-nam-tuyen-truyen-giai-phong-quan
│   ├── 1945-tan-trao-tong-khoi-nghia
│   └── 1945-tuyen-ngon-doc-lap
├── nha-nuoc-viet-nam-dan-chu-cong-hoa/
│   ├── chinh-phu-lam-thoi
│   ├── tong-tuyen-cu-quoc-hoi-khoa-i
│   ├── hien-phap-dan-chu-dau-tien
│   ├── chinh-phu-lien-hiep-khang-chien
│   └── loi-keu-goi-toan-quoc-khang-chien
├── tu-tuong-ho-chi-minh/
│   ├── doc-lap-dan-toc-gan-voi-tu-do-hanh-phuc
│   ├── giai-phong-dan-toc-va-doan-ket-quoc-te
│   ├── dan-la-goc
│   ├── dao-duc-cach-mang-can-kiem-liem-chinh
│   ├── giao-duc-hoc-tap-thanh-nien
│   └── doan-ket-luong-giao-doan-ket-toan-dan
├── tac-pham-va-bao-chi/
│   ├── ban-an-che-do-thuc-dan-phap
│   ├── duong-kach-menh
│   ├── tuyen-ngon-doc-lap
│   ├── nhat-ky-trong-tu
│   ├── sua-doi-loi-lam-viec
│   ├── di-chuc
│   ├── bao-nguoi-cung-kho
│   └── bao-thanh-nien
├── di-san-va-tuong-niem/
│   ├── lang-chu-tich-ho-chi-minh
│   ├── bao-tang-khu-di-tich
│   ├── dia-danh-truong-duong-pho-mang-ten-ho-chi-minh
│   ├── tuong-dai-trong-nuoc-va-quoc-te
│   ├── tem-anh-tu-lieu
│   └── unesco-1990
├── van-hoa-dai-chung/
│   ├── am-nhac-ve-bac
│   ├── tho-van-tuyen-tap
│   ├── hoi-hoa
│   ├── dien-anh
│   └── san-khau
└── doc-them-va-goc-da-chieu/
    ├── wikipedia-muc-luc-mo-rong
    ├── danh-gia-va-tranh-luan-hoc-thuat
    ├── ten-goi-bi-danh-but-danh
    └── nguon-tham-khao
```

## 5. Tác phẩm và tư liệu nên lập thành collection

```yaml
works:
  - title: Tuyên ngôn Độc lập
    year: 1945
    type: van_kien
    use_for_web: "module đọc văn kiện, audio, bối cảnh lịch sử, ảnh Ba Đình"
  - title: Bản án chế độ thực dân Pháp
    year: 1925
    type: sach_chinh_luan
    use_for_web: "module chống chủ nghĩa thực dân, báo chí cách mạng ở Pháp"
  - title: Đường Kách mệnh
    year: 1927
    type: ly_luan_cach_mang
    use_for_web: "module đào tạo cán bộ, chuẩn bị thành lập Đảng"
  - title: Con rồng tre
    year: 1922
    type: kich/cham_biem
    use_for_web: "góc văn học - sân khấu"
  - title: Truyện ngắn và bài báo Pháp ngữ
    years: 1922-1925
    examples:
      - Pari
      - Lời than vãn của bà Trưng Trắc
      - Con người biết mùi hun khói
      - Vi hành
      - Đoàn kết giai cấp
      - Con rùa
      - Những trò lố hay là Va-ren và Phan Bội Châu
    use_for_web: "gallery văn học báo chí, thẻ tác phẩm ngắn"
  - title: Nhật ký trong tù
    year: 1942
    type: tho_chu_han
    use_for_web: "module thơ, hoàn cảnh sáng tác, bản đồ nhà tù Quảng Tây"
  - title: Sửa đổi lối làm việc
    year: 1947
    type: tac_pham_xay_dung_dang
    use_for_web: "module đạo đức công vụ, phong cách làm việc"
  - title: Những mẩu chuyện về đời hoạt động của Hồ Chủ tịch
    author_name_used: Trần Dân Tiên
    type: hoi_ky/tieu_su
    use_for_web: "module kể chuyện, timeline hoạt động"
  - title: Vừa đi đường vừa kể chuyện
    author_name_used: T. Lan
    type: ke_chuyen
    use_for_web: "module kể chuyện ở Việt Bắc"
  - title: Di chúc Hồ Chí Minh
    type: van_kien
    use_for_web: "module lời căn dặn, tương tác đọc theo chủ đề"
```

## 6. Dữ liệu tên gọi, bí danh, bút danh

Nên biến phần này thành một module tương tác "Một con người - nhiều tên gọi theo từng giai đoạn".

```yaml
names:
  - name: Nguyễn Sinh Cung
    context: tên lúc nhỏ
  - name: Nguyễn Tất Thành
    context: tên khi đi học, tuổi trẻ, giai đoạn trước khi ra đi tìm đường cứu nước
  - name: Văn Ba
    context: tên dùng khi làm việc trên tàu năm 1911
  - name: Nguyễn Ái Quốc
    context: tên hoạt động cách mạng nổi bật ở Pháp và quốc tế
  - name: Hồ Chí Minh
    context: tên chính thức và phổ biến nhất về sau
  - name: Trần Dân Tiên
    context: bút danh gắn với tác phẩm kể về đời hoạt động
  - name: T. Lan
    context: bút danh gắn với tác phẩm Vừa đi đường vừa kể chuyện
```

## 7. Gợi ý model dữ liệu cho database/web app

```json
{
  "person": {
    "id": "ho-chi-minh",
    "names": [],
    "birth": {},
    "death": {},
    "roles": [],
    "sources": []
  },
  "timeline_events": [
    {
      "id": "event-1911-nha-rong",
      "date": "1911-06-05",
      "title": "Rời cảng Nhà Rồng",
      "period": "Hành trình tìm đường cứu nước",
      "location": "Sài Gòn / cảng Nhà Rồng",
      "summary": "Nguyễn Tất Thành rời Tổ quốc để tìm con đường giải phóng dân tộc.",
      "media": [],
      "sources": ["tu-lieu-van-kien-dang"]
    }
  ],
  "works": [
    {
      "id": "duong-kach-menh",
      "title": "Đường Kách mệnh",
      "year": 1927,
      "type": "ly_luan_cach_mang",
      "summary": "",
      "related_events": ["event-1925-hoi-vn-cach-mang-thanh-nien"],
      "sources": []
    }
  ],
  "themes": [
    {
      "id": "dan-la-goc",
      "title": "Dân là gốc",
      "summary": "",
      "related_quotes": [],
      "related_events": [],
      "sources": []
    }
  ],
  "locations": [
    {
      "id": "nha-rong",
      "name": "Cảng Nhà Rồng",
      "type": "historical_site",
      "geo": null,
      "related_events": ["event-1911-nha-rong"]
    }
  ]
}
```

## 8. Gợi ý UX cho website mới

```text
home/
├── hero: Không gian văn hóa Hồ Chí Minh
├── quick-facts: 1890-1969, các tên gọi, quê quán, vai trò
├── interactive-timeline: 1890 -> 1990
├── map-journey: Nghệ An -> Huế -> Sài Gòn -> Pháp -> Liên Xô -> Trung Quốc -> Cao Bằng -> Hà Nội
├── collections/
│   ├── Cuộc đời và sự nghiệp
│   ├── Tư tưởng và đạo đức
│   ├── Tác phẩm
│   ├── Âm nhạc và văn hóa đại chúng
│   ├── Di sản và tưởng niệm
│   └── Gương sáng hôm nay
├── quiz/
│   ├── quiz-timeline
│   ├── quiz-tac-pham
│   ├── quiz-tu-tuong
│   └── quiz-dia-danh
└── sources/
    ├── Wikipedia tiếng Việt
    ├── Tư liệu Văn kiện Đảng
    └── nguồn trường/chi bộ tự biên soạn
```

## 9. Những điểm cần kiểm chứng khi viết nội dung cuối

- Với các mốc ngày/tháng/năm, ưu tiên Tư liệu Văn kiện Đảng làm nguồn chính.
- Với các phần "đánh giá", "hôn nhân", "sùng bái cá nhân", "tranh luận học thuật", chỉ nên đặt trong khu "đọc thêm" hoặc "góc nghiên cứu" nếu website hướng tới học thuật đa chiều.
- Với tác phẩm văn học/báo chí, nên kiểm tra thêm bản văn gốc hoặc nguồn xuất bản trước khi trích dẫn.
- Với ảnh, bản đồ, âm thanh, cần kiểm tra giấy phép sử dụng trước khi đưa lên web công khai.

