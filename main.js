const mainContainer = document.querySelector(".container");
let cells = document.querySelectorAll(".cell");
const tictactoebord = document.querySelector(".board");
const movehtml = document.querySelector(".move");

const Player = (name, mark) => {
  return { name, mark };
};

const GameBoard = () => {
  let moves = ["", "", "", "", "", "", "", "", ""];

  getMoves = () => {
    return moves;
  };

  showBoard = () => {
    return (tictactoebord.style.display = "block");
  };

  clear = () => {
    return (moves = ["", "", "", "", "", "", "", "", ""]);
  };

  return { getMoves, clear, showBoard };
};

const Checkwin = (board, mark) => {
  const ismatch = (val) => val === mark;
  return board.every(ismatch);
};
const WinCond = (board, mark) => {
  const con1 = Checkwin(board.slice(0, 3), mark);
  const con2 = Checkwin(board.slice(3, 6), mark);
  const con3 = Checkwin(board.slice(5, 9), mark);
  const con4 = Checkwin([board[0], board[3], board[6]], mark);
  const con5 = Checkwin([board[1], board[4], board[7]], mark);
  const con6 = Checkwin([board[2], board[5], board[8]], mark);
  const con7 = Checkwin([board[0], board[4], board[8]], mark);
  const con8 = Checkwin([board[2], board[4], board[6]], mark);
  function checktrue(index) {
    return index === true;
  }
  return [con1, con2, con3, con4, con5, con6, con7, con8].some(checktrue);
};

const gameController = (board) => {
  render = () => {
    for (let index = 0; index < cells.length; index++) {
      cells[index].innerHTML = board[index];
    }
  };

  makeMove = (cell, mark) => {
    if (board[cell.id] === "") {
      board[cell.id] = mark;
      console.log(board);
      render();
      return board;
    } else {
      return board;
    }
  };

  validateMove = (cells, markstart) => {
    let mark = markstart;
    cells.forEach((cell) => {
      cell.addEventListener("click", function () {
        console.log(cell.id);
        if (cell.innerHTML.length == 0) {
          console.log(cell.id);
          board = makeMove(cell, mark);
          if (WinCond(board, mark)) {
            movehtml.innerHTML = "Game Over!!!";
            mainContainer.appendChild(restart);
            tictactoebord.style.display = "none";
            board = ["", "", "", "", "", "", "", "", ""];
          } else if (!WinCond(board, mark) && board.includes("")) {
            mark === "X" ? (mark = "O") : (mark = "X");
            console.log(mark);
            movehtml.innerHTML = "change turn";
          } else {
            console.log("draw");
          }
        } else {
          movehtml.innerHTML = "Invalid move";
        }
      });
    });
  };

  return { render, validateMove };
};

const gameInit = (board, player) => {
  let game = gameController(board.getMoves());
  board.showBoard();
  game.render();
  game.validateMove(cells, player.mark);

  return {};
};

const players = document.querySelectorAll(".player");
const startGame = document.getElementById("start");
const restart = document.createElement("button");
restart.id = "restart";
restart.class = "restart";
restart.textContent = "Restart";

startGame.addEventListener("click", function (e) {
  e.preventDefault();

  let board = GameBoard();
  let player1 = Player(players[0].value, "X");
  let player2 = Player(players[1].value, "O");

  gameInit(board, player1);
});

restart.addEventListener("click", function (e) {
  e.preventDefault();
  // board = GameBoard();

  // console.log(board.clear());
  cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.innerText = "";
  });
  let board = GameBoard();
  let game = gameController(board.clear());
  board.showBoard();
});
