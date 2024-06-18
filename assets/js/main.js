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