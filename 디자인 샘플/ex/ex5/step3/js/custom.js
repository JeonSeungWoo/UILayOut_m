$(document).ready(function(){       	
	
	// 변수 imgs에 따옴표만 넣어 빈 문자열을 생성합니다.
	var imgs='';
	
	// for문을 이용하여 변수 i를 0부터 200까지 증가시킵니다.
	for(var i=0; i<201; i++){	

		// 변수 imgs에 대입연산자를 이용하여 다음의 태그를 계속해서 200개가 될때까지 추가합니다.
		imgs+="<img src='img/pic"+i+".jpg' />"		
	};
	
	// .html() 구문에 조금 전 태그를 반복하며 생성해둔 변수 imgs를 넣어 다시 section 영역안에 추가합니다.
	$("section").html(imgs);

});















