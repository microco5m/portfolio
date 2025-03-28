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







  //skill

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





