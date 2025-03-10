"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

function showModalAndOverlay() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideModalAndOverlay() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", showModalAndOverlay);

btnCloseModal.addEventListener("click", hideModalAndOverlay);
overlay.addEventListener("click", hideModalAndOverlay);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    hideModalAndOverlay();
});
