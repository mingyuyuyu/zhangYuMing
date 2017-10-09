define(['jquery'],function($){
    return{
        // 显示地区区域
        showRegion:function(){
            $('.market').on('mouseenter',function(){
                $(this).css({'borderLeft':'1px solid #ddd','borderRight':'1px solid #ddd','margin-left':'-1px'}).children('.region').addClass('none');
                $(this).children('i').css('backgroundPosition','-10px -61px')
            }).on('mouseleave',function(){
                $(this).css({'borderLeft':'','borderRight':'','margin':''}).children('.region').removeClass('none');
                $(this).children('i').css('backgroundPosition','0px -61px')
            })
        },

        // 头部显示二维码；
        showEwm:function(selector){
            $(selector).on('mouseenter',function(){
                $(this).addClass('show').children('div').show();
                $(this).find('img').css({'margin-top':'10px'})
            }).on('mouseleave',function(){
                $(this).removeClass('show').children('div').hide();
                $(this).find('img').css({'margin-top':'0'})
            })
        }
    }
})