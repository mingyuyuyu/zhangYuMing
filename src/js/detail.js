require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xzoom:'../lib/xzoom/xzoom'
    },
    shim:{
        xzoom:['detail_h']
    }
})

require(['jquery','detail_h','common','xzoom'],function($,ih,common){
    // 获取对应的图片
    ih.getImg();

    // 获取商品信息
    ih.getDetail();

    // 顶部吸顶
    ih.upTop();

    // 获取商品图片信息
    ih.imgRequire();

    // 导入头部尾部
    $('.header').load('header.html',function(){
        common.showRegion();
        common.showEwm();
    });
    $('.footer').load('footer.html',function(){
        common.showEwm('.tel');
        common.showEwm('.gz');
        common.showEwm('.home');
    });

    // 登录判断
    ih.checkLogin();

    // 同类产品请求
    ih.sameGoods();

    // 点击切换样式
    ih.clickChange();

    ih.inputShow();
    ih.carOut();
    ih.navShow();
})