$(document).scroll( function() { 
		
		if($(document).scrollTop()>800){
			
			$(".goTop").css("display","block");
		}
		if($(document).scrollTop()<=800){
			
			$(".goTop").css("display","none");
		}
	} );
	//点击回顶部
	$(".goTop").click(function(){		
		//console.log($(document).scrollTop())
		$("html,body").animate({"scrollTop":0+"px"},500);
	})	
	
	
	
	
	
	
	
			var startX,startY,bufferST;
			var viewHeight = document.body.clientHeight;
			var allHeight = document.body.scrollHeight;
	
			$(".list").on("touchstart",function(e){
				var e = e || window.event;
				
				startX = e.originalEvent.targetTouches[0].pageX;
				startY = e.originalEvent.targetTouches[0].pageY;
			});
			
			$(".list").on("touchmove",function(e){
				var e = e || window.event;
				
				var moveX = e.originalEvent.targetTouches[0].pageX;
				var moveY = e.originalEvent.targetTouches[0].pageY;
				
				var cx = moveX - startX;
				var cy = moveY - startY;
				
				//滚动条还没有到达顶部或者底部
				if(Math.abs(cy) < 20){
					bufferST = document.body.scrollTop;
				}else if(cy < -85){
//						alert("执行了加载更多");
						for(var i = 0; i < 4 ; i ++){
							
							$(".list").append("<li class='flt'><img src='../img/gooditem01.png' /><p>深情款款-紫玫瑰66枝,搭配适量...<span>新品</span></p><span class='price'>￥:429</span></li>");
						}
					}else{
						$(".list").css("transform","translateY(" + cy + "px)");
					}
				
				
			});
			
			$(".list").on("touchend",function(e){
				$(".list").removeAttr("style");
				document.body.scrollTop = bufferST;
			});