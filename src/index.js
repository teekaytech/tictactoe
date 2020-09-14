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
  displaymsg,
} from './dom.js'; /*eslint-disable-line */
import WinCond from './checkwin';
import Player from './Players';
import GameBoard from './GameBoard';

const gameController = (board) => {
  const render = () => {
    for (let index = 0; index < cells.length; index++) {
      cells[index].innerHTML = board[index];
    }
  };

  const makeMove = (cell, mark) => {
    if (board[cell.id] === '') {
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
      cell.addEventListener('click', function () {
        if (cell.innerHTML.length == 0) {
          board = makeMove(cell, players[player].mark);
          if (WinCond(board, players[player].mark)) {
            displaymsg(`Game Over!!! ${players[player].name} Won`);
            mainContainer.appendChild(restart);
            tictactoebord.className = 'none';
            board = GameBoard(tictactoebord).moves;
            players[player].score += 1;
            showScore(players);
            restart.className = 'display';
          } else if (
            !WinCond(board, players[player].mark) &&
            board.includes('')
          ) {
            player === 0 ? (player = 1) : (player = 0);
            displaymsg(`now it ${players[player].name} turn`);
          } else {
            tictactoebord.className = 'none';
            displaymsg(' it a draw better luck next match!');
            board = GameBoard(tictactoebord).moves;
            mainContainer.appendChild(restart);
            restart.className = 'display';
          }
        } else {
          displaymsg('Invalid move');
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

startGame.addEventListener('click', function (e) {
  e.preventDefault();
  let players_lis = [];
  let board = GameBoard(tictactoebord);
  players_lis.push(Player(players[0].value, 'X', 0));
  players_lis.push(Player(players[1].value, 'O', 0));
  displaymsg(`hello players , ${players_lis[0].name} will play with ${players_lis[0].mark}
  and ${players_lis[1].name} will play with ${players_lis[1].mark}`);
  movehtml.style.padding = '10px';
  let game = gameController(board.moves);
  board.showBoard();
  game.render();
  game.validateMove(cells, players_lis);
  form.className = 'none';
  showScore(players_lis);
});

restart.addEventListener('click', function (e) {
  e.preventDefault();
  cells.forEach((cell) => {
    cell.innerHTML = '';
    cell.innerText = '';
  });
  let board = GameBoard(tictactoebord);
  board.showBoard();
  displaymsg('let start again');
  restart.className = 'none';
});
