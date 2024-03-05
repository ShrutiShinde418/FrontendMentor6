console.log("connected1");
const openButtons = document.querySelectorAll(".open");
const closeButtons = document.querySelectorAll(".close");
const accordionBody = document.querySelectorAll(".accordion__body");

for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", () => {
    accordionBody[i].classList.add("active");
    openButtons[i].classList.add("active");
    closeButtons[i].classList.add("active");
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", () => {
    accordionBody[i].classList.remove("active");
    closeButtons[i].classList.remove("active");
    openButtons[i].classList.remove("active");
  });
}
