require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1'
    }

})


require(['jquery','list_h'],function($,ih){
    ih.showRegion();

    // 二维码下拉动画
    ih.showEwm('.tel');
    ih.showEwm('.gz');
    ih.showEwm('.home');

    // 搜索框效果
    ih.inputShow();

    // 购物车移入移出
    ih.carOut();

    // 二三级导航
    ih.navShow();

    // 收缩效果
    ih.showMore();
    // 左侧导航效果；
    ih.leftsideSlide();

    // ajax请求数据
    ih.requireGoods();


})
