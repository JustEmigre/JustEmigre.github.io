(function ($) {
  'use strict';

  /* ----------------------- MENU ---------------------- */
  $('body').on('click', '.nav-btn', function (event) {
    $(event.currentTarget).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('.header__search').removeClass('active');
    $('body').toggleClass('no-scroll');

    return false;
  });

  $(window)
    .on('resize.myTemplate', function () {
      $('body')[$(this).width() <= 767 ? 'addClass' : 'removeClass'](
        'isMobile'
      );
    })
    .trigger('resize.myTemplate');

  /* ------------------------ TO TOP ----------------------- */
  $(window).on('scroll.myTemplat', scrollWindow).trigger('scroll.myTemplat');

  function scrollWindow() {
    if ($(window).scrollTop() > 500) {
      $('.call-me').addClass('active');
    } else {
      $('.call-me').removeClass('active');
    }
  }

  // $('body').on('click', '.to-top', function (e) {
  //   $('html, body').animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     400
  //   );
  //   e.preventDefault();
  // });

  /*-------------------- MODAL WINDOW	--------------------*/
  $('.popup-open').on('click', function (e) {
    $('body').addClass('modal');
    $('.popup, .nav-menu, .nav-btn').removeClass('active');
    var rel = $(this).attr('rel');
    $('.popup-' + rel).addClass('active');
    e.preventDefault();
  });
  $('.popup-close, .overlay').on('click', function () {
    $('body').removeClass('modal');
    $('body').removeClass('no-scroll');
    $('.popup').removeClass('active');
  });

  /* ------------------- SLIDER PRODUCTS ------------------ */
  if ($('.our-products__slider')[0]) {
    $('.our-products__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      speed: 800,
      cssEase: 'ease-out',
      touchThreshold: 400,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
})(jQuery);
