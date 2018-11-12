$(function(){
    function initEvents(){
        $(".menu-item").on('click',function(){
            var type = $(this).attr('type');
            $(this).addClass('active').siblings().removeClass('active');
            $(".main").addClass('hidden')
            $(".main[type="+type+"]").removeClass('hidden');
        });

        // check-in search
        $('.check-in .search-img').on('click',function(){
            checkInSearch();
        })


        /**setting */
        $(".setting input[type=file]").on('change',function(e){
            $(this).siblings('span').text($(this).val())
        })
    }
    
    function checkInSearch(){
        var val = $('.check-in #check-in-search').val();
    }




    initEvents();
})
