
// /* 나의 신들린 디자인 */

var HFBauto;
/* header footer backgraund 생성 및 css 메소드 */
function makeDivHF(n){
 //기존 값 Interval제거
     clearInterval(HFBauto);
     $("#headerDivId").remove();
     $("#footDivId").remove();
  /* header---------------------------------------------------------------------------------- */
    // 첫번째 틀.
    var headerDiv = document.createElement('div');
    headerDiv.id = 'headerDivId';
    headerDiv.className = 'headerDivClass';
    document.getElementsByTagName('body')[0].appendChild(headerDiv);

    for (var i = 1; i <= n; i++) {
      var iDiv = document.createElement('div');
      iDiv.id = 'headerBox' + i;
      iDiv.className = 'headerBoxClass';
      document.getElementById('headerDivId').appendChild(iDiv);
      //안에 img 생성.
      var headerImg = document.createElement('img');
      headerImg.id = 'headerImgId' + i;
      headerImg.className = 'headerImgClass';
      headerImg.src = 'img/arr/black_bg.png';
      document.getElementById('headerBox' + i).appendChild(headerImg);
    }
    /* header----- */
    ;
    /* footer---------------------------------------------------------------------------------- */
    // 첫번째 틀.
    var footDiv = document.createElement('div');
    footDiv.id = 'footDivId';
    footDiv.className = 'footDivId';
    document.getElementsByTagName('body')[0].appendChild(footDiv);


    for (var i = 1; i <= n; i++) {
      var iDiv = document.createElement('div');
      iDiv.id = 'footBox' + i;
      iDiv.className = 'footBoxClass';
      document.getElementById('footDivId').appendChild(iDiv);
      //안에 img 생성.
      var footImg = document.createElement('img');
      footImg.id = 'footImgId' + i;
      footImg.className = 'footImgClass';
      footImg.src = 'img/arr/black_bg.png';
      document.getElementById('footBox' + i).appendChild(footImg);
    }

    /* footer----- */



    /* 자동화 설정. 및 arr */
    var backColorArr = ['#283B42', '#1D6A96', '#85B8CB','#D1DDDB'];
    var colorArr = ['#D1DDDB', '#85B8CB', '#1D6A96','#283B42'];

    /* 초기 값은 1  마직막 값은 n */ /* 1+imgHFBNum   n-imgHFBNum  */
    var imgHFBNum = 0;
    var startNum = 1;

    HFBauto = setInterval(function () {
      $("#body").css("background", backColorArr[imgHFBNum]).css("color", colorArr[imgHFBNum]);
      //imgHFBNum 가 0부터 i 까지 비교하기 위해생성.
      for (var i = 0; i < (n-2); i++) {
        
        if(imgHFBNum == i){
          /* 각 아이디를 n이 5일경우.  1과5  2와4 순으로 이미지를 보여주기 위해서 사용. */
          for(var j = 1; j <= n; j++){
            if(j == startNum+imgHFBNum || j == n-imgHFBNum){
              $("#headerImgId"+j).attr("src", "img/arr/main.gif");
              $("#footImgId"+j).attr("src", "img/arr/main.gif");
              
            }else{
              $("#headerImgId"+j).attr("src", "img/arr/black_bg.png");
              $("#footImgId"+j).attr("src", "img/arr/black_bg.png");
            }
           } 

        }

      }
      imgHFBNum++;
      if (imgHFBNum == (n-2)) {
        imgHFBNum = 0;
      }
    }, 3000);

};

  

/* 브라우저 크기를 실시간으로 감시. */

function browserSize() {
   
  //witdth값을 가져온다.
  var windowWidth = $(window).width();

  if (windowWidth < 1200) {
    //창 가로 크기가 미만일 경우
    makeDivHF(5);
    $(".headerImgClass").css("width","20%");
    $(".footImgClass").css("width","20%");
  } else {
    //창 가로 크기가 이상 경우
    makeDivHF(7);
    $(".headerImgClass").css("width","14.281%");
    $(".footImgClass").css("width","14.281%");

  }
}
browserSize();
//창크기 변화 감지
$(window).resize(function () {
  browserSize();
});

/* 커서 */
$(document).mousemove(function (e) {
  $('.cursor').css("top", e.pageY);
  $('.cursor').css("left", e.pageX);
});

/* left right */

var leftDiv = document.createElement('div');
leftDiv.id = 'leftDivId';
leftDiv.className = 'leftDivClass';
document.getElementsByTagName('body')[0].appendChild(leftDiv);

var leftImg = document.createElement('img');
leftImg.id = 'leftImgId';
leftImg.className = 'leftImgClass';
leftImg.src = 'img/arr/black_bg.png';
document.getElementById('leftDivId').appendChild(leftImg);

$("#leftImgId").attr("src", "img/left.jpg");

var rightDiv = document.createElement('div');
rightDiv.id = 'rigthDivId';
rightDiv.className = 'rightDivClass';
document.getElementsByTagName('body')[0].appendChild(rightDiv);

var rightImg = document.createElement('img');
rightImg.id = 'rightImgId';
rightImg.className = 'rightImgClass';
rightImg.src = 'img/right.jpg';
document.getElementById('rigthDivId').appendChild(rightImg);




