const arrow = document.querySelector(".aside-small-arrow");
const asideFull = document.querySelector(".aside-full");
const main = document.querySelector(".main");

const toggleAside = () => {
  asideFull.classList.toggle("aside-full-hidden");
};

const closeAside = (e) => {
  if (e.target !== e.curentTarget) asideFull.classList.add("aside-full-hidden");
};

arrow.addEventListener("click", toggleAside);
main.addEventListener("click", closeAside);
