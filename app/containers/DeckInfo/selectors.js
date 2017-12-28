import { createSelector } from 'reselect';

const selectDecks = (state) => state.get('Decks');
const selectDeckInfo = (state) => state.get('DeckInfo');

const makeSelectDeck = () => createSelector(
  selectDecks,
  selectDeckInfo,
  (decksState, infoState) => decksState.getIn(['decks',
    infoState.get('selectedDeck')]));


export {
  selectDecks,
  selectDeckInfo,
  makeSelectDeck,
};
