define(['jquery'],function($){
	return {
		getImg:function(){
            console.log(666)
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
                    console.log(data)
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
                                <div class="peisong"><span class="zz">配 送 至：</span><p class="area">广东<em></em></p><span class="huo">${youhuo}</span><span class="quan">${data.quan}</span></div>
                                <div class="taozhuang"><span class="zz">套装：</span><span class="k1">1kg</span><span class="k2">3kg</span></div>
                                <div class="shop_qty clearfix"><span class="zz">购买数量：</span><div class="qt"></span><span>-</span><input type="text" class="qty" value="1"><span>+</span>    件</div></div>
                                <div class='shop_car'><button class="buy">立即购买</button><a class="addtocar"></a><span class="sc"></span></div>
                                </div>`
                    $('.buy_main').html(html);
                }
            })

        }
	}
})