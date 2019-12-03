// query selectors
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuNav = document.querySelector(".menu-nav");
let menuPicture = document.querySelector(".menu-picture");
let navItems = document.querySelectorAll(".nav-item");

// sets default state of menu
let showMenu = false;

// toggles menu on user click
function toggleMenu() {
  console.log("toggled menu!");
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuPicture.classList.add("show");
    navItems.forEach(navItem => navItem.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuPicture.classList.remove("show");
    navItems.forEach(navItem => navItem.classList.remove("show"));

    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);
