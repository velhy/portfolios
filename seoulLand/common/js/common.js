// S : window load
$(window).on('load', function () {

    /**********************************************************************************
     ** GNB
     ***********************************************************************************/

    $('.main').hover(function () {
        $('.sub').stop().fadeIn('normal');
        $('.gnb-bg').stop().slideDown('fast');
        $('.gnb-modal').stop().fadeIn(200)
    }, function () {
        $('.sub').stop().fadeOut('fast');
        $('.gnb-bg').stop().slideUp('fast');
        $('.gnb-modal').stop().fadeOut(200)
    });

    // 접근성 focus 처리
    $('.main > li .depth1').on('focus', function () {
        $('.sub').stop().fadeIn('normal');
        $('.gnb-bg').stop().slideDown('fast');
    })

    $('.main > li.last .sub li:last').find('.depth2').on('blur', function () {
        $('.main .sub').stop().fadeOut('fast');
        $('.gnb-bg').stop().slideUp('fast');
    })


    /**********************************************************************************
     ** 패밀리 사이트
     ***********************************************************************************/
    $('.family-site-btn').toggle(function () {
        $('.family-site-list').fadeIn('fast');
    }, function () {
        $('.family-site-list').fadeOut('fast');
    })

    // 접근성 focus 처리
    $('.family-site-btn').on('focus', function () {
        $('.family-site-list').fadeIn('fast');
    })
    $('.family-site-list li:last').find('a').on('blur', function () {
        $('.family-site-list').fadeOut('fast');
    })


    /**********************************************************************************
     ** 탑버튼
     ***********************************************************************************/

    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $('.btn-top').addClass('view');
        } else {
            $('.btn-top').removeClass('view');
        }
    })

    $('.btn-top').click(function () {
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 500);
    });


});
// E : window load