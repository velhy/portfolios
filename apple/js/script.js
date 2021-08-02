var winW = $(window).width();
var proHeight = $('section').eq(2).offset().top - 200;
var airpodHeight = $('section').eq(3).offset().top - 400;
var etcItem = [];

// winW 640 down, pro img mobile ver
if (winW <= 640) {
  $('.iphone-pro-img').css({
    'background': 'url(images/pro-mb.png) center 100% no-repeat',
    'background-size': '200px'
  });
  $('.iphone-img').css({
    'background': 'url(images/iphone-mb.png) center 90% no-repeat',
    'background-size': '300px'
  })
} else {
  $('.iphone-pro-img').css({
    'background': 'url(images/pro.png) center 100% no-repeat',
    'background-size': '640px'
  });
  $('.iphone-img').css({
    'background': 'url(images/iphone3.png) center 120% no-repeat',
    'background-size': '540px'
  })
}

$('.iphone-img').addClass('view');

// img fade in when scroll
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  // iphone-pro fade in
  if (scroll >= proHeight) {
    $('.iphone-pro-img').addClass('view');
  } else if (scroll < proHeight) {
    $('.iphone-pro-img').removeClass('view');
  }
  // airpod-max fade in
  if (scroll >= airpodHeight) {
    $('.airpods-max-img').addClass('view');
  } else if (scroll < airpodHeight) {
    $('.airpods-max-img').removeClass('view');
  }
  // etc-apple-item fade in, by using array
  $('section > section').each(function (index) {
    etcItem[index] = $('section > section').eq(index).offset().top - 400;
    if (scroll >= etcItem[index]) {
      $(this).find('div').eq(0).addClass('view');
    } else if (scroll < etcItem[index]) {
      $(this).find('div').eq(0).removeClass('view');
    }
  })
});

// gnb
var documentHeight = $(document).height(); // body 안에 있는 모든 요소들의 높이

var screenSize = $(window).width();
if (screenSize > 768) {
  $(".box").css('height', 'auto');
  $("#gnb").css('height', 'auto');
}
if (screenSize <= 768) {
  $(".box").css('height', documentHeight);
  $("#gnb").css('height', documentHeight);
}

$(".btn").click(function () { // 햄버거 버튼 클릭하면 메뉴 날라오기
  $("#gnb").animate({
    left: 0,
    opacity: 1
  }, 400, 'easeOutCubic');
  $(".box").show();
});

$(".box,.close").click(function () {
  $("#gnb").animate({
    left: '-100%',
    opacity: 1
  }, 400, 'easeOutCubic');
  $(".box").hide();
});

var current = 0; // 모바일 해상도

$(window).resize(function () { //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
  screenSize = $(window).width();
  documentHeight = $(document).height();

  if (screenSize > 768) {
    current = 1; // 모바일 이상의 해상도
    $("#gnb").css({
      left: 0,
      opacity: 1
    });
    $(".box").hide();
    $(".box").css('height', 'auto');
    $("#gnb").css('height', 'auto');

  }
  if (current == 1 && screenSize <= 768) {
    $("#gnb").css({
      left: '-100%',
      opacity: 0
    });
    $(".box").hide();
    $(".box").css('height', documentHeight);
    $("#gnb").css('height', documentHeight);
    current = 0;
  }
});
