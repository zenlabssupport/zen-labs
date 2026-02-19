window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
