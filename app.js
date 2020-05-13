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
    menu.classList.add('menu-scale-down');
    menuText.style.top = '50px';
    menuText.style.left = '0px';
    menuText.style.transform = 'rotate(320deg)';
  } else {
    menu.classList.add('menu-scale-up');
    menu.classList.remove('menu-scale-down');
    menuItemsDisplay();
  }
}

function menuItemsDisplay() {
  setTimeout(menuOn, 2000);
  setTimeout(displayMenuText, 1000);
}

function menuOn() {
  menuText.innerHTML = '<i class="fas fa-3x fa-times"></i>';
  menuText.style.left = '7px';
  menuText.style.top = '40px';
  menuText.style.transform = 'rotate(0deg)';
  menuItems.style.display = 'flex';
}

function displayMenuText() {
  menuText.textContent = '';
}
