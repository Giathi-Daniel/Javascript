// Sticky navbar
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 0);
});

// Responsive navbar
function toggleMenu() {
    var menuToggle = document.querySelector('toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}