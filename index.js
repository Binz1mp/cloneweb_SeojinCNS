let header = document.querySelector("header");
let whitebox = document.querySelector("#whitebox");
let mainlogo = document.getElementById("mainlogo");
header.addEventListener("mouseover", function() {
  if (!whitebox.classList.contains("on")) {
    whitebox.classList.add('on');
    mainlogo.setAttribute("src", "images/logo/logo_color.png")
  }
});
header.addEventListener("mouseout", function() {
  if (whitebox.classList.contains("on")) {
    whitebox.classList.remove('on');
    mainlogo.setAttribute("src", "images/logo/logo_white.png")
  }
});
