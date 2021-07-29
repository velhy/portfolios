$(document).ready(function() {
   
 	
    $(".btn").click(function() { //메뉴버튼 클릭시
        
        var documentHeight =  $(document).height();   
        // 도큐먼트 객체(우리가 코딩한 문서)의 높이
        // 처음 보이는 높이 = 윈도우의 높이
        //실제 페이지의 높이 = $(document).height();
        $(".box").css('height',documentHeight);
        $("#gnb").css('height',documentHeight);
        //반투명박스와 네비의 높이를 실제 페이지의 높이로 바꾸어라   
 
        $("#gnb").animate({left:0,opacity:1}, 'fast');
        $(".box").show();
        
    });
    
    $(".box,.close_btn").click(function() { //닫기버튼 클릭시
      $("#gnb").animate({left:'-100%',opacity:.5}, 'fast');
      $(".box").hide();
    });



     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false];
     // onoff[0] = false, onoff[1] = false, onoff[2] = false
     // true = 열려 있는 상태   false = 닫혀 있는 상태
     
         var arrcount=onoff.length;  // 배열의 갯수
         
         $('#gnb .depth1>a').click(function(){
             var ind=$(this).parents('.depth1').index();  // li의 순서를 뽑아냄  0,1,2.. index()와 each문의 차이점 each문은 태그가 떨어져 있어도 순서가 제대로
             // 부여되지만 index()는 떨어져 있으면 제대로 순서 계산 X. 따라서 a가 아닌 a의 부모인 li를 기준으로 잡아야 함 
             
             
             
            if(onoff[ind]==false){       // 클릭한 해당 메뉴의 서브가 닫혀있다면
             //$('#gnb .depth1 ul').hide();
             $(this).next('ul').slideDown('normal');    // 자기 자신 열기
             $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
             $('#gnb .depth1>a i').removeClass('fa-minus').addClass('fa-plus');
         $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
             $('#gnb .depth1 a').removeClass('active');
             $(this).addClass('active');
     
              for(var i=0; i<arrcount; i++) onoff[i]=false; 
              onoff[ind]=true;    // 열린 상태로 바뀜
                 
            }else{    // 클릭한 해당 메뉴의 서브가 열려있다면
              $(this).next('ul').slideUp('fast'); 
              onoff[ind]=false;   
              
              $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
            }
         });    

    
   });