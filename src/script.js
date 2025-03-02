// Scroll Fixed Navbar

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed-navbar");
  } else {
    header.classList.remove("fixed-navbar");
  }
};

// Hamburger Menu

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("opacity-100");
});

// Dark mode

const darkMode = document.querySelector("#dark-mode");
const dark = document.querySelector("html");

if (localStorage.getItem("theme") === "dark") {
  dark.classList.add("dark");
}

darkMode.addEventListener("click", () => {
  dark.classList.toggle("dark");

  if (dark.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// const duaMode = darkMode.children;
// let index = 0;
// const sunIcon = document.querySelector("#sun-icon");
// const moonIcon = document.querySelector("#moon-icon");

// sunIcon.addEventListener("click", () => {
//   if (index < duaMode.length - 1) {
//     index++;
//     darkMode.style.transform = `translateX(-${index * 100}%)`;
//   }
// });
// moonIcon.addEventListener("click", () => {
//   if (index > 0) {
//     index--;
//     darkMode.style.transform = `translateX(-${index * 100}%)`;
//   }
// });
// if (document.documentElement.classList.contains("dark")) {
//   sunIcon.classList.add("-translate-y-full", "opacity-0");
//   moonIcon.classList.remove("translate-y-full", "opacity-0");
// } else {
//   moonIcon.classList.add("translate-y-full", "opacity-0");
//   sunIcon.classList.remove("-translate-y-full", "opacity-0");
// }
