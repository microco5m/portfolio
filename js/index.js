window.onload = function () {

  //tab-menu
  const mobileBtn = document.getElementById('mobile-btn');
  const mainMenu = document.querySelector('.main-menu');

  mobileBtn.addEventListener('click', function () {
    mobileBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });



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



  // 풀페이지 스크롤
  let sections = document.querySelectorAll('section');  // 모든 섹션 요소 선택
  let currentSectionIndex = 0;  // 현재 섹션 인덱스
  let isScrolling = false;  // 스크롤이 진행 중인지 여부

  // 화면 가로 크기가 1440px 이상일 때만 실행
  if (window.innerWidth >= 1440) {
    let windowWidth = window.innerWidth;

    window.addEventListener('wheel', function (event) {

      if (isScrolling) return; // 스크롤이 진행 중이면 이벤트 무시

      isScrolling = true;  // 스크롤 진행 시작

      if (event.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
        }
      } else {
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
        }
      }

      sections[currentSectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800);

      event.preventDefault();  // 기본 스크롤 동작 방지
    }, { passive: false });
  }
}


//스크롤 애니메이션

let windowWidth = $(window).width();


$(`.Skill li > div`).css({ 'opacity': 0, 'transform': 'translateY(100px)' });

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  $(`.Skill li > div`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });

    }
  });
})