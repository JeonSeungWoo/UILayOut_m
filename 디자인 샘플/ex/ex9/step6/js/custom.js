$(document).ready(function(){
	
	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");	

	$(window).scroll(function(){
		
		//변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
		var scroll = $(this).scrollTop();		
					
		for(var i=0; i<5; i++){
			//스크롤값과 박스의 z축 연동	
			$("section>article").eq(i).css({"transform":"translateZ("   + parseInt((-5000*i)+scroll)   +  "px)"});	
			//특정 스크롤 구간에서 스크롤 네비게이션과 박스 활성화
			if(scroll>=i*5000&&scroll<(i+1)*5000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();				
				$("article").eq(i).addClass("on");
			};
		};	
		
	});
	
	/*
	//스크롤 네비게이션 클릭 시 스크롤 이동
	$(".scrollNavi li").eq(0).on("click",function(){
		$("body,html").stop().animate({"scrollTop":0});
	});
	$(".scrollNavi li").eq(10).on("click",function(){
		$("body,html").stop().animate({"scrollTop":5000});
	});
	$(".scrollNavi li").eq(2).on("click",function(){
		$("body,html").stop().animate({"scrollTop":10000});
	});
	$(".scrollNavi li").eq(3).on("click",function(){
		$("body,html").stop().animate({"scrollTop":15000});
	});
	$(".scrollNavi li").eq(4).on("click",function(){
		$("body,html").stop().animate({"scrollTop":20000});
	});
	*/
	$(".scrollNavi li").on("click",function(){
		var a = $(this).index();	
		$("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");		
	});		
	

});















