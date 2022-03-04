const toggle = document.querySelector(".hambergerMenu");
const navbar = document.querySelector(".drop_menu");

toggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
