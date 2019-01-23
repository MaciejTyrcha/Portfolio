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
    scrollTop: $("#mainPage").offset().top - 70
  }, 1000);
});

$(".navAboutMe").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $("#aboutMe").offset().top
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $("#aboutMe").offset().top - 70
    }, 1000);
  }
});

$(".navPortfolio").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $("#projects").offset().top + 100
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $("#projects").offset().top - 30
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

$("#mainPage .wrapper div").on("click", function (event) {
  event.preventDefault();
  if (windowWidth >= 900) {
    $("body, html").animate({
      scrollTop: $("#projects").offset().top + 100
    }, 1000);
  } else {
    $("body, html").animate({
      scrollTop: $("#projects").offset().top - 30
    }, 1000);
  }
});

//Pojawiające się h1
const showH1 =() => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  //Hobby h1
  const hobbyH1 = document.querySelector("#hobby h1");
  const hobbyH1FromTop = hobbyH1.offsetTop;
  const hobbyH1Height = hobbyH1.clientHeight;

  //Projects h1 
  const projectsH1 = document.querySelector("#projects h1");
  const projectsH1FromTop = projectsH1.offsetTop + 100;
  const projectsH1Height = projectsH1.clientHeight;

  //Technologystack h1 
  const technologyH1 = document.querySelector("#technologyStack h1");
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
  const aboutMeH1 = document.querySelector("#aboutMe h1");
  const aboutMeH1FromTop = aboutMeH1.offsetTop;
  const aboutMeH1Height = aboutMeH1.clientHeight;

  //h2
  const aboutMeH2 = document.querySelector("#aboutMe h2");
  const aboutMeH2FromTop = aboutMeH2.offsetTop;
  const aboutMeH2Height = aboutMeH2.clientHeight;

  //p
  const aboutMeP = document.querySelector("#aboutMe p");
  const aboutMePFromTop = aboutMeP.offsetTop;
  const aboutMePHeight = aboutMeP.clientHeight;

  //photo 
  const aboutMePhoto = document.querySelector("#aboutMe .myPhoto");
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
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  
  const hobbyImageOne = document.querySelector("#hobby .first-image-hobby");
  const hobbyImageTwo = document.querySelector("#hobby .second-image-hobby");
  const hobbyImageThree = document.querySelector("#hobby .third-image-hobby");
  const hobbyImageFour = document.querySelector("#hobby .fourth-image-hobby");
  const hobbyImageFive = document.querySelector("#hobby .fifth-image-hobby");
  const hobbyImageSix = document.querySelector("#hobby .sixth-image-hobby");

  const hobbyImages = [hobbyImageOne, hobbyImageTwo, hobbyImageThree, hobbyImageFour, hobbyImageFive, hobbyImageSix];

  for (let i=0; i<hobbyImages.length; i++) {
    let hobbyImage = hobbyImages[i];
    if (scrollValue > hobbyImage.offsetTop + hobbyImage.clientHeight - 1.2 * windowHeight) {
      hobbyImage.classList.add('active');
    }
  }
}

//Animacja portfolio
const showPortfolioSection =() => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  const portfolioFirst = document.querySelector("#projects .first-grid");
  const portfolioSecond = document.querySelector("#projects .second-grid");
  const portfolioThird = document.querySelector("#projects .third-grid");
  const portfolioFourth = document.querySelector("#projects .fourth-grid");

  const grids = [portfolioFirst, portfolioSecond, portfolioThird, portfolioFourth];

  for (let i = 0; i<grids.length; i++) {
    let grid = grids[i];
    if (scrollValue > grid.offsetTop + grid.clientHeight - 1.2 * windowHeight) {
      grid.classList.add('active');
    }
  }
}

//Animacja technology
const showTechnologyStackSection =() => {
  // const scrollValue = window.scrollY;
  // const windowHeight = window.innerHeight;

  // //firstGrid
  // const portfolioFirst = document.querySelector(".projects .first-grid");
  // const portfolioFirstFromTop = portfolioFirst.offsetTop;
  // const portfolioFirstHeight = portfolioFirst.clientHeight;

  // if (scrollValue > portfolioFourthFromTop + portfolioFourthHeight - 1.2 * windowHeight) {
  //   portfolioFourth.classList.add("active");
  // }
}

//Animacja footer
const showFooterSection = () => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  //h1
  const footerH1 = document.querySelector("footer h1");
  const footerH1FromTop = footerH1.offsetTop;
  const footerH1Height = footerH1.clientHeight;

  //h2
  const footerH2 = document.querySelector("footer h2");
  const footerH2FromTop = footerH2.offsetTop;
  const footerH2Height = footerH2.clientHeight;

  //FooterIcons
  const footerIcons = document.querySelector("footer .footerIcons");
  const footerIconsFromTop = footerIcons.offsetTop;
  const footerIconsHeight = footerIcons.clientHeight;

  //FooterForm
  const footerForm = document.querySelector("footer form");
  const footerFormFromTop = footerForm.offsetTop;
  const footerFormHeight = footerForm.clientHeight;

  if (scrollValue > footerH1FromTop + footerH1Height - windowHeight) {
    footerH1.classList.add("active");
  }

  if (scrollValue > footerH2FromTop + footerH2Height - windowHeight) {
    footerH2.classList.add("active");
  }

  if (scrollValue > footerIconsFromTop + footerIconsHeight - windowHeight) {
    footerIcons.classList.add("active");
  }

  if (scrollValue > footerFormFromTop + footerFormHeight - 1.2 * windowHeight) {
    footerForm.classList.add("active");
  }
}

//Zmiana klasy w navie po scrollu
const changeNavLiClass = () => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  const liItems = [...document.querySelectorAll("header a")];

  const navHome = document.querySelector(".navHome");
  const navAboutMe = document.querySelector(".navAboutMe");
  const navPortfolio = document.querySelector(".navPortfolio");
  const navContact = document.querySelector(".navContact");

  //navHome
  const mainPage = document.querySelector("#mainPage");
  const mainPageFromTop = mainPage.offsetTop;
  const mainPageHeight = mainPage.clientHeight;

  //navAboutMe
  const aboutMe = document.querySelector("#aboutMe");
  const aboutMeFromTop = aboutMe.offsetTop;
  const aboutMeHeight = aboutMe.clientHeight;

  //navPortfolio
  const projects = document.querySelector("#projects");
  const projectsFromTop = projects.offsetTop;
  const projectsHeight = projects.clientHeight;

  //navContact
  const footer = document.querySelector("footer");
  const footerFromTop = footer.offsetTop;
  const footerHeight = footer.clientHeight;

  if (scrollValue > mainPageFromTop + mainPageHeight - windowHeight) {

    navHome.classList.add("hover");
  }

  if (scrollValue > aboutMeFromTop + aboutMeHeight - windowHeight) {
    navAboutMe.classList.add("hover");
  }

  if (scrollValue > projectsFromTop + projectsHeight - windowHeight) {
    navPortfolio.classList.add("hover");
  }

  if (scrollValue > footerFromTop + footerHeight - windowHeight) {
    navContact.classList.add("hover");
  }
}


const showContent = () => {
  showH1();
  showABoutMeSection();
  showHobbySection();
  showPortfolioSection();
  showTechnologyStackSection();
  showFooterSection();
  changeNavLiClass();
}
  
window.addEventListener("scroll", showContent);

//Animacja homePage
const showHomeSection = () => {
  const divHomeSection = document.querySelector("#mainPage section");
  divHomeSection.classList.add("active");
}

window.addEventListener("load", showHomeSection);


