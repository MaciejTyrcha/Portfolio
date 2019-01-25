const hamburgerMenu = document.querySelector(".hamburger");

//Nav otwieranie menu
const openCloseNav = () => {
const navSection = document.querySelector("nav");
const spanHamburger = document.querySelectorAll(".hamburger span");

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
      scrollTop: $("#projects").offset().top
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

  const hobbyH1 = document.querySelector("#hobby h1");
  const projectsH1 = document.querySelector("#projects h1");
  const technologyH1 = document.querySelector("#technologyStack h1");

  const showH1Elements = [hobbyH1, projectsH1, technologyH1];

  for (let i =0; i< showH1Elements.length; i++) {
    showH1Element = showH1Elements[i];
    if(scrollValue > showH1Element.offsetTop + showH1Element.clientHeight - windowHeight) {
      showH1Element.classList.add('active');
    }
  }
}

//Animacja oMnie 
const showABoutMeSection = () => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  
  const aboutMeH1 = document.querySelector("#aboutMe h1");
  const aboutMeH2 = document.querySelector("#aboutMe h2");
  const aboutMeP = document.querySelector("#aboutMe p");
  const aboutMePhoto = document.querySelector("#aboutMe .myPhoto");
  const aboutMeIcons = document.querySelector(".icons");

  const aboutMeElements = [aboutMeH1, aboutMeH2, aboutMeP, aboutMePhoto, aboutMeIcons];

  for (let i=0; i< aboutMeElements.length; i++) {
    aboutMeElement = aboutMeElements[i];
    if ( scrollValue > aboutMeElement.offsetTop + aboutMeElement.clientHeight - windowHeight) {
      aboutMeElement.classList.add("active");
    }
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
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  const technologyStackElements = [...document.querySelectorAll("#technologyStack div")];

  for (let i =0; i< technologyStackElements.length; i++) {
    let technologyStackElement = technologyStackElements[i];
    if ( scrollValue > technologyStackElement.offsetTop + technologyStackElement.clientHeight - windowHeight) {
      technologyStackElement.classList.add('active');
    }
  }
}

//Animacja footer
const showFooterSection = () => {
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;

  const footerH1 = document.querySelector("footer h1");
  const footerH2 = document.querySelector("footer h2");
  const footerForm = document.querySelector("footer form");
  const footerButton = document.querySelector("footer button");

  const footerIcons = document.querySelectorAll("footer .footerIcons div");

  const footerElements = [footerH1, footerH2, footerForm, footerButton];

  for (let i=0; i<footerElements.length; i++) {
    let footerElement = footerElements[i];
    if (scrollValue > footerElement.offsetTop + footerElement.clientHeight - windowHeight) {
      footerElement.classList.add('active');
    }
  }

  for (let i=0; i<footerIcons.length; i++) {
    let footerIcon = footerIcons[i];
    if ( scrollValue > footerIcon.offsetTop + footerIcon.clientHeight - windowHeight) {
      footerIcon.classList.add('active');
    }
  }
}

//Zmiana klasy w navie po scrollu
const changeNavLiClass = () => {
  const scrollValue = window.scrollY;
  const fullPageHeight = document.documentElement.scrollHeight;

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

  //navPortfolio
  const projects = document.querySelector("#projects");
  const projectsFromTop = projects.offsetTop;


  //navContact
  const footer = document.querySelector("footer");
  const footerHeight = footer.clientHeight;

  //duze ekrany
  if (windowWidth >= 900) {
    if (scrollValue < mainPageFromTop + mainPageHeight) {
      console.log("jestem w home");
      liItems.forEach((li)=> li.classList.remove('hover'));
      navHome.classList.add('hover');
    }
  
    if (scrollValue > mainPageFromTop + mainPageHeight - 10 && scrollValue < projectsFromTop + 70)  {
      console.log("jestem w o mnie")
      liItems.forEach((li)=> li.classList.remove('hover'));
      navAboutMe.classList.add('hover');
    }
  
    if (scrollValue > projectsFromTop + 70 && scrollValue < fullPageHeight - footerHeight - 150) {
      console.log("jestem w portfolio");
      liItems.forEach((li)=> li.classList.remove('hover'));
      navPortfolio.classList.add('hover');
    }
    if (scrollValue > fullPageHeight - footerHeight - 150){
      console.log("jestem w footerze");
      liItems.forEach((li)=> li.classList.remove('hover'));
      navContact.classList.add('hover');
    }
  }
  //male ekrany
  else {
    if (scrollValue < mainPageFromTop + mainPageHeight - 70) {
      console.log("jestem w home malym");
      liItems.forEach((li)=> li.classList.remove('hover'));
      navHome.classList.add('hover');
    }
  
    if (scrollValue > mainPageFromTop + mainPageHeight - 80 && scrollValue < projectsFromTop - 10)  {
      console.log("jestem w o mnie malym")
      liItems.forEach((li)=> li.classList.remove('hover'));
      navAboutMe.classList.add('hover');
    }
  
    if (scrollValue > projectsFromTop -10 && scrollValue < fullPageHeight - footerHeight - 220) {
      console.log("jestem w portfolio malym");
      liItems.forEach((li)=> li.classList.remove('hover'));
      navPortfolio.classList.add('hover');
    }
    if (scrollValue > fullPageHeight - footerHeight - 220){
      console.log("jestem w footerze malym");
      liItems.forEach((li)=> li.classList.remove('hover'));
      navContact.classList.add('hover');
    }

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
  const navHome = document.querySelector(".navHome");
  divHomeSection.classList.add("active");
  navHome.classList.add('hover');
}

window.addEventListener("load", showHomeSection);


