# Prompt cho Claude Code: Xây web "Không gian Văn hóa Hồ Chí Minh"

Bạn là Claude Code, hãy giúp tôi xây dựng một website tĩnh hoàn toàn để host trên GitHub Pages.

## Bối cảnh dự án

Tôi đang xây dựng website **"Không gian Văn hóa Hồ Chí Minh"** cho:

- Cấp trên: **Đảng ủy Ban Quản lý các Khu Chế xuất và Công nghiệp TP. Hồ Chí Minh**
- Đơn vị: **Chi bộ Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp**
- Đơn vị thực hiện trang web: **Đoàn TNCS Hồ Chí Minh Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp**

Tên website nên dùng chính là:

```text
Không gian Văn hóa Hồ Chí Minh
```

Không dùng "Không gian Văn hóa Hồ Chí Minh trực tuyến" làm tên chính vì hơi dài và kém trang trọng hơn. Có thể dùng "trực tuyến" trong tagline:

```text
Không gian học tập, tìm hiểu và lan tỏa tư tưởng, đạo đức, phong cách Hồ Chí Minh trên nền tảng số.
```

Website cần dựa trên bộ data đã có trong repo, đặc biệt là:

```text
data-da-sap-xep/structured-content.json
data-da-sap-xep/README.md
site-data-khong-gian-van-hoa-hcm.md
source-data-ho-chi-minh-wikipedia-dang.md
tac-pham-*.md
```

Hãy đọc các file này trước khi code. Nếu có khác biệt giữa các nguồn, ưu tiên:

1. `data-da-sap-xep/structured-content.json` cho cấu trúc website.
2. `source-data-ho-chi-minh-wikipedia-dang.md` cho timeline/factsheet nền.
3. Các file `tac-pham-*.md` cho nội dung tác phẩm.
4. `site-data-khong-gian-van-hoa-hcm.md` cho cảm hứng từ web gốc.

## Mục tiêu

Xây một website tĩnh, tối giản, hài hòa, trang trọng, responsive tốt trên điện thoại, tablet, laptop và desktop.

Website không cần backend, không cần đăng nhập, không cần database. Mọi dữ liệu nên nằm trong file JSON/TS/MD local để GitHub Pages host được.

Được phép dùng thư viện bên ngoài nếu giúp nhẹ công việc và vẫn build static tốt.

## Stack gợi ý

Nếu repo chưa có app frontend sẵn, hãy scaffold app theo hướng:

```text
Vite + React + TypeScript
```

Có thể dùng:

- `Tailwind CSS` cho styling.
- `lucide-react` cho icon, nhưng dùng tiết chế, trang trọng.
- `framer-motion` chỉ nếu animation nhẹ và không làm rối.
- `Fuse.js` cho tìm kiếm client-side.
- `Leaflet` hoặc `react-simple-maps` nếu làm bản đồ tượng đài; nếu quá nặng thì dùng gallery + filter trước.

Yêu cầu bắt buộc:

- Build ra static assets chạy được trên GitHub Pages.
- Có cấu hình `base` phù hợp GitHub Pages. Nếu không biết repo name, cấu hình sao cho dễ chỉnh trong `vite.config`.
- Có script:

```json
{
  "scripts": {
    "dev": "...",
    "build": "...",
    "preview": "..."
  }
}
```

## Định hướng thiết kế

### Cảm giác tổng thể

Thiết kế cần:

- Trang trọng nhưng không nặng nề.
- Tối giản, sạch, nhiều khoảng thở.
- Có hơi hướng bảo tàng số / không gian học tập / triển lãm trực tuyến.
- Không dùng emoji.
- Không dùng phong cách quá sặc sỡ, không lạm dụng gradient.
- Không làm trang kiểu landing page quảng cáo. Đây là một không gian nội dung để khám phá.

### Màu sắc

Palette chính:

```text
Hồng sen: #E85D8E hoặc gần tương đương
Hồng nhạt nền: #FFF1F6 hoặc #FDECF2
Xanh lá sen: #2F7D4A hoặc #3A8F5B
Trắng ngà: #FFFDF8
Đỏ trang trọng: #B5121B hoặc #C91F2E
Vàng nhấn rất nhẹ: #D6A84F
Mực chữ: #1F2933
Xám phụ: #667085
```

Nên để màu chủ đạo là **trắng ngà + hồng sen**, xanh lá sen làm màu cân bằng, đỏ dùng cho điểm nhấn chính trị/trang trọng.

Tránh:

- Nền đỏ toàn trang quá nhiều.
- Hồng quá chói.
- Gradient tím/xanh hiện đại không hợp chủ đề.

### Họa tiết Việt Nam

Tôi thích các họa tiết:

- Hoa sen.
- Lá sen.
- Mây Việt.
- Dải lụa.
- Họa tiết trống đồng.

Nhưng không muốn dùng emoji. Nếu chưa có asset thật, hãy tạo họa tiết bằng CSS/SVG đơn giản, rất mờ, trang trí nền hoặc divider. Không để họa tiết lấn át nội dung.

Gợi ý:

- Header/hero có nền trắng ngà, họa tiết hoa sen hoặc mây rất nhạt.
- Section divider có đường cong/dải lụa nhẹ.
- Một số block có watermark trống đồng opacity thấp.
- Card có border mảnh màu hồng nhạt hoặc xanh lá sen.

Không cần vẽ quá phức tạp; ưu tiên đẹp, sạch, dễ triển khai.

### Font chữ

Tôi đang thích font tiêu đề **DT-PhuDu Bold**. Nếu có file font, hãy hỗ trợ import local:

```text
public/fonts/DT-PhuDu-Bold.woff2
```

Nếu chưa có file font, hãy dùng fallback chuyên nghiệp:

- Heading: `DT PhuDu`, fallback `Be Vietnam Pro`, `Roboto Slab`, `serif`.
- Body: `Be Vietnam Pro`, fallback `Inter`, `system-ui`, `sans-serif`.

Yêu cầu:

- Tiếng Việt hiển thị đẹp, không lỗi dấu.
- Body dễ đọc, line-height thoáng.
- Heading trang trọng nhưng không quá phô.
- Không dùng quá 2 font chính.

## Cấu trúc website cần xây

Hãy xây single page app hoặc multi-section static site với navigation rõ ràng. Có thể dùng route/hash hoặc scroll section.

Các section chính:

### 1. Trang chủ / Hero

Nội dung:

- Tên: **Không gian Văn hóa Hồ Chí Minh**
- Dòng đơn vị:

```text
Chi bộ Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp
Đoàn TNCS Hồ Chí Minh Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp thực hiện
```

- Tagline:

```text
Không gian học tập, tìm hiểu và lan tỏa tư tưởng, đạo đức, phong cách Hồ Chí Minh trên nền tảng số.
```

- Nút điều hướng:
  - Khám phá timeline
  - Xem tác phẩm
  - Tham gia quiz

Hero không cần ảnh thật ngay nếu chưa có. Nếu thiếu ảnh, tạo placeholder đẹp và ghi rõ cần ảnh.

### 2. Hồ sơ Hồ Chí Minh

Dựa vào `person_profile` trong data.

Hiển thị:

- Ngày sinh: 19/05/1890
- Quê quán: Kim Liên, Nam Đàn, Nghệ An
- Ngày mất: 02/09/1969
- Vai trò: lãnh tụ cách mạng, người sáng lập Đảng Cộng sản Việt Nam, Chủ tịch nước Việt Nam Dân chủ Cộng hòa, nhà văn/nhà thơ/nhà báo...
- Danh hiệu/di sản: Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất của Việt Nam.

Thêm module nhỏ:

```text
Một con người - nhiều tên gọi
```

Gồm: Nguyễn Sinh Cung, Nguyễn Tất Thành, Văn Ba, Nguyễn Ái Quốc, Hồ Chí Minh, Trần Dân Tiên, T. Lan.

### 3. Timeline cuộc đời và sự nghiệp

Dựa vào `timeline` trong `data-da-sap-xep/structured-content.json`.

Tạo timeline chia giai đoạn:

- 1890-1911: Xuất thân và tuổi trẻ
- 1911-1930: Hành trình tìm đường cứu nước
- 1930-1945: Thành lập Đảng và Cách mạng Tháng Tám
- 1945-1969: Lãnh đạo nhà nước và kháng chiến
- 1975-1990: Di sản và tôn vinh

Yêu cầu UI:

- Desktop: timeline dọc hoặc ngang, dễ scan.
- Mobile: card list dọc.
- Mỗi event có date, title, summary ngắn nếu có.
- Có filter theo giai đoạn.

### 4. Cuộc đời và sự nghiệp của Bác

Dựa vào module `life-and-career`.

Tạo card/grid:

- Nơi Bác sinh ra.
- Ngôi trường Bác dạy.
- Nơi ra đi tìm đường cứu nước.
- Hành trình cứu nước.
- Nơi Bác viết Tuyên ngôn Độc lập.
- Nơi đánh dấu khai sinh nước Việt Nam Dân chủ Cộng hòa.

Mỗi card:

- Có ảnh placeholder.
- Có caption ngắn.
- Có tag giai đoạn.
- Có ghi chú đường dẫn ảnh cần thêm.

### 5. Tư tưởng, đạo đức, giáo dục, y tế

Dựa vào module `thought-education-medicine`.

Tạo các thẻ chủ đề:

- Giáo dục toàn diện.
- Học đi đôi với hành.
- Đức và tài.
- Học suốt đời.
- Giáo dục phục vụ nhân dân.
- Y đức và trách nhiệm người thầy thuốc.

Thêm quiz client-side đơn giản:

- 5-8 câu mẫu từ nhóm chủ đề đã có.
- Có chọn đáp án.
- Có hiện đúng/sai.
- Có giải thích ngắn sau khi chọn.
- Có điểm cuối.
- Không cần gửi form.

Nếu chưa đủ câu hỏi/đáp án chắc chắn, tạo cấu trúc quiz và để TODO để tôi bổ sung.

### 6. Tác phẩm và tư liệu

Dựa vào:

```text
tac-pham-ban-an-che-do-thuc-dan-phap.md
tac-pham-doi-nguyet.md
tac-pham-loi-keu-goi-toan-quoc-khang-chien.md
tac-pham-pac-po-hung-vi.md
tac-pham-pari.md
tac-pham-sua-doi-loi-lam-viec.md
```

Và các works trong JSON:

- Tuyên ngôn Độc lập
- Bản án chế độ thực dân Pháp
- Đường Kách mệnh
- Nhật ký trong tù
- Sửa đổi lối làm việc
- Lời kêu gọi toàn quốc kháng chiến
- Di chúc

Yêu cầu:

- Tạo library dạng card.
- Có filter theo loại: văn kiện, chính luận, thơ, báo chí, tác phẩm khác.
- Có trạng thái: đã có nội dung trong repo / cần bổ sung.
- Nếu có thể parse Markdown local thì hiển thị modal/reader đơn giản. Nếu không, tạo link nội bộ hoặc placeholder rõ ràng.

### 7. Các ca khúc về Bác

Dựa vào module `songs`.

Danh sách:

1. Mùa xuân trên Thành phố Hồ Chí Minh - Xuân Hồng - Tùng Dương
2. Ai yêu Bác Hồ Chí Minh hơn các em nhi đồng - Phong Nhã - Pia Linh
3. Tuổi trẻ thế hệ Bác Hồ - Triều Dâng - Tùng Dương
4. Như có Bác Hồ trong ngày vui đại thắng - Phạm Tuyên
5. Bác đang cùng chúng cháu hành quân - Huy Thục
6. Ca ngợi Hồ Chủ tịch - Văn Cao
7. Viếng lăng Bác - Hoàng Hiệp, thơ Viễn Phương
8. Đêm qua em mơ gặp Bác Hồ - Xuân Giao
9. Miền Trung nhớ Bác - Phạm Minh Tuấn
10. Dấu chân phía trước - Phạm Minh Tuấn

Yêu cầu:

- Không chép lời bài hát dài.
- Mỗi bài là một card có tên, tác giả, trình bày, trạng thái audio/video cần thêm.
- Có playlist UI giả lập hoặc nơi gắn link YouTube/audio sau.
- Có minigame nhỏ "Đố vui nhớ Bác": hỏi nhận diện bài hát/tác giả ở mức metadata, không cần audio thật.

### 8. Tượng đài Bác ở các quốc gia

Dựa vào module `world-monuments`.

Danh sách quốc gia:

Ấn Độ, Cuba, Hungary, Nga, Pháp, Thái Lan, Trung Quốc, Argentina, Chile, Mexico, Philippines, Singapore, Slovakia, Algeria, Angola, Anh, Hoa Kỳ, Madagascar, Nhật Bản, Sri Lanka.

Yêu cầu:

- Nếu làm bản đồ được thì tốt, không bắt buộc.
- Tối thiểu có gallery/grid theo quốc gia.
- Mỗi quốc gia có placeholder ảnh và TODO metadata:
  - tên địa điểm
  - thành phố
  - năm khánh thành nếu có
  - nguồn ảnh
  - ý nghĩa giao lưu văn hóa

### 9. Những mẩu chuyện về Bác

Dựa vào module `stories`.

Tạo story cards:

- Bác Hồ và những lời căn dặn đối với người thầy thuốc.
- Phải chăm chỉ học tập.
- Thời gian quý báu lắm.
- Đôi bàn tay.
- Bác Hồ với tinh thần tự học.

Mỗi story card:

- Tóm tắt 2-3 dòng.
- Chủ đề.
- Bài học.
- Câu hỏi suy ngẫm.
- Nút "Đọc thêm" mở modal/expand.

Không copy nguyên văn ebook dài.

### 10. Gương sáng Chi bộ / Đoàn trường

Vì tôi đang làm cho đơn vị mới, không nên giữ nguyên "Gương sáng Chi bộ 2" của web gốc như tên chính.

Hãy đổi thành:

```text
Gương sáng học tập và làm theo Bác
```

Hiển thị:

- Ảnh sự kiện 2024/2025/2026 hoặc ảnh đơn vị mới nếu tôi bổ sung sau.
- Card cá nhân/tập thể tiêu biểu.
- Caption, năm, thành tích, bài học làm theo Bác.

Nếu chưa có dữ liệu đơn vị mới, tạo placeholder content và TODO rõ ràng để tôi điền.

### 11. Nguồn và kiểm chứng

Section cuối:

- Nêu nguồn chính: Tư liệu Văn kiện Đảng.
- Nguồn tham khảo mở rộng: Wikipedia tiếng Việt.
- Nguồn web gốc/Canva chỉ dùng làm cảm hứng cấu trúc.
- Ghi chú: ảnh/audio/lời bài hát cần kiểm tra bản quyền trước khi public.

## Asset cần tạo placeholder và đường dẫn yêu cầu

Hãy tạo thư mục asset nếu chưa có:

```text
public/
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   │   ├── ho-chi-minh-portrait.jpg
│   │   │   └── lotus-hero.jpg
│   │   ├── timeline/
│   │   │   ├── lang-sen.jpg
│   │   │   ├── nha-rong.jpg
│   │   │   ├── paris-1919.jpg
│   │   │   ├── pac-bo.jpg
│   │   │   ├── tan-trao.jpg
│   │   │   └── ba-dinh-1945.jpg
│   │   ├── life-career/
│   │   │   ├── noi-bac-sinh-ra.jpg
│   │   │   ├── ngoi-truong-bac-day.jpg
│   │   │   ├── noi-ra-di-tim-duong-cuu-nuoc.jpg
│   │   │   ├── hanh-trinh-cuu-nuoc.jpg
│   │   │   ├── noi-viet-tuyen-ngon-doc-lap.jpg
│   │   │   └── khai-sinh-vn-dcch.jpg
│   │   ├── monuments/
│   │   │   ├── an-do.jpg
│   │   │   ├── cuba.jpg
│   │   │   ├── hungary.jpg
│   │   │   ├── nga.jpg
│   │   │   ├── phap.jpg
│   │   │   ├── thai-lan.jpg
│   │   │   ├── trung-quoc.jpg
│   │   │   ├── argentina.jpg
│   │   │   ├── chile.jpg
│   │   │   ├── mexico.jpg
│   │   │   ├── philippines.jpg
│   │   │   ├── singapore.jpg
│   │   │   ├── slovakia.jpg
│   │   │   ├── algeria.jpg
│   │   │   ├── angola.jpg
│   │   │   ├── anh.jpg
│   │   │   ├── hoa-ky.jpg
│   │   │   ├── madagascar.jpg
│   │   │   ├── nhat-ban.jpg
│   │   │   └── sri-lanka.jpg
│   │   └── role-models/
│   │       ├── su-kien-2024-01.jpg
│   │       ├── su-kien-2025-01.jpg
│   │       └── su-kien-2026-01.jpg
│   └── patterns/
│       ├── lotus-line.svg
│       ├── lotus-watermark.svg
│       ├── cloud-pattern.svg
│       └── trong-dong-watermark.svg
└── fonts/
    └── DT-PhuDu-Bold.woff2
```

Nếu file ảnh/font chưa tồn tại, website không được vỡ layout. Hãy hiển thị placeholder đẹp với nhãn:

```text
Cần bổ sung ảnh: public/assets/images/...
```

## Yêu cầu responsive

- Mobile first.
- Menu mobile gọn.
- Không có text tràn layout.
- Card grid tự xuống hàng.
- Timeline trên mobile chuyển thành list dọc.
- Hero trong viewport đầu tiên không quá cao.
- Nút dễ bấm trên mobile.

## Yêu cầu accessibility và performance

- Có semantic HTML.
- Có alt text cho ảnh.
- Có focus states.
- Màu chữ đủ tương phản.
- Không dùng animation nặng.
- Lazy load ảnh.
- Không phụ thuộc backend.
- Không gọi API ngoài để render nội dung chính.

## Nội dung và văn phong

Văn phong:

- Trang trọng, rõ ràng, dễ hiểu.
- Phù hợp môi trường Đảng, Đoàn, giáo dục.
- Không khoa trương.
- Không dùng emoji.
- Không chép dài nguyên văn từ nguồn có bản quyền.
- Mỗi nội dung nên có source attribution nếu lấy từ nguồn đã ghi.

## Việc cần làm

1. Inspect repo hiện tại.
2. Chọn stack phù hợp cho static GitHub Pages.
3. Tạo cấu trúc app.
4. Chuyển data đã có thành content local.
5. Xây UI đầy đủ các section chính.
6. Tạo placeholder asset theo đúng path đã yêu cầu.
7. Tạo CSS/theme theo palette hồng sen, xanh lá sen, trắng ngà, đỏ.
8. Tạo responsive layout.
9. Tạo build script.
10. Chạy kiểm tra build.
11. Ghi lại trong README cách chạy local và cách deploy GitHub Pages.

## Tiêu chuẩn nghiệm thu

Website đạt yêu cầu nếu:

- Chạy được bằng `npm run dev`.
- Build được bằng `npm run build`.
- Không lỗi TypeScript/lint nghiêm trọng.
- Responsive tốt trên mobile và desktop.
- Có đủ các section:
  - Trang chủ
  - Hồ sơ Hồ Chí Minh
  - Timeline
  - Cuộc đời và sự nghiệp
  - Tư tưởng/giáo dục/y tế + quiz
  - Tác phẩm và tư liệu
  - Âm nhạc
  - Tượng đài thế giới
  - Mẩu chuyện
  - Gương sáng học tập và làm theo Bác
  - Nguồn và kiểm chứng
- Có placeholder rõ ràng cho ảnh/font/tài nguyên còn thiếu.
- Không dùng emoji.
- Không dùng nội dung lời bài hát dài.
- Không làm sai đơn vị thực hiện.

## Khi nào cần hỏi lại tôi

Nếu thiếu thông tin bắt buộc, hãy hỏi lại. Các câu có thể hỏi:

- Repo GitHub Pages tên gì để cấu hình `base` chính xác?
- Tôi có file font DT-PhuDu Bold không?
- Tôi có ảnh chân dung Bác, ảnh hoa sen, ảnh đơn vị, ảnh sự kiện không?
- Có muốn dùng tên trường viết tắt không?
- Có danh sách cá nhân/tập thể gương sáng của đơn vị mới chưa?

Nếu chưa có câu trả lời, vẫn hãy build trước bằng placeholder và TODO rõ ràng.

