window.onload = function () {

  //tab-menu

  const menuBtn = document.querySelector("#mobile-btn");
  const mainMenu = document.querySelector(".main-menu");

  menuBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');

  })

  //Intro







  //skill
  let progressCircles = document.querySelectorAll(".progress-circle");

  progressCircles.forEach((circle) => {
    let progressNum = circle.querySelector(".progress-num");
    progressNum.textContent = "0%"

    let progressEndNum = parseInt(circle.getAttribute("data-percent"));
    let progressStartNum = 0;

    let progress = setInterval(() => {
      progressStartNum++;
      progressNum.textContent = `${progressStartNum}%`;

      circle.style.background = `conic-gradient(#3E81FF ${progressStartNum * 3.6}deg, #fff 0deg)`

      if (progressStartNum == progressEndNum) {
        clearInterval(progress);
      }
    }, 20)
  })




  let sections = document.querySelectorAll('section');  // 모든 섹션 요소 선택
  let currentSectionIndex = 0;  // 현재 섹션 인덱스
  let isScrolling = false;  // 스크롤이 진행 중인지 여부를 추적
  
  window.addEventListener('wheel', function(event) {
      // 스크롤이 진행 중이면 이벤트 무시
      if (isScrolling) return;
  
      isScrolling = true;  // 스크롤 진행 시작
  
      // 마우스 휠이 아래로 내려갔을 때 (다음 섹션으로 이동)
      if (event.deltaY > 0) {
          if (currentSectionIndex < sections.length - 1) {
              currentSectionIndex++;
          }
      } else {
          // 마우스 휠이 위로 올라갔을 때 (이전 섹션으로 이동)
          if (currentSectionIndex > 0) {
              currentSectionIndex--;
          }
      }
  
      // 해당 섹션으로 스크롤 이동
      sections[currentSectionIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  
      // 스크롤이 끝난 후, 다시 스크롤 가능하도록 설정
      setTimeout(() => {
          isScrolling = false;
      }, 800); // 스크롤 이동에 걸리는 시간 (예: 800ms)
  
      // 기본 스크롤 동작 방지 (페이지 스크롤을 방지)
      event.preventDefault();
  }, { passive: false });
  


  //스크롤 애니메이션
  // const observer = new IntersectionObserver(callback);
}

