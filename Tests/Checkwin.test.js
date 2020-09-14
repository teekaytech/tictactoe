import WinCond, { itDraw } from '../src/checkwin';

const con1 = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
const con2 = ['O', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'];
test('it return false when the move is not a winning one', () => {
  expect(WinCond(con2, 'X')).toBe(false);
});
test('it return true when the move is a winning one', () => {
  expect(WinCond(con1, 'X')).toBe(true);
});
test('it draw when the board is full and no one won', () => {
  expect(itDraw(con2, 'X')).toBe(true);
});
