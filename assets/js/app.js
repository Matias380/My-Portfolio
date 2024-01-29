document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar elementos del DOM
  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  const scrollUp = document.querySelector("#scroll-up");
  const navLink = document.querySelectorAll(".nav-link");

  // Hamburger menu function
  burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  // Close hamburger menu when a link is clicked
  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      ul.classList.remove("show");
    });
  });

  // Scroll to top functionality
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
