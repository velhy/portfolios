$(document).ready(function(){

$('.promo_list li .more_btn').each(function(index){

    $(this).click(function(){
        $('.modal_box').fadeIn('normal');
        $('.md' + (index+1)).css('transform', 'scaleX(1)');
    })

    $('.close_btn, .modal_box').click(function(){
        $('.md' + (index+1)).css('transform', 'scaleX(0)');
        $('.modal_box').fadeOut('fast');
        

    })
   
})

// index.html에서 sub페이지(a=1/a=2/a=3)로 이동했을 때의 스타일 적용
var purl=window.location; 
tmp=String(purl).split('?');

if(tmp[1]) {
tmp2=tmp[1].split('='); 

if(tmp2[1] == 1) {
    $("html, body").stop().animate({"scrollTop":200}, 500, function(){
        $('.modal_box').fadeIn('normal');
        $('.md1').css('transform', 'scaleX(1)');
    })
} else if(tmp2[1] == 2) {
    $("html, body").stop().animate({"scrollTop":200}, 500, function(){
        $('.modal_box').fadeIn('normal');
        $('.md3').css('transform', 'scaleX(1)');
    })
} else if(tmp2[1] == 3) {
    $("html, body").stop().animate({"scrollTop":700}, 500, function(){
        $('.modal_box').fadeIn('normal');
        $('.md4').css('transform', 'scaleX(1)');
    })
} else if(tmp2[1] == 4) {
    $("html, body").stop().animate({"scrollTop":900}, 500, function(){
        $('.modal_box').fadeIn('normal');
        $('.md7').css('transform', 'scaleX(1)');
    })
}

}
    
})


