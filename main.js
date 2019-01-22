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

//Animacja oMnie 
const showABoutMeSection = () => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  
  //h1
  const aboutMeH1 = document.querySelector(".aboutMe h1");
  const aboutMeH1FromTop = aboutMeH1.offsetTop;
  const aboutMeH1Height = aboutMeH1.clientHeight;

  //h2
  const aboutMeH2 = document.querySelector(".aboutMe h2");
  const aboutMeH2FromTop = aboutMeH2.offsetTop;
  const aboutMeH2Height = aboutMeH2.clientHeight;

  //p
  const aboutMeP = document.querySelector(".aboutMe p");
  const aboutMePFromTop = aboutMeP.offsetTop;
  const aboutMePHeight = aboutMeP.clientHeight;

  //photo 
  const aboutMePhoto = document.querySelector(".aboutMe .myPhoto");
  const aboutMePhotoFromTop = aboutMePhoto.offsetTop;
  const aboutMePhotoHeight = aboutMePhoto.clientHeight;

  //icons
  const aboutMeIcons = document.querySelector(".icons");
  const aboutMeIconsFromTop = aboutMeIcons.offsetTop;
  const aboutMeIconsHeight = aboutMeIcons.clientHeight;


  if (scrollValue > aboutMeH1FromTop + aboutMeH1Height - windowHeight) {
    aboutMeH1.classList.add("active");
  }
  if (scrollValue > aboutMeH2FromTop + aboutMeH2Height - windowHeight) {
    aboutMeH2.classList.add("active");
  }
  if (scrollValue > aboutMePFromTop + aboutMePHeight - windowHeight) {
    aboutMeP.classList.add("active");
  }
  if (scrollValue > aboutMePhotoFromTop + aboutMePhotoHeight - 1.2 * windowHeight) {
    aboutMePhoto.classList.add("active");
  }
  if (scrollValue > aboutMeIconsFromTop + aboutMeIconsHeight - windowHeight) {
    aboutMeIcons.classList.add("active");
  }
}

//Animacja hobby

const showHobbySection =() => {

}

const showContent = () => {
  showH1();
  showABoutMeSection();
  showHobbySection();
}
  
window.addEventListener("scroll", showContent);

//Animacja homePage
const showHomeSection = () => {
  const divHomeSection = document.querySelector(".mainPage section");
  divHomeSection.classList.add("active");
}

window.addEventListener("load", showHomeSection);
