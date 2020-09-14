import {
  mainContainer,
  cells,
  tictactoebord,
  movehtml,
  form,
  player1Score,
  player2Score,
  players,
  startGame,
  restart,
  displaymsg,
} from './dom.js'; /*eslint-disable-line */
import WinCond from './checkwin';
import Player from './Players';
import GameBoard from './Gameboard';

const showScore = (playersLis) => {
  player1Score.innerHTML = `${playersLis[0].name} score : ${playersLis[0].score}`;
  player2Score.innerHTML = `${playersLis[1].name} score : ${playersLis[1].score}`;
};
const gameController = (board) => {
  const render = () => {
    for (
      let index = 0;
      index < cells.length;
      index++ /*eslint-disable-line */
    ) {
      cells[index].innerHTML = board[index];
    }
  };

  const makeMove = (cell, mark) => {
    if (board[cell.id] === '') {
      board[cell.id] = mark;
      render();
      return board;
    }
    return board;
  };

  const validateMove = (cells, players) => {
    let player = 0;
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (cell.innerHTML.length === 0) {
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
            !WinCond(board, players[player].mark)
            && board.includes('')
          ) {
            player === 0 ? (player = 1) : (player = 0); /*eslint-disable-line */
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

startGame.addEventListener('click', (e) => {
  e.preventDefault();
  const playersLis = [];
  const board = GameBoard(tictactoebord);
  playersLis.push(Player(players[0].value, 'X', 0));
  playersLis.push(Player(players[1].value, 'O', 0));
  displaymsg(`hello players , ${playersLis[0].name} will play with ${playersLis[0].mark}
  and ${playersLis[1].name} will play with ${playersLis[1].mark}`);
  movehtml.style.padding = '10px';
  const game = gameController(board.moves);
  board.showBoard();
  game.render();
  game.validateMove(cells, playersLis);
  form.className = 'none';
  showScore(playersLis);
});

restart.addEventListener('click', (e) => {
  e.preventDefault();
  cells.forEach((cell) => {
    cell.innerHTML = '';
    cell.innerText = '';
  });
  const board = GameBoard(tictactoebord);
  board.showBoard();
  displaymsg('let start again');
  restart.className = 'none';
});
