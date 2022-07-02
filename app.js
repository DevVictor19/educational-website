function app() {
  const barsMenu = document.getElementById("bars-menu");
  const xMenu = document.getElementById("x-menu");
  const menuMobile = document.querySelector(".section__home-mobileWrapper");
  const menuItems = document.querySelectorAll(
    ".section__home-items__mobile li"
  );

  const fadeIn = () => {
    menuMobile.style.display = "block";
    setTimeout(() => {
      menuMobile.style.opacity = 1;
      barsMenu.style.display = "none";
      xMenu.style.display = "block";
    });
  };

  const fadeOut = () => {
    setTimeout(() => {
      menuMobile.style.opacity = 0;
      xMenu.style.display = "none";
      barsMenu.style.display = "block";
      setTimeout(() => {
        menuMobile.style.display = "none";
      }, 500);
    });
  };

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", fadeOut);
  }

  barsMenu.addEventListener("click", fadeIn);
  xMenu.addEventListener("click", fadeOut);
}

app();
