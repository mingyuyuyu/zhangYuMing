define(['jquery'],function($){
    return{
        carList:function(){
            $.ajax({
                type:'post',
                dataType:'json',
                url:'../api/carlist.php',
                success:function(msg){
                    buyCar(msg);
                }
            })
            function buyCar(msg){
                var totalqty = 0;
                var totalprice = 0
                var totalweight = 0;
                var carHtml = $.map(msg,function(item){
                    item.total = item.total.toFixed(2);
                    totalqty+=Number(item.qty);
                    totalprice+=Number(item.total);
                    totalweight+=Number(item.weight);
                    return `<li data-id="${item.id}">
                    <input type="checkbox" class="chose" checked>
                    <a href="" class="goods_img"><img src="${item.imgurl}" width="80" height="80"></a>
                    <div class="goods_name"><a href="">${item.title}</a></div>
                    <div class="goods_weight">${item.weight}kg</div>
                    <div class="goods_price">${item.price}</div>
                    <div class="goods_youhui"></div>
                    <div class="goods_qty"><span class="decqty">-</span><input type="text" value="${item.qty}"class="goodsqty"><span class="addqty">+</span></div>
                    <div class="goods_xiaoji">${item.total}</div>
                    <div class="goods_do"><span>移入收藏</span><span class="delete">删除</span></div>
                    </li>`
                    }).join('');
                    $('.carlist').html(carHtml);
                    var totalHtml = '<div class="total_l clearfix fl"><input type="checkbox" checked class="allchose2"><span class="choseall">全选</span><span class="del">删除选中的商品</span><span class="clearcar">清空购物车</span></div><div class="total_r"><div class="totalall"><p>已选择<span class="totalqty"></span>件商品（总重：<span class="totalweight"></span>kg），总价（不含运费）<a class="allprice">￥<span class="totalprice">222</span></a></p><p>已节省：¥0.00</p><p>总价= 商品总价: ￥<span class="totalprice"></span> + 全球购商品税费: ¥0.00</p></div><div class="gobuy"><a href="">去结算</a></div></div>'
                    $('.car_total').html(totalHtml);
                    totalprice = totalprice.toFixed(2);
                    $('.totalprice').html(totalprice);
                    $('.totalqty').html(totalqty);
                     $('.totalweight').html(totalweight);
                    $('.addqty').on('click',function(){
                        var currentId = $(this).parents('li').attr('data-id');
                        $.ajax({
                            type:'post',
                            data:{'id':currentId},
                            url:'../api/car.php',
                            success:function(){
                                $.ajax({
                                    type:'post',
                                    dataType:'json',
                                    url:'../api/carlist.php',
                                    success:function(msg){
                                        buyCar(msg);
                                    }
                                })
                            }
                        })
                    })
                    $('.decqty').on('click',function(){

                        var currentId = $(this).parents('li').attr('data-id');
                        var currentQty = $(this).next().val();
                        if(currentQty==1){
                            return;
                        }
                        $.ajax({
                            type:'post',
                            data:{'id':currentId,'qty':currentQty},
                            url:'../api/deleteqty.php',
                            success:function(){
                                $.ajax({
                                    type:'post',
                                    dataType:'json',
                                    url:'../api/carlist.php',
                                    success:function(msg){
                                        buyCar(msg);
                                    }
                                })
                            }
                        })
                    })
                    $('.delete').on('click',function(){
                        var currentId = $(this).parents('li').attr('data-id');
                        $.ajax({
                            type:'post',
                            data:{'id':currentId},
                            url:'../api/deleteqty1.php',
                            success:function(){
                                $.ajax({
                                    type:'post',
                                    dataType:'json',
                                    url:'../api/carlist.php',
                                    success:function(msg){
                                        buyCar(msg);
                                    }
                                })
                            }
                        })
                    })
                    $('.del').on('click',function(){
                        var carlist  = $('.carlist')[0]
                        var len = carlist.children.length;
                        for(i=0;i<len;i++){
                            var $chose = $(carlist.children[i]).find('.chose');
                            if($chose.prop('checked')){
                                var currentId = $chose.parents('li').attr('data-id');
                                $.ajax({
                                    type:'post',
                                    data:{'id':currentId},
                                    url:'../api/deleteqty1.php',
                                    success:function(){
                                        $.ajax({
                                            type:'post',
                                            dataType:'json',
                                            url:'../api/carlist.php',
                                            success:function(msg){
                                                buyCar(msg);
                                            }
                                        })
                                    }
                                })
                            }
                        }
                    })
                    $('.clearcar').on('click',function(){
                            $.ajax({
                                type:'post',
                                data:{'delall':'delall'},
                                url:'../api/deleteqty1.php',
                                success:function(){
                                    $.ajax({
                                        type:'post',
                                        dataType:'json',
                                        url:'../api/carlist.php',
                                        success:function(msg){
                                            buyCar(msg);
                                        }
                                    })
                                }
                           })

                    })
                    // 全选
                    $('.allchose1').on('click',function(){
                        $('.chose').prop('checked',this.checked)
                        $('.allchose2').prop('checked',this.checked)
                    })
                    $('.allchose2').on('click',function(){
                        $('.chose').prop('checked',this.checked)
                        $('.allchose1').prop('checked',this.checked)
                    })
                    $('.chose').on('click',function(){
                        var $checkbox = $('.chose').filter(':checked');
                        $('.allchose1').prop('checked',$checkbox.length == $('.chose').length)
                        $('.allchose2').prop('checked',$checkbox.length == $('.chose').length)
                    })
                }
            },
            // 登录判断
            checkLogin:function(){
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
                            var $indencity = $('<div>').addClass('indencity').html('<dl><dd><a href="">个人中心</a></dd><dd><a href="">我的主页</a></dd><dd><a href="car.html" class="out">退出登录</a></dd></dl>')
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