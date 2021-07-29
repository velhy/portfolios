$(window).on('load', function () {

  // 메인 비주얼 높이 꽉차게 설정
  $('.main-visual-wrap, .main-visual-wrap .swiper-slide').css({
    height: window.innerHeight
  });

  // 모바일 GNB 높이 꽉차게 설정 
  $('.mb-gnb, .mb-gnb-bg').css({
    height: window.innerHeight
  });

  /**********************************************************************************
   ** 스와이퍼
   ***********************************************************************************/
  // 메인 비주얼
  const visualSlide = new Swiper(".visual-list", {
    speed: 600,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        setTimeout(() => $('.main-visual-wrap .swiper-slide').eq(0).find('p').addClass('active'), 500);
      },
      slideChangeTransitionEnd: function () {
        let idx = this.activeIndex;
        $('.main-visual-wrap .swiper-slide p').removeClass('active');
        $('.main-visual-wrap .swiper-slide').eq(idx).find('p').addClass('active');
      }
    }
  });

  // 채용
  const recruitSlide = new Swiper(".recruit-list", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  /**********************************************************************************
   ** GNB
   ***********************************************************************************/
  $('.main').hover(
    function () {
      $('.sub').stop().fadeIn(300)
      $('.gnb-bg').stop().slideDown(200);
    },
    function () {
      $('.sub').stop().fadeOut(200);
      $('.gnb-bg').stop().slideUp(300);
    });

  // 접근성 처리
  $('.main > li .depth1').on('focus', function () {
    $('.sub').stop().fadeIn(300);
    $('.gnb-bg').stop().slideDown(200);
  });

  $('.main > li:last').find('.sub li:last').find('.depth2').on('blur', function () {
    $('.sub').stop().fadeOut(200);
    $('.gnb-bg').stop().slideUp(300);
  });


  // 스크롤 올릴 때만 GNB 보이게
  let beforePos = document.documentElement.scrollTop;

  document.addEventListener('scroll', function () {
    let afterPos = document.documentElement.scrollTop;
    if (afterPos > 50) {
      if (beforePos < afterPos) {
        $('#header-wrapper').css({
          'display': 'none'
        });
      } else {
        $('#header-wrapper').css({
          'display': 'block'
        });
      }
    }
    beforePos = afterPos;
  });


  /**********************************************************************************
   ** 모바일 GNB
   ***********************************************************************************/
  let screenW = $('window').width();

  // gnb 열기
  $('.btn-open').click(function () {
    $('.mb-gnb').animate({
      'right': 0
    }, 500, 'easeOutCubic');
    $('body').css({
      'overflow': 'hidden'
    });
    $('.mb-gnb-bg').fadeIn(200);
  })

  // gnb 닫기 
  $('.mb-gnb-bg, .btn-close').click(function () {
    if (screenW <= 768) {
      $('.mb-gnb').animate({
        'right': '-440px'
      }, 500, 'easeOutCubic');
    } else {
      $('.mb-gnb').animate({
        'right': '-100%'
      }, 500, 'easeOutCubic');
    }

    $('body').css({
      'overflow': 'auto'
    });
    $('.mb-gnb-bg').fadeOut(200);
  })

  // gnb 메뉴 아코디언
  $('.mb-gnb li .depth1').on('click', function () {
    function slideUp() {
      $('.mb-gnb li .depth1').removeClass('active').next().stop().slideUp().end().find('ion-icon').attr('name', 'add-outline');
    };

    if ($(this).hasClass('active')) {
      slideUp();
    } else {
      slideUp();
      $(this).addClass('active').next().stop().slideDown().end().find('ion-icon').attr('name', 'remove-outline');
    }
  });



  /**********************************************************************************
   ** 컨텐츠 페이드인
   ***********************************************************************************/
  const secTop = [];
  const secCount = $('section').length;

  for (let i = 0; i < secCount; i++) {
    secTop[i] = $('section').eq(i).offset().top - 300;
  }

  // 한번만 실행
  let once = true;

  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();

    // company
    if (scroll >= secTop[0] - 200) {
      $('.company h2').addClass('view');
      $('.company .item li').addClass('view');

      if (scroll >= secTop[0] + 600) {
        $('.company h2').css({
          'opacity': '0'
        });
      } else {
        $('.company h2').css({
          'opacity': '1'
        });
      }
    }

    if (scroll >= secTop[0] + 300) {
      $('.company h2').addClass('fixed');
    } else {
      $('.company h2').removeClass('fixed');
    }


    // brand 
    if (scroll >= secTop[2] - 200) {
      $('.brand h2').addClass('view');
      if (scroll >= secTop[2] + 600) {
        $('.brand h2').css({
          'opacity': '0'
        });
      } else {
        $('.brand h2').css({
          'opacity': '1'
        });
      }
      if (once === true) {
        $('.brand-item li').eq(0).find('dt, dd, img').addClass('view');
        once = false;
      }
    }

    if (scroll >= secTop[2] + 300) {
      $('.brand h2').addClass('fixed');
    } else {
      $('.brand h2').removeClass('fixed');
    }


    // recruit
    if (scroll >= secTop[3] - 200) {
      $('.recruit h2').addClass('view');
      if (scroll >= secTop[3] + 500) {
        $('.recruit h2').css({
          'opacity': '0'
        });
      } else {
        $('.recruit h2').css({
          'opacity': '1'
        });
      }
    }

    if (scroll >= secTop[3] + 300) {
      $('.recruit h2').addClass('fixed');
    } else {
      $('.recruit h2').removeClass('fixed');
    }


  })


  /**********************************************************************************
   ** 공지사항 상하 슬라이드
   ***********************************************************************************/
  let position = 0;
  let moveSize = 60;

  $('.notice-list ul').after($('.notice-list ul').clone());

  $('.btn-wrap a').each(function (idx) {
    $(this).click(function () {

      switch (idx) {
        case 0:
          if (position == -180) {
            $('.notice-list').css({
              top: 0
            });
            position = 0;
          }

          position -= moveSize;

          $('.notice-list').animate({
            top: position
          }, 500, function () {
            if (position == -180) {
              $('.notice-list').css({
                top: 0
              });
              position = 0;
            }
          }).clearQueue();
          break;

        case 1:
          if (position == 0) {
            $('.notice-list').css({
              top: -180
            });
            position = -180;
          }

          position += moveSize;

          $('.notice-list').animate({
            top: position
          }, 500, function () {
            if (position == 0) {
              $('.notice-list').css({
                top: -180
              });
              position = -180;
            }
          }).clearQueue();
          break;
      }

    })
  })


  // 공지사항 모바일 더보기
  screenW = $(window).width();

  if (screenW <= 1024) {
    $('.notice .btn-more').html('<ion-icon name="add"></ion-icon>');
  } else {
    $('.notice .btn-more').html('소식 더보기');
  }

  $(window).resize(function () {
    let screenW = $(window).width();
    if (screenW <= 1024) {
      $('.notice .btn-more').html('<ion-icon name="add"></ion-icon>');
    } else {
      $('.notice .btn-more').html('소식 더보기');
    }
  });



  /**********************************************************************************
   ** 브랜드 탭 클릭
   ***********************************************************************************/
  $('.brand-tab div a').each(function (index) {
    $(this).click(function () {
      $('.brand-item li').removeClass('active').eq(index).addClass('active');
      $('.brand-tab div a').removeClass('active').eq(index).addClass('active');

      $('.brand-item dt, .brand-item dd, .brand-item li img').removeClass('view');
      $('.brand-item li').eq(index).find('dt, dd, img').addClass('view');

    })
  })


  /**********************************************************************************
   ** 탑버튼
   ***********************************************************************************/
  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();

    if (scroll > 10) {
      $('.btn-top').fadeIn(200);
    } else {
      $('.btn-top').fadeOut(200);
    }
  })

  $('.btn-top').click(function () {
    $('html, body').stop().animate({
      'scrollTop': 0
    }, 500)
  })


  /**********************************************************************************
   ** 패밀리 사이트
   ***********************************************************************************/
  $('.family-site-btn').toggle(function () {
    $('.family-site-list').stop().slideDown();
    $('.family-site-btn ion-icon').attr('name', 'caret-down-outline');
  }, function () {
    $('.family-site-list').stop().slideUp();
    $('.family-site-btn ion-icon').attr('name', 'caret-up-outline');
  })

  // focus 처리
  $('.family-site-btn').on('focus', function () {
    $('.family-site-list').stop().slideDown();
    $('.family-site-btn ion-icon').attr('name', 'caret-down-outline');
  })
  $('.family-site-list li:last').find('a').on('blur', function () {
    $('.family-site-list').stop().slideUp();
    $('.family-site-btn ion-icon').attr('name', 'caret-up-outline');
  })

});