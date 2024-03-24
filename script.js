let nav_continer = document.querySelector(".nav-all-list-conainer");
let toggle_btn = document.querySelector(".main-toggle-btn");
let toggle_icon = document.querySelector(".fa-bars");

toggle_btn.addEventListener("click",()=>{
    nav_continer.classList.toggle("open_nav");
    toggle_icon.classList.toggle("fa-xmark");
});