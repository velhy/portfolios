$(document).ready(function(){

    var ht = $('.tab_menu').offset().top-260;

    $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    
    if(scroll>ht) {
        $('.tab_box').addClass('navOn');
        $('.tab_menu').css({'width':'1200', 'border-bottom':'0'});
        $('.tab_menu li a').css('fontSize', '18px');
        $('#headerArea').fadeOut('normal')
     } else {
        $('.tab_box').removeClass('navOn');
        $('.tab_menu').css({'width':'900', 'border-bottom':'2px solid #ddd'});
        $('.tab_menu li a').css('fontSize', '20px');
        $('#headerArea').fadeIn('fast')
     }
    //  else { 
    //     $('#headerArea').animate({top:0},500);
    //     $('.tab_box').removeClass('navOn');
    // }
    })

})

