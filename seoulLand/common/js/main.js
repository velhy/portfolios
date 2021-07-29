// S : window load
$(window).on('load', function () {

    /**********************************************************************************
     ** 비주얼 페이드
     ***********************************************************************************/
    {
        let autoFade;
        let cnt = 1;
        let play = true;
        const imgCnt = $('.visual-list li').length;

        // 자동 재생
        function fadeMove() {
            cnt++;
            $('.visual-list li').fadeOut(300).removeClass('active').eq(cnt - 1).fadeIn(300).addClass('active');
            $('.visual-btn-wrap .btn-dot').removeClass('active').eq(cnt - 1).addClass('active');
            if (cnt == imgCnt) cnt = 0;
        }

        autoFade = setInterval(fadeMove, 5000);

        // 오른쪽 버튼 클릭시 
        $('.btn-next').click(function () {
            clearInterval(autoFade);
            play = false;
            let currentSlide = $('.visual-list li.active');
            let nextSlide = $('.visual-list li.active').next();
            let idx = nextSlide.index();

            if (nextSlide.length === 0) {
                $('.visual-list li').first().fadeIn(300).addClass('active');
                idx = 0;
            }

            currentSlide.fadeOut(300).removeClass('active');
            nextSlide.fadeIn(300).addClass('active')
            $('.visual-btn-wrap .btn-dot').removeClass('active').eq(idx).addClass('active');
            $('.onoff ion-icon').attr('name', 'play-circle-outline');
        })

        // 왼쪽 버튼 클릭시
        $('.btn-prev').click(function () {
            clearInterval(autoFade);
            play = false;
            let currentSlide = $('.visual-list li.active');
            let prevSlide = $('.visual-list li.active').prev();
            let idx = prevSlide.index();

            if (prevSlide.length === 0) {
                $('.visual-list li').last().fadeIn(300).addClass('active');
                idx = imgCnt-1;
            }

            currentSlide.fadeOut(300).removeClass('active');
            prevSlide.fadeIn(300).addClass('active')
            $('.visual-btn-wrap .btn-dot').removeClass('active').eq(idx).addClass('active');
            $('.onoff ion-icon').attr('name', 'play-circle-outline');
        })


        // 페이지버튼 클릭시
        $('.visual-btn-wrap .btn-dot').click(function (event) {
            let $target = $(event.target); // 클릭한 버튼의 정보를 $target에 담기

            clearInterval(autoFade); // 자동 실행 제거 

            if ($target.is('.btn1')) {
                cnt = 1
            } else if ($target.is('.btn2')) {
                cnt = 2
            } else if ($target.is('.btn3')) {
                cnt = 3
            } 

            if (cnt === imgCnt) cnt = 0;

            $('.visual-list li').fadeOut(300).removeClass('active').eq(cnt - 1).fadeIn(300).addClass('active');
            $('.visual-btn-wrap .btn-dot').removeClass('active').eq(cnt - 1).addClass('active');

            autoFade = setInterval(fadeMove, 5000);

            if (play === false) {
                play = true;
                $('.onoff ion-icon').attr('name', 'pause-circle-outline');
            }
        })


        // 재생/정지 버튼 클릭시
        $('.onoff').click(function () { // 플레이 온오프 버튼 클릭 시
            if (play === true) { // 자동 실행 on 일때
                clearInterval(autoFade);
                play = false;
                $('.onoff ion-icon').attr('name', 'play-circle-outline');
            } else if (play === false) { // 자동 실행 off 일때
                autoFade = setInterval(fadeMove, 5000);
                play = true;
                $('.onoff ion-icon').attr('name', 'pause-circle-outline');
            }
        })
    }


    /**********************************************************************************
     ** 제휴카드 슬라이드
     ***********************************************************************************/
    {
        let btnSlider = document.querySelector('.btn-slider');
        let thumb = btnSlider.querySelector('.thumb');

        thumb.onmousedown = function (event) {
            event.preventDefault();

            let shiftX = event.clientX - thumb.getBoundingClientRect().left;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {
                let newLeft = event.clientX - shiftX - btnSlider.getBoundingClientRect().left;
                let rightEdge = btnSlider.offsetWidth - thumb.offsetWidth;
                let attrPosition;

                if (newLeft < 0) {
                    newLeft = 0;
                } else if (newLeft >= 0 && newLeft < 10) {
                    attrPosition = 0;
                } else if (newLeft >= 10 && newLeft < 20) {
                    attrPosition = -102;
                } else if (newLeft >= 20 && newLeft < 30) {
                    attrPosition = -204;
                } else if (newLeft >= 30 && newLeft < 40) {
                    attrPosition = -306;
                } else if (newLeft >= 40 && newLeft < 50) {
                    attrPosition = -408;
                } else if (newLeft >= 50 && newLeft < 60) {
                    attrPosition = -510;
                } else if (newLeft >= 60 && newLeft < 70) {
                    attrPosition = -612;
                } else if (newLeft >= 70 && newLeft < 80) {
                    attrPosition = -714;
                } else if (newLeft >= 80 && newLeft < 90) {
                    attrPosition = -816;
                } else if (newLeft >= 90 && newLeft < 100) {
                    attrPosition = -918;
                } else if (newLeft >= 100 && newLeft < 108) {
                    attrPosition = -1020;
                } else if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }

                $('.card-list').css({
                    'left': attrPosition
                });

                thumb.style.left = newLeft + 'px';
            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
        };

        thumb.ondragstart = function () {
            return false;
        };
    }


    // 스크롤시 타이틀 하이라이트 효과 
    {
        const contents = [];

        $('#main-cont-wrap .sec-wrap .title-wrap').each(function (i) {
            contents[i] = $(this).offset().top - 600
        });

        $(window).on('scroll', function () {
            let scroll = $(window).scrollTop();

            for (let i = 0; i < 3; i++) {
                if (scroll >= contents[i] && scroll < contents[i + 1]) {
                    $('#main-cont-wrap .sec-wrap').eq(i).find('.main-tit').addClass('active');
                } else {
                    $('#main-cont-wrap .sec-wrap').eq(i).find('.main-tit').removeClass('active');
                }
            }

            if (scroll >= contents[3]) {
                $('#main-cont-wrap .sec-wrap').eq(3).find('.main-tit').addClass('active');
            } else {
                $('#main-cont-wrap .sec-wrap').eq(3).find('.main-tit').removeClass('active');
            }

        })
    }

});
// E : window load