const menuClick = document.querySelector('.menu-click');
const menuItems = document.querySelector('.menu-items');
const menu = document.querySelector('#menu');
const menuText = document.querySelector('.menu-text');

menuClick.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (menu.classList.contains('menu-scale-up')) {
    menu.classList.remove('menu-scale-up');
    menuText.textContent = 'Menu';
    menuItems.style.display = 'none';
    // menu.style.animation = 'scale-down 2s';
  } else {
    menu.classList.add('menu-scale-up');
    menuItemsDisplay();
  }
}

function menuItemsDisplay() {
  setTimeout(menuOn, 2000);
  setTimeout(displayMenuText, 1000);
}

function menuOn() {
  menuText.textContent = 'X';
  menuItems.style.display = 'flex';
}

function displayMenuText() {
  menuText.textContent = '';
}
