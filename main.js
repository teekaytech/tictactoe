const parent = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');

const Player = (name, mark) => {
  return {name, mark}
}


const GameBoard = () => {
  moves = ['', '', '', '', '', '', '', '', ''];

  getMoves = () => {
    return moves;
  }

  clear = () => {

  }

  update = () => {

  }

  return {getMoves, clear, update}
}

const gameController = (board) => {
  render = () => {
    for (let index = 0; index < cells.length; index++) {
      cells[index].textContent = board[index];
    }
  }

  checkMove = (cell) => {
    return cell.innerHTML = '' ? false : true
  }

  makeMove = (cell, mark) => {
    if (board[cell.id] === '') {
      board[cell.id] = mark;
      render();
      return true;
    } else { return false; }
  }

  return {render, makeMove}
}


const board = GameBoard();
const game = gameController(board.getMoves());
game.render();

for (const cell of cells) {
  cell.addEventListener('click', function() {
    return makeMove(cell, 'A') ? true : false;
  });
}
