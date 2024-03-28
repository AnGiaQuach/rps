"use strict";

const numberOfChoice = 3;
const choiceValue = {
  1: "rock",
  2: "paper",
  3: "scissors",
};

const rule = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function computerRandomChoice() {
  let choice = Math.floor(Math.random() * numberOfChoice + 1);
  return choiceValue[choice];
}

function checking(playerChoice, computer) {
  const winner = document.querySelector(".winner");
  winner.setAttribute("style", "color:black");

  if (rule[playerChoice] == computer) {
    winner.textContent = "You win";
    winner.setAttribute("style", "color:red");
    console.log("You win");
  } else if (playerChoice == computer) {
    winner.textContent = "No player win, tie";
    winner.setAttribute("style", "color:green");
    console.log("tie");
  } else {
    winner.textContent = "Computer win!";
    winner.setAttribute("style", "color:blue");
    console.log("u lose");
  }
}

let playerChoice = "";

let computerElement = document.querySelector(".computer-choice");

const playerButton = document.querySelectorAll(".player");
for (const button of playerButton) {
  button.addEventListener("click", function () {
    playerChoice = button.id;
    const computer = computerRandomChoice();
    computerElement.textContent = computer;

    checking(playerChoice, computer);
  });
}
