import { fromJS } from 'immutable';

import { SELECTED_QUESTION } from './constants';

const initialState = fromJS({
  selectedQuestion: 0,
});

function questionInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_QUESTION:
      return state
        .set('selectedQuestion', action.index);
    default:
      return state;
  }
}

export default questionInfoReducer;