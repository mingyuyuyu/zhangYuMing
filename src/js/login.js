require.config({
    paths:{jquery:'../lib/jquery-3.1.1'}
})

require(['jquery','login_h'],function($,ih){

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
    $('.header').load('header.html');
    $('.footer').load('footer.html');
    // 登录判断
    ih.checkLogin();
})