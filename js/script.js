$(function () {
    'use strict'

    // Slick Slider
    // Menu Fix
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    //venobox
    $('.venobox').venobox(); 

    //test_slider
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
//counter_up
$('.counter').counterUp({
    delay: 10,
    time: 1000,
})

//logo slider
    $('.logo_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right next_ar"></i>',
        prevArrow: '<i class="fas fa-angle-left prev_ar"></i>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

});