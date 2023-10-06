var toggle = document.querySelector(".toggle input");
var nav = document.querySelector("nav ul");

toggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

toggle.addEventListener("click", function () {
  nav.classList.toggle("show");
});
