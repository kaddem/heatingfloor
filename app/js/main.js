
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
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:5
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
            $('body,html').animate({'scrollTop':idPosition - 120},scrollTime);
        });
    };

    // Закрытие модального окна формы
    // function modalClose(id){
    //     $(id).css('display','none');
    //     var elem = $(id).parent('.form');
    //         elem.animate({
    //             top: 0,
    //             opacity: 0
    //         }, 300);
    //     setTimeout(
    //         function(){
    //             elem
    //                 .addClass('hidden-form')
    //                 .removeClass('visible-form')
    //         }, 300);
    // };

    // Функция открытия формы в модальном окне
    // function formCall(btn){
    //     $(btn).parent().find('.form-close').css('display','block');
    //     $(btn).parent().find('.form')
    //         .addClass('visible-form')
    //         .removeClass('hidden-form')
    //         .animate({
    //             opacity: 1,
    //             top: 40
    //         }, 300);
    // };

    $(window).resize(function(){
        if( $(window).width() > 767 ) {
            $('.form-calculate').find('.form').css('opacity', 1);
            $('.form-worth').find('.form').css('opacity', 1);
        }
    });


    function floorOpen() {
        $('.btn__concrete').on('click', function(){
            if ($('.concrete__images').hasClass('concrete--open')){
                $('.concrete__images').removeClass('concrete--open');
                $('.concrete__list').hide(300);
                $(this).text('Подробнее');
            } else {
                $('.concrete__images').addClass('concrete--open');
                $('.concrete__list').show(300);
                $(this).text('Свернуть');
            }
        });
        $('.btn__wood').on('click', function(){
            if ($('.wood__images').hasClass('wood--open')){
                $('.wood__images').removeClass('wood--open');
                $('.wood__list').hide(300);
                $(this).text('Подробнее');
            } else {
                $('.wood__images').addClass('wood--open');
                $('.wood__list').show(300);
                $(this).text('Свернуть');
            }
        });
    }
    floorOpen();

    if( $(window).width() < 1200 ) {
        $('.concrete__images').addClass('concrete--open');
        $('.concrete__list').show(300);
        $('.wood__images').addClass('concrete--open');
        $('.wood__list').show(300);
        $('.btn__wood').hide(0);
        $('.btn__concrete').hide(0);
    }
    $(window).resize(function(){
        if( $(window).width() < 1200 ) {
            $('.concrete__images').addClass('concrete--open');
            $('.concrete__list').show(300);
            $('.wood__images').addClass('concrete--open');
            $('.wood__list').show(300);
            $('.btn__wood').hide(0);
            $('.btn__concrete').hide(0);
        } else {
            $('.concrete__images').removeClass('concrete--open');
            $('.concrete__list').hide(300);
            $('.wood__images').removeClass('concrete--open');
            $('.wood__list').hide(300);
            $('.btn__wood').show(0);
            $('.btn__concrete').show(0);

        }
    });


    function staticFloor() {
        $('.concrete__img:eq(0)').animate({
            top: 0
        }, 300);
        $('.concrete__img:eq(1)').animate({
            top: 45
        }, 300);
        $('.concrete__img:eq(2)').animate({
            top: 105
        }, 300);
        $('.concrete__img:eq(3)').animate({
            top: 155
        }, 300);
        $('.concrete__img:eq(4)').animate({
            top: 213
        }, 300);
        $('.concrete__img:eq(5)').animate({
            top: 273
        }, 300);
        $('.concrete__description').animate({
            marginBottom: 20
        }, 300);

        $('.wood__img:eq(0)').animate({
            top: 0
        }, 300);
        $('.wood__img:eq(1)').animate({
            top: 45
        }, 300);
        $('.wood__img:eq(2)').animate({
            top: 105
        }, 300);
        $('.wood__img:eq(3)').animate({
            top: 155
        }, 300);
        $('.wood__img:eq(4)').animate({
            top: 213
        }, 300);
        $('.wood__img:eq(5)').animate({
            top: 273
        }, 300);
        $('.wood__description').animate({
            marginBottom: 20
        }, 300);
    }
    // Табы для 3D полов

    // Выбор чекнутого элемента для формы подарка
    $(".gift__item").on('click', function(){
        if( $(document).width() > 767) {
            $(".gift__item").find('input[type=radio]').removeAttr('checked');
            $(".gift__item").css('opacity' , '0.5');
            $(this).find('input[type=radio]').attr('checked', 'checked');
            $(this).css('opacity' , '1');
            $('.gift__description').removeClass('gift--active');
            $(this).find('.gift__description').addClass('gift--active');
        }
    });

    $(window).resize(function(){
        if( $(window).width() < 768 ) {
            $(".gift__item").css('opacity' , '1');
            // $('.gift__description').removeClass('gift--active');
        }
    });


    //Типа табы на наших работах

    $('.services__description').hide(0);
    $('#heatsys').show(0);
    $('.gallery__block').hide(0);
    $('#img-heatsys').show(0);

    $('#link-boiler').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#boiler').show(0);
      $('.gallery__block').hide(0);
      $('#img-boiler').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-heatsys').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#heatsys').show(0);
      $('.gallery__block').hide(0);
      $('#img-heatsys').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-boilerbox').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#boilerbox').show(0);
      $('.gallery__block').hide(0);
      $('#img-boilerbox').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-water').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#water').show(0);
      $('.gallery__block').hide(0);
      $('#img-water').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-stock').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#stock').show(0);
      $('.gallery__block').hide(0);
      $('#img-stock').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-autogaz').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#autogaz').show(0);
      $('.gallery__block').hide(0);
      $('#img-autogaz').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });
    $('#link-heatpump').on('click', function(e){
      e.preventDefault();
      $('.services__description').hide(0);
      $('#heatpump').show(0);
      $('.gallery__block').hide(0);
      $('#img-heatpump').show(0);
      $('.services__nav-item a').removeClass('active');
      $(this).addClass('active');
      var des = $(this).text();
      $('#form-services .form-des').val(des);
    });



    // Валидация и отправка форм
    $.validator.addMethod("minlenghtphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 10;
        },
        "Введите 10 цифр");
    $.validator.addMethod("requiredphone", function (value, element) {
            return value.replace(/\D+/g, '').length > 1;
        },
        "Пожалуйста, заполните поле.");

    $(".form-phone").mask("+7 (999) 999-9999");

    $('#form_recall').validate({
        rules : {
            name : {
                required : true
            },
            date : {
                required : true,
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
            date : {
                required : "Пожалуйста, заполните поле.",
            },
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form_recall input.title").val();
            var name = $("#form_recall input.form-name").val();
            var date = $("#form_recall input.form-date").val();
            var phone = $("#form_recall input.form-phone").val();
            $("body").addClass('preload');
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_date: date,
                    form_phone: phone
                },
                success: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется с вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_recall').trigger("reset");
                },
                error: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form_recall').trigger("reset");
                }
            });
        }
    });

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
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form_calculate input.title").val();
            var name = $("#form_calculate input.form-name").val();
            var email = $("#form_calculate input.form-email").val();
            var phone = $("#form_calculate input.form-phone").val();
            var area = $("#form_calculate input.form-area").val();
            var quantity = $("#form_calculate input.form-quantity").val();
            $("body").addClass('preload');
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_email: email,
                    form_phone: phone,
                    form_area: area,
                    form_quantity: quantity
                },
                success: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется с вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_calculate').trigger("reset");
                },
                error: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_calculate').trigger("reset");
                }
            });
        }
    });

    $('#form_gift').validate({
        rules : {
            name : {
                required : true
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
            phone : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var gift = $("#form_gift input[checked=checked]").parent().find('label').text();
            var title = $("#form_gift input.title").val();
            var name = $("#form_gift input.form-name").val();
            var phone = $("#form_gift input.form-phone").val();
            $("body").addClass('preload');
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_phone: phone,
                    form_gift: gift
                },
                success: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется с вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_gift').trigger("reset");
                },
                error: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form_gift').trigger("reset");
                }
            });
        }
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
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form_worth input.title").val();
            var name = $("#form_worth input.form-name").val();
            var email = $("#form_worth input.form-email").val();
            var phone = $("#form_worth input.form-phone").val();
            $("body").addClass('preload');
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_email: email,
                    form_phone: phone
                },
                success: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется с вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form_worth').trigger("reset");
                },
                error: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form_worth').trigger("reset");
                }
            });
        }
    });

    $('#form-services').validate({
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
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form-services input.title").val();
            var name = $("#form-services input.form-name").val();
            var email = $("#form-services input.form-email").val();
            var phone = $("#form-services input.form-phone").val();
            var text = $("#form-services input.form-des").val();
            $("body").addClass('preload');
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_name: name,
                    form_email: email,
                    form_phone: phone,
                    form_text: text
                },
                success: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span><br>'+name+', наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form-services').trigger("reset");
                },
                error: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span><br>'+name+', пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form-services').trigger("reset");
                }
            });
        }
    });

    $('#form-question').validate({
        rules : {
            email : {
                required : true,
                email : true
            },
            text : {
                required : true,
            }
        },
        messages : {
            email : {
                required : "Пожалуйста, заполните поле.",
                email : "Укажите корректный email"
            },
            text : {
                required : "Пожалуйста, заполните поле."
            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            var test = form;
            console.log(test);
            var title = $("#form-question input.title").val();
            var email = $("#form-question input.form-email").val();
            var text = $("#form-question textarea.form-text").val();
            $("body").addClass('preload');
            $.ajax({
                url : 'sendmail.php',
                type : 'POST',
                data : {
                    form_title: title,
                    form_email: email,
                    form_text: text
                },
                success: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head">Спасибо за вашу заявку!</span> Наш менеджер свяжется в вами в ближайшее время.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    // clear all fields
                    $('#form-question').trigger("reset");
                },
                error: function() {
                    $("body").removeClass('preload');
                    $.modal.close();
                    $('#thank-you').html('<h3><span class="modal-thank-you__head alert">Похоже на сервере проблеммы</span>, пожалуйста отправьте заявку чуть позже или позвоните нам.</h3>');
                    $('#thank-you').modal();
                    setTimeout(function() {
                        $.modal.close();
                    }, 5000);
                    $('#form-question').trigger("reset");
                }
            });
        }
    });

    // pageScroll('up-button', 300);
    anchorScroll('#anchor-menu');

    // вызовы открытия форм в модальном окне по нажатию на кнопку
    $('#call-form-calculate').on('click', function(){
        $("#form_calculate").css('display', 'inline-block');
        $("#form_calculate").modal({
          fadeDuration: 200
        });
    });
    $('#form-worth-call').on('click', function(){
        $("#form_worth").css('display', 'inline-block');
        $("#form_worth").modal({
          fadeDuration: 200
        });
    });
    $('#btn-recall').on('click', function(){
        $("#form_recall").css('display', 'inline-block');
        $("#form_recall").modal({
          fadeDuration: 200
        });
    });
});
