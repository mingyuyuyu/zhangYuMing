require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xzoom:'../lib/xzoom/xzoom'
    },
    shim:{
        xzoom:['detail_h']
    }
})

require(['jquery','detail_h','xzoom'],function($,ih){
    // 获取对应的图片
    ih.getImg();

    // 获取商品信息
    ih.getDetail();

})