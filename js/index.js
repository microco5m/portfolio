//tab-menu

const menuBtn = document.querySelector("#mobile-btn");

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
    progressStartNum ++;
    progressNum.textContent = `${progressStartNum}%`;

    circle.style.background = `conic-gradient(#3E81FF ${progressStartNum * 3.6}deg, #fff 0deg)`

    if (progressStartNum == progressEndNum) {
      clearInterval(progress);
    }
  },20)
})


