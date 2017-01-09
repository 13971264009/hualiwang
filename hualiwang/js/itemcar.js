$(function(){
$(".other1").click(function(){
	$(this).addClass("oacitve").siblings().removeClass("oacitve");
	$(".othershow").eq($(this).index()).addClass("aactive").siblings().removeClass("aactive");
});
});


getCarData();
function getCarData(){
	var html ="";
	for(var i=0;i<localStorage.length;i++){
		//alert(localStorage.key(i));
		var key = localStorage.key(i);
		//"+info.src+"
		//"+info.name+"
		//"+info.num+"
		//"+info.price+"
		if(key.indexOf("Bproduct_")!=-1){
			var info = JSON.parse(localStorage.getItem(key));
			html = $("<li class='itemgood clearfix'><img src="+info.src+"/><div class='goodnews flt'><div class='title'>[鲜花]<p>"+info.name+"</p></div><div class='price'>现价:￥<p>"+info.price+"</p><span class='zhuanxiang'><span class='iconfont icon-shouji'></span>专享价</span></div><div class='changenum'><span class='iconfont icon-add flt'></span><input type='number'  value="+info.num+" class='flt aprice1'/><span class=' iconfont icon-jianshao flt'></span></div></div><div class='iconfont icon-shanchu'></div></li>")
			$(".goodcar").append(html);	
			
		}
	}
	
}

//增加减少
var buyAmount = 1;
$(".icon-add").click(function(){
//console.log($(".j-input").size())
//console.log($(this).index())
	var html = $(this).next().val()*1;
	html++;
	buyAmount = html;
	$(this).next().val(html);
	sunprice();
});
$(".icon-jianshao").click(function(){
	
	var html = $(this).prev().val()*1;
	html--;
	if(html<=1){
		$(this).prev().val(1);
		buyAmount = 1;
	}else{
		$(this).prev().val(html);
		buyAmount = html;
	}
	sunprice();
});    
//$(".zongjia p").text("￥200")
var sum=0;
function sunprice(){
	var sum=0;
	for(var i=0;i<$(".price").length;i++){
		
		sum+=($(".price").eq(i).find("P").text()*1)*($(".price").eq(i).next().find("input").val());
	}
	$(".zongjia p").text(sum);		
}



//删除单个购物栏
$(".icon-shanchu").click(function(){
	var pname=$(this).parent().find(".title p").html();
	$(this).parent().remove();	
	sunprice();
	localStorage.removeItem("Bproduct_"+pname);
})


