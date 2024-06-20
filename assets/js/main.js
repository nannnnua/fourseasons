document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.promoSlider', {
    spaceBetween: 30,
    loop: true,
    watchSlidesProgress: true,
    slidesOffsetBefore: 0,
    slidesPerView: 2,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  // ScrollTrigger
  const panels = gsap.utils.toArray('.parallax-item');

  panels.forEach((panel, i) => {
      if (i !== panels.length - 1) {
          // 마지막 섹션이 아닌 경우에만 고정
          ScrollTrigger.create({
              trigger: panel,
              start: 'top top',
              pin: true,
              pinSpacing: false,
          });
      }
  });

  // text animation
  gsap.utils.toArray('.sec-info-tit').forEach((item) => {
      ScrollTrigger.create({
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => {
              animate(item);
          },
      });

      item.style.opacity = '0';
  });

  const animate = (item) => {
      gsap.fromTo(
          item,
          { autoAlpha: 0, x: 0, y: 100 },
          { autoAlpha: 1, x: 0, y: 0, duration: 1.25, overwrite: 'auto', ease: 'expo' },
      );
  };

  // lenis
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
      console.log(e);
  });

  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

$(document).ready(function(){
  var slider = $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '.prev-btn',
    nextArrow: '.next-btn',
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  btnStatus();

  function btnStatus() {
    var currentSlide = slider.slick('slickCurrentSlide');
    var slideCount = slider.slick('getSlick').slideCount;

    // 이전 버튼 처리
    if (currentSlide === 0) {
      $('.prev-btn').addClass('disable');
    } else {
      $('.prev-btn').removeClass('disable');
    }

    // 다음 버튼 처리
    if (currentSlide + slider.slick('slickGetOption', 'slidesToScroll') >= slideCount) {
      $('.next-btn').addClass('disable');
    } else {
      $('.next-btn').removeClass('disable');
    }
  }

  // 다음 버튼 클릭 이벤트
  $('.next-btn').click(function() {
    if (!$(this).hasClass('disable')) {
      slider.slick('slickNext');
      btnStatus();
    }
    return false;
  });

  // 이전 버튼 클릭 이벤트
  $('.prev-btn').click(function() {
    if (!$(this).hasClass('disable')) {
      slider.slick('slickPrev');
      btnStatus();
    }
    return false;
  });

  // 슬라이드 변경 후 이벤트
  slider.on('afterChange', function(event, slick, currentSlide) {
    btnStatus();
  });
});

// sec-info gsap
