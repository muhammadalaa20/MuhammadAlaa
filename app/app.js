//create a function to toggle the navigation bar
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
const home = document.querySelector('.home');
function toggleNav() {
    //toggle the menu icon
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    //toggle the nav links
    nav.classList.toggle('nav-active');
    //blur the home section when the nav is toggled
    home.classList.toggle('blur');
}

//opens the navigation bar when the menu icon is clicked
burger.addEventListener('click', function() {
    toggleNav();
});

//close the navigation bar when a link is clicked
const navLinks = document.querySelectorAll('.nav li');
navLinks.forEach(link => link.addEventListener('click', () => {
    if (nav.classList.contains('nav-active')) {
        toggleNav();
    }
}));


