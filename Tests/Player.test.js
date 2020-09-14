import Player from '../src/Players';

test('it return the player name,mark and score', () => {
  expect(Player('rida', 'X', 0)).toEqual({ name: 'rida', mark: 'X', score: 0 });
});
