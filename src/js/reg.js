require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1'
    }
})

require(['jquery','reg_h'],function($,ih){
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
})