"use strict";

//SECRECT RANDOM NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage("⚠️ Please enter a number!");
    // document.querySelector(".message").textContent = "⚠️ Please enter a number!";
  }

  //WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "👆 too high!" : "👇 too low!");
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "👆 too high!" : "👇 too low!";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "0";
      displayMessage("💀 Game Over!");
      // document.querySelector(".message").textContent = "💀 Game Over!";
    }
  }

  //WHEN GUESS IS TOO LOW
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "👇 too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = "0";
  //     document.querySelector(".message").textContent = "💀 Game Over!";
  //   }
  // }

  // //WHEN GUESS IS TOO HIGH
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "👆 too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".score").textContent = "0";
  //     document.querySelector(".message").textContent = "💀 Game Over!";
  //   }
  // }

  //WHEN PLAYER WINS
  else {
    displayMessage("🎉 Correct! 🎉");
    // document.querySelector(".message").textContent = "🎉 Correct!";
    document.querySelector(".number").textContent = `🏆 ${secretNumber} 🏆`;

    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "90rem";

    // HIGH SCORE
    // document.querySelector(".highscore").textContent = highscore + score;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      // } else {
      //   document.querySelector(".highscore").textContent = highscore + score;
    }
  }
});

//PLAY AGAIN
let turn = 1;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  turn++;
  document.querySelector(".turn").textContent = turn;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = `?`;
  // document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});
