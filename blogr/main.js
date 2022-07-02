const mobileMenu = document.querySelector('.mobile-menu-btn');

const headerNav = document.querySelector('.header-nav');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    headerNav.classList.toggle('display');
});