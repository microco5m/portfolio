window.onload = function () {

  // 마우스 커서
  document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 15;
    let mouseY = e.pageY + 15;

    let cursor = document.querySelector('.cursor-img');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  })


  //main-menu
  const mobileBtn = document.getElementById('mobile-btn');
  const mainMenu = document.querySelector('.main-menu');
  const menuItems = document.querySelectorAll('.gnb > li');
  const body = document.querySelector('body');

  mobileBtn.addEventListener('click', function () {
    mobileBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      mobileBtn.classList.remove('active');
      mainMenu.classList.remove('active');
    });
  });

  body.addEventListener('click', function (event) {
    if (!mainMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
      mobileBtn.classList.remove('active');
      mainMenu.classList.remove('active');
    }
  });



  //Intro
  window.addEventListener("scroll", () => {
    const indicator = document.querySelector(".scroll-indicator");
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollTop / docHeight;
  
    const trackHeight = 300; // 고정값
    const maxPos = trackHeight - 20; // indicator 높이 고려
  
    const pos = percent * maxPos;
    indicator.style.top = `${pos}px`;
  });






  //skill
  const skills = [
    { id: 1, name: 'html', images: 'i_html5.png', datapercent: "90", skillTxt: '웹 접근성과 구조를 고려한 시맨틱 마크업 작성이 가능합니다.' },
    { id: 2, name: 'css', images: 'i_CSS.png', datapercent: "90", skillTxt: '반응형 웹 디자인 구현, 애니메이션, 트랜지션 등 시각적 효과를 적용할 수 있습니다.' },
    { id: 3, name: 'Javascript', images: 'i_js.png', datapercent: "75", skillTxt: '문법 기반의 동적 웹 기능 구현, 이벤트 처리를 할 수 있습니다.' },
    { id: 4, name: 'sass', images: 'i_SASS.png', datapercent: "85", skillTxt: '중첩, 변수, 믹스인 등을 활용한 효율적인 스타일링 및 유지 보수가 가능합니다.' },
    { id: 5, name: 'jQuery', images: 'i_jQuery.png', datapercent: "85", skillTxt: 'DOM 제어, 이벤트 처리가 가능합니다.' },
    { id: 6, name: 'React', images: 'i_React.png', datapercent: "55", skillTxt: '컴포넌트 기반 웹 개발을 공부하고있습니다.' },
    { id: 7, name: 'Git', images: 'i_Git.png', datapercent: "80", skillTxt: '버전 관리 및 협업을 위한 기본 명령어 활용 가능합니다.' },
    { id: 8, name: 'Figma', images: 'i_Figma.png', datapercent: "60", skillTxt: '웹·앱 UI/UX 디자인 및 프로토타입 제작이 가능합니다.' },
    { id: 9, name: 'Photoshop', images: 'i_photoshop.png', datapercent: "90", skillTxt: '이미지 보정, 합성, 배너 등 그래픽 디자인 제작 가능합니다.' },
    { id: 10, name: 'Illustrator', images: 'i_ai.png', datapercent: "90", skillTxt: '로고, 아이콘 등 벡터 기반 디자인 제작 가능하며, 펜툴 및 도형 툴을 사용할 수 있습니다.' },
    { id: 11, name: 'Premiere Pro', images: 'i_pr.png', datapercent: "80", skillTxt: '컷 편집, 자막, 색보정 등 기본 영상 편집 가능합니다.' },
    { id: 12, name: 'After Effects', images: 'i_ae.png', datapercent: "70", skillTxt: '모션 그래픽 및 자막 애니메이션 제작 가능합니다.' },
  ]

  const skillHTML = skills.map(
    (skill) => `<li class="skill-items">
              <div class="progress-circle" id="progress-${skill.id}" data-percent=${skill.datapercent}>
                <div class="progress-num">
                  0%
                </div>
                <img src="./images/${skill.images}" alt="skill icon ${skill.name}">
              </div>
              <div class="skill-txt">
                <strong>${skill.name}</strong>
                <p>${skill.skillTxt}</p>
              </div>
            </li>
    `
  );
  const skillList = document.querySelector(".skill-list");
  skillList.innerHTML = skillHTML.join("");

  let progressCircles = document.querySelectorAll(".progress-circle");

  function animateProgress(circle) {
    let progressNum = circle.querySelector(".progress-num");
    progressNum.textContent = "0%";

    let progressEndNum = parseInt(circle.getAttribute("data-percent"));
    if (isNaN(progressEndNum)) {
      console.error("Invalid data-percent value.");
      return;
    }

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

  window.addEventListener("scroll", () => {
    progressCircles.forEach((circle) => {
      const rect = circle.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !circle.hasAnimated) {
        animateProgress(circle);
        circle.hasAnimated = true;
      }
    });
  });

  let skillItems = document.querySelectorAll(".skill-items");

  skillItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      let skillTxt = item.querySelector(".skill-txt");

      skillItems.forEach(item => {
        let txt = item.querySelector('.skill-txt');
        txt.classList.remove('active');
      });

      skillTxt.classList.add('active');
    });

    item.addEventListener("mouseout", () => {
      let skillTxt = item.querySelector(".skill-txt");

      skillTxt.classList.remove('active');
    });
  });






  // Portfolio
  const siteSlide = document.querySelector(".site-slide");
  const btns = document.querySelectorAll(".slider-btn button");


  btns.forEach((button, index) => {
    button.addEventListener("click", function (event) {

      siteSlide.style.transform = `translateX(-${index * 1180}px)`;

      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });


  // url 버튼
  $(function () {
    function aniArrow() {
      $(".arrow").animate({ marginRight: '-5px' }, 800)
        .animate({ marginRight: 0 }, 1000, aniArrow);
    }
    aniArrow();
  })


  // Portfolio-other
  const tabsWrap = document.querySelector(".tabs-wrap");
  const tabBtn = document.querySelectorAll(".tab-btn");
  const tabContent = document.querySelectorAll(".tab-content");

  tabsWrap.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

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





  // Footer
  window.addEventListener('scroll', function () {
    const footer = document.getElementById('footer');
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    if (scrollHeight - scrollPosition <= 100) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });
}

// 
let windowWidth = $(window).width();
let desktopSize = 1440;

$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  $('.tabs li').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    } else {
      $(this).css({ 'opacity': 0, 'transform': 'translateX(100px)' });
    }
  });

  $('.tab-content li').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    } else {
      $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)' });
    }
  });




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
        $(this).css({ 'opacity': 1, 'transform': 'translateY(0px)  scale(1)' });
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateY(100px)  scale(0.5)' });
      }
    });
    $('.person').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1 });
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0 });
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
        $(this).css({ 'opacity': 1 });
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0 });
        $(this).removeClass("move");
      }
    });

    $('.message').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0px)' });
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateX(0px)' });
        $(this).removeClass("move");
      }
    });
    $('.tale2').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1, 'transform': 'translateX(0px)' });
        $(this).addClass("move");
      } else {
        $(this).css({ 'opacity': 0, 'transform': 'translateX(0px)' });
        $(this).removeClass("move");
      }
    });
    $('.person').each(function () {
      let offsetTop = $(this).offset().top;
      if (scrollTop + $(window).height() > offsetTop) {
        $(this).css({ 'opacity': 1 });
        $(this).addClass("move2");
      } else {
        $(this).css({ 'opacity': 0 });
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
      $(this).css({ 'opacity': 1 });
      $(this).addClass('move');
    } else {
      $(this).css({ 'opacity': 0 });
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

  $('.profile-square').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
      $(this).css({ 'opacity': 1, 'transform': 'translateX(0)' });
    } else {
      $(this).css({ 'opacity': 0, 'transform': 'translateX(100px)' });
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


  $('.site-box').each(function () {
    let offsetTop = $(this).offset().top;
    if (scrollTop + $(window).height() > offsetTop) {
      $(this).css({ 'opacity': 1, 'transform': 'translateY(0)' });
    } else {
      $(this).css({ 'opacity': 0, 'transform': 'translateY(-100px)' });
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





