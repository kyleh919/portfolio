// query selectors
let menuBtn = document.querySelector(".menu-btn");

// sets default state of menu
let showMenu = false;

// toggles menu on user click
function toggleMenu() {
  console.log("toggled menu!");
  if (!showMenu) {
    menuBtn.classList.add("close");
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);
