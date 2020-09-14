const GameBoard = (tictactoebord) => {
  let moves = ['', '', '', '', '', '', '', '', ''];

  const showBoard = () => {
    tictactoebord.className = 'board';
  };

  return { moves, showBoard };
};

export default GameBoard;
