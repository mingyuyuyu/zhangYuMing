require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1'
    }
})

require(['jquery','reg_h','common'],function($,ih,common){
    // 随机验证码
    ih.yanzhengma('.showyzm',4)
    // 验证码随机颜色
    ih.randomColor('.showyzm');
    // 点击更换验证码
    $('.huan').on('click',function(){
        ih.yanzhengma('.showyzm',4)
        ih.randomColor('.showyzm');
    })

    // 信息验证
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