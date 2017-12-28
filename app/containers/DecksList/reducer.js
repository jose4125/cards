import { fromJS, Map } from 'immutable';

import { STORE_MOCK, STORE_DATA } from './constants';

const initialState = fromJS({
  decks: Map({}),
});

function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_MOCK:
      return state
        .set('decks', action.mock);
    case STORE_DATA:
      return state
        .set('decks', Map(action.decks));
    default:
      return state;
  }
}

export default HomeReducer;
