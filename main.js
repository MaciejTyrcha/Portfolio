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

$(".mainPage .wrapper div").on("click", function (event) {
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

//Pojawiające się h1
const showH1 =() => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  //Hobby h1
  const hobbyH1 = document.querySelector(".hobby h1");
  const hobbyH1FromTop = hobbyH1.offsetTop;
  const hobbyH1Height = hobbyH1.clientHeight;

  //Projects h1 
  const projectsH1 = document.querySelector(".projects h1");
  const projectsH1FromTop = projectsH1.offsetTop + 100;
  const projectsH1Height = projectsH1.clientHeight;

  //Technologystack h1 
  const technologyH1 = document.querySelector(".technologyStack h1");
  const technologyH1FromTop = technologyH1.offsetTop;
  const technologyH1Height = technologyH1.clientHeight;

  //h1
  if (scrollValue > hobbyH1FromTop + hobbyH1Height - windowHeight) {
    hobbyH1.classList.add("active");
  }
  if (scrollValue > projectsH1FromTop + projectsH1Height - windowHeight) {
    projectsH1.classList.add("active");
  }
  if (scrollValue > technologyH1FromTop + technologyH1Height - windowHeight) {
    technologyH1.classList.add("active");
  }
}

const showHomeSection = () => {
  const divHomeSection = document.querySelector(".mainPage section");
  divHomeSection.classList.add("active");

}

const showContent = () => {
  showH1();
}
  


window.addEventListener("scroll", showContent);
window.addEventListener("load", showHomeSection);