const mainContainer = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
const tictactoebord = document.querySelector("#board");
const movehtml = document.querySelector(".move");
const form = document.querySelector("#form");
const player1_score = document.querySelector("#player1_score");
const player2_score = document.querySelector("#player2_score");

const players = document.querySelectorAll(".player");
const startGame = document.getElementById("start");

const restart = document.createElement("button");
restart.id = "restart";
restart.className = "restart";
restart.textContent = "Restart";

const displaymsg = (msg) => {
  movehtml.innerHTML = msg;
};
export {
  mainContainer,
  cells,
  tictactoebord,
  movehtml,
  form,
  player1_score,
  player2_score,
  players,
  startGame,
  restart,
  displaymsg,
};
