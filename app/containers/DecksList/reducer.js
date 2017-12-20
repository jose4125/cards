import { fromJS, Map } from 'immutable';

import { STORE_MOCK } from './constants';

const initialState = fromJS({
  decks: Map({}),
});

function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_MOCK:
      return state
        .set('decks', action.mock);
    default:
      return state;
  }
}

export default HomeReducer;
