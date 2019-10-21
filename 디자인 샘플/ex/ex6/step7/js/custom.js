$(document).ready(function(){  			


	/* 1초 마다 현재 시간값 재설정 */
	var timer = setInterval(function(){  // 변수 timer에 setInterval 구문을 실행
		
		var now = new Date();
		var hr = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();	
		
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
	
	
	  var now = new Date();
	  var hr = now.getHours();
	
	/* 시간에 따라 화면 테마 변경 */
	if(hr>=5 && hr<11){   //현재 시간이 5시 보다는 같거나 크고, 11시 보다는 작을때
		$("#wrap").removeClass();
		$("#wrap").addClass("morning");
		$("nav li").removeClass();
		$("nav li").eq(0).addClass("on");
	}else if(hr>=11 && hr<16){   //현재 시간이 11시 보다는 같거나  크고, 16시 보다는 작을때
		$("#wrap").removeClass();
		$("#wrap").addClass("afternoon");
		$("nav li").removeClass();
		$("nav li").eq(1).addClass("on");
	}else if(hr>=16 && hr<20){   //현재 시간이 16시 보다는 같거나 크고, 20시 보다는 작을때
		$("#wrap").removeClass();
		$("#wrap").addClass("evening");
		$("nav li").removeClass();
		$("nav li").eq(2).addClass("on");
	}else if(hr>=20 && hr<25){   //현재 시간이 20시 보다는 같거나 크고, 25시 보다는 작을때
		$("#wrap").removeClass();
		$("#wrap").addClass("night");
		$("nav li").removeClass();
		$("nav li").eq(3).addClass("on");
	};
	
	// nav 버튼 클릭시 화면 테마 변경
	$("nav li").on("click",function(){
		
		var className = $(this).children("a").text();
		$("nav li").removeClass();
		$(this).addClass("on");
		$("#wrap").removeClass();
		$("#wrap").addClass(className);
		
	});
	
	
});

















