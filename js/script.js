$(function(){
    'use strict';
    
     // Blog slider start
     $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });
    // test slider start
    $('.serv_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });
    

    // Counter up js here
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });








})