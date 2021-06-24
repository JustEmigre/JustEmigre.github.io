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
      adaptiveHeight: true,
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

  /*------------------------ TABS -----------------------*/
  if ($('.tab-wrap')[0]) {
    $('.tab-wrap')
      .on('click', '.tab-nav .item', switchTab)
      .find('.tab-nav .item:first-child')
      .trigger('click');

    function switchTab(event) {
      var curentTab = $(this),
        tabWrapper = $(event.delegateTarget),
        visibleContent = $('.' + curentTab.attr('rel')),
        contentHeight;

      $('.active', tabWrapper).removeClass('active');
      curentTab.addClass('active');

      $('.visible-content', tabWrapper).removeClass('visible-content');
      visibleContent.addClass('visible-content');

      contentHeight = visibleContent.height();
      $('.tabs-content', tabWrapper).height(contentHeight);
    }

    $(window).on('resize.myTemplate', resizeTab);

    function resizeTab(event) {
      var visibleContent = $('.tab.visible-content');
      setTimeout(function () {
        visibleContent.each(function () {
          var contentHeight = $(this).outerHeight(true),
            tabsContent = $(this).parents('.tabs-content');

          tabsContent.height(contentHeight);
        });
      }, 300);
    }
  }
})(jQuery);
