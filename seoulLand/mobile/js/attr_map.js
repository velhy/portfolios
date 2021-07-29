$(document).ready(function () {

    // 그냥 로드했을 때 바로 실행되는 코드 (index에서 접근하지 않는 경우)

    $('.contlist').hide();
    $('.contlist:eq(0)').show();   // 첫번째 컨텐츠만 보이기
    $('.tab_menu .tab').removeClass('current');
    $('.tab_menu .tab1').addClass('current');    // 첫번째 버튼 활성화
    $('.attr_map:eq(0)').find('img').attr('id', 'draggable').addClass('ui-widget-content');  
    $( "#draggable" ).draggable({});  // 첫번째 나라 img에 draggable 적용


    // 탭메뉴 클릭했을 때 

    $('.tab_menu .tab').each(function(index){   
        $(this).click(function(){
            $('.contlist').hide();
            $('.contlist:eq(' + index + ')').show();   // 클릭한 나라만 보이게
            $('.tab_menu .tab').removeClass('current');
            $(this).addClass('current');   // 클릭한 나라의 버튼만 활성화

            for(var i=0; i<=2; i++) {    // if문이 규칙을 가지고 반복되므로 for문 이용해서 한번에 

                if (index == i) {           
                    $('.attr_map ol li a').removeClass('current').eq(7*i).addClass('current');   
                    $('.attr_map img').attr('src', 'images/map_'+ (7*(i+1)-6) + '.jpg').removeAttr('id').removeClass('ui-widget-content');  // 각 나라의 첫번째 지도 이미지로 교체
                    $('.attr_map').eq(i).find('img').attr('id', 'draggable').addClass('ui-widget-content');                
                    $( "#draggable" ).draggable({});   // 모든 나라 id제거 / 클릭한 나라에만 id 붙여주고 draggable 적용
                } 
    
                $('.attr_map img').css({'left': '0', 'top': '0', 'transform': 'scale(1)'});
            }

            if(index==0) {
               ps = '회전목마';
           } else if(index==1) {
            ps = '스카이엑스';
        } else if(index==2) {
            ps = '킹바이킹';
        }   $('.attr_map .map_img img').attr('alt', "'" + ps + ' 위치정보');

        }) 
    })

    // 어트랙션 목록 클릭했을 때

    var ps='';
    

    $('.attr_map ol li').each(function (index) {
        

        $(this).click(function () {
            if(index==0) {
                ps = '회전목마';
           } else if(index==1) {
               ps = '또봇트레인';
          } else if(index==2) {
            ps = '라바트위스터';
           } else if(index==3) {
            ps = '구름빵';
          } else if(index==4) {
            ps = '월드컵';
            } else if(index==5) {
                ps = '카트라이더범퍼';
            } else if(index==6) {
                ps = '피터팬';
            } else if(index==7) {
                ps = '스카이엑스';
            } else if(index==8) {
                ps = '블랙홀2000';
            } else if(index==9) {
                ps = '은하열차888';
            } else if(index==10) {
                ps = '엑스플라이어';
            } else if(index==11) {
                ps = '달나라열차';
            } else if(index==12) {
                ps = '춤추는요술집';
            } else if(index==13) {
                ps = '록카페';
            } else if(index==14) {
                ps = '킹바이킹';
            } else if(index==15) {
                ps = '해적소굴';
            } else if(index==16) {
                ps = '니나노고카트';
            } else if(index==17) {
                ps = '급류타기';
            } 
            
            $('.attr_map .map_img img').attr('alt', "'" + ps + ' 위치정보');

            $('.attr_map img').attr('src', 'images/map_' + (index + 1) + '.jpg').css({'left': '0', 'top': '0', 'transform': 'scale(1)', 'transition':'none'});
            $('.attr_map ol li a').removeClass('current').eq(index).addClass('current');          
        });
    });

    // +,- 버튼 클릭했을 때
    $('.attr_map .plus').click(function(){
        $('.attr_map img').css({'transform':'scale(1.5)', 'transition':'all .3s' })
       })
    
       $('.attr_map .minus').click(function(){
        $('.attr_map img').css({'left': '0', 'top': '0', 'transform': 'scale(1)', 'transition':'none'});
       })

    
    // index.html에서 sub페이지(a=1/a=2/a=3)로 이동했을 때 (index에서 접근했을 때) 실행되는 코드 -> 스타일 따로 적용!
    var purl=window.location; 
    tmp=String(purl).split('?');

    if(tmp[1]) {
    tmp2=tmp[1].split('='); 


    for(var j=1; j<=3; j++) {    // a=1일때, 2일때, 3일때 반복문 활용

        if(tmp2[1]==j) {
            $('.contlist').hide();
            $('.contlist').eq(j-1).show();
            $('.tab_menu .tab').removeClass('current');
            $('.tab_menu .tab'+j).addClass('current');
            $('.attr_map img').attr('src', 'images/map_'+(7*(j-1)+1)+'.jpg').removeAttr('id').removeClass('ui-widget-content');  
            $('.attr_map').eq(j-1).find('img').attr('id', 'draggable').addClass('ui-widget-content');                
            $( "#draggable" ).draggable({});
        }

    }

    if(tmp2[1]) {
        $("html, body").stop().animate({"scrollTop":200}, 500)
}
    }

});