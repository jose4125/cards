import { createSelector } from 'reselect';

const selectDecks = (state) => state.get('Decks');

const makeSelectDecks = () => createSelector(
  selectDecks,
  decksState => {
    const decks = decksState.get('decks');
    console.log('decks', decks)
    const decksArr = Object.keys(decks).map(item => decks[item]);
    console.log('keys', decksArr);
    return decksArr;
  });


export {
  selectDecks,
  makeSelectDecks,
};
