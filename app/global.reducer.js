import { fromJS } from 'immutable';
import { CHANGE_SAVED } from './containers/NewDeckForm/constants';

const initialState = fromJS({
  loading: false,
  saved: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SAVED:
      return state
        .set('saved', !state.get('saved'));
    default:
      return state;
  }
}

export default globalReducer;
