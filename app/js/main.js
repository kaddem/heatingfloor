$(document).ready(function(){
    // Карусель - отзывы
    $('#owl-reviews').owlCarousel({
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
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Карусель сертификаты
    $('#owl-sertificate').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });


    // бургер, что тут еще скажешь? но без колы(
    $('.menu-burger').on('click', function(e){
        e.preventDefault();
        $('.menu-back').show();
        $('.main-nav').slideDown(400);
    });
    $('.menu-back').on('click', function(e){
        e.preventDefault();
        $('.main-nav').slideUp(400);
        $('.menu-back').show();
    });
    $('.main-nav ul a').on('click', function(e){
        if ($(window).width() < 1200) {
            $('.main-nav').slideUp(400);
            $('.menu-back').show();
        };
     });

    // Плавный скролл по якорям
    function anchorScroll(boxAnchorLink){
        $(boxAnchorLink + ' a').on('click', function(e){
            e.preventDefault();
            var attr = $(this).attr('href').substring(1);
            var currentPosition = $(document).scrollTop();
            var idPosition = $('#'+attr).offset().top;
            var scrollTime = Math.abs(currentPosition - idPosition) / 3; // Math.abs - модуль числа.
            $('body,html').animate({'scrollTop':idPosition},scrollTime);
        });
    };

    // Закрытие модального окна формы
    function modalClose(id){
        $(id).css('display','none');
        var elem = $(id).parent('.form');
            elem.animate({
                top: 0,
                opacity: 0
            }, 300);
        setTimeout(
            function(){
                elem
                    .addClass('hidden-form')
                    .removeClass('visible-form')
            }, 300);
    };

    // Функция открытия формы в модальном окне
    function formCall(btn){
        $(btn).parent().find('.form-close').css('display','block');
        $(btn).parent().find('.form')
            .addClass('visible-form')
            .removeClass('hidden-form')
            .animate({
                opacity: 1,
                top: 40
            }, 300);
    };

    $(window).resize(function(){
        if( $(window).width() > 767 ) {
            $('.form-calculate').find('.form').css('opacity', 1);
            $('.form-worth').find('.form').css('opacity', 1);
        }
    });

    // Функция показа кнопки прокрутки наверх
    function pageScroll(elem, showPosition){
        $('<a href="#" class="' + elem + '"></a>').appendTo('body').fadeOut(0);
        // $(upBtn).appendTo('body').fadeOut(0);

        $('.'+elem).on('click', function (e) { // отслеживаем событие на элементе #scroll-top
            e.preventDefault();
            var current_position = $(document).scrollTop(); // получаем позицию скролла
            var scroll_time = current_position / 3; // подсчитываем время анимации
            $('body,html').animate({'scrollTop':0},scroll_time); // собственно, анимируем
        });

        $(window).on('scroll', function(e) { // отслеживаем событие на элементе window
            showScrollBtn(); // на любой скролл запускаем функцию
        });

        showScrollBtn(); // после готовности DOM тоже запустим функцию

        function showScrollBtn() {
            if( $(document).scrollTop() > showPosition ) { // если скролл более чем на 500px
                $('.'+elem).fadeIn(150); // то покажем кнопку перемотки вверх
            }
            else { // иначе
                $('.'+elem).fadeOut(150); // скроем кнопку перемотки
            }
        }
    }

    // Табы для 3D полов
    $(".concrete__price").hide(0);
    $(".layer--action .concrete__price").show(0);
    $(".concrete__text").on('click', function(){
        $(".concrete__price").hide(400);
        $(this).parent().find('.concrete__price').show(400);
    });

    var animTime = 300;
    var posConArr = [];
    var posConArrMid = [];
    var posConArrEnd = [];
    var lehghtConcrete = $(".concrete__img").length;
    var i = 0;
    var k = 0;
    do {
        var positionXXX = $('.concrete__img:eq(' + i + ')').position();
        var posY = positionXXX.top;
        posConArr[i] = posY;
        posConArrMid[i] = posY + 80;
        posConArrEnd[i] = posY + 160;
        i += 1;
    } while ( lehghtConcrete > i );
    console.log(posConArr);
    console.log(posConArrMid);
    console.log(posConArrEnd);

    do {
        if ( k < 2 ) {
            $('.concrete__img:eq(' + k + ')').animate({
                top : posConArr[k]
            }, animTime);
        } else if ( k > 2 ){
            $('.concrete__img:eq(' + k + ')').animate({
                top : posConArrEnd[k]
            }, animTime);
        } else {
            $('.concrete__img:eq(' + k + ')').animate({
                top : posConArrMid[k]
            }, animTime);
        }
        k += 1;
    } while ( lehghtConcrete > k );


    $(".concrete__text").on('click', function(){
        var indx = $(this).parent().index();
        console.log(indx);
        var n = 0;
        do {
            if ( indx === 0 ) {
                if ( n === 0 ) {
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArr[n]
                    }, animTime);
                } else if ( n === 1 ){
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArrMid[n]
                    }, animTime);
                } else {
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArrEnd[n]
                    }, animTime);
                }
            } else if ( indx === lehghtConcrete - 1 ) {
                if ( n === lehghtConcrete - 1) {
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArrEnd[n]
                    }, animTime);
                } else if ( n === lehghtConcrete - 2 ){
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArrMid[n]
                    }, animTime);
                } else {
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArr[n]
                    }, animTime);
                }
            } else {
                if ( n < indx ) {
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArr[n]
                    }, animTime);
                } else if (n > indx){
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArrEnd[n]
                    }, animTime);
                } else {
                    $('.concrete__img:eq(' + n + ')').animate({
                        top : posConArrMid[n]
                    }, animTime);
                }
            }
            console.log(indx);
            console.log(n);
            n += 1;
        } while ( lehghtConcrete > n );
    });

    // Валидация и отправка формы

    // $('#form-worth button').on('click', function(){
    //     sendForm(this);
    // });
    // $('#form_calculate button').on('click', function(){
    //     sendForm(this);
    // });

    // function sendForm(form){
    //     $.validator.setDefaults({
    //     submitHandler: function (form, event) {
    //         event.preventDefault();
    //         var test = form;
    //         console.log(test);
    //         var title = $("input.title").val();
    //         var name = $("input.form-name").val();
    //         var email = $("input.form-email").val();
    //         var phone = $("input.form-phone").val();
    //         var area = $("input.form-area").val();
    //         var quantity = $("input.form-quantity").val();
    //         console.log(title, name, email, phone, area, quantity);
    //         // var str = form.serialize();
    //         $.ajax({
    //             url : 'sendmail.php',
    //             type : 'POST',
    //             data : {
    //                 form_title: title,
    //                 form_name: name,
    //                 form_email: email,
    //                 form_phone: phone,
    //                 form_area: area,
    //                 form_quantity: quantity
    //             },
    //             success: function() {
    //                 alert("Слышь друже! Отправили форму - жди ответку!");
    //             // // Success message
    //             //   $('#request').modal('hide');
    //             //   $('#thank-you').modal();
    //             //   $('#thank-you .modal-body').html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>');
    //             //   $('#thank-you .modal-body').append('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span>'+firstName+', наш менеджер свяжется в вами в ближайшее время.</h3>');
    //             //   setTimeout(function() {
    //             //     $("#thank-you").modal('hide');
    //             //   }, 5000);
    //               //clear all fields
    //               $(form).trigger("reset");
    //             },
    //             error: function() {
    //                 alert("Слышь, друже, что-то не так - сервак не отвечает. Походу кидалово!");
    //               // Fail message
    //               // $('#request').modal('hide');
    //               // $('#thank-you').modal();
    //               // $('#thank-you .modal-body').html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>');
    //               // $('#thank-you .modal-body').append('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span>'+firstName+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');

    //               // setTimeout(function() {
    //               //   $("#thank-you").modal('hide');
    //               // }, 5000);
    //               // // //clear all fields
    //               $(form).trigger("reset");
    //             }
    //         });
    //         // .done(function(msg) {
    //         //     if(msg === "OK"){
    //         //         console.log('OK');
    //         //         alert('Отправлено');
    //         //         var result = "Спасибо за заявку! Ждите звонка";
    //         //         form.after('<p class="error-message">' + result + '</p>');
    //         //     }else{
    //         //         console.log('ERROR');
    //         //         alert('ERROR');
    //         //         // form.after('<p class="error-message">' + msg + '</p>');
    //         //     }
    //         // });
    //         // .always(function() {
    //         //     submitBtn.removeAttr('disabled');
    //         // });
    //     }
    // });
    // }
    
    $.validator.addMethod("minlenghtphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 10;
        },
        "Введите 10 цифр (учитывая код города)");
    $.validator.addMethod("requiredphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 1;
        },
        "Пожалуйста, заполните поле.");

    $(".form-phone").mask("+7 (999) 999-9999");

    // Валидация формы получить расчет
    $('#form_calculate').validate({
        rules : {
            name : {
                required : true
            },
            email : {
                required : true,
                email : true
            },
            phone : {
                required : true,
                requiredphone: true,
                minlenghtphone: true
            },
            area : {
                required : true,
                number : true,
                min : 20,
                max : 999
            },
            quantity : {
                required : true,
                number : true,
                min : 1,
                max : 20
            }
        },
        messages : {
            name : {
                required : "Пожалуйста, заполните поле."
            },
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            },
            area : {
                required : "Введите значение",
                number : "Укажите цифру (кв.м)",
                min : "Минимум 20 кв.м",
                max : "Максимум 999 кв.м"
            },
            quantity : {
                required : "Введите значение",
                number : "Укажите цифру",
                min : "Минимум 1",
                max : "Максимум 20"
            }
        }
        // ,
        // submitHandler: function (form, event) {
        //     event.preventDefault();
        //     var test = form;
        //     console.log(test);
        //     var title = $("#form_calculate .title").val();
        //     var name = $("#form_calculate .form-name").val();
        //     var email = $("#form_calculate .form-email").val();
        //     var phone = $("#form_calculate .form-phone").val();
        //     var area = $("#form_calculate .form-area").val();
        //     var quantity = $("#form_calculate .form-quantity").val();
        //     console.log(title, name, email, phone, area, quantity);
        //     // var str = form.serialize();
        //     $.ajax({
        //         url : 'sendmail.php',
        //         type : 'POST',
        //         data : {
        //             form_title: title,
        //             form_name: name,
        //             form_email: email,
        //             form_phone: phone,
        //             form_area: area,
        //             form_quantity: quantity
        //         },
        //         success: function() {
        //             alert("Слышь друже! Отправили форму - жди ответку!");
        //         // // Success message
        //         //   $('#request').modal('hide');
        //         //   $('#thank-you').modal();
        //         //   $('#thank-you .modal-body').html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>');
        //         //   $('#thank-you .modal-body').append('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span>'+firstName+', наш менеджер свяжется в вами в ближайшее время.</h3>');
        //         //   setTimeout(function() {
        //         //     $("#thank-you").modal('hide');
        //         //   }, 5000);
        //           //clear all fields
        //           $(form).trigger("reset");
        //         },
        //         error: function() {
        //             alert("Слышь, друже, что-то не так - сервак не отвечает. Походу кидалово!");
        //           // Fail message
        //           // $('#request').modal('hide');
        //           // $('#thank-you').modal();
        //           // $('#thank-you .modal-body').html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>');
        //           // $('#thank-you .modal-body').append('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span>'+firstName+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');

        //           // setTimeout(function() {
        //           //   $("#thank-you").modal('hide');
        //           // }, 5000);
        //           // // //clear all fields
        //           $(form).trigger("reset");
        //         }
        //     });
        //     // .done(function(msg) {
        //     //     if(msg === "OK"){
        //     //         console.log('OK');
        //     //         alert('Отправлено');
        //     //         var result = "Спасибо за заявку! Ждите звонка";
        //     //         form.after('<p class="error-message">' + result + '</p>');
        //     //     }else{
        //     //         console.log('ERROR');
        //     //         alert('ERROR');
        //     //         // form.after('<p class="error-message">' + msg + '</p>');
        //     //     }
        //     // });
        //     // .always(function() {
        //     //     submitBtn.removeAttr('disabled');
        //     // });
        // }
    });
    $('#form_worth').validate({
        rules : {
            name : {
                required : true
            },
            email : {
                required : true,
                email : true
            },
            phone : {
                required : true,
                requiredphone: true,
                minlenghtphone: true
            }
        },
        messages : {
            name : {
                required : "Пожалуйста, заполните поле."
            },
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        }

        // ,
        // submitHandler: function (form, event) {
        //     event.preventDefault();
        //     var test = form;
        //     console.log(test);
        //     var title = $("#form-worth .title").val();
        //     var name = $("#form-worth .form-name").val();
        //     var email = $("#form-worth .form-email").val();
        //     var phone = $("#form-worth .form-phone").val();
        //     console.log(title, name, email, phone);
        //     // var str = form.serialize();
        //     $.ajax({
        //         url : 'sendmail.php',
        //         type : 'POST',
        //         data : {
        //             form_title: title,
        //             form_name: name,
        //             form_email: email,
        //             form_phone: phone,
        //         },
        //         success: function() {
        //             alert("Слышь друже! Отправили форму - жди ответку!");
        //         // // Success message
        //         //   $('#request').modal('hide');
        //         //   $('#thank-you').modal();
        //         //   $('#thank-you .modal-body').html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>');
        //         //   $('#thank-you .modal-body').append('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span>'+firstName+', наш менеджер свяжется в вами в ближайшее время.</h3>');
        //         //   setTimeout(function() {
        //         //     $("#thank-you").modal('hide');
        //         //   }, 5000);
        //           //clear all fields
        //           $(form).trigger("reset");
        //         },
        //         error: function() {
        //             alert("Слышь, друже, что-то не так - сервак не отвечает. Походу кидалово!");
        //           // Fail message
        //           // $('#request').modal('hide');
        //           // $('#thank-you').modal();
        //           // $('#thank-you .modal-body').html('<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>');
        //           // $('#thank-you .modal-body').append('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span>'+firstName+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');

        //           // setTimeout(function() {
        //           //   $("#thank-you").modal('hide');
        //           // }, 5000);
        //           // // //clear all fields
        //           $(form).trigger("reset");
        //         }
        //     });
        //     // .done(function(msg) {
        //     //     if(msg === "OK"){
        //     //         console.log('OK');
        //     //         alert('Отправлено');
        //     //         var result = "Спасибо за заявку! Ждите звонка";
        //     //         form.after('<p class="error-message">' + result + '</p>');
        //     //     }else{
        //     //         console.log('ERROR');
        //     //         alert('ERROR');
        //     //         // form.after('<p class="error-message">' + msg + '</p>');
        //     //     }
        //     // });
        //     // .always(function() {
        //     //     submitBtn.removeAttr('disabled');
        //     // });
        // }
    });



    function tabs(box_link, box_link_active, item_tab){
      $(item_tab + ':not(:first-of-type)').hide();
      $(box_link + ' a:first').addClass(box_link_active);
      $(box_link + ' a').on('click', function(e){
        e.preventDefault();
        var index_el = $(this).closest("li").index();
        $(box_link + ' a').removeClass(box_link_active);
        $(this).addClass(box_link_active);
        $(item_tab).hide();
        $(item_tab + ':eq('+index_el+')').show();
      });
    };

    // tabs('.layer', 'tabs-link--active', '.layer__price');


    pageScroll('up-button', 300);
    anchorScroll('#anchor-menu');

    // вызовы открытия форм в модальном окне по нажатию на кнопку
    $('#call-form-calculate').on('click', function(){
        formCall(this);
    });
    $('#form-worth-call').on('click', function(){
        formCall(this);
    });
    $('#more__btn').on('click', function(){
        formCall(this);
    });
    $('#btn-recall').on('click', function(){
        formCall(this);
    });

    // Вызов функции закрытия модального окна по нажатию на кнопку закрыть
    $('.form-close').on('click', function(){
        modalClose(this);
    });

});


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 59.8863, lng: 30.3726},
    scrollwheel: false
  });

  var image = '../img/icon-for-map.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.8862, lng: 30.3658},
    map: map,
    icon: image
  });
}






// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: Pulse Algorithm

(function ($) {
    $(document).ready(function () {

        // Scroll Variables (tweakable)
        var framerate = 150; // [Hz]    150
        var animtime  = 600; // [px]    400
        var stepsize  = 150; // [px]    120

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        var pulseAlgorithm = true;
        var pulseScale     = 5;    //   8
        var pulseNormalize = 1;

        // Keyboard Settings
        var disableKeyboard = false;
        var arrowscroll     = 50; // [px]   50

        // Excluded pages
        var exclude = "";

        // Other Variables
        var frame = false;
        var direction = { x: 0, y: 0 };
        var initdone  = false;
        var fixedback = true;
        var activeElement;
        var root;

        var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 };


        /***********************************************
         * INITIALIZE
         ***********************************************/

        /**
         * Tests if smooth scrolling is allowed. Shuts down everything if not.
         */
        function initTest() {

            // disable keys for google reader (spacebar conflict)
            if (document.URL.indexOf("google.com/reader/view") > -1) {
                disableKeyboard = true;
            }

            // disable everything if the page is blacklisted
            if (exclude) {
                var domains = exclude.split(/[,\n] ?/);
                for (var i = domains.length; i--;) {
                    if (document.URL.indexOf(domains[i]) > -1) {
                        removeEvent("mousewheel", wheel);
                        disableKeyboard = true;
                        break;
                    }
                }
            }
        }

        /**
         * Sets up scrolls array, determines if frames are involved.
         */
        function init() {

            if (!document.body) return;

            var body = document.body;
            var html = document.documentElement;
            var windowHeight = window.innerHeight;
            var scrollHeight = body.scrollHeight;

            // check compat mode for root element
            root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
            activeElement = body;

            initTest();
            initdone = true;

            // Checks if this script is running in a frame
            if (top != self) {
                frame = true;
            }

            /**
             * This fixes a bug where the areas left and right to
             * the content does not trigger the onmousewheel event
             * on some pages. e.g.: html, body { height: 100% }
             */
            else if (scrollHeight > windowHeight &&
                (body.offsetHeight <= windowHeight ||
                    html.offsetHeight <= windowHeight)) {
                root.style.height = "auto";
                if (root.offsetHeight <= windowHeight) {
                    var underlay = document.createElement("div");
                    underlay.style.clear = "both";
                    body.appendChild(underlay);
                }
            }

            if (document.URL.indexOf("mail.google.com") > -1) {
                var s = document.createElement("style");
                s.innerHTML = ".iu { visibility: hidden }";
                (document.getElementsByTagName("head")[0] || html).appendChild(s);
            }

            if (!fixedback) {
                body.style.backgroundAttachment = "scroll";
            }

            // disable keyboard support
            if (disableKeyboard) {
                removeEvent("keydown", keydown);
            }
        }


        /************************************************
         * SCROLLING
         ************************************************/

        var que = [];
        var pending = false;

        /**
         * Pushes scroll actions to the scrolling queue.
         */
        function scrollArray(elem, left, top, delay) {

            delay || (delay = 1000);
            directionCheck(left, top);

            // push a scroll command
            que.push({
                x: left,
                y: top,
                lastX: (left < 0) ? 0.99 : -0.99,
                lastY: (top  < 0) ? 0.99 : -0.99,
                start: +new Date
            });

            // don't act if there's a pending queue
            if (pending) {
                return;
            }

            var step = function() {

                var now = +new Date;
                var scrollX = 0;
                var scrollY = 0;

                for (var i = 0; i < que.length; i++) {

                    var item = que[i];
                    var elapsed  = now - item.start;
                    var finished = (elapsed >= animtime);

                    // scroll position: [0, 1]
                    var position = (finished) ? 1 : elapsed / animtime;

                    // easing [optional]
                    if (pulseAlgorithm) {
                        position = pulse(position);
                    }

                    // only need the difference
                    var x = (item.x * position - item.lastX) >> 0;
                    var y = (item.y * position - item.lastY) >> 0;

                    // add this to the total scrolling
                    scrollX += x;
                    scrollY += y;

                    // update last values
                    item.lastX += x;
                    item.lastY += y;

                    // delete and step back if it's over
                    if (finished) {
                        que.splice(i, 1); i--;
                    }
                }

                // scroll left
                if (left) {
                    var lastLeft = elem.scrollLeft;
                    elem.scrollLeft += scrollX;

                    // scroll left failed (edge)
                    if (scrollX && elem.scrollLeft === lastLeft) {
                        left = 0;
                    }
                }

                // scroll top
                if (top) {
                    var lastTop = elem.scrollTop;
                    elem.scrollTop += scrollY;

                    // scroll top failed (edge)
                    if (scrollY && elem.scrollTop === lastTop) {
                        top = 0;
                    }
                }

                // clean up if there's nothing left to do
                if (!left && !top) {
                    que = [];
                }

                if (que.length) {
                    setTimeout(step, delay / framerate + 1);
                } else {
                    pending = false;
                }
            }

            // start a new queue of actions
            setTimeout(step, 0);
            pending = true;
        }


        /***********************************************
         * EVENTS
         ***********************************************/

        /**
         * Mouse wheel handler.
         * @param {Object} event
         */
        function wheel(event) {

            if (!initdone) {
                init();
            }

            var target = event.target;
            var overflowing = overflowingAncestor(target);

            // use default if there's no overflowing
            // element or default action is prevented
            if (!overflowing || event.defaultPrevented ||
                isNodeName(activeElement, "embed") ||
                (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
                return true;
            }

            var deltaX = event.wheelDeltaX || 0;
            var deltaY = event.wheelDeltaY || 0;

            // use wheelDelta if deltaX/Y is not available
            if (!deltaX && !deltaY) {
                deltaY = event.wheelDelta || 0;
            }

            // scale by step size
            // delta is 120 most of the time
            // synaptics seems to send 1 sometimes
            if (Math.abs(deltaX) > 1.2) {
                deltaX *= stepsize / 120;
            }
            if (Math.abs(deltaY) > 1.2) {
                deltaY *= stepsize / 120;
            }

            scrollArray(overflowing, -deltaX, -deltaY);
            event.preventDefault();
        }

        /**
         * Keydown event handler.
         * @param {Object} event
         */
        function keydown(event) {

            var target   = event.target;
            var modifier = event.ctrlKey || event.altKey || event.metaKey;

            // do nothing if user is editing text
            // or using a modifier key (except shift)
            if ( /input|textarea|embed/i.test(target.nodeName) ||
                target.isContentEditable ||
                event.defaultPrevented   ||
                modifier ) {
                return true;
            }
            // spacebar should trigger button press
            if (isNodeName(target, "button") &&
                event.keyCode === key.spacebar) {
                return true;
            }

            var shift, x = 0, y = 0;
            var elem = overflowingAncestor(activeElement);
            var clientHeight = elem.clientHeight;

            if (elem == document.body) {
                clientHeight = window.innerHeight;
            }

            switch (event.keyCode) {
                case key.up:
                    y = -arrowscroll;
                    break;
                case key.down:
                    y = arrowscroll;
                    break;
                case key.spacebar: // (+ shift)
                    shift = event.shiftKey ? 1 : -1;
                    y = -shift * clientHeight * 0.9;
                    break;
                case key.pageup:
                    y = -clientHeight * 0.9;
                    break;
                case key.pagedown:
                    y = clientHeight * 0.9;
                    break;
                case key.home:
                    y = -elem.scrollTop;
                    break;
                case key.end:
                    var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                    y = (damt > 0) ? damt+10 : 0;
                    break;
                case key.left:
                    x = -arrowscroll;
                    break;
                case key.right:
                    x = arrowscroll;
                    break;
                default:
                    return true; // a key we don't care about
            }

            scrollArray(elem, x, y);
            event.preventDefault();
        }

        /**
         * Mousedown event only for updating activeElement
         */
        function mousedown(event) {
            activeElement = event.target;
        }


        /***********************************************
         * OVERFLOW
         ***********************************************/

        var cache = {}; // cleared out every once in while
        setInterval(function(){ cache = {}; }, 10 * 1000);

        var uniqueID = (function() {
            var i = 0;
            return function (el) {
                return el.uniqueID || (el.uniqueID = i++);
            };
        })();

        function setCache(elems, overflowing) {
            for (var i = elems.length; i--;)
                cache[uniqueID(elems[i])] = overflowing;
            return overflowing;
        }

        function overflowingAncestor(el) {
            var elems = [];
            var rootScrollHeight = root.scrollHeight;
            do {
                var cached = cache[uniqueID(el)];
                if (cached) {
                    return setCache(elems, cached);
                }
                elems.push(el);
                if (rootScrollHeight === el.scrollHeight) {
                    if (!frame || root.clientHeight + 10 < rootScrollHeight) {
                        return setCache(elems, document.body); // scrolling root in WebKit
                    }
                } else if (el.clientHeight + 10 < el.scrollHeight) {
                    overflow = getComputedStyle(el, "").getPropertyValue("overflow");
                    if (overflow === "scroll" || overflow === "auto") {
                        return setCache(elems, el);
                    }
                }
            } while (el = el.parentNode);
        }


        /***********************************************
         * HELPERS
         ***********************************************/

        function addEvent(type, fn, bubble) {
            window.addEventListener(type, fn, (bubble||false));
        }

        function removeEvent(type, fn, bubble) {
            window.removeEventListener(type, fn, (bubble||false));
        }

        function isNodeName(el, tag) {
            return el.nodeName.toLowerCase() === tag.toLowerCase();
        }

        function directionCheck(x, y) {
            x = (x > 0) ? 1 : -1;
            y = (y > 0) ? 1 : -1;
            if (direction.x !== x || direction.y !== y) {
                direction.x = x;
                direction.y = y;
                que = [];
            }
        }

        /***********************************************
         * PULSE
         ***********************************************/

        /**
         * Viscous fluid with a pulse for part and decay for the rest.
         * - Applies a fixed force over an interval (a damped acceleration), and
         * - Lets the exponential bleed away the velocity over a longer interval
         * - Michael Herf, http://stereopsis.com/stopping/
         */
        function pulse_(x) {
            var val, start, expx;
            // test
            x = x * pulseScale;
            if (x < 1) { // acceleartion
                val = x - (1 - Math.exp(-x));
            } else {     // tail
                // the previous animation ended here:
                start = Math.exp(-1);
                // simple viscous drag
                x -= 1;
                expx = 1 - Math.exp(-x);
                val = start + (expx * (1 - start));
            }
            return val * pulseNormalize;
        }

        function pulse(x) {
            if (x >= 1) return 1;
            if (x <= 0) return 0;

            if (pulseNormalize == 1) {
                pulseNormalize /= pulse_(1);
            }
            return pulse_(x);
        }

        // only for Chrome
        if (/chrome/.test(navigator.userAgent.toLowerCase())) {
            addEvent("mousedown", mousedown);
            addEvent("mousewheel", wheel);
            addEvent("keydown", keydown);
            addEvent("load", init);
        }
    });
})(jQuery);