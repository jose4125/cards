import { fromJS } from 'immutable';

import { SELECTED_DECK } from './constants';

const initialState = fromJS({
  selectedDeck: '',
});

function deckInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_DECK:
      return state
        .set('selectedDeck', action.key);
    default:
      return state;
  }
}

export default deckInfoReducer;
