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
        },


        // 请求数据与分页效果
        requireGoods:function(){
            // 当前分页
            var pageNo = 1;

            // 输出到页面
            $('.current_page').html(pageNo);


            // 每页显示数量
            var qty = 20;


            // 请求总开关
            var flog =0;


            // 成功时返回的函数
                function success(msg){

                    var html = $.map(msg.data,function(item){
                        if(item.huodong==null){
                            item.huodong='';
                        }
                        if(item.yunfei=='mian'){
                           var yunfei = '<span class="yunfei">免运费</span>'
                       }
                        else{
                            yunfei = '<span></span>'
                        }
                        return `<li data-id="${item.id}">
                                <a class="goodsimgs" href=""><img src="${item.imgurl}"></a>
                                <p class="price">￥${item.price}${yunfei}</p>
                                <p class="title"><a href="">${item.title}</a></p>
                                <p class="huodong">${item.huodong}</p>
                                <a class="saleqty">已售<span>${item.sele}</span></a>
                                <a href="" class="pingjia">已有<span>${item.pingjia}</span>人评价</a>
                                <div class="goods_bottom"><a class="add_car"><i></i><span>加入购物车</span></a><a href="" class="shoucang"><i></i><span>收藏</span></a></div>
                                </li>`

                    }).join('');
                    $('.sale_goods').html('');
                    $ul = $('<ul>').addClass('clearfix').html(html);
                    $('.sale_goods').append($ul);

                    // 共有多少件商品
                    $('.totalnum').html(msg.total);

                    // 当前页码；
                    $('.current_page').html(pageNo);

                    // 生成页码；

                    var pageLen = Math.ceil(msg.total/msg.qty);
                    // 共几页

                    $('.totalpage').html(pageLen);

                    $page = $('<div>').addClass('page').html('');
                    console.log(pageLen);
                    for(i=1;i<=pageLen;i++){
                        $span = $('<span>').addClass('load').html(i);
                        $page.append($span);
                    }
                    // 生成html结构；
                    var html1 = '<span class="nextpage"> 下一页> </span><span class="lastpage"> 末页</span><span class="totalpage1">共<em></em>页</span><span>到第<input type="text" class="writepage">页</span><span class="btn">确定</span>'
                    $loading = $('<div>').addClass('loading').html(html1);
                    $pageLoading = $('<div>').addClass('pageLoading').append([$page,$loading])
                    $('.sale_goods').append($pageLoading);

                    // 共几页
                     $('.totalpage1 em').html(pageLen);
                    // 点击页码跳转

                    $('.sale_goods .page').on('click','span',function(){

                        pageNo = $(this).html();
                        $('.current_page').html(pageNo);
                        flogCheck();
                    })

                    // 跳转页面上方按钮的判断
                    if(pageNo>1){
                            $('.btn_left').css({color:'#333'})
                    }else{
                            $('.btn_left').css({color:'#ccc'})
                    }
                    if(pageNo==$('.totalpage').text()){
                         $('.btn_right').css({color:'#ccc'})
                    }else{
                         $('.btn_right').css({color:'#333'})
                    }
                    // 跳转页面下方按钮的判断
                    $('.page span').eq(pageNo-1).addClass('sure').siblings().removeClass('sure');

                    // 点击下一页跳转页面
                    $('.nextpage').on('click',function(){

                       pageNo++;
                        if(pageNo<1){
                            pageNo = 1;
                        }else if(pageNo>$('.totalpage').text()){
                            pageNo = $('.totalpage').text();
                        }

                        flogCheck();
                    })
                    // 点击末页
                    $('.lastpage').on('click',function(){
                        pageNo = $('.totalpage').text();
                        flogCheck();
                    })
                    // 输入页码跳转到第几页
                    $('.btn').on('click',function(){
                        pageNo = $('.writepage').val();
                        if(pageNo<1){
                            return;
                        }else if(pageNo>$('.totalpage').text()){
                            return;
                        }
                        flogCheck();
                    })
                    // 当页码大于2时，显示首页和上一页
                    if(pageNo>1){
                        var $previous = $('<div>').addClass('gofirst').html('<span class="first">首页</span><span class="previous"> <上一页</span>')
                        $('.pageLoading').prepend($previous);
                    }
                    // 点击首页跳转
                    $('.first').on('click',function(){
                        pageNo = 1;
                        flogCheck();
                    })
                    // 点击上一页跳转；
                    $('.previous').on('click',function(){
                        pageNo--;
                        if(pageNo<1){
                            pageNo = 1;
                        }else if(pageNo>$('.totalpage').text()){
                            pageNo = $('.totalpage').text();
                        }

                        flogCheck();
                    })

                    // 点击传参到详情页
                    $('.goodsimgs').on('click',function(){
                       var id = $(this).parent('li').attr('data-id')
                       $(this).attr('href','../html/detail_page.html?id='+id)
                    })
                    $('.title a').on('click',function(){
                       var id = $(this).parent().parent('li').attr('data-id')
                       $(this).attr('href','../html/detail_page.html?id='+id)
                    })

                    // 加入购物车动画
                    $('.add_car').on('click',function(){
                        var currentId = $(this).parent().parent('li').attr('data-id')

                        $.ajax({
                                type:'post',
                                data:{'id':currentId},
                                url:'../api/car.php',
                            })
                        $('.sbar_nub').html(Number($('.sbar_nub').html())+1);
                        $('.car_qty').html(Number($('.car_qty').html())+1);
                        var $currentImg = $(this).parent().parent('li').find('img')
                        var left = $(this).offset().left;
                        var top = $(this).offset().top;
                        var $copyImg = $currentImg.clone().appendTo($('body')).css({
                            'position':'absolute',
                            'top':top,
                            'left':left,
                            'width':'50px',
                            'height':'50px'
                        })
                        var top1 =$(this).offset().top-($(this).offset().top-$(document).scrollTop()-$('.sbar_cat').position().top);
                        var left1 = $('.sbar_cat').offset().left
                        console.log(top1)
                        $copyImg.animate({'top':top1}).animate({'left':left1},1500,function(){
                            $copyImg.remove();
                        })
                    })
                }


            // 判断页面总开关，发送不同请求；
            function flogCheck(){
                if(flog==1){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'up':'up'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else if(flog==2){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'xl':'xl'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else if(flog==3){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'rq':'rq'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else if(flog==4){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'pj':'pj'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else if(flog==5){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'xp':'xp'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else if(flog==6){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'gl':'gl'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else if(flog==7){
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'yh':'yh'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else{
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
            }

            // 点击排序按钮切换样式
            function changeUp(selector){
                selector.addClass('active').siblings('li').removeClass('active');
                $.each(selector.parent('ul').children('li'),function(idx,item){
                    $(item).find('i').css('backgroundPosition','');
                    $(item).children('a').css('color','');
                })
                selector.children('i').css('backgroundPosition','-31px -22px');
                selector.children('a').css('color','white');
            }

            // 进入页面先进行ajax请求
            $.ajax({
                type:'post',
                url:'../api/goodslist.php',
                data:{'pageNo':pageNo,'qty':qty},
                dataType:'json',
                success:function(msg){
                    success(msg);

                }
            })
            // 点击价格升序
            $('.rank_3').on('click',function(){

                flog=1;
                // 重置页码为1；
                pageNo=1;
                $.ajax({
                    type:'post',
                    url:'../api/goodslist.php',
                    data:{'pageNo':pageNo,'qty':qty,'up':'up'},
                    dataType:'json',
                    success:function(msg){
                        success(msg);

                    }
                })
                $selector = $(this);
                changeUp($selector);


            })
            // 点击销量升序
            $('.rank_1').on('click',function(){
                flog=2;
                pageNo=1;
                $.ajax({
                    type:'post',
                    url:'../api/goodslist.php',
                    data:{'pageNo':pageNo,'qty':qty,'xl':'xl'},
                    dataType:'json',
                    success:function(msg){
                        success(msg);

                    }
                })
                $selector = $(this);
                changeUp($selector);

            })
            // 点击人气升序
            $('.rank_2').on('click',function(){
                flog=3;
                pageNo=1;
                $.ajax({
                    type:'post',
                    url:'../api/goodslist.php',
                    data:{'pageNo':pageNo,'qty':qty,'rq':'rq'},
                    dataType:'json',
                    success:function(msg){
                        success(msg);

                    }
                })
                 $selector = $(this);
                changeUp($selector);
            })
            // 点击评价升序
            $('.rank_5').on('click',function(){
                flog=4;
                pageNo=1;
                $.ajax({
                    type:'post',
                    url:'../api/goodslist.php',
                    data:{'pageNo':pageNo,'qty':qty,'pj':'pj'},
                    dataType:'json',
                    success:function(msg){
                        success(msg);

                    }
                })
                $selector = $(this);
                changeUp($selector);
            })
            // 点击实现综合排序
            $('.rank_0').on('click',function(){
                flog=0;
                pageNo=1;
                $.ajax({
                    type:'post',
                    url:'../api/goodslist.php',
                    data:{'pageNo':pageNo,'qty':qty},
                    dataType:'json',
                    success:function(msg){
                        success(msg);

                    }
                })
                 $selector = $(this);
                changeUp($selector);
            })
            // 点击新品价格升序
            $('.rank_4').on('click',function(){
                flog=5;
                pageNo=1;
                $.ajax({
                    type:'post',
                    url:'../api/goodslist.php',
                    data:{'pageNo':pageNo,'qty':qty,'xp':'xp'},
                    dataType:'json',
                    success:function(msg){
                        success(msg);

                    }
                })
                $selector = $(this);
                changeUp($selector);
            })
            // 勾选全球购
            $('.global_buy').on('click',function(){
                pageNo=1;
                if($(this).prop('checked')){
                    flog=6;
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'gl':'gl'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else{
                    flog=0;
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
            })
            // 勾选只显示有货
            $('.only_have').on('click',function(){
                pageNo=1;
                if($(this).prop('checked')){
                    flog=7;
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty,'yh':'yh'},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
                else{
                    flog=0;
                    $.ajax({
                        type:'post',
                        url:'../api/goodslist.php',
                        data:{'pageNo':pageNo,'qty':qty},
                        dataType:'json',
                        success:function(msg){
                            success(msg);
                        }
                    })
                }
            })

            // 点击跳转页面
            $('.choose_page').on('click','a',function(){
                if($(this).hasClass('btn_left')){
                    pageNo--;
                }else if($(this).hasClass('btn_right')){
                    pageNo++;
                }

                if(pageNo<1){
                    pageNo = 1;
                }else if(pageNo>$('.totalpage').text()){
                    pageNo = $('.totalpage').text();
                }

                flogCheck();
            })


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
                            var $indencity = $('<div>').addClass('indencity').html('<dl><dd><a href="">个人中心</a></dd><dd><a href="">我的主页</a></dd><dd><a href="list_page.html" class="out">退出登录</a></dd></dl>')
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
