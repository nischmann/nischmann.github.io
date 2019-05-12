$(document).ready(function ($) {



    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    // if (isMobile == true) {


   windowScroll = $(window).scrollTop();
    firstScreen = 25
    if (windowScroll > firstScreen) {
        $('header').addClass('fixed');
    } else {
       $('header').removeClass('fixed')
    }
    $(window).scroll(function (event) {
        windowScroll = $(this).scrollTop();
        if (windowScroll > firstScreen) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed')
        }
    });

    // }

  
    // $('.btn--menu').on('click',  function(event) {
    //     event.preventDefault();
    //     $('.menu').toggleClass('open');
    //     /* Act on the event */
    // });


    // $('.phone').on('focus', function (event) {
    //     $(this).mask("+380 (00) 000-00-00", {
    //         placeholder: "+380 (_ _) _ _ _-_ _-_ _",
    //         onKeyPress: function (cep, event, currentField, options) {
    //             maxlength = $(currentField).attr('maxlength')
    //             lengthField = $(currentField).val().length
    //             if (maxlength > lengthField) {
    //                 $(currentField).addClass('empty_phone')
    //             } else {
    //                 $(currentField).removeClass('empty_phone')
    //             }
    //         },
    //     });
    // });
    // $('.phone').on('blur', function (event) {
    //     if ($(this).val() == '') {
    //         $(this).unmask();
    //     }
    // });



    var sliderMenu = new Swiper('.menu-slider', {
        speed: 800,
        slidesPerView: 'auto',
        normalizeSlideIndex: false,
        spaceBetween: 5,
        loop: true,
        loopedSlides: 6,
        grabCursor: true,
        autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 0,
            },
            680: {
                slidesPerView: 1,
                centeredSlides: false,
            },
        }
    });

    $('.link--menu').on('click',  function(event) {
        event.preventDefault();
        $(this).parents('.header').find('.header-dropdown').toggleClass('open');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header-dropdown, .link--menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('open'); // скрываем его
        }
    });

    $('.link--dropdown').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 50
        }, 800);
        $('.header-dropdown').removeClass('open')
    });

    // $('.field').blur(function (event) {
    //     if ($(this).val() != '') {
    //         $(this).addClass('filled')
    //     } else {
    //         $(this).removeClass('filled')
    //     }
    // });


    // var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    // $('form').each(function () {
    //     var form = $(this),
    //         btn = form.find('.btn--submit');
    //     form.find('.field').addClass('empty_field');

    //     function checkInput() {
    //         form.find('[name="obrabotka"], .field').each(function () {
    //             if ($(this).val() != '') {
    //                 $(this).removeClass('empty_field');
    //                 if ($(this).hasClass('email')) {
    //                     mailfield = $(this)
    //                     if (pattern.test(mailfield.val())) {
    //                         mailfield.removeClass('empty_field');
    //                     } else {
    //                         mailfield.addClass('empty_field');
    //                     }
    //                 }
    //                 if ($(this).is('[name="obrabotka"]')) {
    //                     var checkBox = $(this);
    //                     if (checkBox.is(':checked')) {
    //                         checkBox.removeClass('empty_field')
    //                     } else {
    //                         checkBox.addClass('empty_field')
    //                     }
    //                 }
    //             } else {
    //                 $(this).addClass('empty_field');
    //             }
    //         });
    //     }

    //     function lightEmpty() {
    //         form.find('.empty_field').addClass('error');
    //         form.find('.empty_field').siblings('p.error').fadeIn();
    //         form.find('.empty_phone').siblings('p.error').fadeIn();
    //         setTimeout(function () {
    //             form.find('.empty_field').removeClass('error');
    //             form.find('.empty_field').siblings('p.error').fadeOut()
    //             form.find('.empty_phone').siblings('p.error').fadeOut();
    //         }, 1000);
    //     }
    //     setInterval(function () {
    //         checkInput();
    //         var sizeEmpty = form.find('.empty_field').length;
    //         var sizePhone = form.find('.empty_phone').length;
    //         if (sizeEmpty > 0 || sizePhone > 0) {
    //             if (btn.hasClass('disabled')) {
    //                 return false
    //             } else {
    //                 btn.addClass('disabled')
    //             }
    //         } else {
    //             btn.removeClass('disabled')
    //         }
    //     }, 500);
    //     btn.click(function () {
    //         if ($(this).hasClass('disabled')) {
    //             lightEmpty();
    //             return false
    //         } else {
    //             form.submit(function (event) {
    //                 var th = $(this);

    //                 nameClient = th.find('[name=name]')
    //                 $.ajax({
    //                     type: "POST",
    //                     url: "send.php",
    //                     data: th.serialize(),
    //                     success: function (data) {
    //                         src = th.data('success')
    //                         window.location.href = src + "/?name="+nameClient.val()+""
    //                         setTimeout(function () {
    //                             th.trigger("reset");
    //                         }, 3000);
    //                     }
    //                 });
    //                 event.preventDefault();
    //             });
    //         }
    //     });
    // });





});
