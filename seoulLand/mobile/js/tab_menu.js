$(document).ready(function(){

    $('.attraction .attr_list').eq(0).show();

    $('.tab_menu .tab').each(function(index){
        $(this).click(function(){
            $('.attraction .attr_list').hide();
            $('.attraction .attr_list').eq(index).show();
        })

    })
})