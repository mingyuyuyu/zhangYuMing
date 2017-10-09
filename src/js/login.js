require.config({
    paths:{jquery:'../lib/jquery-3.1.1'}
})

require(['jquery','login_h','common'],function($,ih,common){

    // 验证码随机
    ih.yanzhengma('.showyzm');
    ih.randomColor('.showyzm');
    // 点击更换验证码
    $('.huan').on('click',function(){
        ih.yanzhengma('.showyzm');
        ih.randomColor('.showyzm');
    })

    // 验证信息
    ih.yanzheng();

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