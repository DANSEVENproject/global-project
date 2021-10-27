        /*initialization animation-script*/
        new WOW().init();

        $(function() {
            /*validation-script*/
            $('#brif-form').validate({
                errorClass: "invalid",
                errorElement: "div",
                submitHandler: function() {
                    $('#brif-form')[0].reset();
                    alert('Форма успешно отправлена!');
                },
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true
                    }

                },
                messages: {
                    username: {
                        required: "Заполните поле",
                        minlength: "Минимальное количество символов: 2",
                        maxlength: "Максимальное количество символов: 15"
                    },
                    phone: "Заполните поле",
                    email: "Введите корректный email"
                }
            });

            $('#registration-form').validate({
                invalidHandler: function() {
                    $('#username-error').css('top', '263px');
                    $('.registration__name').css('margin-bottom', '40px');
                    $('.registration__number').css('margin-bottom', '40px');
                    $('#username-error').css('left', '25px');
                    $('#phone-error').css('top', '263px');
                    $('#phone-error').css('left', '308px');
                },
                errorClass: "invalid",
                errorElement: "div",
                onfocusout: false,
                submitHandler: function() {
                    $('#registration-form')[0].reset();
                    alert('Форма успешно отправлена!');
                },
                rules: {
                    username: {
                        required: true,
                        minlength: 2,
                        maxlength: 15
                    },
                    phone: {
                        required: true
                    }

                },
                messages: {
                    username: {
                        required: "Заполните поле",
                        minlength: "Мин. кол-во символов: 2",
                        maxlength: "Макс. кол-во символов: 15"
                    },
                    phone: "Заполните поле",
                },
            });


            /*Обработка и отправка через jquery ajax*/
            $('#registration-form').on('submit', function(event) {
                var buttonWindow = $('#button-window');
                var validate = $('#validate-window');
                var closeWindow = $('#close-window');
                event.preventDefault();
                $.ajax({
                    url: 'mail-php',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(data) {
                        $('.success').text(' Ваша форма отправлена. ');
                        buttonWindow.on('click', function() {
                            validate.addClass('validate_active');
                        });

                        closeWindow.on('click', function() {
                            validate.removeClass('validate_active');
                        });
                    },
                    error: function(jqXHR, textStatus) {
                        console.log(jqXHR + ': ' + textStatus);
                    },

                })
            });

            /*Mask form-script*/
            $('.phone').mask('8 (999) 999-99-99');


            /*Slick-script-*/
            $('.slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: $('.portfolio__arrows__left'),
                nextArrow: $('.portfolio__arrows__right'),
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            });
        });