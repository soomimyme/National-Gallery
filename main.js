function changeBG() {
  let arr = [
    'images/pic_01.jpg',
    'images/pic_02.jpg',
    'images/pic_03.jpg',
    'images/pic_04.jpg'
  ]
  
  // 랜덤값 생성
  let i = Math.floor(Math.random() * 4);
  // 배경 변경
  document.body.style.backgroundImage = "url(" + arr[i] + ")";
}

// 일정 시간마다 자동으로 배경 바꾸기
// changeBG();
setInterval(changeBG, 4000); // 콜백함수를 추가