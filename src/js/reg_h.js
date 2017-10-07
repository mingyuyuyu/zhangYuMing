define(['jquery'],function($){
    return{
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
            var flog1 = false;
            var phone;
            $('.z1').on('blur',function(){
                phone = $(this).val().trim();
                if(phone.length==0){
                    $('.remind1').removeClass('correct').addClass('remind').html('请输入手机号码！')
                    flog1 = false;
                }
                else if(!/^1[34578]\d{9}$/.test(phone)){
                    $('.remind1').removeClass('correct').addClass('remind').html('请输入正确的手机号码！')
                    flog1 = false;
                }
                else{
                    $.ajax({
                        type:'get',
                        data:{'phone':phone},
                        url:'../api/reg1.php',
                        success:function(msg){
                            if(msg=='fail'){
                                $('.remind1').removeClass('correct').addClass('remind').html('该手机号已被使用！')
                                flog1 = false;
                            }else{
                                $('.remind1').removeClass('remind').html('').addClass('correct')
                                flog1 = true;
                            }
                        }
                    })
                }
            })
            var password;
            var flog2 = false;
            $('.z2').on('blur',function(){
                console.log(flog1)
                password = $(this).val().trim();
                if(password.length==0){
                    $('.remind2').removeClass('correct').addClass('remind').html('请输入密码！')
                    flog2 = false;
                }
                else if(!/^\S{6,20}$/.test(password)){
                     $('.remind2').removeClass('correct').addClass('remind').html('请输入正确的密码格式！')
                     flog2 = false;
                }else{
                    $('.remind2').removeClass('remind').html('').addClass('correct')
                     flog2 = true;
                }

            })
            var flog3 = false;
            $('.z3').on('blur',function(){
                var value = $(this).val().trim();
                if(value!==password){
                    $('.remind3').removeClass('correct').addClass('remind').html('您输入的两次密码不一致！')
                    flog3 = false;
                }else{
                    $('.remind3').removeClass('remind').html('').addClass('correct');
                     flog3 = true;
                }
            })
            var flog4 = false;
            var nickname;
            $('.z4').on('blur',function(){
                nickname = $(this).val().trim();
                if(nickname.length<2){
                    $('.remind4').removeClass('correct').addClass('remind').html('用户昵称不能小于2位！')
                    flog4 = false;
                }else{
                    $.ajax({
                        type:'get',
                        data:{'nickname':nickname},
                        url:'../api/reg1.php',
                        success:function(msg){
                            if(msg=='fail'){
                                $('.remind4').removeClass('correct').addClass('remind').html('该昵称已被使用')
                                flog4 = false;
                            }else{
                                $('.remind4').removeClass('remind').html('').addClass('correct');
                                flog4 = true;
                            }
                        }
                    })
                }
            })
            var flog5 = false;
            $('.z5').on('blur',function(){
                var value = $(this).val();
                var yzm = $('.showyzm').html();
                if(value == yzm){
                    $('.remind5').removeClass('error').addClass('correct1');
                     flog5 = true;
                }else{
                    $('.remind5').removeClass('correct1').addClass('error');
                    flog5 = false;

                }
            })

            // 点击注册按钮判断
            $('.z7').on('click',function(){
                if(flog1&&flog2&&flog3&&flog4&&flog5){
                    console.log(nickname)
                    $.ajax({
                        type:'get',
                        data:{'phone':phone,'password':password,'nickname':nickname},
                        url:'../api/reg.php',
                        success:function(msg){
                            if(msg=='ok'){
                                console.log(66)
                            }
                        }
                    })
                }else{
                    $('p').removeClass('correct')
                }
                event.preventDefault();
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
                            var $indencity = $('<div>').addClass('indencity').html('<dl><dd><a href="">个人中心</a></dd><dd><a href="">我的主页</a></dd><dd><a href="reg.html" class="out">退出登录</a></dd></dl>')
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