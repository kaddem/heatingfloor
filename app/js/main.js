$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        navText:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

});
