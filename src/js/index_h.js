define(['jquery'],function($){
    
    return {

        // 头部显示二维码；
        showEwm:function(selector){
            $(selector).on('mouseenter',function(){
                if(selector==='.hr li:nth-child(5)'){
                    $(this).css('width',62)

                }
                $(this).next().css('border-left','0 none')
                $(this).addClass('current');
                $(this).children('i').css('margin-top',"-1px");
                $(this).children('div').show();
                
            }).on('mouseleave',function(){
                if(selector==='.hr li:nth-child(5)'){
                    $(this).css('width','');
                }
                $(this).next().css('border-left','1px solid #ddd');
                $(this).removeClass('current');
                $(this).children('i').css('margin-top',"");
                $(this).children('div').hide();
            })
        },

        // 搜索框聚焦效果
        headInput:function(selector){
            $(selector).on('focus',function(){
                $(this).attr('placeholder','');
            })
        },

        // 导航条hover效果；
        navHover:function(selector){
            $(selector).on('mouseenter',function(){
                $(this).children('a').addClass('a_hover').children('i').addClass('up');
                $(this).children('.nav_list').show();
            }).on('mouseleave',function(){
                $(this).children('a').removeClass('a_hover').children('i').removeClass('up');
                $(this).children('.nav_list').hide();
            })
        },


        goTop:function(){
            // 显示回到顶部按钮
            $(window).on('scroll',function(){
                if($(window).scrollTop()>10){
                    $('.rightside .gotop').addClass('showtop');
                }else{
                    $('.rightside .gotop').removeClass('showtop');
                }
            });
            // 点击回到顶部按钮
            $('.rightside .gotop').on('click',function(){
                $('body').animate({scrollTop:0},200)    
            })
        },
        // 点击回到指定区域
        goArea:function(){
            $('.rightside').on('click','a',function(){
                var idx = $(this).index();
                if(idx<$('.rightside').children().length-1){
                    var offsetTop = $('.main .container').children().eq(idx).offset().top;
                    $('body').animate({scrollTop:offsetTop},400)
                }
            })
        }
    }
})