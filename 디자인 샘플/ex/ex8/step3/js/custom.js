$(document).ready(function(){

	//브라우저를 스크롤 할때
	$(window).on("scroll",function(){
		// 변수 scroll에 현재 스크롤 한 만큼의 거리를 저장
		var scroll = $(this).scrollTop();		
		//section의 left값을 스크롤한 거리만큼 마이너스 값으로 이동
		$("section").stop().animate({"left":-scroll},600);
	});

	
});















