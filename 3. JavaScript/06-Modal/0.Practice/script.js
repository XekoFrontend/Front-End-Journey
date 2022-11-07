"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const bntsOpenModal = document.querySelectorAll(".show-modal");
const bntCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < bntsOpenModal.length; i++) {
  bntsOpenModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

bntCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
