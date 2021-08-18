const nav__toggle = document.querySelector('.nav__toggle');
const navbar = document.querySelector('.header__nav');

nav__toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});