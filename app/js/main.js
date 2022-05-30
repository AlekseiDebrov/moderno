$(function(){


    $(".ratestar").rateYo({
        rating: 5,
        starWidth: "15px"
        
      });

      $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow:4,
        slidesToScroll:4
      });

      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true
    });

    $('.icon-th-list').on('click', function(){
      $('.product__item').addClass('list');
      $('.icon-th-list').addClass('active');
      $('.icon-th-large').removeClass('active')
    });

    $('.icon-th-large').on('click', function(){
      $('.product__item').removeClass('list')
      $('.icon-th-list').removeClass('active');
      $('.icon-th-large').addClass('active')
    });


    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
    })
    $('.header__btn-menu').on('click', function(){
      $('.header__user__box_c').slideToggle();
    })

    var mixer = mixitup('.products__inner-box');


});