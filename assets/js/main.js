// assets/js/main.js

// =========================
// 1. AOS Initialization
// =========================
document.addEventListener('DOMContentLoaded', () => {
  if (AOS) {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: 'ease-in-out',
      once: true,    // animation happens only once
    });
  }
});

// =========================
// 2. Swiper Slider Initialization
// =========================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});

// =========================
// 3. Smooth Scroll for Anchor Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// =========================
// 4. Optional: Back-to-top Button
// =========================
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  backToTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
