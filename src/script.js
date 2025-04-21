document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuButton = document.querySelector('.burger-menu-bar label');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerMenuButton.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
    });
});