import { createSelector } from 'reselect';

const selectDecks = (state) => state.get('Decks');
const selectGlobal = (state) => state.get('global');

const makeSelectDecks = () => createSelector(
  selectDecks,
  decksState => {
    return decksState.get('decks').toArray();
  });

const makeSelectSaved = () => createSelector(
  selectGlobal,
  globalState => {
    return globalState.get('saved');
  });


export {
  selectDecks,
  makeSelectDecks,
  makeSelectSaved,
};
