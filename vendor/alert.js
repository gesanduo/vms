;(function($,window,document,undefined){
    var _params = {
        isAutoClose:false,
        time:2000,
        title:'LiNKTIME VISITOR MANGEMENT SYSTEM',
        message:'Hello world',
    }
    $.Alert = function(params){
        params = $.extend({},_params,params)
       var $container = $('<div class="alert-container"></div>');
       var $box = $('<div class="alert-box"></div>');
       var $title = $('<div class="alert-title">'+params.title+'</div>');
       if(params.title){
            $box.append($title);
       }
       $box.append('<div class="alert-main">'+params.message+'</div>');
       $container.append($box);
       $('body').append($container);
       if(params.isAutoClose){
           setTimeout(function(){
            $container.remove();
           },params.time)
       }    
    }
})(jQuery,window,document);