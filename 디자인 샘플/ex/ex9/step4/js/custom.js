$(document).ready(function(){
	
	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");	

	$(window).scroll(function(){
		
		//변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
		var scroll = $(this).scrollTop();
		
		//스크롤한 수치값을 h1에 출력
		$("h1").text(scroll);		
		
		/*
		//5개 박스의 현재 z축 위치값에서 현재 스크롤한 거리만큼을 더한 뒤 다시 대입
		$("section>article").eq(0).css({"transform":"translateZ("   + scroll  +  "px)"});
		$("section>article").eq(1).css({"transform":"translateZ("   + parseInt(-5000+scroll)   +  "px)"});		
		$("section>article").eq(2).css({"transform":"translateZ("   + parseInt(-10000+scroll)   +  "px)"});
		$("section>article").eq(3).css({"transform":"translateZ("   + parseInt(-15000+scroll)   +  "px)"});
		$("section>article").eq(4).css({"transform":"translateZ("   + parseInt(-20000+scroll)   +  "px)"});		
		
		//스크롤한 거리에 따라 스크롤 네비게이션과 해당 박스 활성화
		if(scroll>=0&& scroll<5000){ 
			$(".scrollNavi li").removeClass();
			$(".scrollNavi li").eq(0).addClass("on");
			$("article").removeClass();	
			$("article").eq(0).addClass("on");	
		}
		if(scroll>=5000&& scroll<10000){ 
			$(".scrollNavi li").removeClass();
			$(".scrollNavi li").eq(1).addClass("on");
			$("article").removeClass();	
			$("article").eq(1).addClass("on");	
		}
		if(scroll>=10000&& scroll<15000){ 
			$(".scrollNavi li").removeClass();
			$(".scrollNavi li").eq(2).addClass("on");
			$("article").removeClass();	
			$("article").eq(2).addClass("on");	
		}
		if(scroll>=15000&& scroll<20000){ 
			$(".scrollNavi li").removeClass();
			$(".scrollNavi li").eq(3).addClass("on");
			$("article").removeClass();	
			$("article").eq(3).addClass("on");	
		}
		if(scroll>=20000&& scroll<25000){ 
			$(".scrollNavi li").removeClass();
			$(".scrollNavi li").eq(4).addClass("on");
			$("article").removeClass();	
			$("article").eq(4).addClass("on");	
		}
		*/
		
		for(var i=0; i<5; i++){
			$("section>article").eq(i).css({"transform":"translateZ("   + parseInt((-5000*i)+scroll)   +  "px)"});	
			if(scroll>=i*5000&&scroll<(i+1)*5000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();				
				$("article").eq(i).addClass("on");
			};
		};	
		
	});

});















