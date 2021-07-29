$(document).ready(function(){
var hg = [];    

$('.tab_menu li').each(function(index){
    hg[index] = $('.qna').eq(index).offset().top-60;

    $(this).click(function(){
        $('.tab_menu li a').removeClass('current');
         $("html,body").animate({"scrollTop": hg[index]}, 700);
         $(this).find('a').addClass('current');
    })
   
})

})