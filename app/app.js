//get the button by the id btnUp
let btnUp = document.getElementById("btnUp")
//showing the btnUp after passing a threshold
window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
}
//calling the function from the html onclick
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}


const menuBtn = document.querySelector(".menu-btn i");
const nav = document.querySelector("nav");
const content = document.querySelectorAll("section");
function toggleMenu() {
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-times");
    nav.classList.toggle("active");
    content.forEach((con) => {
        con.classList.toggle("blur");
    });
}
menuBtn.addEventListener("click", toggleMenu);

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
    nav.classList.remove("active");
    menuBtn.classList.toggle("fa-bars");
    menuBtn.classList.toggle("fa-times");
    content.forEach((con) => {
        con.classList.toggle("blur");
    });
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const page = document.querySelectorAll(".page");

function pageAction() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuBtn.classList.toggle("fa-bars");
        menuBtn.classList.toggle("fa-times");
        content.forEach((con) => {
            con.classList.toggle("blur");
        });
    }

}
page.forEach((n) => n.addEventListener("click", pageAction));



// const showMore=document.querySelector(".show-more");
// const showLess=document.querySelector(".show-more i");
// const showMoreText=document.querySelector(".show-more p");
// const secondRow= document.querySelector(".second-row");
// const thirdRow= document.querySelector(".third-row");
// const fourthRow= document.querySelector(".fourth-row");
// const fifthRow= document.querySelector(".fifth-row");

// showMore.addEventListener("click",function(){
//     secondRow.classList.toggle("d-none");
//     thirdRow.classList.toggle("d-none");
//     fourthRow.classList.toggle("d-none");
//     fifthRow.classList.toggle("d-none");
//     showLess.classList.toggle("fa-angle-down");
//     showLess.classList.toggle("fa-angle-up");
//     if(showLess.classList.contains("fa-angle-up")){
//         showMoreText.innerText="Show Less";
//     }else{  
//         showMoreText.innerText="Show More";
//     }
// })

const skills=['fa-css3', 'fa-js', 'fa-html5', 'fa-react', 'fa-sass', 'fa-git', 'fa-github', 'fa-bootstrap', 'fa-figma', 'fa-npm']
const colors=['blue', 'yellow', 'orange', 'blue', 'pink', 'orange', 'black', 'purple', 'green', 'red']
let i=0;
const skill=document.querySelector('.skill');
const skillIcon = document.querySelector('.skill i');
const right = document.querySelector('.right-arrow');
const left = document.querySelector('.left-arrow');
skillIcon.classList.add(colors[i]);
right.addEventListener('click', () => {
    skillIcon.classList.remove(skills[i]);
    skillIcon.classList.remove(colors[i]);
    i++;
    if(i===skills.length){
        i=0;
    }
    skillIcon.classList.add(skills[i]);
    skillIcon.classList.add(colors[i]);
});

left.addEventListener('click', () => {
    skillIcon.classList.remove(skills[i]);
    skillIcon.classList.remove(colors[i]);
    i--;
    if(i<0){
        i=skills.length-1;
    }
    skillIcon.classList.add(skills[i]);
    skillIcon.classList.add(colors[i]);
});


