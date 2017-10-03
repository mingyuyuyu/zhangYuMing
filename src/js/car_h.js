define(['jquery'],function($){
    return{
        carList:function(){
            $.ajax({
                type:'post',
                dataType:'json',
                url:'../api/carlist.php',
                success:function(msg){
                    var carHtml = $.map(msg,function(item){
                        item.total = item.total.toFixed(2);
                        return `<li data-id="${item.id}">
                        <input type="checkbox" class="chose">
                        <a href="" class="goods_img"><img src="${item.imgurl}" width="80" height="80"></a>
                        <div class="goods_name"><a href="">${item.title}</a></div>
                        <div class="goods_weight">${item.weight}kg</div>
                        <div class="goods_price">${item.price}</div>
                        <div class="goods_youhui"></div>
                        <div class="goods_qty"><span class=""decqty>-</span><input type="text" value="${item.qty}" class="goodsqty"><span class="addqty">+</span></div>
                        <div class="goods_xiaoji">${item.total}</div>
                        <div class="goods_do"><span>移入收藏</span><span class="delete">删除</span></div>
                        </li>`
                    }).join('');
                    $('.carlist').html(carHtml);
                }
            })
        }
    }

})