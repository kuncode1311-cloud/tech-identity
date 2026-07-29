# Tech Identity — Personal Portfolio & TechGear Store

> **Báo cáo đồ án Thiết kế Giao diện Web (Front-end Development)**
> **Trường:** Viện Đào tạo Quốc tế NIIE — Trường Đại học Nguyễn Tất Thành  
> **Họ và tên sinh viên:** Trần Vũ Việt Quang  
> **Mã số sinh viên (MSSV):** [Điền MSSV]  

---

## 📌 1. Giới thiệu tổng quan Dự án

**Tech Identity** là một dự án giao diện Web Front-end cao cấp được thiết kế theo chuẩn High-Fidelity, đáp ứng phong cách **Dark Futuristic Minimalist**, **Glassmorphism** và cấu trúc **Bento Grid** hiện đại. 

Dự án đóng vai trò vừa là trang **Portfolio cá nhân** thể hiện năng lực lập trình web và cá tính của sinh viên Công nghệ thông tin, vừa tích hợp một **Cửa hàng thiết bị công nghệ & Gaming Gear (TechGear Store)** hoàn chỉnh với đầy đủ tương tác thực tế.

---

## 🌐 2. Danh sách 03 Trang Liên kết

1. **Trang 1 — Portfolio Cá nhân (`index.html`)**
   - Giới thiệu bản thân sinh viên Trần Vũ Việt Quang (NIIE - ĐH Nguyễn Tất Thành).
   - Preloader hiệu ứng khởi tạo hệ thống.
   - Hero section ấn tượng với hiệu ứng Typewriter, ảnh đại diện khung Gradient glow, floating skill badges và thông số thống kê nổi bật.
   - Bento Grid trình bày học vấn, nguyên tắc làm việc, định hướng và sở thích.
   - Bảng kỹ năng tương tác với thanh Progress Bar cuộn tự động.
   - Timeline lộ trình phát triển bản thân theo năm.
   - Dự án nổi bật (Personal Portfolio, TechGear Store, Smart Calculator).
   - Section cầu nối dẫn sang TechGear Store.
   - Form liên hệ tích hợp thông báo Toast tự động.

2. **Trang 2 — Cửa hàng TechGear Store (`shop.html`)**
   - Banner ưu đãi Top bar và Shop Hero hoành tráng.
   - Danh mục sản phẩm 2D hiện đại hỗ trợ lọc tức thì.
   - Flash Sale đếm ngược thời gian thực (Countdown Timer).
   - Danh sách 8 sản phẩm công nghệ hot (Keychron, Logitech, HyperX, ASUS, Samsung, Corsair).
   - Spotlight Banner sản phẩm chủ đạo (Logitech G Pro X Superlight).
   - Logotype các thương hiệu chính hãng, Đánh giá từ cộng đồng và Newsletter đăng ký nhận ưu đãi.

3. **Trang 3 — Chi tiết Sản phẩm (`product.html`)**
   - Sản phẩm tâm điểm: **Logitech G Pro X Superlight**.
   - Breadcrumb điều hướng chuyên nghiệp.
   - Bộ sưu tập ảnh sản phẩm hỗ trợ đổi ảnh thumbnail mượt mà.
   - Trình chọn màu sắc (Color Swatches) và điều chỉnh số lượng mua hàng.
   - Đặt hàng & Thêm vào giỏ hàng cập nhật số dư badge tức thì cùng thông báo Toast.
   - Hệ thống Tab chuyển đổi thông tin (Mô tả, Thông số kỹ thuật, Đánh giá 326 khách hàng, Chính sách bảo hành).
   - Danh sách 4 sản phẩm liên quan.

---

## 🛠️ 3. Công nghệ & Thư viện Sử dụng

- **HTML5 Semantic**: Cấu trúc ngữ nghĩa rõ ràng, tối ưu SEO & Accessibility.
- **Bootstrap 5.3**: Grid System, Utilities, Modal, Offcanvas Drawer.
- **Bootstrap Icons**: Bộ icon phẳng đồng bộ cao cấp.
- **CSS3 Custom (Style System)**: 
  - CSS Variables chuẩn màu HSL / Dark Navy (`#07111F`, `#5B8CFF`, `#22D3EE`, `#8B5CF6`, `#F97316`).
  - Glassmorphism hiệu ứng mờ kính `backdrop-filter: blur(16px)`.
  - Bento grid, Card tilt, Gradient glow borders, 2D geometric shapes.
- **JavaScript Pure (ES6+)**:
  - Preloader controller & Smooth Scroll.
  - Dark / Light Theme Toggle với `localStorage`.
  - Dynamic Typewriter Effect & Counter Animations.
  - Interactive Cart Badge counter & Toast Notifications.
  - Product Thumbnail switchers, Color swatch switchers, Quantity controls.
  - Real-time Flash Sale Countdown Timer & Category Filter.
- **Google Fonts**: `Manrope` (Headings) & `Inter` (Body).

---

## 📂 4. Cấu trúc Thư mục Dự án

```
tech-identity/
├── index.html                  # Trang 1: Portfolio cá nhân
├── shop.html                   # Trang 2: Cửa hàng TechGear Store
├── product.html                # Trang 3: Chi tiết sản phẩm Logitech G Pro X Superlight
├── README.md                   # Báo cáo chi tiết đồ án
│
├── css/
│   ├── style.css               # Design system, biến CSS, layout chính & components
│   ├── animations.css          # Keyframes, floating motion, typewriter & tilt
│   └── responsive.css          # Media queries tối ưu 1400px down to 390px
│
├── js/
│   └── script.js               # Toàn bộ logic tương tác JavaScript thuần
│
└── assets/
    ├── images/
    │   ├── profile/            # Ảnh chân dung cá nhân
    │   ├── portfolio/          # Mockups dự án nổi bật
    │   ├── products/           # Hình ảnh sản phẩm công nghệ
    │   ├── banners/            # Banner Hero & Tech setup
    │   └── brands/             # Logo thương hiệu chính hãng
    └── icons/                  # SVG Icons trang trí
```

---

## 🚀 5. Hướng dẫn Chạy Dự án

1. Tải về hoặc clone kho mã nguồn về máy tính.
2. Mở thư mục `tech-identity` bằng **Visual Studio Code**.
3. Sử dụng extension **Live Server** bấm `Go Live` hoặc click đúp trực tiếp mở file `index.html` trên trình duyệt web bất kỳ (Chrome, Edge, Firefox, Safari).

---

## 🔗 6. Liên kết Tài nguyên & Demo

- **Figma Design Link:** [https://www.figma.com/file/placeholder-tech-identity-ui](https://www.figma.com/file/placeholder-tech-identity-ui) *(Xem bản thiết kế Figma High-Fidelity Desktop & Mobile)*
- **Live Demo Link:** [https://tech-identity-portfolio.vercel.app](https://tech-identity-portfolio.vercel.app) *(Xem bản website thực tế online)*

---

*© 2026 Trần Vũ Việt Quang — NIIE Nguyễn Tất Thành University.*
