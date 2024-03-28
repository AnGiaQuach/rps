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
  return choice;
}

let playerChoice = 1;
const computer = computerRandomChoice();
console.log(
  `player choice : ${choiceValue[playerChoice]}\ncomputer choice : ${choiceValue[computer]}`
);

if (rule[choiceValue[playerChoice]] == choiceValue[computer]) {
  console.log("You win");
} else if (choiceValue[playerChoice] == choiceValue[computer]) {
  console.log("tie");
} else {
  console.log("u lose");
}
