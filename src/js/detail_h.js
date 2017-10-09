define(['jquery'],function($){
	return {
        // 搜素框效果
        inputShow:function(){
            setTimeout(function(){
                $('.search input').attr('placeholder','犬心保体内驱虫药');
            },1000)
            $('.search input').on('focus',function(){
                $(this).attr('placeholder','');
            })
        },

        // 购物车移入移出与生成购物车列表
        carOut:function(){
            // 购物车列表
                    function carRequire(){
                        $.ajax({
                        type:'post',
                        dataType:'json',
                        url:'../api/carlist.php',
                        success:function(msg){
                            if(msg.length>0){
                            var totalqty = 0;
                            var totalprice = 0;
                            carHtml='<span class="xian"></span><h4 class="yiadd">已加入购物车的商品</h4><ul class="car_list"></ul><div class="buycar_bottom"><p><a>共 <span class="totalqty">12</span>      件商品</a>共计：￥<span class="totalprice">222</span></p><div class="clear"><a href="car.html">去购物车结算</a></div></div>'
                            var listHtml = $.map(msg,function(item){

                                totalqty +=Number(item.qty);
                                totalprice+=Number(item.total)
                                return `<li data-id="${item.id}">
                                <a href="" class="goodsimg"><img src="${item.imgurl}" width="60" height="60"></a>
                                <div class="qtychange"><span class="addqty">+</span><span class="goodsqty">${item.qty}</span><span class="decqty">-</span></div>
                                <div class="goods_name"><a href="">${item.title}</a>
                                <p><span class="price">${item.price}</span>
                                <button class="delete">删除</button></p></div>

                                </li>`
                            }).join('');

                            $('.car_detail').html(carHtml);
                            $('.car_list').html(listHtml);
                            $('.totalqty').html(totalqty);
                            $('.totalprice').html(totalprice);
                            $('.sbar_nub').html(totalqty);
                            $('.car_qty').html(totalqty);
                            $('.addqty').on('click',function(){
                                var total = 0;
                                var totalqty = 0;
                                var id = $(this).parent().parent('li').attr('data-id')
                                $(this).next().html(Number($(this).next().html())+1)
                                var len =$('.car_list').children('li').length;
                                for(i=0;i<len;i++){
                                    if(getComputedStyle($('.car_list').children('li')[i]).display!=='none'){
                                   var qty = $('.car_list').children('li').find('.goodsqty')[i].innerHTML;
                                   var price = $('.car_list').children('li').find('.price')[i].innerHTML;
                                   total+=qty*price;
                                   totalqty+=Number(qty);
                                    }
                                }
                                    $('.totalprice').html(total);
                                    $('.totalqty').html(totalqty);
                                    $('.sbar_nub').html(Number($('.sbar_nub').html())+1);
                                    $('.car_qty').html(Number($('.car_qty').html())+1);
                                $.ajax({
                                    type:'post',
                                    data:{'id':id},
                                    dataType:'json',
                                    url:'../api/car.php',
                                })
                            })
                            $('.decqty').on('click',function(){
                                if($(this).prev().html()==1){
                                    return;
                                }
                                var id = $(this).parent().parent('li').attr('data-id');

                                var qty1 = $(this).prev().text();
;
                                $(this).prev().html(Number($(this).prev().html())-1);

                                var len =$('.car_list').children('li').length;
                                var total = 0;
                                var totalqty = 0;
                                for(i=0;i<len;i++){
                                    if(getComputedStyle($('.car_list').children('li')[i]).display!=='none'){
                                   var qty = $('.car_list').children('li').find('.goodsqty')[i].innerHTML;
                                   var price = $('.car_list').children('li').find('.price')[i].innerHTML;
                                   total+=qty*price;
                                    totalqty+=Number(qty);
                                    }
                                }
                                    $('.totalprice').html(total);
                                    $('.totalqty').html(totalqty);
                                    $('.sbar_nub').html($('.sbar_nub').html()-1);
                                    $('.car_qty').html($('.car_qty').html()-1);
                                $.ajax({
                                    type:'post',
                                    data:{'id':id,'qty':qty1},
                                    url:'../api/deleteqty.php',
                                    success:function(msg){
                                        console.log(msg)
                                    }
                                })
                            })
                            $('.delete').on('click',function(){
                                var id = $(this).parents('li').attr('data-id')
                                    $(this).parents('li').css('display','none');
                                var len =$('.car_list').children('li').length;
                                var total = 0;
                                for(i=0;i<len;i++){
                                    if(getComputedStyle($('.car_list').children('li')[i]).display!=='none'){
                                   var qty = $('.car_list').children('li').find('.goodsqty')[i].innerHTML;
                                   var price = $('.car_list').children('li').find('.price')[i].innerHTML;
                                   total+=qty*price;
                                   }
                                }
                                    $('.totalprice').html(total);
                                    var currentQty = $(this).parents('li').find('.goodsqty').html();
                                    $('.totalqty').html($('.totalqty').html()-currentQty);
                                    $('.sbar_nub').html($('.sbar_nub').html()-currentQty);
                                    $('.car_qty').html($('.car_qty').html()-currentQty);
                                $.ajax({
                                    type:'post',
                                    data:{'id':id},
                                    url:'../api/deleteqty1.php',
                                    success:function(msg){
                                        console.log(msg)
                                    }
                                })
                            })
                            }else{
                                var carHtml = '<span class="xian"></span><div class="nogoods">购物车还是空的，赶紧给爱宠挑点什么吧！</div>';
                                $('.car_detail').html(carHtml);
                                $('.sbar_nub').html('0');
                                $('.car_qty').html('0');
                            }
                        }
                    })
                    }
                    carRequire();

            $('.car').on('mouseenter',function(){
                $(this).addClass('hovershow').children('.car_detail').show();
                carRequire();
            }).on('mouseleave',function(){
                $(this).removeClass('hovershow').children('.car_detail').hide();
                carRequire();
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

        // 获取图片；
		getImg:function(){
            var params = location.search;
            var id = params.slice(4,);
            $.ajax({
                type:'post',
                data:{'id':id},
                url:'../api/imgshow.php',
                dataType:'json',
                success:function(res){
                    for(i=1;i<=5;i++){
                    var $imgs_min = $('<img>').attr('src',res[0][i]).css({width:50,height:50});
                    $('.img_min').append($imgs_min);
                    }
                    var $imgs = $('<img>').attr({'src':res[0][1],'data-big':res[0][1+5]});
                    $('.img_show').append($imgs)
                     xZoom({ele:'.img_show',width:400,height:400})
                     $('.img_min').on('click','img',function(){
                        $(this).addClass('active').siblings().removeClass('active');
                        var idx = $(this).index()+1;
                        $imgs.attr({'src':res[0][idx],'data-big':res[0][idx+5]})
                        xZoom({ele:'.img_show',width:400,height:400})
                     })
                     $('.img_min').on('mouseenter','img',function(){
                        $(this).addClass('active').siblings().removeClass('active');
                     }).on('mouseleave',function(){
                        $(this).removeClass('active')
                     })
                }
            })

        },
        // 通过id ajax请求对应的商品信息
        getDetail:function(){
            var params = location.search;
            var id = params.slice(4,);
            $.ajax({
                type:'post',
                data:{'id':id},
                url:'../api/goodsforid.php',
                dataType:'json',
                success:function(data){
                    data = data[0];
                    if(data.youhuo!==null){
                        var youhuo = '<span>有货;</span>'
                    if(data.huodong==null){
                        data.huodong='';
                    }
                    }else{youhuo=''}
                    var html = `<div class="shop_name"><p>${data.title}</p></div>
                                <div class="shop_ad">${data.huodong}</div>
                                <div class="shop_price"><p><span class="zz">波奇价：</span><span class="price">￥${data.price}</span></p><p class="zdprice clearfix"><span class="zz">厂商指导价：</span><del class="del">￥${data.zhidaoprice}</del></p></div>
                                <div class="shop_main">
                                <div class="peisong clearfix"><span class="zz">配 送 至：</span><div class="areabox fl"><p class="area"><span class="psarea">广东</span><em></em></p></div><span class="huo">${youhuo}</span><span class="quan">${data.quan}</span></div>
                                <div class="taozhuang"><a class="zz">套装：</a><span class="k1 active">1kg</span><span class="k2">3kg</span></div>
                                <div class="shop_qty clearfix"><span class="zz">购买数量：</span><div class="qt"></span><span class="decqty1">-</span><input type="text" class="qty" value="1"><span class="addqty1">+</span>    件</div></div>
                                <div class='shop_car'><button class="buy">立即购买</button><a class="addtocar"></a><span class="sc"></span></div>
                                </div>`
                    $('.buy_main').html(html);
                    $areamore = $('<div>').addClass('areamore').html('<ul><li>北京</li><li>天津</li><li>河北</li><li>山西</li><li>内蒙古</li><li>辽宁</li><li>吉林</li><li>黑龙江</li><li>上海</li><li>江苏</li><li>安微</li><li>福建</li><li>江西</li><li>山东</li><li>河南</li><li>湖北</li><li>湖南</li><li>广东</li><li>广西</li><li>海南</li><li>重庆</li><li>四川</li><li>贵州</li><li>云南</li><li>西藏</li><li>陕西</li><li>甘肃</li><li>青海</li><li>宁夏</li><li>新疆</li></ul>')
                    $('.areabox').append($areamore);
                    // 切换样式
                    $('.taozhuang').on('click','span',function(){
                        $(this).addClass('active').siblings().removeClass('active');
                    })
                    
                    // 数量增减
                     var value = Number($('.qty').val());
                    $('.qty').on('keyup',function(){
                        console.log(value)
                    })
                    
                    $('.qt').on('click','span',function(){
                       

                        if($(this).hasClass('addqty1')){
                            value++;
                            $('.qty').attr('value',value)
                        }
                        if($(this).hasClass('decqty1')){
                            if(value==1){
                                return;
                            }
                            value--;
                            $('.qty').attr('value',value)
                        }
                    })
                    // 选择配送城市
                    $('.areamore').on('click','li',function(){
                        $('.psarea').html($(this).html());
                    })
                }
            })
        },

        // 顶部吸顶
        upTop:function(){

            $(window).on('scroll',function(){
                if($(this).scrollTop()>770){
                   $('.at').addClass('fixed').find('.a_car').addClass('show');
                   $('.am').css({'margin-top':'43px'})
                }else{
                     $('.at').removeClass('fixed').find('.a_car').removeClass('show');
                     $('.am').css({'margin-top':'0'})
                }
            })
        },
         // 商品信息接收
        imgRequire:function(){
            var params = location.search;
            var id = params.slice(4,);
            $.ajax({
                type:'post',
                data:{'id':id},
                url:'../api/imgshow.php',
                dataType:'json',
                success:function(res){
                    for(i=11;i<=17;i++){
                        var $goodsimg = $('<img>').attr('src',res[0][i])
                        $('.mt').append($goodsimg);
                    }
                }
            })
        },

        // 登录判断
            checkLogin:function(){
                var params = location.search;
                var id = params.slice(4,);
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
                            var $indencity = $('<div>').addClass('indencity').html(`<dl><dd><a href="">个人中心</a></dd><dd><a href="">我的主页</a></dd><dd><a href="detail_page.html?id=${id}" class="out">退出登录</a></dd></dl>`)
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
            },

        // 同类产品请求
        sameGoods:function(){
            var pageNo=1;
            var qty = 6;
            $.ajax({
                type:'post',
                dataType:'json',
                url:'../api/goodslist.php',
                data:{'pageNo':pageNo,'qty':qty,'xl':'xl'},
                success:function(msg){
                    var hot = $.map(msg.data,function(item){
                        return `<li>
                        <a href=""><img src="${item.imgurl}" width="170" height="170"></a>
                        <p><span class="price">￥${item.price}</span class="xl"><span>已售${item.sele}</span></p>
                        <a href="">${item.title}</a>
                        </li>`
                    }).join('')
                    $('.tllist').html(hot);

                }
            })
        },
        // 点击切换样式
        clickChange:function(){
            $('.title').on('click','li ',function(){
                console.log(22);
                $(this).addClass('active').siblings('li').removeClass('active');
            })
            
        }
	}
})