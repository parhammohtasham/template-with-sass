const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

// show menu
navToggle.addEventListener("click" , function(){
    navMenu.classList.toggle("show-menu");
});