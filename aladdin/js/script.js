
// 비디오
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
  	var current=false;  // 비디오 resize 위한 변수
    var current2=0;   // 네비 resize 위한 변수
  	
    $("#content").css('margin-top',screenHeight+100);
		
  	if( screenSize > 768){
        $("#videoBG").show();
        $("#imgBG").hide();
        
        $(".char1 li:eq(0)").find('img').attr('src','images/ch1-1.jpg');
        $(".char2 li:eq(0)").find('img').attr('src','images/ch2-3.jpg');
        $(".char3 li:eq(0)").find('img').attr('src','images/ch3-1.jpg');
        
      }
    if(screenSize <= 768){
        $("#content").css('margin-top',screenHeight+80);
        
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
        
        $(".char1 li:eq(0)").find('img').attr('src','images/ch1-4.jpg');
        $(".char2 li:eq(0)").find('img').attr('src','images/ch2-4.jpg');
        $(".char3 li:eq(0)").find('img').attr('src','images/ch3-4.jpg');
        
      }
    if(screenSize <= 640) {
        $(".char1 li:eq(0)").find('img').attr('src','images/ch1-5.jpg');
        $(".char2 li:eq(0)").find('img').attr('src','images/ch2-5.jpg');
        $(".char3 li:eq(0)").find('img').attr('src','images/ch3-5.jpg');
        
    } 

    



    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
        $("#content").css('margin-top',screenHeight+100);
		 
      if( screenSize > 768 && current==false){
      	$("#videoBG").show();
        $("#videoBG").attr('src','images/aaa.mp4');
        $("#imgBG").hide();
          
        $(".char1 li:eq(0)").find('img').attr('src','images/ch1-1.jpg');
        $(".char2 li:eq(0)").find('img').attr('src','images/ch2-3.jpg');
        $(".char3 li:eq(0)").find('img').attr('src','images/ch3-1.jpg');
        
        current=true;
      }
      if(screenSize <= 768){
          $("#content").css('margin-top',screenHeight+80);
          
        $("#videoBG").hide();
        $("#videoBG").attr('src','');
        $("#imgBG").show();
          
        $(".char1 li:eq(0)").find('img').attr('src','images/ch1-4.jpg');
        $(".char2 li:eq(0)").find('img').attr('src','images/ch2-4.jpg');
        $(".char3 li:eq(0)").find('img').attr('src','images/ch3-4.jpg');
          
        current=false;
      }
        
    if(screenSize <= 640) {
        $(".char1 li:eq(0)").find('img').attr('src','images/ch1-5.jpg');
        $(".char2 li:eq(0)").find('img').attr('src','images/ch2-5.jpg');
        $(".char3 li:eq(0)").find('img').attr('src','images/ch3-5.jpg');
        
    } 
        
       


      if( screenSize > 768){
        $("#gnb").show();
		 current2 = 1; 
      }
      if(current2==1 && screenSize <= 768){  
        $("#gnb").hide();
         current2 = 0;
      }

    }); 

		
    $('.down').click(function(){
			  screenHeight = $(window).height();
			  $('html,body').animate({'scrollTop':screenHeight}, 1000);
    });

    $(window).on('scroll', function(){
        scroll=$(window).scrollTop();
        if(scroll>screenHeight){
            $('#headerArea').css({'position':'fixed', 'top':0});
        } else {
            $('#headerArea').css({'position':'absolute', 'top':screenHeight});
        }
    })


// 탑버튼
    var sh = $('.videoBox').height()-400;

    $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    
    if(scroll>=sh) {
        $('.top_btn').stop().fadeIn(200);
        $('.story_bg').addClass('on')
    } else if(scroll<sh) {
        $('.top_btn').stop().fadeOut(200);
    }
         
    })


    $('.top_btn').click(function(){
        $("html, body").stop().animate({"scrollTop":0}, 1000)
    })


// gnb


    $(".menuOpen").toggle(function() {
	 $("#gnb").slideDown('slow');
        $('.menuOpen img').attr('src', 'images/bar-2.png')
        
    }, function() {
	 $("#gnb").slideUp('fast');
         $('.menuOpen img').attr('src', 'images/bar.png')
    });


  	

  	
		
 
  
   









