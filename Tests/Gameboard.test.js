import GameBoard from '../src/Gameboard';

test('it return a board', () => {
  expect(GameBoard().moves).toEqual(['', '', '', '', '', '', '', '', '']);
});
