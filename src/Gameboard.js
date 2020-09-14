const GameBoard = (tictactoebord) => {
  const moves = ['', '', '', '', '', '', '', '', ''];

  const showBoard = () => {
    tictactoebord.className = 'board';
  };

  return { moves, showBoard };
};

export default GameBoard;
