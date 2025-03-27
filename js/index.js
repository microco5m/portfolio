window.onload = function () {

  // const scrollPosition = sessionStorage.getItem('scrollPosition');
  // if (scrollPosition) {
  //   window.scrollTo(0, scrollPosition); // 이전 스크롤 위치로 이동
  // }

  // // 스크롤 위치를 저장하는 이벤트 리스너 추가
  // window.addEventListener('scroll', () => {
  //   sessionStorage.setItem('scrollPosition', window.scrollY); // 현재 스크롤 위치 저장
  // });



// 마우스 커서
  document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 15; // document의 x좌표값
    let mouseY = e.pageY + 15; // document의 y좌표값

    let cursor = document.querySelector('.cursor-img');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  })


  //tab-menu
    // 모바일 메뉴 버튼 및 메뉴 DOM 요소를 가져옵니다.
  const mobileBtn = document.getElementById('mobile-btn');
  const mainMenu = document.querySelector('.main-menu');
  const menuItems = document.querySelectorAll('.gnb > li');  // 메뉴 항목들
  const body = document.querySelector('body');  // body 요소

  // 햄버거 메뉴 버튼 클릭 시 메뉴 열고 닫기
  mobileBtn.addEventListener('click', function () {
    mobileBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });

  // 메뉴 항목 클릭 시 메뉴 닫기
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileBtn.classList.remove('active');  // 햄버거 버튼 애니메이션 닫기
      mainMenu.classList.remove('active');  // 메뉴 닫기
    });
  });

  // 메뉴 이외의 영역 클릭 시 메뉴 닫기
  body.addEventListener('click', function(event) {
    // 클릭된 곳이 메뉴 또는 햄버거 버튼이 아닐 경우
    if (!mainMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
      mobileBtn.classList.remove('active');  // 햄버거 버튼 애니메이션 닫기
      mainMenu.classList.remove('active');  // 메뉴 닫기
    }
  });



  //Intro







  //skill
  // let progressCircles = document.querySelectorAll(".progress-circle");

  // progressCircles.forEach((circle) => {
  //   let progressNum = circle.querySelector(".progress-num");
  //   progressNum.textContent = "0%"

  //   let progressEndNum = parseInt(circle.getAttribute("data-percent"));
  //   let progressStartNum = 0;

  //   let progress = setInterval(() => {
  //     progressStartNum++;
  //     progressNum.textContent = `${progressStartNum}%`;

  //     circle.style.background = `conic-gradient(#3E81FF ${progressStartNum * 3.6}deg, #fff 0deg)`

  //     if (progressStartNum == progressEndNum) {
  //       clearInterval(progress);
  //     }
  //   }, 20)
  // })

  // const skills = [
  //   { id:1, name:'html', images:'i_html5.png',datapercent:"80"},
  //   { id:2, name:'css', images:'i_CSS.png',datapercent:"80"},
  //   { id:3, name:'Javascript', images:'.i_js.png',datapercent:"60"},
  //   { id:4, name:'sass', images:'i_SASS.png',datapercent:"85"},
  //   { id:5, name:'jQuery', images:'i_jQuery.png',datapercent:"60"},
  //   { id:6, name:'React', images:'i_React.png',datapercent:"30"},
  //   { id:7, name:'Git', images:'i_Git.png',datapercent:"80"},
  //   { id:8, name:'Figma', images:'i_Figma.png',datapercent:"50"},
  //   { id:9, name:'Photoshop', images:'i_photoshop.png',datapercent:"70"},
  //   { id:10, name:'Illustrator', images:'i_ai.png',datapercent:"60"},
  //   { id:11, name:'Premiere Pro', images:'i_pr.png',datapercent:"80"},
  //   { id:12, name:'After Effects', images:'i_hae.png',datapercent:"50"},
  // ]

  // const 

  let progressCircles = document.querySelectorAll(".progress-circle");

  function animateProgress(circle) {
    let progressNum = circle.querySelectorAll(".progress-num");
    progressNum.textContent = "0%";
    
    let progressEndNum = parseInt(circle.getAttribute("data-percent"));
    let progressStartNum = 0;
    let progress = setInterval(() => {
      progressStartNum++;
      progressNum.textContent = `${progressStartNum}%`;
      circle.style.background = `conic-gradient(#3E81FF ${progressStartNum * 3.6}deg, #fff 0deg)`;
      if (progressStartNum === progressEndNum) {
        clearInterval(progress);
      }
    }, 20);
  }

  // 스크롤 이벤트 리스너
  window.addEventListener("scroll", () => {
    progressCircles.forEach((circle) => {
      const rect = circle.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight && !circle.hasAnimated) {
        animateProgress(circle);
        circle.hasAnimated = true; // 각 원형 진행 표시기마다 애니메이션이 진행되었음을 표시
      }
    });
  });


  





// 포트폴리오 사이트

$(function () {
  function aniArrow() {
  $(".arrow").animate({ marginRight: '-5px' }, 800)
    .animate({ marginRight: 0 }, 1000, aniArrow); // linear 사용시 안됨.
  }
  aniArrow();
})


  // Portfolio-other

  const tabsWrap = document.querySelector(".tabs-wrap");
  const tabBtn = document.querySelectorAll(".tab-btn");
  const tabContent = document.querySelectorAll(".tab-content");

  tabsWrap.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    // console.log(id)

    if (id) {
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


// Footer
window.addEventListener('scroll', function() {
  // 스크롤이 페이지 맨 아래에 도달했을 때 footer를 나타나게 함
  const footer = document.getElementById('footer');
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.innerHeight + window.scrollY;

  // 스크롤 위치가 페이지 끝에 가까워지면 footer를 보이게 합니다.
  if (scrollHeight - scrollPosition <= 100) {
      footer.classList.add('show');
  } else {
      footer.classList.remove('show');
  }
});




// 스크롤 애니 자바스크립트

// let observer = new IntersectionObserver((e)=> {
//   e.forEach(())
// })


//스크롤 애니메이션

let windowWidth = $(window).width();
// let tabletSize = 768;
let desktopSize = 1440;

$(`h2`).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
$(`#Skill li > div`).css({ 'opacity': 0, 'transform': 'translateY(100px)' });

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  if (windowWidth < desktopSize) {
    $('.email-txt').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
          $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
      } else {
          $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
      }
    });

    $('.message').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform':'translateY(0px)  scale(1)'});
      } else {
        $(this).css({ 'opacity': 0, 'transform':'translateY(100px)  scale(0.5)'});
      }
    });
    $('.person').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
          $(this).css({ 'opacity': 1});
          $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0});
        $(this).removeClass("move");
      }
    });

  } else {
    $('.email-txt').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).addClass("move");
      } else {
        $(this).removeClass("move");
      }
    });


    $('.tale1').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1});
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0});
        $(this).removeClass("move");
      }
    });

    $('.message').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform':'translateX(0px)'});
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0, 'transform':'translateX(0px)'});
        $(this).removeClass("move");
      }
    });
    $('.tale2').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform':'translateX(0px)'});
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0, 'transform':'translateX(0px)'});
        $(this).removeClass("move");
      }
    });
    $('.person').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
          $(this).css({ 'opacity': 1});
          $(this).addClass("move2");
      } else {
        $(this).css({ 'opacity': 0});
        $(this).removeClass("move2");
      }
    });
  }

  $('h2').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateX(-100px)' });
    }
  });

  $('.profile-photobox').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1});
        $(this).addClass('move');
    } else {
        $(this).css({ 'opacity': 0});
        $(this).removeClass('move');
    }
  });

  $('.img-1').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
    }
  });

  $('#Skill li > div').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
    }
  });


  $('.site-sample').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateY(-100px)' });
    }
  });
})





