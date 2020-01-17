// 主要是点击回到首页

// var zc={
//     initLayout:function(){
// 		var w = $(window).width()>1200 ? $(window).width() : 1200;
// 		var s = w/2560;
// 		$(".headerBanner").css({
// 			transform:"scale("+s+")"
// 		});
// 		$(".headerWrapper").height(1469*s);
// 		$(".navbox").css({marginTop:-155*s+"px"});
// 	},
// 	scroll:function(){
// 		var w = $(window).width()>1200 ? $(window).width() : 1200;
// 		var s = w/2560;
// 		$(window).scroll(function(){
// 			var m=$(window).scrollTop();
// 			var h=$(".conmain").offset().top;
// 			if(m>=h){
// 				$(".navFix").addClass("show");
// 			}else{
// 				$(".navFix").removeClass("show");
// 			}
// 			if(m>=1000*s){
// 				$(".backTop").addClass("visble");
// 			}else{
// 				$(".backTop").removeClass("visble");
// 			}
// 		})
// 	}
// }
// $(function(){
// 	zc.initLayout();
// 	zc.scroll();
// 	$(window).resize(zc.initLayout);
// 	$(window).resize(zc.scroll);
// 	var lurl=window.location.href;
// 	if(lurl.indexOf("plus")!=-1){
// 		$(".navFix").css({top:0});
// 	}
//
// })

$(".backTop").click(function(){
	$("boty,html").animate({
		scrollTop:0
	},500);
})
