document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.promoSlider', {
    spaceBetween: 30,
    loop: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});