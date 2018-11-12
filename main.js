$(function(){
    function initEvents(){
        $(".menu-item").on('click',function(){
            var type = $(this).attr('type');
            if(type =='logout'){
                $('.logout.mask').removeClass('hidden');
                $(this).addClass('active').siblings().removeClass('active');
            }else{
                $(this).addClass('active').siblings().removeClass('active');
                $(".main").addClass('hidden')
                $(".main[type="+type+"]").removeClass('hidden');
                $('.setting-c .menu-c').addClass('hidden');
                $('.setting .setting-m').removeClass('hidden');
            }
        });

        // check-in search
        $('.check-in .search-img').on('click',function(){
            checkInSearch();
        })


        /**setting */
        $(".setting input[type=file]").on('change',function(e){
            $(this).siblings('span').text($(this).val())
        })
        $('.setting .setting-m li').on('click',function(){
            var type = $(this).attr('type');
            $('.setting .setting-m').addClass('hidden');
            $(".setting ."+type).removeClass('hidden').siblings().addClass('hidden')
        })
        /***logout */
        $('.logout .mask-btn-yse').on('click',function(){
            location.href = './login.html'
        })
        $('.logout .mask-btn-no').on('click',function(){
            $('.logout.mask').addClass('hidden');
        })
    }
    
    function checkInSearch(){
        var val = $('.check-in #check-in-search').val();
    }




    initEvents();
})
