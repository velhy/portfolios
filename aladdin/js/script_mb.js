// 비디오
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
    var current2=0;   // 네비 resize 위한 변수
  	
    $("#content").css('margin-top',screenHeight+100);
		
    if(screenSize <= 768){
        $("#content").css('margin-top',screenHeight+80);
        var boxHeight2 =  $('.clip .clip_part:eq(4)').outerHeight();
        // 가장 높이가 큰 첫번째 박스의 높이 뽑아내기

		for(var i=1; i<6; i++){
					$(".clip .clip_part:eq("+ i +")").css('height',boxHeight2);
		}
        
      }


    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드
      screenSize = $(window).width(); 
      screenHeight = $(window).height();
        $("#content").css('margin-top',screenHeight+100);
		 

      if( screenSize > 768){
        $("#gnb").show();
//          for(var i=0; i<6; i++){
//					$(".clip .clip_part:eq("+ i +")").css('height','auto');
//		}
          
		 current2 = 1; 
      }
      if(current2==1 && screenSize <= 768){  
        $("#gnb").hide();
         current2 = 0;
      }
       if(screenSize <= 768) {
        $("#content").css('margin-top',screenHeight+80);
           
//           $(".clip .clip_part:eq(0)").css('height','auto');
             boxHeight2 =  $('.clip .clip_part:eq(4)').outerHeight();
        // 가장 높이가 큰 첫번째 박스의 높이 뽑아내기

		for(var i=1; i<6; i++){
					$(".clip .clip_part:eq("+ i +")").css('height',boxHeight2);
		}
           
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
        } 
        else {
            $('#headerArea').css({'position':'absolute', 'top':screenHeight});
        }
    })

// 탑버튼
    var sh = $('.videoBox').height()-400;

    $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    
    if(scroll>=sh) {
        $('.top_btn').stop().fadeIn(200);
       
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



// popup 


//  $('.char_list2 li').each(function(index){
//      $(this).click(function(){
//           $('.char_list2_ex li').eq(index).fadeIn(200);
//          $('.pop_bg').fadeIn(200);
//      })
//  })
//
//$('.close').click(function(){
//    $('.char_list2_ex li').fadeOut(200);
//    $('.pop_bg').fadeOut(200);
//})





   
  	