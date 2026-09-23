const html = document.documentElement;
let theme = localStorage.getItem("theme") || "light";
html.dataset.theme = theme;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById(`theme-${theme}`).checked = true;

  document.querySelector(".theme-switch").addEventListener("change", ({ target }) => {
    html.dataset.theme = theme = target.value;
    localStorage.setItem("theme", target.value);
  });

  const moreButton = document.querySelector(".catalogue__more");
  const cards = document.querySelector(".catalogue__cards");

  if (moreButton && cards) {
    moreButton.addEventListener("click", () => {
      cards.classList.add("catalogue__cards--expanded");
    });
  }
});
