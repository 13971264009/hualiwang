var mySwiper = new Swiper(".swiper-container",{
	autoplay : 3000,
	loop : true,
	autoplayDisableOnInteraction : false,
	pagination: '.swiper-pagination',
    paginationClickable: true,

});
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


