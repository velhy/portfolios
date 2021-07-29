$(document).ready(function(){

var article = $('section ul li');  // 모든 faq
var article1 = $('section:eq(0)').find('li:eq(0)');   // 첫번째 faq

function sdUp(arti) {    // slideUp function -> 매개변수 이용 : 주체가 다른데 실행코드가 같은 경우 활용할 수 있게 (코드 절약)
    arti.removeClass('show').find('.as').slideUp(200).end().find('span i').removeClass('fas fa-arrow-circle-up').addClass('fas fa-arrow-circle-down')
};

function sdDown(arti) {    // slideDown function 
    arti.addClass('show').find('.as').slideDown(200).end().find('span i').removeClass('fas fa-arrow-circle-down').addClass('fas fa-arrow-circle-up');
}

function sdHide(arti) {     // Hide function  => 열려있는 첫번째 faq가 index에서 접근했을 때는 닫혀있도록
    arti.removeClass('show').find('.as').hide().end().find('span i').removeClass('fas fa-arrow-circle-up').addClass('fas fa-arrow-circle-down');
}

sdDown(article1);   // 처음 로드했을 때 첫번째 faq만 열려있게


$('section li .qt .trigger').click(function(){
   var myArticle = $(this).parents('li');   // 클릭한 faq

   if(myArticle.hasClass('show')) {
    sdUp(article);
    
   } else {
       sdUp(article);
       sdDown(myArticle);
   }

})

// index.html에서 sub페이지(a=1/a=2/a=3)로 이동했을 때 (index에서 접근했을 때) 실행되는 코드 -> 스타일 따로 적용!
var purl=window.location; 
tmp=String(purl).split('?');

if(tmp[1]) {
tmp2=tmp[1].split('='); 

var mArticle = $('section').eq(0).find('li').eq(0);
var mArticle2 = $('section').eq(0).find('li').eq(2);
var mArticle3 = $('section').eq(1).find('li').eq(5);

if(tmp2[1]==1) {
    sdHide(article1); 
    sdDown(mArticle);
       $("html, body").scrollTop('1000');
} else if(tmp2[1]==2) {
    sdHide(article1); 
    sdDown(mArticle2);
       $("html, body").scrollTop('1300')
} else if(tmp2[1]==3) {
    sdHide(article1); 
    sdDown(mArticle3);
       $("html, body").scrollTop('2600')
}
}


})




