require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xcarousel:'../lib/jquery-xCarousel/jquery.xcarousel'
    },
    shim:{
        xcarousel:['jquery'],
    }
})

require(['jquery','index_h','xcarousel'],function($,ih){

    ih.showEwm('.hr li:nth-child(3)');
    ih.showEwm('.hr li:nth-child(4)');
    ih.showEwm('.hr li:nth-child(5)');
    ih.headInput('.search input');
    ih.navHover('.nav .nav_ul1 li');
    ih.navHover('.wep');

    // 轮播
    $('.banner .container').xCarousel({
        imgs:['img/ba1.jpg','img/ba2.jpg','img/ba3.jpg','img/ba4.jpg','img/ba5.jpg','img/ba6.jpg',],
        type:'fade',
        width:1190,
        height:380,
        showPage:true,
        showButton:false,
        duration:5000,
    });

    // 回到顶部；
    ih.goTop();

    // 点击侧边栏回到指定区域；
    ih.goArea();
})