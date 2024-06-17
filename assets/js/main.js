document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.promoSlider', {
    spaceBetween: 30,
    loop: true,
    watchSlidesProgress: true,
    slidesPerView: 2,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
});