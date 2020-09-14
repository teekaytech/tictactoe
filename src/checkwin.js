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

export default WinCond;
