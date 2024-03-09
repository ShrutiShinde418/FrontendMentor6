const accordions = document.querySelectorAll("article");

accordions.forEach((accordion) => {
  const openBtn = accordion.querySelector(".open");
  const closeBtn = accordion.querySelector(".close");
  openBtn.addEventListener("click", () => {
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove("active");
      }
    });
    accordion.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    accordion.classList.remove("active");
  });
});
