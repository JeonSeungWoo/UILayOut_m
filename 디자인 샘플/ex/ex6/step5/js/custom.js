$(document).ready(function(){  	

	var now,hr,min,sec;   //미리 변수명 선언	

	var timer = setInterval(function(){  // 변수 timer에 setInterval 구문을 실행
		
		// 변수에 시간 데이터 저장
		now = new Date();
		hr = now.getHours();
		min = now.getMinutes();
		sec = now.getSeconds();
		
		// 시간이 한자리 숫자일때 앞에 0 붙이기
		if(hr >=10){	
			hNum = hr;			
		}else{
			hNum = "0"+hr;
		};
		
		// 분이 한자리 숫자일때 앞에 0 붙이기
		if(min >=10){
			mNum = min;
		}else{
			mNum = "0"+min;
		};
		
		// 초가 한자리 숫자일때 앞에 0 붙이기
		if(sec >=10){
			sNum = sec;
		}else{
			sNum = "0"+sec;
		};
				
		// p 태그 안에 시간 출력		
		$("p span").eq(0).text(hNum);
		$("p span").eq(1).text(mNum);
		$("p span").eq(2).text(sNum);		
		
	},1000)  //1초의 시간마다 안쪽의 구문을 반복 실행
	
});

















