require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1'
    }
})

require(['jquery','car_h','common'],function($,ih,common){
    ih.carList();

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
})