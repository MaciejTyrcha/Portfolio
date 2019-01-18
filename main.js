//Nav otwieranie menu
const hamburgerMenu = document.querySelector(".hamburger");
const navSection = document.querySelector("nav");
const spanHamburger = document.querySelectorAll(".hamburger span");

const openCloseNav = () => {
  navSection.classList.toggle("active");
  spanHamburger.forEach((span) => span.classList.toggle("openHamburger"));
}

hamburgerMenu.addEventListener("click", openCloseNav);

//Nav scrollowanie do konkretnych sekcji

const windowWidth = $(window).width();

$(".navHome").on("click", function (event) {
  event.preventDefault();
  $("body, html").animate({
    scrollTop: $(".mainPage").offset().top - 70
  }, 1000);
});

$(".navAboutMe").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $(".aboutMe").offset().top
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $(".aboutMe").offset().top - 70
    }, 1000);
  }
});

$(".navPortfolio").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $(".projects").offset().top + 100
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $(".projects").offset().top - 30
    }, 1000);
  }
});

$(".navContact").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $("footer").offset().top
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $("footer").offset().top - 70
    }, 1000);
  }
});

$(".mainPage div").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $(".projects").offset().top + 100
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $(".projects").offset().top - 30
    }, 1000);
  }
});