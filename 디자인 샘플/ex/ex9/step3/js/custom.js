$(document).ready(function(){
	
	//페이지 로딩 시 제일 상단으로 스크롤 이동
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");	

	$(window).on("scroll",function(){
		
		//변수 scroll에 현재 화면을 스크롤한 거리의 수치를 저장
		var scroll = $(this).scrollTop();
		
		//스크롤한 수치값을 h1에 출력
		$("h1").text(scroll);		
		
		
		//5개 박스의 현재 z축 위치값에서 현재 스크롤한 거리만큼을 더한 뒤 다시 대입
		$("section>article").eq(0).css({"transform":"translateZ("   + scroll  +  "px)"});
		$("section>article").eq(1).css({"transform":"translateZ("   + parseInt(-5000+scroll)   +  "px)"});		
		$("section>article").eq(2).css({"transform":"translateZ("   + parseInt(-10000+scroll)   +  "px)"});
		$("section>article").eq(3).css({"transform":"translateZ("   + parseInt(-15000+scroll)   +  "px)"});
		$("section>article").eq(4).css({"transform":"translateZ("   + parseInt(-20000+scroll)   +  "px)"});		
	
		/*
		for(var i=0; i<5; i++){
			$("section>article").eq(i).css({"transform":"translateZ("   + parseInt((-5000*i)+scroll)   +  "px)"});				
		};	
		*/
		
	});

});















