/* ==========================================================================
   Tech Identity — Personal Portfolio & TechGear Store
   Main Interactive Logic & Animations (script.js)
   Author: Trần Vũ Việt Quang (NIIE - Nguyễn Tất Thành University)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. PRELOADER CONTROLLER
     -------------------------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  const loaderProgress = document.querySelector('.loader-progress');
  
  if (preloader && loaderProgress) {
    setTimeout(() => {
      loaderProgress.style.width = '100%';
    }, 100);

    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => { preloader.style.display = 'none'; }, 500);
    }, 800);
  }

  /* --------------------------------------------------------------------------
     2. STICKY HEADER & SCROLL BEHAVIOR
     -------------------------------------------------------------------------- */
  const header = document.querySelector('.header-sticky');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     3. THEME TOGGLE (DEFAULT DARK THEME MATCHING FIGMA)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('tech_identity_theme');

  // If light theme is saved in localStorage, apply light-theme; otherwise default is dark!
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(true);
  } else {
    document.body.classList.remove('light-theme');
    updateThemeIcon(false);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      localStorage.setItem('tech_identity_theme', isLight ? 'light' : 'dark');
      updateThemeIcon(isLight);
      showToast('Giao diện', `Đã chuyển sang chế độ ${isLight ? 'Sáng' : 'Tối (Figma)'}`, 'bi-sun-fill');
    });
  }

  function updateThemeIcon(isLight) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
      icon.className = isLight ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    }
  }

  /* --------------------------------------------------------------------------
     4. TYPEWRITER EFFECT (HERO SECTION)
     -------------------------------------------------------------------------- */
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    const words = [
      'Sinh viên Công nghệ thông tin',
      'Front-end Developer',
      'UI/UX Enthusiast',
      'Người yêu công nghệ'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 90;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1800;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  /* --------------------------------------------------------------------------
     5. SKILL PROGRESS BAR ANIMATION ON SCROLL
     -------------------------------------------------------------------------- */
  const skillBars = document.querySelectorAll('.progress-bar-custom');
  if (skillBars.length > 0) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetWidth = entry.target.getAttribute('data-width');
          entry.target.style.width = targetWidth + '%';
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));
  }

  /* --------------------------------------------------------------------------
     6. HERO STAT COUNTER ANIMATION
     -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.counter-anim');
  if (statNumbers.length > 0) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetVal = parseInt(entry.target.getAttribute('data-count'), 10);
          const suffix = entry.target.getAttribute('data-suffix') || '';
          let count = 0;
          const step = Math.ceil(targetVal / 40);

          const timer = setInterval(() => {
            count += step;
            if (count >= targetVal) {
              entry.target.textContent = (targetVal < 10 ? '0' + targetVal : targetVal) + suffix;
              clearInterval(timer);
            } else {
              entry.target.textContent = (count < 10 ? '0' + count : count) + suffix;
            }
          }, 35);

          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => statObserver.observe(num));
  }

  /* --------------------------------------------------------------------------
     7. TOAST NOTIFICATION SYSTEM
     -------------------------------------------------------------------------- */
  window.showToast = function(title, message, iconClass = 'bi-check-circle-fill') {
    let container = document.querySelector('.toast-container-custom');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-custom';
    toast.innerHTML = `
      <i class="bi ${iconClass} text-cyan fs-4"></i>
      <div>
        <div class="fw-bold font-heading fs-6">${title}</div>
        <div class="text-secondary small">${message}</div>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  };

  /* --------------------------------------------------------------------------
     8. SHOPPING CART STATE MANAGEMENT
     -------------------------------------------------------------------------- */
  let cartCount = parseInt(localStorage.getItem('tech_identity_cart_count') || '0', 10);
  const cartBadge = document.getElementById('cartBadge');

  function updateCartBadge() {
    if (cartBadge) {
      cartBadge.textContent = cartCount;
      if (cartCount > 0) {
        cartBadge.style.display = 'flex';
      } else {
        cartBadge.style.display = 'none';
      }
    }
  }

  updateCartBadge();

  window.addToCart = function(productName = 'Sản phẩm') {
    cartCount++;
    localStorage.setItem('tech_identity_cart_count', cartCount);
    updateCartBadge();
    showToast('Đã thêm vào giỏ hàng', `${productName} đã được thêm vào giỏ hàng của bạn.`, 'bi-bag-check-fill');
  };

  const addToCartBtns = document.querySelectorAll('.btn-add-to-cart');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pName = btn.getAttribute('data-product-name') || 'Sản phẩm';
      window.addToCart(pName);
    });
  });

  /* --------------------------------------------------------------------------
     9. CONTACT FORM SUBMISSION HANDLER
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Gửi tin nhắn thành công', 'Cảm ơn bạn! Tin nhắn đã được ghi nhận.', 'bi-send-fill');
      contactForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     10. FLASH SALE COUNTDOWN TIMER
     -------------------------------------------------------------------------- */
  const timerHours = document.getElementById('timerHours');
  const timerMinutes = document.getElementById('timerMinutes');
  const timerSeconds = document.getElementById('timerSeconds');

  if (timerHours && timerMinutes && timerSeconds) {
    let totalSeconds = 5 * 3600 + 38 * 60 + 18; // 05h 38m 18s initial

    setInterval(() => {
      if (totalSeconds <= 0) return;
      totalSeconds--;

      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;

      timerHours.textContent = hrs < 10 ? '0' + hrs : hrs;
      timerMinutes.textContent = mins < 10 ? '0' + mins : mins;
      timerSeconds.textContent = secs < 10 ? '0' + secs : secs;
    }, 1000);
  }

  /* --------------------------------------------------------------------------
     11. SHOP CATEGORY FILTER
     -------------------------------------------------------------------------- */
  const categoryCards = document.querySelectorAll('.category-card-figma');
  const productCards = document.querySelectorAll('.product-item');

  if (categoryCards.length > 0 && productCards.length > 0) {
    categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const cat = card.getAttribute('data-category');
        productCards.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (cat === 'all' || itemCat === cat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. PRODUCT DETAIL PAGE INTERACTIONS (product.html)
     -------------------------------------------------------------------------- */
  const mainImage = document.getElementById('productMainImg');
  const thumbItems = document.querySelectorAll('.thumb-item');

  if (mainImage && thumbItems.length > 0) {
    thumbItems.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbItems.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.getAttribute('data-src');
        if (newSrc) {
          mainImage.src = newSrc;
        }
      });
    });
  }

  const colorSwatches = document.querySelectorAll('.color-swatch');
  const selectedColorText = document.getElementById('selectedColorText');

  if (colorSwatches.length > 0) {
    colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        colorSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        const colorName = swatch.getAttribute('data-color-name');
        if (selectedColorText) {
          selectedColorText.textContent = colorName;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     QUICK VIEW PRODUCT MODAL CONTROLLER
     -------------------------------------------------------------------------- */
  const productModalEl = document.getElementById('productModal');
  const productModal = productModalEl ? new bootstrap.Modal(productModalEl) : null;

  document.querySelectorAll('a[href="product.html"], .btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const card = btn.closest('.product-card-figma') || btn.closest('.product-item');
      if (card && productModal) {
        const title = card.querySelector('h4, .fw-bold')?.innerText || 'Thiết bị công nghệ';
        const img = card.querySelector('img')?.src || 'assets/images/products/gpro-superlight.png';
        const priceCurrent = card.querySelector('.price-current, .text-orange')?.innerText || '2.890.000đ';
        const priceOld = card.querySelector('.price-old')?.innerText || '3.490.000đ';
        const cat = card.querySelector('.extra-small, .badge-blue-figma')?.innerText || 'Công nghệ';
        const rating = card.querySelector('.text-secondary.ms-1')?.innerText || '4.9 (326 đánh giá)';
        const desc = card.querySelector('.text-secondary.small.mb-2')?.innerText || 'Sản phẩm công nghệ cao cấp chính hãng, thiết kế tối ưu hiệu năng và trải nghiệm người dùng.';

        document.getElementById('modalProductName').innerText = title;
        document.getElementById('modalProductImg').src = img;
        document.getElementById('modalPriceCurrent').innerText = priceCurrent;
        document.getElementById('modalPriceOld').innerText = priceOld;
        document.getElementById('modalCategoryBadge').innerText = cat;
        document.getElementById('modalRating').innerText = rating;
        document.getElementById('modalDescription').innerText = desc;
        document.getElementById('modalQty').value = 1;

        productModal.show();
      }
    });
  });

  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
  if (modalAddToCartBtn && productModal) {
    modalAddToCartBtn.addEventListener('click', () => {
      const name = document.getElementById('modalProductName').innerText;
      const qty = document.getElementById('modalQty').value;
      showToast('Giỏ hàng', `Đã thêm ${qty}x ${name} vào giỏ hàng!`, 'bi-bag-check-fill');
      productModal.hide();
    });
  }
});
