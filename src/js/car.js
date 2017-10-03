require.config({
    paths:{
        jquery:'../lib/jquery-3.1.1'
    }
})

require(['jquery','car_h'],function($,ih){
    ih.carList();
})