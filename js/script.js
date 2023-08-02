const menu = document.querySelector('.mobile-menu');
const menuLauncher = document.querySelector('.mobile-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');

const launchMenu = () => {
  menu.classList.remove('hidden');
};

const closeMenu = () => {
  menu.classList.add('hidden');
};

menuLauncher.addEventListener('click', launchMenu);
closeMenuIcon.addEventListener('click', closeMenu);
