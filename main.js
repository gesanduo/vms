$(function(){
    $(".menu-item").on('click',function(){
        var type = $(this).attr('type');
        $(this).addClass('active').siblings().removeClass('active');
        $(".main").addClass('hidden')
        $(".main[type="+type+"]").removeClass('hidden');
    })
})