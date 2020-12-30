$(function(){

	// $('[data-fancybox]').fancybox({
    // youtube : {
    //     controls : 0,
    //     showinfo : 0
    // }
    // });

$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active')
})
    

    
 $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="./images/arrow_left.png" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="./images/arrow_right.png" alt=""></button>',

});
$('.heroes__text').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    arrows: false
  });

});