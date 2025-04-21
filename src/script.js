document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuButton = document.querySelector('.burger-menu-bar label');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');

    burgerMenuButton.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = burgerMenuButton.contains(event.target) || burgerMenu.contains(event.target);
        
        if (!isClickInside && burgerMenu.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
        }
    });
});