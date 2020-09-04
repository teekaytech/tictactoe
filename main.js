import {
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
} from "./dom.js"; /*eslint-disable-line */

restart.id = "restart";
restart.class = "restart";
restart.textContent = "Restart";

const Player = (name, mark, score) => {
  return { name, mark, score };
};

const GameBoard = () => {
  let moves = ["", "", "", "", "", "", "", "", ""];

  const showBoard = () => {
    return (tictactoebord.style.display = "inline-block");
  };

  return { moves, showBoard };
};

const Checkwin = (board, mark) => {
  const ismatch = (val) => val === mark;
  return board.every(ismatch);
};
const WinCond = (board, mark) => {
  const con1 = Checkwin(board.slice(0, 3), mark);
  const con2 = Checkwin(board.slice(3, 6), mark);
  const con3 = Checkwin(board.slice(6, 9), mark);
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
  const render = () => {
    for (let index = 0; index < cells.length; index++) {
      cells[index].innerHTML = board[index];
    }
  };

  const makeMove = (cell, mark) => {
    if (board[cell.id] === "") {
      board[cell.id] = mark;
      render();
      return board;
    } else {
      return board;
    }
  };

  const validateMove = (cells, players) => {
    let player = 0;
    cells.forEach((cell) => {
      cell.addEventListener("click", function () {
        if (cell.innerHTML.length == 0) {
          board = makeMove(cell, players[player].mark);
          if (WinCond(board, players[player].mark)) {
            movehtml.innerHTML = `Game Over!!! ${players[player].name} Won`;
            mainContainer.appendChild(restart);
            tictactoebord.style.display = "none";
            board = GameBoard().moves;
            players[player].score += 1;
            showScore(players);
            restart.style.display = "inline-block";
          } else if (
            !WinCond(board, players[player].mark) &&
            board.includes("")
          ) {
            player === 0 ? (player = 1) : (player = 0);
            movehtml.innerHTML = `now it ${players[player].name} turn`;
          } else {
            tictactoebord.style.display = "none";
            movehtml.innerHTML = " it a draw better luck next match!";
            board = GameBoard().moves;
            mainContainer.appendChild(restart);
            restart.style.display = "inline-block";
          }
        } else {
          movehtml.innerHTML = "Invalid move";
        }
      });
    });
  };

  return { render, validateMove };
};
const showScore = (players_lis) => {
  player1_score.innerHTML = `${players_lis[0].name} score : ${players_lis[0].score}`;
  player2_score.innerHTML = `${players_lis[1].name} score : ${players_lis[1].score}`;
};

startGame.addEventListener("click", function (e) {
  e.preventDefault();
  let players_lis = [];
  let board = GameBoard();
  players_lis.push(Player(players[0].value, "X", 0));
  players_lis.push(Player(players[1].value, "O", 0));
  movehtml.innerHTML = `hello players , ${players_lis[0].name} will play with ${players_lis[0].mark} 
  and ${players_lis[1].name} will play with ${players_lis[1].mark}`;
  movehtml.style.padding = "10px";
  let game = gameController(board.moves);
  board.showBoard();
  game.render();
  game.validateMove(cells, players_lis);
  form.style.display = "none";
  showScore(players_lis);
});

restart.addEventListener("click", function (e) {
  e.preventDefault();
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.innerText = "";
  });
  let board = GameBoard();
  board.showBoard();
  movehtml.innerHTML = "let start again";
  restart.style.display = "none";
});
