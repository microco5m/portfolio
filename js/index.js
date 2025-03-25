window.onload = function () {
  document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 15; // document의 x좌표값
    let mouseY = e.pageY + 15; // document의 y좌표값

    let cursor = document.querySelector('.cursor-img');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
})


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




  // Portfolio-other

const tabsWrap = document.querySelector(".tabs-wrap");
const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tabsWrap.addEventListener("click", (e)=> {
  const id = e.target.dataset.id;
  // console.log(id)

  if(id) {
    tabBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active")

    tabContent.forEach((tabCon) => {
      tabCon.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
})

  // 풀페이지 스크롤
  // let sections = document.querySelectorAll('section');  // 모든 섹션 요소 선택
  // let currentSectionIndex = 0;  // 현재 섹션 인덱스
  // let isScrolling = false;  // 스크롤이 진행 중인지 여부
  
  // // 화면 가로 크기가 1440px 이상일 때만 풀페이지 스크롤 기능을 실행
  // if (window.innerWidth >= 1440) {  // 1440px 이상일 때만 실행
  
  //   window.addEventListener('wheel', function (event) {
  
  //     if (isScrolling) return; // 스크롤이 진행 중이면 이벤트 무시
  
  //     isScrolling = true;  // 스크롤 진행 시작
  
  //     // 마우스 휠을 내린 경우 (deltaY > 0)
  //     if (event.deltaY > 0) {
  //       if (currentSectionIndex < sections.length - 1) {
  //         currentSectionIndex++;  // 다음 섹션으로 이동
  //       }
  //     } else {  // 마우스 휠을 올린 경우 (deltaY < 0)
  //       if (currentSectionIndex > 0) {
  //         currentSectionIndex--;  // 이전 섹션으로 이동
  //       }
  //     }
  
  //     // 해당 섹션으로 부드럽게 스크롤 이동
  //     sections[currentSectionIndex].scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  
  //     // 800ms 후에 스크롤 완료로 간주하여 다시 스크롤을 받을 수 있게 설정
  //     setTimeout(() => {
  //       isScrolling = false;
  //     }, 800);
  
  //     // 기본 스크롤 동작 방지 (페이지 자체 스크롤 막기)
  //     event.preventDefault();  
  //   }, { passive: false });
  
  // } else {
  //   // 화면 가로 크기가 1440px 미만일 경우 풀페이지 스크롤을 비활성화
  //   console.log('풀페이지 스크롤은 1440px 이상일 때만 활성화됩니다.');
  // }
  
}





// 스크롤 애니 자바스크립트

// let observer = new IntersectionObserver((e)=> {
//   e.forEach(())
// })


//스크롤 애니메이션

let windowWidth = $(window).width();


$(`#Skill li > div`).css({ 'opacity': 0, 'transform': 'translateY(100px)' });

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  $(`#Skill li > div`).each(function () {
    var offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop && $(this).css('opacity') == 0) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });

    }
  });
})





