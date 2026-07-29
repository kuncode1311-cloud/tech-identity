# Tech Identity — Personal Portfolio & TechGear Store

> **Báo cáo đồ án Thiết kế Giao diện Web (Front-end Development)**  
> **Trường:** Viện Đào tạo Quốc tế NIIE — Trường Đại học Nguyễn Tất Thành  
> **Họ và tên sinh viên:** Trần Vũ Việt Quang  
> **Mã số sinh viên (MSSV):** 2400002814  

---

## 📌 1. Giới thiệu tổng quan Dự án

**Tech Identity** là một dự án giao diện Web Front-end cao cấp được thiết kế theo chuẩn High-Fidelity, đáp ứng phong cách **Dark Futuristic Minimalist**, **Glassmorphism** và cấu trúc **Bento Grid** hiện đại. 

Dự án đóng vai trò vừa là trang **Portfolio cá nhân** thể hiện năng lực lập trình web và cá tính của sinh viên Công nghệ thông tin, vừa tích hợp một **Cửa hàng thiết bị công nghệ & Gaming Gear (TechGear Store)** hoàn chỉnh với đầy đủ tương tác thực tế và tính năng xem nhanh chi tiết sản phẩm qua **Quick View Modal**.

---

## 🌐 2. Cấu trúc Giao diện & Tính năng Nổi bật

1. **Trang Portfolio Cá nhân (`index.html`)**
   - Giới thiệu bản thân sinh viên **Trần Vũ Việt Quang** (NIIE - ĐH Nguyễn Tất Thành - MSSV: `2400002814`).
   - Màn hình chờ Preloader hiệu ứng mờ khởi tạo hệ thống.
   - **Top Hero Section**: Chân dung thực tế, hiệu ứng gõ chữ Typewriter, 4 thẻ kỹ năng nổi (`HTML5`, `JavaScript`, `CSS3`, `Figma`) bay mượt mà xung quanh avatar.
   - **Bento Grid**: Trình bày học vấn, 4 thẻ thông số ấn tượng (`🚀 03+`, `⚡ 08+`, `📅 01+`, `💪 100%`) và định hướng phát triển.
   - **Bảng kỹ năng tương tác**: 3 cột danh mục chuyên sâu với thanh Progress Bar cuộn tự động.
   - **Học vấn & Lộ trình phát triển**: Cấu trúc Timeline theo từng giai đoạn.
   - **Dự án nổi bật**: 3 thẻ dự án có hình ảnh Mockup giao diện trình duyệt siêu nét (*Personal Portfolio, TechGear Store, Smart Calculator*).
   - **Section cầu nối & Form liên hệ**: Tích hợp thông báo Toast tự động khi gửi thông điệp.

2. **Trang Cửa hàng TechGear Store (`shop.html`)**
   - **Top Bar & Navigation Sticky**: Thanh thông báo ưu đãi giao hàng kết hợp Menu điều hướng hít chặt đầu trang mượt mà.
   - **Khung danh mục 9 cột chuẩn Figma**: Lọc danh mục sản phẩm tức thì.
   - **Flash Sale**: Đếm ngược thời gian thực (Countdown Timer) với 4 sản phẩm sale cùng hình ảnh thực tế sắc nét.
   - **Bộ 8 sản phẩm nổi bật (2 Hàng × 4 Thẻ)**: Trình bày đầy đủ sản phẩm hot (*Keychron K8 Pro, Logitech G Pro X, HyperX Cloud III, ASUS TUF 27", SSD Samsung 990 Pro, RAM Corsair Vengeance, Laptop ROG Zephyrus, Card RTX 4070*).
   - **Quick View Product Modal (Modal Chi tiết Nhanh)**: Khi người dùng bấm nút **"Chi tiết"** ở bất kỳ sản phẩm nào, một cửa sổ kính tối Glassmorphic bật lên ngay lập tức hiển thị đầy đủ ảnh thật, giá khuyến mãi, số sao đánh giá, mô tả thông số kỹ thuật, bộ tăng giảm số lượng `[-] 1 [+]` và nút **"Thêm vào giỏ hàng"** có thông báo Toast sinh động.
   - **Spotlight Banner & Reviews**: Giới thiệu siêu phẩm chủ đạo và các đánh giá thực tế từ khách hàng.

---

## 🛠️ 3. Công nghệ & Thư viện Sử dụng

- **HTML5 Semantic**: Cấu trúc ngữ nghĩa rõ ràng, tối ưu SEO & Accessibility.
- **Bootstrap 5.3**: Grid System, Utilities, Quick View Modal, Offcanvas Drawer.
- **Bootstrap Icons**: Bộ icon phẳng đồng bộ cao cấp.
- **CSS3 Custom (Style System)**: 
  - CSS Variables chuẩn màu Dark Navy / Cyan / Orange (`#07111F`, `#3B82F6`, `#22D3EE`, `#F97316`).
  - Glassmorphism hiệu ứng mờ kính `backdrop-filter: blur(20px)`.
  - Bento grid layout, Card tilt, Gradient glow borders.
- **JavaScript Pure (ES6+)**:
  - Quick View Product Modal Controller (tự động trích xuất thông tin sản phẩm và hiển thị popup).
  - Preloader controller & Sticky Navigation.
  - Dark / Light Theme Toggle lưu cài đặt vào `localStorage`.
  - Dynamic Typewriter Effect & Counter Animations.
  - Interactive Cart Badge counter & Toast Notifications.
  - Real-time Flash Sale Countdown Timer & Category Filter.
- **Google Fonts**: `Manrope` (Headings) & `Inter` (Body).

---

## 📂 4. Cấu trúc Thư mục Dự án

```
tech-identity/
├── index.html                  # Trang 1: Portfolio cá nhân
├── shop.html                   # Trang 2: Cửa hàng TechGear Store (Tích hợp Quick View Modal)
├── README.md                   # Báo cáo chi tiết đồ án & MSSV
│
├── css/
│   ├── style.css               # Design system, biến CSS, layout chính & components
│   ├── animations.css          # Keyframes, floating motion & typewriter
│   └── responsive.css          # Media queries tối ưu 1400px down to 390px
│
├── js/
│   └── script.js               # Logic tương tác JavaScript thuần & Quick View Modal Controller
│
└── assets/
    └── images/
        ├── profile/            # Ảnh chân dung thực tế (avatar.jpg / avatar.png)
        ├── portfolio/          # Mockup giao diện dự án sắc nét (SVG)
        ├── products/           # Ảnh sản phẩm studio thực tế (PNG)
        ├── banners/            # Banner Hero & Tech gaming setup
        └── brands/             # Logo thương hiệu chính hãng
```

---

## 🚀 5. Hướng dẫn Chạy Dự án

1. Tải về hoặc clone kho mã nguồn về máy tính.
2. Mở thư mục `tech-identity` bằng **Visual Studio Code**.
3. Sử dụng extension **Live Server** bấm `Go Live` hoặc click đúp trực tiếp mở file `index.html` hoặc `shop.html` trên trình duyệt web bất kỳ.

---

## 🔗 6. Liên kết Tài nguyên & Demo

- **Repository Link (GitHub):** [https://github.com/kuncode1311-cloud/tech-identity](https://github.com/kuncode1311-cloud/tech-identity) *(Xem mã nguồn & Báo cáo đồ án)*
- **Live Demo Link (GitHub Pages):** [https://kuncode1311-cloud.github.io/tech-identity/](https://kuncode1311-cloud.github.io/tech-identity/) *(Trải nghiệm website trực tuyến online)*

---

*© 2026 Trần Vũ Việt Quang — MSSV: 2400002814 — Viện Đào tạo Quốc tế NIIE, Đại học Nguyễn Tất Thành.*
