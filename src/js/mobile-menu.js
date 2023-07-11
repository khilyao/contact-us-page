(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-active");
    document.body.classList.toggle("menu-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
  });
})();
