let menu = document.getElementById("js-menu");
let menuBtn = document.getElementById("js-menu-btn");
let closeMenuBtn = document.getElementById("js-close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("menu-active");
});
