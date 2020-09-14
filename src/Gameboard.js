const GameBoard = (tictactoebord) => {
  let moves = ['', '', '', '', '', '', '', '', ''];

  const showBoard = () => {
    return (tictactoebord.className = 'board');
  };

  return { moves, showBoard };
};

export default GameBoard;
