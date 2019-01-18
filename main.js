//Nav otwieranie menu
const hamburgerMenu = document.querySelector(".hamburger");
const navSection = document.querySelector("nav");
const spanHamburger = document.querySelectorAll(".hamburger span");

const openCloseNav = () => {
  navSection.classList.toggle("active");
  spanHamburger.forEach((span) => span.classList.toggle("openHamburger"));
}

hamburgerMenu.addEventListener("click", openCloseNav);