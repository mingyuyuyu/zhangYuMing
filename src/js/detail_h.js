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
        },

        // 搜素框效果
        inputShow:function(){
            setTimeout(function(){
                $('.search input').attr('placeholder','犬心保体内驱虫药');
            },1000)
            $('.search input').on('focus',function(){
                $(this).attr('placeholder','');
            })
        },

        // 购物车移入移出
        carOut:function(){
            $('.car').on('mouseenter',function(){
                $(this).addClass('hovershow').children('.car_detail').show();
            }).on('mouseleave',function(){
                 $(this).removeClass('hovershow').children('.car_detail').hide();
            })
        },

        // 二级三级导航效果
        navShow:function(){
            $('.nav h3').on('mouseenter',function(){
                $(this).children('div').stop().slideDown();
            }).on('mouseleave',function(){
                $(this).children('div').stop().slideUp();
                })
            $('.nav h3').children('div').on('mouseenter','.goodslist',function(){
                $(this).css({'border':'1px solid #cf2d09'})
                $(this).find('.list_into').show();
                $(this).find('em').hide();
            }).on('mouseleave','.goodslist',function(){
                $(this).css({'border':''})
                $(this).find('.list_into').hide();
                $(this).find('em').show();
            })
        },

        // 收缩效果
        showMore:function(){
            $('.more_choose').on('click',function(){
                $(this).parent('.filter_choose').children().slice(4).slideDown();
                $(this).hide();

            })
            $('.less_choose').on('click',function(){
                $(this).parent('.filter_choose').children().slice(4).slideUp();
                $(this).hide();
                $('.more_choose').show();
            })
        },

        // 侧边导航收缩效果
        leftsideSlide:function(){

            $('.goodsshow').on('click','h2',function(){
                $(this).parent('li').children('.top_detail').toggleClass('none');
                $(this).children('i').toggleClass('up')
            })

            $('.title_first').on('click',function(){
                console.log()
                $(this).parent('li').children('.top_detail').toggleClass('show');
                $(this).children('i').toggleClass('down');
            })
        }
    }
})
