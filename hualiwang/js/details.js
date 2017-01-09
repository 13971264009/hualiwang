var mySwiper = new Swiper(".swiper-container",{
	autoplay : 3000,
	loop : true,
	autoplayDisableOnInteraction : false,
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
$(".join").click(function(){
	//var goodsrc=$(".banner").eq(0).find("img").attr("src");		
	var goodsrc=$("img").eq(1).attr("src");		
	console.log(goodsrc)
		var goodname=$("h5").html().substr(0,4);
		var goodprice=$(".price").html().substr(1,4);
		var goodnum=1;				
		var goodInfo = {"src":goodsrc,"name":goodname,"price":goodprice,"num":goodnum};
		//console.log(goodInfo.num);
		var goodif=JSON.stringify(goodInfo);
		localStorage.setItem("Bproduct_"+goodname,goodif);
		//console.log(localStorage)		
		//check();
		console.log(localStorage)	
	
})

//function check(){
//for(var i=0;i<localStorage.length;i++){
//	var key = localStorage.key(i);
//	if(key.indexOf("Bproduct_")!=-1){
//		var info = JSON.parse(localStorage.getItem(key));
//var goodname=$("h5").html().substr(0,4);
//var goodnum=1;	
//	if(info.name==goodname){
//		info.num+=goodnum
//		return info.num
//	}
//	goodnum=info.num
//	return
//}
//}}