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
  } else {
    svg.classList.add('svg-fade-out');
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
}

function cvPageRedirect() {
  removeEltOnRedirect();
  setTimeout(function () {
    window.location.href = '#cv';
  }, 1600);
}

function contactPageRedirect() {
  removeEltOnRedirect();
  setTimeout(function () {
    window.location.href = '#contact';
  }, 1600);
}

function homePageRedirect() {
  removeEltOnRedirect();
  setTimeout(function () {
    window.location.href = '#accueil';
  }, 1600);
}

function workPageRedirect() {
  removeEltOnRedirect();
  setTimeout(function () {
    window.location.href = '#work';
  }, 1600);
}

// cards effects

// Higher number = more zoom
let scaleAmount = 0.5;

function scrollZoom() {
  const images = document.querySelectorAll('[data-scroll-zoom]');
  let scrollPosY = 0;
  scaleAmount = scaleAmount / 100;

  const observerConfig = {
    rootMargin: '0% 0% 0% 0%',
    threshold: 0,
  };

  // Create separate IntersectionObservers and scroll event listeners for each image so that we can individually apply the scale only if the image is visible
  images.forEach((image) => {
    let isVisible = false;
    const observer = new IntersectionObserver((elements, self) => {
      elements.forEach((element) => {
        isVisible = element.isIntersecting;
      });
    }, observerConfig);

    observer.observe(image);

    // Set initial image scale on page load
    image.style.transform = `scale(${1 + scaleAmount * percentageSeen(image)})`;

    // Only fires if IntersectionObserver is intersecting
    window.addEventListener('scroll', () => {
      if (isVisible) {
        scrollPosY = window.pageYOffset;
        image.style.transform = `scale(${
          1 + scaleAmount * percentageSeen(image)
        })`;
      }
    });
  });

  // Calculates the "percentage seen" based on when the image first enters the screen until the moment it leaves
  // Here, we get the parent node position/height instead of the image since it's in a container that has a border, but
  // if your container has no extra height, you can simply get the image position/height
  function percentageSeen(element) {
    const parent = element.parentNode;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const elPosY = parent.getBoundingClientRect().top + scrollY;
    const borderHeight =
      parseFloat(
        getComputedStyle(parent).getPropertyValue('border-bottom-width')
      ) +
      parseFloat(
        getComputedStyle(element).getPropertyValue('border-top-width')
      );
    const elHeight = parent.offsetHeight + borderHeight;

    if (elPosY > scrollY + viewportHeight) {
      // If we haven't reached the image yet
      return 0;
    } else if (elPosY + elHeight < scrollY) {
      // If we've completely scrolled past the image
      return 100;
    } else {
      // When the image is in the viewport
      const distance = scrollY + viewportHeight - elPosY;
      let percentage = distance / ((viewportHeight + elHeight) / 100);
      percentage = Math.round(percentage);

      return percentage;
    }
  }
}

scrollZoom();
