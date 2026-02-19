window.addEventListener("load", () => {
  document.querySelectorAll(".home-anim").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 180);
  });
});
