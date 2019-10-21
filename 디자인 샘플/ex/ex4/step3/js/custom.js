$(document).ready(function(){  		

	// 마우스 오버시
	$("article").on("mouseover",function(){		
		$(this).stop().animate({"width":"35%"},1000);
		$(this).find("video").stop().animate({"opacity":"0.9"},1200);		
	});
	
	// 마우스 아웃시
	$("article").on("mouseout",function(){		
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);		
	});

});















