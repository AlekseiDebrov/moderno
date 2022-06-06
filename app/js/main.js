$(function () {


  $(".ratestar").rateYo({
    rating: 5,
    starWidth: "15px"

  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
          
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
      
    ]
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
  });

  $('.icon-th-list').on('click', function () {
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active')
  });

  $('.icon-th-large').on('click', function () {
    $('.product__item').removeClass('list')
    $('.icon-th-list').removeClass('active');
    $('.icon-th-large').addClass('active')
  });


  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  })
  $('.header__btn-menu').on('click', function () {
    $('.header__user__box_c').slideToggle();
  })


  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

  $('input[type="file"], select').styler();

  var mixer = mixitup('.products__inner-box');


});