require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1',
        xcarousel:'../lib/jquery-xCarousel/jquery.xcarousel',
        xcarousel1:'../lib/jquery-xCarousel1/jquery.xcarousel1'
    },
    shim:{
        xcarousel:['jquery'],
        xcarousel1:['jquery']
    }
})

require(['jquery','index_h','xcarousel','xcarousel1'],function($,ih){
    ih.showEwm('.hr li:nth-child(1)');
    ih.showEwm('.hr li:nth-child(2)');
    ih.showEwm('.hr li:nth-child(3)');
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

    // 区域轮播
    $('.main .dogshow').xCarousel({
        imgs:['img/dog1.jpg','img/dog2.jpg','img/dog3.jpg'],
        type:"horizontal",
        width:360,
        height:360,
        showPage:true,
        showButton:false,
        duration:4000,
    })

    $('.main .catshow').xCarousel({
        imgs:['img/cat1.jpg','img/cat2.jpg','img/cat3.jpg'],
        type:"horizontal",
        width:360,
        height:360,
        showPage:true,
        showButton:false,
        duration:4000,
    })

    $('.main .smallshow').xCarousel({
        imgs:['img/small1.jpg','img/small2.jpg','img/small3.jpg'],
        type:"horizontal",
        width:360,
        height:360,
        showPage:true,
        showButton:false,
        duration:4000,
    })

    $('.main .watershow').xCarousel({
        imgs:['img/water1.jpg','img/water2.jpg','img/water3.jpg'],
        type:"horizontal",
        width:360,
        height:360,
        showPage:true,
        showButton:false,
        duration:4000,
    })

    $('.main .pashow').xCarousel({
        imgs:['img/pa1.jpg','img/pa2.jpg','img/pa3.jpg'],
        type:"horizontal",
        width:360,
        height:360,
        showPage:true,
        showButton:false,
        duration:4000,
    })
    // 文字轮播
    $('.baike_b_l').xCarousel1({
        type:"horizontal",
        width:495,
        height:100

    });

    // json数据请求;
    ih.ajaxJson('.dogul','../api/data/indexList.json');
    ih.ajaxJson('.catul','../api/data/indexList1.json');
    ih.ajaxJson('.smallul','../api/data/indexList2.json');
    ih.ajaxJson('.waterul','../api/data/indexList3.json');
    ih.ajaxJson('.paul','../api/data/indexList4.json');

    // 登录判断
    ih.checkLogin();
})