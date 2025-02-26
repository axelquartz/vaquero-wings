const burgerButton = document.querySelector('.burger-menu-bar label');
const burgerMenu = document.querySelector('.burger-menu');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});