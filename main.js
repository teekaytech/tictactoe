const parent = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
const tictactoebord = document.querySelector(".board");
const movehtml = document.querySelector(".move");
const Player = (name, mark) => {
  return { name, mark };
};

const GameBoard = () => {
  moves = ["", "", "", "", "", "", "", "", ""];

  getMoves = () => {
    return moves;
  };

  clear = () => {};

  return { getMoves, clear };
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
      cells[index].textContent = board[index];
    }
  };

  checkMove = (cell) => {
    return cell.innerHTML === "" ? true : false;
  };

  makeMove = (cell, mark) => {
    if (board[cell.id] === "") {
      board[cell.id] = mark;
      console.log(board);
      render();
      return true;
    } else {
      return false;
    }
  };

  validateMove = (cells, markstart) => {
    let mark = markstart;
    cells.forEach((cell) => {
      cell.addEventListener("click", function () {
        if (checkMove(cell)) {
          makeMove(cell, mark) ? true : false;
          if (WinCond(board, mark)) {
            console.log("game over");
            tictactoebord.style.display = "none";
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
const player1 = Player("player1", "X");
const player2 = Player("player2", "O");
const board = GameBoard();
const game = gameController(board.getMoves());
game.render();
game.validateMove(cells, player1.mark);
