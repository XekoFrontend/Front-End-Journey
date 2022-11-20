"use strict";

const score0El = document.querySelector("#score--0"); //El means Element
const score1El = document.getElementById("score--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;

  //3. Check for rolled 1. If true, switch to next player
});
