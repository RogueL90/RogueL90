const jdgA = document.querySelectorAll(".jdg-a");
const faPlus = document.querySelectorAll(".fa-plus");
const valid = [];

const createHandler = (i) => {
  return () => {
    if (valid[i]) {
      faPlus[i].style =
        "-webkit-transform: rotate(45deg); transform: rotate(45deg);";
    } else {
      faPlus[i].style = "";
    }
    valid[i] = !valid[i];
  };
};

for ([i, item] of jdgA.entries()) {
  valid[i] = true;
  item.addEventListener("click", createHandler(i));
}

///////////////////////////////////////////////

const sideNav = document.querySelector(".jdg-side-nav");
const sideNavWidth = sideNav.offsetWidth;
const linksContainer = document.querySelector(".jdg-links-container");
const menuBtn = document.querySelector(".jdg-nav-menu-btn");
const body = document.querySelector("body");
const closeCatcher = document.querySelector(".jdg-close-catcher");
const sideNavLinks = document.querySelectorAll(".jdg-side-nav-link");

let screenWidth = window.innerWidth;

sideNav.style = `transform: translateX(${sideNavWidth}px);`;

if (screenWidth <= 750) {
  linksContainer.style = "display: none;";
} else {
  menuBtn.style = "display: none;";
}

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  if (screenWidth <= 750) {
    linksContainer.style = "display: none;";
    menuBtn.style = "";
  } else {
    linksContainer.style = "";
    menuBtn.style = "display: none;";
  }
});

menuBtn.addEventListener("click", () => {
  sideNav.style = `transform: translateX(0px);`;
  closeCatcher.style = "";
});

closeCatcher.addEventListener("click", () => {
  sideNav.style = `transform: translateX(${sideNavWidth}px);`;
  closeCatcher.style = "display: none;";
});

for (item of sideNavLinks) {
  item.addEventListener("click", () => {
    sideNav.style = `transform: translateX(${sideNavWidth}px);`;
    closeCatcher.style = "display: none;";
  });
}
