const btnScrollToTop = document.querySelector("[data-menu-button]");

btnScrollToTop.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);
