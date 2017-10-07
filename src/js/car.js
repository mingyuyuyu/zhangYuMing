require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1'
    }
})

require(['jquery','car_h'],function($,ih){
    ih.carList();

    // 导入头部
    $('.header').load('header.html');
    // 导入尾部
    $('.footer').load('footer.html');

    // 登录判断
    ih.checkLogin();
})