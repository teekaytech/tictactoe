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
      console.log(board);
      render();
      return true;
    } else { return false; }
  }

  validateMove = (cells, move) => {
    for (const cell of cells) {
      cell.addEventListener('click', function() {
        return makeMove(cell, move) ? true : false;
      });
    }
  }

  return {render, validateMove}
}


const player1 = Player('player1', 'X');
const player2 = Player('player2', 'O');
const board = GameBoard();
const game = gameController(board.getMoves());
game.render();
game.validateMove(cells, 'A');