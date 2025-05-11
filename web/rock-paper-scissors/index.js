let resetBtn = document.getElementsByClassName("resetBtn")[0];
let printResult = document.getElementsByClassName("result")[0];
let choses = document.getElementsByClassName("choses")[0];
let score = document.getElementsByClassName("score")[0];
/////////////////////////////////////////////////////////////////
let objScore = {
  win: 0,
  lose: 0,
  tie: 0
};
if (localStorage.getItem("score") == null) {
  localStorage.setItem("score", JSON.stringify(objScore));
} else {
  objScore = JSON.parse(localStorage.getItem("score"));
}

function computerChoose() {
  let computer;
  let randomNum = Math.random();
  if (randomNum < 1 / 3) {
    computer = "rock";
  } else if (randomNum < 2 / 3) {
    computer = "paper";
  } else {
    computer = "scissors";
  }
  return computer;
}

function play(choice) {
  let computer = computerChoose();
  let result;
  if (
    (computer === "rock" && choice === "scissors") ||
    (computer === "scissors" && choice === "paper") ||
    (computer === "paper" && choice === "rock")
  ) {
    result = "Lose";
  } else if (
    (computer === "rock" && choice === "paper") ||
    (computer === "scissors" && choice === "rock") ||
    (computer === "paper" && choice === "scissors")
  ) {
    result = "Win";
  } else {
    result = "Tie";
  }
  printResult.innerText = result.toUpperCase();
  printResult.className = "result";
  printResult.classList.add(result);
  // console.log(result);
  choses.innerHTML = `
  You
  <img src="images/${choice}-emoji.png" alt="${choice}">
  Computer
  <img src="images/${computer}-emoji.png" alt="${computer}">
  `;
  calcScore(result);
  printScore();
}
function printScore() {
  score.innerHTML = `Wins:${objScore.win} Losses:${objScore.lose} Ties:${objScore.tie}`;
}
printScore();
function calcScore(result) {
  if (result === "Win") {
    objScore.win++;
  } else if (result === "Lose") {
    objScore.lose++;
  } else {
    objScore.tie++;
  }
  localStorage.setItem("score", JSON.stringify(objScore));
  // console.log(objScore);
}
function reset() {
  objScore = {
    win: 0,
    lose: 0,
    tie: 0
  };
  localStorage.setItem("score", JSON.stringify(objScore));
  printResult.innerText = "";
  choses.innerHTML = "";
  printScore();
}
