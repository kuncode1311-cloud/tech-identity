# 🎨 Hướng Dẫn Prompt & Thông Số Thiết Kế Figma High-Fidelity

> **Dự án:** Tech Identity — Student Developer Portfolio & TechGear Store  
> **Tác giả:** Trần Vũ Việt Quang (MSSV: 2400002814) — Viện Đào tạo Quốc tế NIIE, ĐH Nguyễn Tất Thành  

---

## 📌 Cách Sử Dụng Prompt Với Figma AI / Figma Make / Builder.io

Nếu bạn muốn tạo lại hoặc xuất thiết kế Figma khớp 100% với giao diện website hiện tại, bạn chỉ cần sao chép (Copy) các đoạn **Prompt tiếng Anh chuyên nghiệp** dưới đây và dán (Paste) vào **Figma AI (Figma Make)** hoặc công cụ tạo UI tự động!

---

## 🚀 1. Prompt Cho Trang Portfolio Cá Nhân (`index.html`)

```text
Design a high-fidelity, modern dark-mode student developer portfolio website landing page.
Theme: Dark Futuristic Minimalist & Glassmorphism.
Color Palette: Background #07111F, Secondary #0D1B2A, Surface Glass #122235 with border rgba(148,163,184,0.18), Accent Cyan #22D3EE, Primary Blue #3B82F6, Neon Orange #F97316.
Typography: Manrope for headings (Bold/Extrabold), Inter for body text.

Layout Sections (Desktop 1440px wide):
1. Fixed Top Navigation Bar: Logo "VQ Việt Quang" with cyan square badge, menu links (Giới thiệu, Kỹ năng, Dự án, Tech Store, Liên hệ), Light/Dark theme toggle, Store button "🖥️ Xem cửa hàng".
2. Top Hero Section: Split screen layout. Left side has greeting badge "👋 Xin chào, mình là", typewriter title "Trần Vũ Việt Quang — Front-end Developer", short bio paragraph, action buttons ("🚀 Xem dự án", "✉️ Liên hệ"), social icons (GitHub, LinkedIn, Facebook). Right side features a rounded portrait avatar frame surrounded by 4 animated floating skill badges (HTML5, JavaScript, CSS3, Figma).
3. About Me Section ("Mình là ai và mình đang hướng đến đâu?"): Left column with bio description & CTA. Right column with 2x2 Bento Stat Cards Grid showing counters (🚀 03+ Dự án học tập, ⚡ 08+ Kỹ năng công nghệ, 📅 01+ Năm học lập trình, 💪 100% Tinh thần học hỏi).
4. Skills Section ("Kỹ năng chuyên môn"): 3-column glassmorphism cards for Front-end, Back-end & Database, Design & Tools with progress percentage bars.
5. Education & Goals Section ("Học vấn & Mục tiêu"): Left side has timeline item for "2024 - 2028: Công nghệ thông tin - Viện Đào tạo Quốc tế NIIE - MSSV: 2400002814". Right side has 5 goal cards with icons.
6. Featured Projects Section ("Dự án nổi bật"): 3 glassmorphism cards with browser UI mockup screenshots (Portfolio, TechGear Store, Smart Calculator), skill tags, and CTA buttons.
7. Bridge Spotlight Banner Section: Dark banner showcasing gaming setup with glow button "🚀 Khám phá TechGear Store ngay".
8. Contact Section ("Hãy kết nối với mình"): Left side 5 info cards (Email, Phone, Location, Zalo, Facebook). Right side glassmorphism contact form with fields Name, Email, Subject, Message, Send button.
9. Footer: Minimalist bottom bar with copyright and social links.
```

---

## 🛒 2. Prompt Cho Trang Cửa Hàng TechGear Store (`shop.html`)

```text
Design a high-fidelity dark-mode gaming gear e-commerce store website.
Theme: Premium E-Commerce Dark Glassmorphism.
Color Palette: Deep Navy #07111F, Surface #122235, Cyan #22D3EE, Orange #F97316, Star Gold #FBBF24.

Layout Sections (Desktop 1440px wide):
1. Announcement Bar: Full-width cyan top bar "🚚 Miễn phí giao hàng cho đơn từ 1.000.000đ | 📦 Bảo hành chính hãng | 🔄 Đổi trả trong 7 ngày".
2. Sticky Header Navbar: Logo VQ Việt Quang, navigation links, theme toggle, cart icon with orange badge counter "🛒 (3)".
3. Shop Hero Banner: Left side heading "Thiết bị mạnh mẽ cho mọi ý tưởng lớn", subtext, CTA buttons ("🛒 Mua ngay", "Xem sản phẩm ↓"), trust badges. Right side large studio image of Logitech G Pro X setup with floating price tag badge.
4. Category Grid Bar: 9-column horizontal grid bar with category icons and pill badges (Tất cả, Bàn phím, Chuột, Tai nghe, Màn hình, SSD, RAM, Laptop, VGA).
5. Featured Products Grid (8 Cards, 2 Rows x 4 Columns):
   - Card 1: Keychron K8 Pro Keyboard (2.390.000đ, "Bán chạy")
   - Card 2: Logitech G Pro X Superlight Mouse (2.890.000đ, "-17%")
   - Card 3: HyperX Cloud III Headset (2.490.000đ, "Mới")
   - Card 4: ASUS TUF Gaming 27" Monitor (6.990.000đ, "-18%")
   - Card 5: SSD Samsung 990 Pro 1TB (3.290.000đ, "Bán chạy")
   - Card 6: RAM Corsair Vengeance 32GB (2.790.000đ, "-15%")
   - Card 7: Laptop ASUS ROG Zephyrus G14 (42.990.000đ, "Mới")
   - Card 8: Card đồ họa ASUS RTX 4070 (18.990.000đ, "-15%")
   Each card has top badge, favorite heart button, real studio product image, category tag, title, star rating, current/old price, "+ Giỏ hàng" orange button, and "Chi tiết" button.
6. Flash Sale Section: Dark container with "⚡ Flash Sale" title, real-time countdown timer (05 : 38 : 18), "Xem tất cả ưu đãi →" button, and 4 deal cards with stock progress bars.
7. Brands Bar: Horizontal flex row with brand logos (Logitech, Keychron, HyperX, ASUS, Samsung, Corsair).
8. Reviews Section: 3 customer feedback cards with 5-star ratings and customer avatars.
9. Footer: Detailed footer with newsletter subscribe input, quick links, contact info, and copyright.
```

---

## 🔍 3. Prompt Cho Quick View Product Modal (Modal Chi Tiết Nhanh)

```text
Design a sleek dark-glass e-commerce Quick View Product Detail Popup Modal.
Modal Container: Centered 800px wide modal, background #122235, rounded corners 24px, subtle border rgba(148,163,184,0.18), dark glass shadow.

Modal Content:
- Header: Category badge "Thiết bị", Title "Chi tiết sản phẩm", close button (X).
- Body (2-Column Grid):
  - Left Column: Rounded product image box containing high-res product photo (Logitech G Pro X Superlight).
  - Right Column: Brand label "TECHGEAR STORE", product title "Chuột Logitech G Pro X Superlight", 5-star rating "4.9 (326 đánh giá)", price block "2.890.000đ" (old price "3.490.000đ"), short specs description. Bottom controls with quantity stepper [-] [ 1 ] [+] and full-width orange button "🛒 Thêm vào giỏ hàng".
```

---

## 🎨 4. Bảng Quy Chuẩn Thiết Kế (Design System Tokens)

| Thành phần | Mã Màu / Giá trị | Ứng dụng |
| :--- | :--- | :--- |
| **Nền chính (Background)** | `#07111F` | Nền tổng thể trang web (Dark Navy) |
| **Nền thẻ (Surface)** | `#122235` | Nền Glassmorphism card / Modal |
| **Màu nhấn Cyan** | `#22D3EE` | Logo, Chữ nhấn, Skill badges |
| **Màu nhấn Blue** | `#3B82F6` | Nút bấm chính, Progress bar |
| **Màu nhấn Orange** | `#F97316` | Nút mua hàng, Flash sale, Giá tiền |
| **Viền Kính (Border)** | `rgba(148, 163, 184, 0.18)` | Viền thẻ Glassmorphism |
| **Font Tiêu đề** | `Manrope` (Weights: 700, 800, 900) | Tiêu đề các Section |
| **Font Nội dung** | `Inter` (Weights: 400, 500, 600) | Văn bản mô tả |

---

*© 2026 Trần Vũ Việt Quang — MSSV: 2400002814 — Viện Đào tạo Quốc tế NIIE, ĐH Nguyễn Tất Thành.*
