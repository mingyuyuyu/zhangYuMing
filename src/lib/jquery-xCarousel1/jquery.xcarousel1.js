;(function($){
	// $.xCarousel = function(){}
	// $.prototype.xCarousel = function(options){}
	$.fn.xCarousel1 = function(options){
		// 属性
		var defaults = {
			// 宽高
			width:320,
			height:320,

			// 自动轮播
			autoPlay:true,

			// 显示小图
			showSmall:true,

			// 显示左右按钮
			showButton:true,

			// 是否显示页码
			showPage:false,

			// 播放间隔
			duration:3000,

			// 轮播类型：fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
			type:'vertical',

			// 默认显示图片索引
			index:0
		}

		// 这里的this,jquery对象
		this.each(function(){
			//这里的this为DOM节点
			var $this = $(this);

			var opt = $.extend({},defaults,options);


			var carousel = {
				init:function(){
					

					$ul = $this.children('ul');

					// 添加插件样式
					$this.addClass('xcarousel2');
					$ul.addClass(opt.type);
					if(opt.type === 'horizontal'){
						$ul.width(opt.width*$ul.children('li').length);
					}

					// 设置宽高
					$this.css({
						width:opt.width,
						height:opt.height
					});

					

					
					var $btnLeft = $this.prev().prev();
					
					var $btnRight = $this.prev();
					// 左右按钮
					$btnLeft.on('click',function(){
						opt.index--;
						carousel.move();
					});

					$btnRight.on('click',function(){
						opt.index++;
						carousel.move();
					})

					


					// 显示当前图片
					this.move();
				},
				move:function(){
					// 处理index值
					
					var $ul = $this.children('ul');
					if(opt.index>=$ul.children('li').length){
						opt.index = 0;
					}else if(opt.index<0){
						opt.index = $ul.children('li').length-1;
					}

					

					// 动画属性
					var params = {};

					// 水平垂直
					if(opt.type === 'vertical'){
						params.top = -opt.index*opt.height;
						$ul.animate(params);
					}else if(opt.type === 'horizontal'){
						params.left = -opt.index*opt.width;
						$ul.stop().animate(params,600);
					}

					// 淡入淡出
					else if(opt.type === 'fade'){
						$ul.children().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0});
					}

					

					
				},
				
			}

			carousel.init();
		});
		
		// 为了链式调用
		return this;
	}
})(jQuery);





// $('.box').xCarousel();