const menuClick = document.querySelector('.menu-click');
const menuItems = document.querySelector('.menu-items');
const menu = document.querySelector('#menu');
const menuText = document.querySelector('.menu-text');
const name = document.querySelector('.name');
const svg = document.querySelector('.svg');
const portrait = document.querySelector('.portrait');
const contactLink = document.querySelector('.contact-link');
const homeLink = document.querySelector('.home-link');
const cvLink = document.querySelector('.cv-link');
const workLink = document.querySelector('.work-link');
const card = document.querySelector('.card');
const progressBar = document.querySelectorAll('.bar');
const softSkillsPara = document.querySelectorAll('.soft-skills p');
const workSection = document.querySelector('#work');
const cvSection = document.querySelector('#cv');
const contactSection = document.querySelector('#contact');

menuClick.addEventListener('click', toggleMenu);

function closeMenu() {
  menu.classList.remove('menu-scale-up');
  menuText.textContent = '';
  menuTextDelay();
  svg.classList.remove('svg-fade-out');
  menuItems.classList.add('menu-items-fadeout');
  menu.classList.add('menu-scale-down');
  menuText.style.top = '50px';
  menuText.style.left = '0px';
  menuText.style.transform = 'rotate(320deg)';
}

function toggleMenu() {
  if (menu.classList.contains('menu-scale-up')) {
    closeMenu();
    name.style.position = 'relative';
    name.classList.add('name-move-back');
    svg.classList.add('name-intro');
  } else {
    window.location.href = '#intro';
    svg.classList.add('svg-fade-out');
    svg.classList.remove('name-intro');
    name.classList.remove('name-intro');
    menu.classList.add('menu-scale-up');
    menuItems.classList.remove('menu-items-fadeout');
    menu.classList.remove('menu-scale-down');
    name.classList.remove('name-move-back');
    menuItemsDisplay();
  }
}

function menuItemsDisplay() {
  setTimeout(crossMenu, 2100);
  setTimeout(menuOn, 1600);
  setTimeout(displayMenuTextEmpty, 1000);
  setTimeout(portraitDelayEntrance, 1400);
  moveName();
}

function crossMenu() {
  menuText.innerHTML = '<i class="fas fa-3x fa-times"></i>';
  menuText.style.left = '7px';
  menuText.style.top = '40px';
  menuText.style.transform = 'rotate(0deg)';
}

function displayMenuTextEmpty() {
  menuText.textContent = '';
}

function menuOn() {
  menuItems.style.display = 'flex';
  menuItems.style.top = '0px';
  menuItems.style.position = 'fixed';
}

function portraitDelayEntrance() {
  portrait.style.display = 'block';
  portrait.classList.add('portrait-entrance');
  portrait.classList.add('portrait-exit');
}

function menuTextDelay() {
  setTimeout(displayMenuTextFull, 1000);
  setTimeout(hideMenuItems, 1000);
  portraitExit();
}

function portraitExit() {
  portrait.classList.remove('portrait-entrance');
  portrait.classList.add('portrait-exit');
}

function hideMenuItems() {
  menuItems.style.display = 'none';
}

function displayMenuTextFull() {
  menuText.textContent = 'Menu';
}

function moveName() {
  name.classList.add('name-move-up');
  name.style.position = 'fixed';
}

contactLink.addEventListener('click', contactPageRedirect);
homeLink.addEventListener('click', homePageRedirect);
workLink.addEventListener('click', workPageRedirect);
cvLink.addEventListener('click', cvPageRedirect);

function removeEltOnRedirect() {
  closeMenu();
  name.classList.remove('name-move-up');
  name.style.position = 'relative';
  name.classList.add('name-move-back');
  svg.classList.add('name-intro');
}

function cvPageRedirect() {
  removeEltOnRedirect();
  cvSection.style.display = 'block';
  setTimeout(function () {
    contactSection.style.display = 'none';
    workSection.style.display = 'none';
    window.location.href = '#cv';
  }, 1600);
}

function contactPageRedirect() {
  removeEltOnRedirect();
  contactSection.style.display = 'block';
  setTimeout(function () {
    cvSection.style.display = 'none';
    workSection.style.display = 'none';

    window.location.href = '#contact';
  }, 1600);
}

function homePageRedirect() {
  removeEltOnRedirect();
  setTimeout(function () {
    window.location.href = '#intro';
  }, 1600);
}

function workPageRedirect() {
  removeEltOnRedirect();
  setTimeout(function () {
    window.location.href = '#work';
    cvSection.style.display = 'none';
    contactSection.style.display = 'none';
    workSection.style.display = 'block';
  }, 1600);
}

const cards = document.querySelectorAll('.card');
var cardsArray = Array.from(cards);
var progressBarArray = Array.from(progressBar);
softSkillParaArray = Array.from(softSkillsPara);

window.addEventListener('scroll', function () {
  var wH = window.outerHeight;
  var wS = window.scrollY;

  if (window.scrollY >= window.outerHeight / 1.5) {
    name.style.color = 'white';
    portrait.style.border = 'solid white 3px';
  } else {
    name.style.color = '#e9cda7';
    portrait.style.border = 'solid #e9cda7 3px';
  }

  for (var i = 0; i < cardsArray.length; i++) {
    if (
      (wS >= cardsArray[i].offsetTop + cardsArray[i].clientHeight / 2 - wH &&
        cardsArray[i].offsetTop >= wS &&
        wS + wH >= cardsArray[i].offsetTop + cardsArray[i].clientHeight / 2) ||
      wH === wS
      // wS >= cardsArray[i].offsetTop - cardsArray[i].clientHeight / 2 &&
      // wS <= cardsArray[i].offsetTop + cardsArray[i].clientHeight / 2
    ) {
      cardsArray[i].classList.add('card-entrance');
      cardsArray[i].classList.remove('card-exit');
    } else {
      cardsArray[i].classList.remove('card-entrance');
      cardsArray[i].classList.add('card-exit');
    }
  }
  if (
    wS >= cv.offsetTop - cv.clientHeight / 2 &&
    wS <= cv.offsetTop + cv.clientHeight / 2
  ) {
    for (var j = 0; j < progressBarArray.length; j++) {
      progressBar[j].classList.add('load' + [j + 1]);
    }
    for (var l = 0; l < softSkillParaArray.length; l++) {
      softSkillParaArray[l].classList.add('soft-skills-p-anim');
    }
  } else {
    for (var j = 0; j < progressBarArray.length; j++) {
      progressBar[j].classList.remove('load' + [j + 1]);
    }
    for (var l = 0; l < softSkillParaArray.length; l++) {
      softSkillParaArray[l].classList.remove('soft-skills-p-anim');
    }
  }
});

//   for (var j = 0; j < progressBarArray.length; j++) {
//     if (
//       (wS >= cv.offsetTop - cv.clientHeight / 2 &&
//         wS <= cv.offsetTop + cv.clientHeight / 2) ||
//       wH === wS
//     ) {
//       progressBar[j].classList.add('load' + [j + 1]);
//     } else {
//       progressBar[j].classList.remove('load' + [j + 1]);
//     }
//   }
//   for (var l = 0; l < softSkillParaArray.length; l++) {
//     if (
//       (wS >= cv.offsetTop - cv.clientHeight / 2 &&
//         wS <= cv.offsetTop + cv.clientHeight / 2) ||
//       wH === wS
//     ) {
//       softSkillParaArray[l].classList.add('soft-skills-p-anim');
//     } else {
//       softSkillParaArray[l].classList.remove('soft-skills-p-anim');
//     }
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('.carousel');
//   var options = {
//     fullWidth: false,
//     indicators: true,
//     numVisible: 4,
//     duration: 100,
//   };
//   var instances = M.Carousel.init(elems, options);
// });
