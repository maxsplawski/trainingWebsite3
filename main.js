const navSlideIn = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burgerMenu.classList.toggle("toggle");
  });
};

navSlideIn();
