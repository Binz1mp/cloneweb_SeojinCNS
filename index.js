//////////////// 최상단 네비게이션 바 시작 ////////////////
let header = document.querySelector("header");
let whitebox = document.querySelector("#whitebox");
// let whiteboxcontents = document.querySelector(".whitebox-contents");
let mainlogo = document.getElementById("mainlogo");
header.addEventListener("mouseover", function() {
  if (!whitebox.classList.contains("on")) {
    whitebox.classList.add('on');
    // whiteboxcontents.classList.add('visible');
    if (!header.classList.contains("downed")) {
      mainlogo.setAttribute("src", "images/logo/logo_color.png")
    }
  }
});
  header.addEventListener("mouseout", function() {
    if  (whitebox.classList.contains("on")) {
    whitebox.classList.remove('on');
    // whiteboxcontents.classList.remove('visible');
    if (!header.classList.contains("downed")) {
      mainlogo.setAttribute("src", "images/logo/logo_white.png")
    }
  }
});
//////////////// 최상단 네비게이션 바 끝 ////////////////
//////////////// 스크롤 업다운 섹션 이동 시작 ////////////////
window.addEventListener("wheel", function(e) {
  e.preventDefault();
}, {passive : false}
);
let sections = document.querySelectorAll("main > section");
let sectionsLength = sections.length;
let wheelTimer;
let scrolls = 0;
window.addEventListener("wheel", function(e) {
  clearTimeout(wheelTimer);
  wheelTimer = this.setTimeout(function() {
    if (e.deltaY < 0) {
      doScroll(--scrolls);
    } else {
      doScroll(++scrolls);
    }
  }, 50);
});
function doScroll(scroll) {
  console.log(scroll);
  // scroll = scroll < 0 ? 0 : scroll;
  if (scroll < 0) {
    scroll = 0;
  }
  // scroll = scroll > sectionsLength - 1 ? sectionsLength - 1 : scroll;
  if (scroll > sectionsLength - 1) {
    scroll = sectionsLength - 1
  }
  scrolls = scroll;
  sections[scrolls].scrollIntoView ({
    block: "start", inline: "start", behavior: "smooth"
  });
  if (scrolls >= 1) {
    header.classList.add('downed');
    mainlogo.setAttribute("src", "images/logo/logo_color.png")
  } else if (scrolls <= 0) {
    header.classList.remove('downed');
    mainlogo.setAttribute("src", "images/logo/logo_white.png")
  }
}
//////////////// 스크롤 업다운 섹션 이동 끝 ////////////////