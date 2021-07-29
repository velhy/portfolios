$(window).on('load', function () {

    setTimeout(function () {
        $(".loading").fadeOut();
    }, 1200);

    setTimeout(function () {
        $('.name').addClass('active');
    }, 1000);

    setTimeout(function () {
        $('.home-wrap p').addClass('view');
        $('.home .down').css({
            'opacity': 1
        });
    }, 1800);

    const secTop = [];
    const secCount = $('section').length;
    let homeH = $('.home').height();
    let winW = $(window).width();
    let winH = $(window).height();

    $(".about").css('margin-top', winH);

    for (let i = 0; i < secCount; i++) {
        secTop[i] = $('section').eq(i).offset().top;
    }


    /**********************************************************************************
     ** GNB
     ***********************************************************************************/
    $('#gnb li').each(function (idx) {
        $(this).click(function () {
            $("html, body").stop().animate({
                "scrollTop": secTop[idx]
            }, 350)

            $('#gnb li a').removeClass('active').eq(idx).addClass('active');
        })
    })

    /**********************************************************************************
     ** DOWN 
     ***********************************************************************************/
    $('.down').click(function () {
        $("html, body").stop().animate({
            "scrollTop": secTop[1]
        }, 400)
    });


    /**********************************************************************************
     ** 스크롤 이벤트 
     ***********************************************************************************/
    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();

        // gnb
        if (scroll >= 10) {
            $('.logo a, #gnb').addClass('active');
        } else {
            $('.logo a, #gnb').removeClass('active');
        }

        // 탑버튼
        if (scroll >= homeH) {
            $('.btn-top').fadeIn(200);
        } else if (scroll < homeH) {
            $('.btn-top').fadeOut(200)
        }

        // 컨텐츠 페이드인
        if (scroll >= secTop[1] - 400) {
            $('.about .inner').children().addClass('view');
        }

        if (scroll >= secTop[2] - 400) {
            $('.skill-wrap').children().addClass('view');
        }

        // if (scroll >= secTop[3] - 400) {
        //     $('.work .inner').children().addClass('view');
        // }

        if (scroll >= secTop[4] - 400) {
            $('.contact .inner').children().addClass('view');
        }

        // 배경 글자 페이드인
        for (let i = 1; i <= 3; i++) {
            if (scroll >= (secTop[i] - 200)) {
                $('section').eq(i).addClass('active');
            } else {
                $('section').eq(i).removeClass('active');
            }
        }

        if (scroll >= (secTop[4] - 50)) {
            $('section').eq(4).addClass('active');
        } else {
            $('section').eq(4).removeClass('active');
        }


        // gnb active
        for (let i = 0; i <= 4; i++) {
            if (scroll >= secTop[i]) {
                $('#gnb li a').removeClass('active').eq(i).addClass('active');
            }
        }

    })


    /**********************************************************************************
     ** 모달 팝업 
     ***********************************************************************************/
    // 팝업 시 body 스크롤 막기 
    const bodyScroll = {
        disable: function () {
            $('body')
                .css('overflow-y', 'scroll');

            $('#wrap').css({
                'position': 'fixed',
                'top': -$(window).scrollTop(),
                'width': '100%'
            });
        },

        enable: function () {
            let scrollPos = Math.abs($('#wrap').css('top').split('px')[0]);

            $('#wrap').removeAttr('style');
            $(window).scrollTop(scrollPos);
            $('body').removeAttr('style');
        }
    };

    $('.work a.btn-more').each(function (index) {
        $(this).click(function () {
            bodyScroll.disable();

            $(this).siblings('.modal-wrap').fadeIn(200);
            $('.modal-bg').fadeIn(200);

            // 팝업시 스와이퍼
            let swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        })
    });

    $('.modal-bg, .btn-close').click(function () {
        $('.modal-wrap').fadeOut(200);
        $('.modal-bg').fadeOut(200);

        bodyScroll.enable();
    })


    /**********************************************************************************
     ** 모바일 팝업 
     ***********************************************************************************/
    function mobile_pop() {
        window.open('http://luves9631.cafe24.com/seoulLand/mobile', '서울랜드 모바일', 'width=640, height=860');
    }

    const btnMobile = document.querySelector('.btn-link.mobile');
    btnMobile.addEventListener('click', mobile_pop);


    /**********************************************************************************
     ** 메일 보내기 
     ***********************************************************************************/
    function submitCheck() {
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let message = document.querySelector('#message');

        if (!name.value) {
            alert('이름을 입력해주세요');
            name.focus();
            return;
        }

        if (!email.value) {
            alert('이메일을 입력해주세요');
            email.focus();
            return;
        }

        if (!message.value) {
            alert('보내실 메시지를 입력해주세요');
            message.focus();
            return;
        }

        if (email.value) {
            let emailMsg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
            if (emailMsg.test(email.value) === false) {
                alert("올바른 메일형식을 입력해주세요.");
                email.focus();
                return;
            }
        }

        $.ajax({
            type: "POST",
            url: "https://script.google.com/macros/s/AKfycbxc5VU1L-gvENMi6sgXR5Vo0u0bAlSTt7mGuT-etrjSrf26n-daPXZ41aUrI9_4sBXI/exec",
            data: {
                name: name.value,
                email: email.value,
                message: message.value
            },
            cache: false,
            success: function (data) {
                alert('메일을 성공적으로 보냈습니다.')
            }
        });

    }

    const btnSubmit = document.querySelector('.btn-submit');
    btnSubmit.addEventListener('click', submitCheck);


    /**********************************************************************************
     ** 탑버튼 
     ***********************************************************************************/
    $('.btn-top').click(function () {
        $("html, body").stop().animate({
            "scrollTop": 0
        }, 400)
    })

});