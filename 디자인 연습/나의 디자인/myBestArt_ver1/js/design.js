/* 나의 신들린 디자인 */


//div 6개 Box 생성 id box1 :  class box;
/* 순수 자바스크립트. */
var mainDiv = document.createElement('div');
    mainDiv.id = 'mainDivId';
    mainDiv.className = 'mainDivClass';
    document.getElementsByTagName('body')[0].appendChild(mainDiv);


for(var i = 1; i<=6; i++){
    var iDiv = document.createElement('div');
    iDiv.id = 'box' + i;
    iDiv.className = 'boxClass';
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    document.getElementById('mainDivId').appendChild
    }
    
    //box 정보 가져오기
    //header
    var box1 = document.getElementById("box1");
    //left
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    //rigth
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    //bottom
    var box6 = document.getElementById("box6");
    
  
    var box1Arr = ['img/arr/top01.jpg','img/arr/top02.jpg','img/arr/top03.jpg','img/arr/top04.jpg'];
    var box2Arr = ['img/arr/left01.jpg','img/arr/left02.jpg','img/arr/left03.jpg','img/arr/left04.jpg'];
    var box3Arr = ['img/arr/leftB01.jpg','img/arr/leftB02.jpg','img/arr/leftB03.jpg','img/arr/leftB04.jpg'];
    var box4Arr = ['img/arr/topR1.jpg','img/arr/topR2.jpg','img/arr/topR3.jpg','img/arr/topR4.jpg'];
    var box5Arr = ['img/arr/right01.jpg','img/arr/right02.jpg','img/arr/right03.jpg','img/arr/right04.jpg'];
    var box6Arr = ['img/arr/bottom01.jpg','img/arr/bottom02.jpg','img/arr/bottom03.jpg','img/arr/bottom04.jpg'];

    var box1Num = 0;
    var boxAuto = setInterval(function(){
        box1Num++;
        console.log("box1Num : " + box1Num);
        box1.style.backgroundImage = "url('"+box1Arr[box1Num]+"')";
        box2.style.backgroundImage = "url('"+box2Arr[box1Num]+"')";
        box3.style.backgroundImage = "url('"+box3Arr[box1Num]+"')";
        box4.style.backgroundImage = "url('"+box4Arr[box1Num]+"')";
        box5.style.backgroundImage = "url('"+box5Arr[box1Num]+"')";
        box6.style.backgroundImage = "url('"+box6Arr[box1Num]+"')";
      if(box1Num == 3){
        box1Num = 0;
      }
    },3000);


    //div css 조절.
    box1.style.left = '40%';
    box1.style.width = "50%";
    box1.style.zIndex = -1;

    box2.style.left = '50px';
    box2.style.top = '100px';


    box3.style.left = '50px';
    box3.style.bottom = '100px';

    box4.style.right = '50px';
    box4.style.top = '100px';

    box5.style.right = '50px';
    box5.style.bottom = '100px';

    box6.style.left = '40%';
    box6.style.width = "50%";
    box6.style.zIndex = -1;
    box6.style.bottom = '0';