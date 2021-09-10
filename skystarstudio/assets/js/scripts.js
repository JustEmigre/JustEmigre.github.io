(function ($) {
  'use strict';
  /* ----------------------- MENU ---------------------- */
  $('.nav-btn').on('click', function () {
    $(this).toggleClass('active');
    $('header, .overlay').toggleClass('active');
    $('body').toggleClass('no-scroll');
    return false;
  });
  $('.overlay').on('click', function () {
    $(this).removeClass('active');
    $('header, .nav-btn').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  $(window)
    .on('resize.myTemplate', function () {
      $('body')[$(this).width() <= 767 ? 'addClass' : 'removeClass'](
        'isMobile'
      );
    })
    .trigger('resize.myTemplate');

  $('body').on('click', '.dropdown>a', function (event) {
    if (!$('body.isMobile')[0]) {
      return;
    }

    var $thisLi = $(event.currentTarget).parents('li'),
      $thisLiActive = $thisLi.hasClass('dropdown-active');

    $('.dropdown-active')
      .removeClass('dropdown-active')
      .children('ul')
      .slideUp('slow');

    if (!$thisLiActive) {
      $thisLi.addClass('dropdown-active');
      $thisLi.children('ul').slideDown('slow');
    }

    return false;
  });

  $('body')
    .on('mouseenter', '.dropdown', function (event) {
      if ($('body.isMobile')[0]) {
        return;
      }

      var menuItem = $(event.currentTarget);

      if (menuItem[0].timeOutMenu) {
        clearTimeout(menuItem[0].timeOutMenu);
      }

      menuItem.addClass('active');
    })
    .on('mouseleave', '.dropdown', function (event) {
      if ($('body.isMobile')[0]) {
        return;
      }

      var menuItem = $(event.currentTarget);

      menuItem[0].timeOutMenu = setTimeout(function () {
        menuItem.removeClass('active');
      }, 500);
    });

  /* -------------------- PARALLAX HOVER ------------------- */
  if ($('.scene')[0]) {
    $('.scene').each(function (index, element) {
      new Parallax(element);
    });
  }

  /*----------------- SCROLL SECTION	-----------------*/
  $('.nav-list a, .btn-ancor').on('click', function (event) {
    $('header, .nav-btn, .overlay').removeClass('active');
    $('body').removeClass('no-scroll');
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        600
      );
    }
  });

  /* ------------------- SLIDER ABOUT ------------------ */
  if ($('.about-slider-1')[0]) {
    $('.about-slider-1').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      speed: 800,
      fade: true,
      cssEase: 'ease-out',
      touchThreshold: 450,
      adaptiveHeight: true,
      nextArrow: `<span class="slick-arrow-next"><svg width="71" height="8" viewBox="0 0 71 8">
				<path d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"/>
				</svg></span>`,
      appendDots: $('.cover-slide-navigation-1'),
      appendArrows: $('.cover-slide-navigation-1'),
    });
  }

  /* ------------------- SLIDER ABOUT ------------------ */
  if ($('.about-slider-2')[0]) {
    $('.about-slider-2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      speed: 800,
      fade: true,
      cssEase: 'ease-out',
      touchThreshold: 450,
      adaptiveHeight: true,
      nextArrow: `<span class="slick-arrow-next"><svg width="71" height="8" viewBox="0 0 71 8">
				<path d="M70.3536 4.35355C70.5488 4.15829 70.5488 3.84171 70.3536 3.64645L67.1716 0.464466C66.9763 0.269204 66.6597 0.269204 66.4645 0.464466C66.2692 0.659728 66.2692 0.976311 66.4645 1.17157L69.2929 4L66.4645 6.82843C66.2692 7.02369 66.2692 7.34027 66.4645 7.53553C66.6597 7.7308 66.9763 7.7308 67.1716 7.53553L70.3536 4.35355ZM0 4.5H70V3.5H0V4.5Z"/>
				</svg></span>`,
      appendDots: $('.cover-slide-navigation-2'),
      appendArrows: $('.cover-slide-navigation-2'),
    });
  }
  /* ------------------- QUESTIONS ------------------ */
  if ($('.questions__wrap')[0]) {
    $('.step1 .questions__list .btn').on('click', function () {
      const item = $(this).attr('data-atr');
      $('.questions-input-1').attr('value', item);
      $('.step1').removeClass('active');
      setTimeout(() => {
        $('.step2').addClass('active');
      }, 350);
    });
    $('.step2 .questions__list .btn').on('click', function () {
      const item = $(this).attr('data-atr');
      $('.questions-input-2').attr('value', item);
      $('.step2').removeClass('active');
      setTimeout(() => {
        $('.step3').addClass('active');
      }, 350);
    });
    $('.step3 .questions__list .btn').on('click', function () {
      const item = $(this).attr('data-atr');
      $('.questions-input-3').attr('value', item);
      $('.step3').removeClass('active');
      setTimeout(() => {
        $('.step4').addClass('active');
      }, 350);
    });
    $('.step4 .questions__list .btn').on('click', function () {
      const item = $(this).attr('data-atr');
      $('.questions-input-4').attr('value', item);
      $('.step4').removeClass('active');
      setTimeout(() => {
        $('.step5').addClass('active');
      }, 350);
    });
    $('.step5 .questions__list .btn').on('click', function () {
      const item = $(this).attr('data-atr');
      $('.questions-input-5').attr('value', item);
      $('.step5').removeClass('active');
      setTimeout(() => {
        $('.step6').addClass('active');
      }, 350);
    });
    $('.step6 .questions__list .btn').on('click', function () {
      const item = $(this).attr('data-atr');
      $('.questions-input-6').attr('value', item);
      $('.step6').removeClass('active');
      setTimeout(() => {
        $('.step7').addClass('active');
      }, 350);
    });
  }

  /* ------------------- TOGGLE ------------------ */
  if ($('.faq__cover')[0]) {
    $('body').on('click', '.faq__item-header', function (event) {
      $('.faq__item-content')
        .not(
          $(event.currentTarget)
            .parents('.faq__item')
            .find('.faq__item-content')
        )
        .hide('fast')
        .parents('.faq__item')
        .removeClass('active');
      $(event.currentTarget)
        .parents('.faq__item')
        .toggleClass('active')
        .find('.faq__item-content')
        .toggle('fast');
    });
  }
})(jQuery);
