'use strict';

// S : window load
$(window).on('load', function () {

    /**********************************************************************************
     ** 서브 네비 active
     ***********************************************************************************/
    {
        let purl = window.location;
        let tmp = String(purl).split('/');

        const arr = tmp;
        let pgUrl = arr[arr.length - 1];

        const currentPage = String(pgUrl).split('.');
        let eqNum;

        switch (currentPage[0]) {
            case 'greeting':
            case 'attraction':
            case 'guide':
            case 'ticket':
            case 'book_form':
            case 'list':
                eqNum = 0;
                break;
            case 'history':
            case 'festival':
            case 'operation':
            case 'benefit':
            case 'book_confirm':
            case 'faq':
                eqNum = 1;
                break;
            case 'map':
            case 'restaurant':
            case 'card':
                eqNum = 2;
                break;
        }

        $('.sub-nav-list li').eq(eqNum).find('a').addClass('active');
    }


    /**********************************************************************************
     ** 팝업시 바디 스크롤 방지 
     ***********************************************************************************/
    const bodyScroll = {
        disable: function () {
            $('body')
                .css('overflow-y', 'scroll');

            $('#wrapper').css({
                'position': 'fixed',
                'top': -$(window).scrollTop()
            });
        },

        enable: function () {
            let scrollPos = Math.abs($('#wrapper').css('top').split('px')[0]);

            $('#wrapper').removeAttr('style');
            $(window).scrollTop(scrollPos);
            $('body').removeAttr('style');
        }
    };


    /**********************************************************************************
     ** index 접근 
     ***********************************************************************************/
    {
        let purl = window.location;
        let idxPage = String(purl).split('?');

        if (idxPage[1]) {
            let idxPage2 = idxPage[1].split('=');

            // 혜택 
            if (idxPage2[0] === 'be') {
                for (let i = 1; i <= 4; i++) {
                    if (idxPage2[1] == i) {
                        $('.tab-con').hide().eq(i - 1).show();
                        $('.btn-img').removeClass('active').eq(i - 1).addClass('active');
                    }
                }
            }

            // faq
            if (idxPage2[0] === 'faq') {
                for (let i = 1; i <= 4; i++) {
                    if (idxPage2[1] == i) {
                        $('.tab-con').hide().eq(i - 1).show();
                        $('.tab-list li a').removeClass('active').eq(i - 1).addClass('active');
                    }
                }
            }

            // 어트랙션
            if (idxPage2[0] === 'att') {
                const secTop = [];
                for (let i = 0; i < 3; i++) {
                    secTop[i] = Math.floor($('.tab-cont').eq(i).offset().top) - 130;
                }

                // 캐릭터타운
                for (let i = 1; i <= 4; i++) {
                    if (idxPage2[1] == i) {
                        $('.attraction-list').eq(0).children('li').eq(i - 1).find('.modal-wrap').fadeIn(200);
                        $('.modal-box').fadeIn(200);
                        $('html, body').scrollTop(secTop[0]);
                        bodyScroll.disable();
                    }
                }

                // 미래의나라
                for (let i = 5; i <= 8; i++) {
                    if (idxPage2[1] == i) {
                        $('.attraction-list').eq(1).children('li').eq(i - 5).find('.modal-wrap').fadeIn(200);
                        $('.modal-box').fadeIn(200);
                        $('html, body').scrollTop(secTop[1]);
                        bodyScroll.disable();
                    }
                }

                // 모험의나라 
                for (let i = 9; i <= 10; i++) {
                    if (idxPage2[1] == i) {
                        $('.attraction-list').eq(2).children('li').eq(i - 9).find('.modal-wrap').fadeIn(200);
                        $('.modal-box').fadeIn(200);
                        $('html, body').scrollTop(secTop[2]);
                        bodyScroll.disable();
                    }
                }
            }
        }
    }


    /**********************************************************************************
     ** 연혁
     ***********************************************************************************/
    if ($('.history-list').length) {
        const subVisH = $('.sub-visual-wrap').height();
        const hisListTop = [];

        for (let i = 0; i < 6; i++) {
            hisListTop[i] = $('.history-list li').eq(3 * (i + 1)).offset().top - 150;
        }

        $(window).on('scroll', function () {
            let scroll = $(window).scrollTop();

            if (scroll > subVisH) {
                $('.history-img').css({
                    'position': 'fixed',
                    'top': '26%',
                    'left': '100px'
                });
            } else {
                $('.history-img').css({
                    'position': 'absolute',
                    'top': 'auto',
                    'left': 0
                });
            }

            if (scroll < hisListTop[0]) {
                $('.history-img').find('img').attr('src', '../common/img/sub-history-01.jpg');
            } else if (scroll >= hisListTop[0] && scroll < hisListTop[1]) {
                $('.history-img').find('img').attr('src', '../common/img/sub-history-02.jpg');
            } else if (scroll >= hisListTop[1] && scroll < hisListTop[2]) {
                $('.history-img').find('img').attr('src', '../common/img/sub-history-03.jpg');
            } else if (scroll >= hisListTop[2] && scroll < hisListTop[3]) {
                $('.history-img').find('img').attr('src', '../common/img/sub-history-04.jpg');
            } else if (scroll >= hisListTop[3] && scroll < hisListTop[4]) {
                $('.history-img').find('img').attr('src', '../common/img/sub-history-05.jpg');
            } else if (scroll >= hisListTop[4] && scroll < hisListTop[5]) {
                $('.history-img').find('img').attr('src', '../common/img/sub-history-06.jpg');
            }
        });
    }


    /**********************************************************************************
     ** sticky menu + tab click scroll
     ***********************************************************************************/
    if ($('.tab-cont').length) {
        const subVisH = $('.sub-visual-wrap').height();
        const secTop = [];

        for (let i = 0; i < 3; i++) {
            secTop[i] = Math.floor($('.tab-cont').eq(i).offset().top) - 130;
        }

        $(window).on('scroll', function () {
            let scroll = $(window).scrollTop();

            if (scroll > subVisH) {
                $('.tab-wrap').addClass('sticky');
                $('header').fadeOut('fast');
            } else {
                $('.tab-wrap').removeClass('sticky');
                $('header').fadeIn('fast');
            }

            $('.tab-list li a').removeClass('active');

            let eqNum = '';

            if (scroll < secTop[1]) {
                eqNum = 0;
            } else if (scroll >= secTop[1] && scroll < secTop[2]) {
                eqNum = 1;
            } else if (scroll >= secTop[2]) {
                eqNum = 2;
            }

            $('.tab-list li').eq(eqNum).find('a').addClass('active');

        });

        $('.tab-list li').each(function (index) {
            $(this).click(function () {
                $('.tab-list li a').removeClass('active');
                $('a', this).addClass('active');

                $('html, body').animate({
                    scrollTop: secTop[index]
                }, 500)

            })
        })
    }


    /**********************************************************************************
     ** tab click
     ***********************************************************************************/
    $('.btn-img').each(function (index) {
        $(this).click(function () {
            $(this).addClass('active').siblings('.btn-img').removeClass('active');
            $('.tab-con').hide().eq(index).show();
        })
    })

    if ($('.tab-con').length) {
        $('.tab-list li').each(function (index) {
            $(this).click(function () {
                $('.tab-list li a').removeClass('active');
                $('a', this).addClass('active');
                $('.tab-con').hide().eq(index).show();
            })
        })
    }




    /**********************************************************************************
     ** 어트랙션 모달 팝업 
     ***********************************************************************************/

    // 모달 클릭시 팝업 & 스와이퍼
    $('.attraction-list li').each(function (index) {
        $(this).find('a').click(function () {
            bodyScroll.disable();

            $(this).siblings('.modal-wrap').fadeIn(200);
            $('.modal-box').fadeIn(200);

            let swiper = new Swiper(".mySwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });

        });
    })

    // 닫기버튼, 배경 클릭시 팝업 닫기
    $('.btn-close, .modal-box').click(function () {
        $('.modal-wrap').fadeOut(300);
        $('.modal-box').fadeOut(300);

        bodyScroll.enable();
    })


    // index 접근: 팝업시 스와이퍼
    if ($('.mySwiper').length) {

        let swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    // 어트랙션 지도 확대 & 축소
    $('.plus').click(function () {
        $('.map-wrap').css({
            'background-size': '2200px'
        })
    })

    $('.minus').click(function () {
        $('.map-wrap').css({
            'background-size': '1400px'
        })
    })


    /**********************************************************************************
     ** 제휴카드 호버
     ***********************************************************************************/
    {
        const cardList = $('.card-list li');
        let backColor = '';

        cardList.each(function (index) {

            $(this).hover(function () {
                switch ($(this).index()) {
                    case 0:
                        backColor = '#5080BF';
                        break;
                    case 1:
                        backColor = '#F2CB05';
                        break;
                    case 2:
                        backColor = '#9CC8D9';
                        break;
                    case 3:
                        backColor = '#00010D';
                        break;
                    case 4:
                        backColor = '#F2A74B';
                        break;
                    case 5:
                        backColor = '#035AA6';
                        break;
                    case 6:
                        backColor = '#91BDD9';
                        break;
                    case 7:
                        backColor = '#6368BF';
                        break;
                }

                $(this).css('background', backColor).find('dd').css({
                    'opacity': 1,
                    'top': 30
                });
                $(this).find('img').css({
                    'top': 0,
                    'box-shadow': '2px 2px 5px #333'
                });
            }, function () {
                $(this).css('background', '#f4f4f4').find('dd').css({
                    'opacity': 0,
                    'top': 50
                });
                $(this).find('img').css({
                    'top': -140,
                    'box-shadow': '2px 2px 10px #ccc'
                });
            })
        })
    }


    /**********************************************************************************
     ** faq 아코디언
     ***********************************************************************************/
    {
        const allFaq = $('.qna-list li');

        function faqSlideUp(faq) {
            faq.removeClass('show').find('.answer').slideUp(200).end().find('ion-icon').attr('name', 'chevron-down-outline')
        };

        function faqSlideDown(faq) {
            faq.addClass('show').find('.answer').slideDown(200).end().find('ion-icon').attr('name', 'chevron-up-outline')
        }

        function faqHide(faq) {
            faq.removeClass('show').find('.answer').hide()
        }

        allFaq.find('.question').click(function () {
            let myFaq = $(this).parents('li');

            if (myFaq.hasClass('show')) {
                faqSlideUp(allFaq);
            } else {
                faqSlideUp(allFaq);
                faqSlideDown(myFaq);
            }
        })
    }

});
// E : window load