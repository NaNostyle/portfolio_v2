const menuClick = document.querySelector('.menu-click');
const menuItems = document.querySelector('.menu-items');
const menu = document.querySelector('#menu');
const menuText = document.querySelector('.menu-text');
const name = document.querySelector('.name');

menuClick.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (menu.classList.contains('menu-scale-up')) {
    menu.classList.remove('menu-scale-up');
    menuText.textContent = '';
    menuTextDelay();
    menuItems.style.display = 'none';
    menu.classList.add('menu-scale-down');
    menuText.style.top = '50px';
    menuText.style.left = '0px';
    menuText.style.transform = 'rotate(320deg)';
    name.classList.add('name-move-back');
    name.style.position = 'relative';
  } else {
    menu.classList.add('menu-scale-up');
    menu.classList.remove('menu-scale-down');
    name.classList.remove('name-move-back');

    menuItemsDisplay();
  }
}

function menuItemsDisplay() {
  setTimeout(crossMenu, 2100);
  setTimeout(menuOn, 1600);
  setTimeout(displayMenuTextEmpty, 1000);
  setTimeout(moveName, 1600);
}

function menuTextDelay() {
  setTimeout(displayMenuTextFull, 1000);
}

function menuOn() {
  menuItems.style.display = 'flex';
  menuItems.style.top = '0px';
  menuItems.style.position = 'absolute';
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
function displayMenuTextFull() {
  menuText.textContent = 'Menu';
}

function moveName() {
  name.classList.add('name-move-up');
}
