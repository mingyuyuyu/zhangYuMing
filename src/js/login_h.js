define(['jquery'],function($){
    return {
        // 随机验证码
        yanzhengma:function(selector,num){
            if(num === undefined){
                num = 4;
            }
            var arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

            // 循环获取验证码
            var res = '';
            for(var i=0;i<num;i++){
                var idx = parseInt(Math.random()*arr.length);
                res += arr[idx];
            }
            $(selector).html(res);
        },
        // 验证码随即颜色
        randomColor:function(selector){
            var str = '0123456789abcdef';

            var res = '#';
            for(var i=0;i<6;i++){
                var idx = Math.floor(Math.random()*str.length);
                res += str[idx];
            }
            $(selector).css('color',res)
        },

        // 输入验证
        yanzheng:function(){
            var username;

            $('.z1').on('blur',function(){

                    username = $(this).val().trim();
                if(username.length==0){
                    $('.remind').addClass('show').html('请输入用户名或者邮箱或者手机号！')
                }else{
                    $('.remind').removeClass('show')
                }



            })
            var password;
            $('.z2').on('blur',function(){
                password = $(this).val().trim();
                if(password.length==0){
                    $('.remind').addClass('show').html('请输入密码！')
                }else{
                    $('.remind').removeClass('show')
                }
            })
            var yzm;
            $('.z3').on('blur',function(){
                yzm = $(this).val().trim();
                if(yzm.length==0){
                    $('.remind').addClass('show').html('请输入验证码！')
                    $('.remind1').removeClass('correct').addClass('error');
                }
                else if(yzm !== $('.showyzm').html()){
                    $('.remind1').removeClass('correct').addClass('error');
                    $('.remind').removeClass('show');
                }else{
                    $('.remind1').removeClass('error').addClass('correct');
                    $('.remind').removeClass('show')
                }
            })
            // 点击登录按钮判断
            $('.log').on('click',function(){
                if(yzm !== $('.showyzm').html()){
                    $('.remind').addClass('show').html('验证码不正确！')
                    $('.remind1').removeClass('correct').addClass('error');
                    return false;
                }else{
                    console.log(22)
                    $.ajax({
                        type:'get',
                        data:{'username':username,'password':password},
                        url:'../api/login.php',
                        success:function(msg){
                            console.log(msg)
                            if(msg =='fail'){
                                event.preventDefault();
                                $('.remind').addClass('show').html('您的用户名或者密码不正确，请重新输入！')

                            }
                            else if(msg == 'ok'){
                                $.ajax({
                                    type:'get',
                                    data:{'username':username},
                                    url:'../api/username.php',
                                    success:function(){
                                        console.log(66)
                                    }
                                })
                                $('.log').attr('href','../index.html')
                            }
                        }
                    })
                }

            })

        },
        // 登录判断
            checkLogin:function(){
                console.log(666)
                $.ajax({
                    type:'get',
                    url:'../api/checklogin.php',
                    success:function(msg){
                        if(msg=='fail'){
                            var $first = $('<li>').addClass('first').addClass('tr').html('<a href="login.html">登录</a>')
                            var $second = $('<li>').addClass('second').addClass('tr').html('<a href="reg.html">注册</a>')
                            $('.hr').prepend($second);
                            $('.hr').prepend($first);
                        }else{
                            var $login_first = $('<li>').addClass('login_first').addClass('tr').html('<span class="username">'+msg+'</span><em></em>')
                            var $login_second = $('<li>').addClass('login_second').addClass('tr').html('<a href="">消息</a>')
                            var $indencity = $('<div>').addClass('indencity').html('<dl><dd><a href="">个人中心</a></dd><dd><a href="">我的主页</a></dd><dd><a href="login.html" class="out">退出登录</a></dd></dl>')
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