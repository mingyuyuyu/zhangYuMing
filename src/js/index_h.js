define(['jquery'],function($){

    return {

        // 头部显示二维码；
        showEwm:function(selector){
            $(selector).on('mouseenter',function(){
                if(selector==='.hr li:nth-child(3)'){
                    $(this).css('width',62)

                }
                $(this).next().css('border-left','0 none')
                $(this).addClass('current');
                $(this).children('i').css('margin-top',"-1px");
                $(this).children('div').show();

            }).on('mouseleave',function(){
                if(selector==='.hr li:nth-child(3)'){
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
        },
        // ajax请求
        ajaxJson:function(selector,url){
            $.ajax({
                type:'get',
                dataType:'json',
                url:url,
                success:function(msg){
                    html = $.map(msg,function(item){
                        return `<li><a href="">
                            <img src="${item.imgurl}">
                            <p class="p1">${item.title}</p>
                            <p class="p2">${item.detail}</p>
                            </a></li>`
                    }).join('');
                    $(selector).html(html);
                }
            })
        },

        // 进入页面判断登陆状态
        checkLogin:function(){
            $.ajax({
                type:'get',
                url:'../api/checklogin.php',
                success:function(msg){
                    if(msg=='fail'){
                        var $first = $('<li>').addClass('first').html('<a href="html/login.html">登录</a>')
                        var $second = $('<li>').addClass('second').html('<a href="html/reg.html">注册</a>')
                        $('.hr').prepend($second);
                        $('.hr').prepend($first);
                    }else{
                        var $login_first = $('<li>').addClass('login_first').html('<span class="username">'+msg+'</span><em></em>')
                        var $login_second = $('<li>').addClass('login_second').html('<a href="">消息</a>')
                        var $indencity = $('<div>').addClass('indencity').html('<dl><dd><a href="">个人中心</a></dd><dd><a href="">我的主页</a></dd><dd><a href="index.html" class="out">退出登录</a></dd></dl>')
                        $login_first.append($indencity)
                        $('.hr').prepend($login_second);
                        $('.hr').prepend($login_first);

                        // 退出登录
                        $('.out').on('click',function(){
                            $.ajax({
                                type:'get',
                                data:{'out':'out'},
                                url:'../api/checklogin.php',
                                success:function(){

                                }
                            })
                        })
                    }
                }
            })
        }
    }
})