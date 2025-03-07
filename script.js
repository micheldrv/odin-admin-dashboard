window.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelector(".nav-buttons");
  document.querySelector("#menu").addEventListener("click", (event) => {
    console.log("hello");
    if (navButtons) {
      navButtons.classList.toggle("open");
    }
  });
});
