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
const workSection = document.querySelector('#work');
const cvSection = document.querySelector('#cv');
const contactSection = document.querySelector('#contact');
const chevron = document.querySelector('.chevron-container');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email-input');
const textareaInput = document.querySelector('.textarea-input');
const intro = document.querySelector('#intro');
const btnHidden = document.querySelector('.btn-hidden');
const softSkillsUl = document.querySelector('.soft-skills ul');

if (window.innerWidth >= 962) {
  portraitDelayEntrance();
}

function cvPageRedirect() {
  removeEltOnRedirect();
  contactSection.style.display = 'none';
  workSection.style.display = 'none';
  cvSection.style.display = 'block';
  cvLink.style.border = 'solid 2px white';
  contactLink.style.border = 'none';
  workLink.style.border = 'none';
  homeLink.style.border = 'none';
  var wS = window.scrollY;
  if (
    wS >= cv.offsetTop - cv.clientHeight / 2 &&
    wS <= cv.offsetTop + cv.clientHeight / 2
  ) {
    for (var j = 0; j < progressBarArray.length; j++) {
      progressBar[j].classList.add('load' + [j + 1]);
    }
    softSkillsUl.classList.add('soft-skills-ul-anim');
  } else {
    for (var j = 0; j < progressBarArray.length; j++) {
      progressBar[j].classList.remove('load' + [j + 1]);
    }
    softSkillsUl.classList.remove('soft-skills-ul-anim');
  }
  if (window.innerWidth < 962) {
    resize();
    setTimeout(function () {
      window.location.href = '#cv';
    }, 1600);
  } else {
    window.location.href = '#cv';
  }
}

function contactPageRedirect() {
  removeEltOnRedirect();
  cvSection.style.display = 'none';
  workSection.style.display = 'none';
  contactSection.style.display = 'block';
  cvLink.style.border = 'none';
  workLink.style.border = 'none';
  contactLink.style.border = 'solid 2px white';
  homeLink.style.border = 'none';

  if (window.innerWidth < 962) {
    resize();
    setTimeout(function () {
      window.location.href = '#contact';
    }, 1600);
  } else {
    window.location.href = '#contact';
  }
}

function homePageRedirect() {
  removeEltOnRedirect();
  cvLink.style.border = 'none';
  contactLink.style.border = 'none';
  workLink.style.border = 'none';
  homeLink.style.border = 'solid 2px white';

  if (window.innerWidth < 962) {
    resize();
    setTimeout(function () {
      window.location.href = '#intro';
    }, 1600);
  } else {
    window.location.href = '#intro';
  }
}

function workPageRedirect() {
  removeEltOnRedirect();
  cvSection.style.display = 'none';
  contactSection.style.display = 'none';
  workSection.style.display = 'block';
  chevron.style.display = 'block';
  cvLink.style.border = 'none';
  homeLink.style.border = 'none';
  workLink.style.border = 'solid 2px white';
  contactLink.style.border = 'none';

  if (window.innerWidth < 962) {
    resize();
    setTimeout(function () {
      window.location.href = '#work';
    }, 1600);
  } else {
    window.location.href = '#work';
  }
}

homeLink.style.border = 'solid 2px white';

function resize() {
  windowHeight = window.innerHeight + 'px';
  intro.style.height = windowHeight;
  cvSection.style.height = windowHeight;
  contactSection.style.height = windowHeight;
}

if (window.innerWidth < 962) {
  resize();
}

if (window.innerWidth < 962) {
  menuClick.addEventListener('click', toggleMenu);
}
function closeMenu() {
  if (window.innerWidth < 962) {
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
}
function toggleMenu() {
  if (window.innerWidth < 962) {
    if (menu.classList.contains('menu-scale-up')) {
      resize();
      closeMenu();
      name.style.position = 'relative';
      name.classList.add('name-move-back');
      svg.classList.add('name-intro');
    } else {
      resize();
      chevron.style.display = 'none';
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
  portrait.classList.remove('portrait-exit');
}

function menuTextDelay() {
  setTimeout(displayMenuTextFull, 1000);
  if (window.innerWidth < 962) {
    setTimeout(hideMenuItems, 1000);
  }
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

const cards = document.querySelectorAll('.card');
var cardsArray = Array.from(cards);
var progressBarArray = Array.from(progressBar);

window.addEventListener('scroll', function () {
  if (window.innerWidth < 962) {
    resize();
  }
  var wH = window.outerHeight;
  var wS = window.scrollY;

  if (window.scrollY >= window.outerHeight / 1.5) {
    name.style.color = 'white';
    portrait.style.border = 'solid white 3px';
  } else {
    name.style.color = '#e9cda7';
    portrait.style.border = 'solid #e9cda7 3px';
  }
  if (window.innerWidth < 962) {
    for (var i = 0; i < cardsArray.length; i++) {
      if (
        wS >= cardsArray[i].offsetTop + cardsArray[i].clientHeight / 2 - wH &&
        cardsArray[i].offsetTop >= wS &&
        wS + wH >= cardsArray[i].offsetTop + cardsArray[i].clientHeight / 2

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
    if (wS + 20 >= workSection.clientHeight) {
      chevron.style.display = 'none';
    } else {
      chevron.style.display = 'block';
    }
  }

  if (
    wS >= cv.offsetTop - cv.clientHeight / 2 &&
    wS <= cv.offsetTop + cv.clientHeight / 2
  ) {
    for (var j = 0; j < progressBarArray.length; j++) {
      progressBar[j].classList.add('load' + [j + 1]);
    }
    softSkillsUl.classList.add('soft-skills-ul-anim');
  } else {
    for (var j = 0; j < progressBarArray.length; j++) {
      progressBar[j].classList.remove('load' + [j + 1]);
    }
    softSkillsUl.classList.remove('soft-skills-ul-anim');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var options = {
    opacity: 0.5,
    endingTop: '25%',
  };
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

submitBtn.addEventListener('click', function () {
  btnHidden.click();
});

form.addEventListener('submit', function () {
  setTimeout(function () {
    form.reset();
  }, 1200);
});

// submitBtn.addEventListener('click', function () {
//   submitBtn.classList.add('modal-trigger');
//   submitBtn.setAttribute.href = '#modal1';
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const fd = new FormData(form);
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener('load', (e) => {
//     console.log(e.target.responseText);
//   });
//   xhr.addEventListener('error', (e) => {
//     console.log(e);
//   });
//   xhr.open('POST', form.action);
//   xhr.send(fd);
// });

// var data = new FormData();
// data.append('user', 'person');
// data.append('pwd', 'password');
// data.append('organization', 'place');
// data.append('requiredkey', 'key');

// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'somewhere', true);
// xhr.onload = function () {
//     // do something to response
//     console.log(this.responseText);
// };
// xhr.send(data);

// function SubForm() {
//   hr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.onload = function() {
//     url: 'test',
//     type: 'post',
//     data: form.serialize(),
//     success: function () {
//       alert('worked');
//     },
//   }
// }
