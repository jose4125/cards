import { fromJS, List } from 'immutable';
import { SET_ACTIVITIES } from './constants';

const initialState = fromJS({
  activities: List([]),
});

function ActivityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      return state
        .set('activities', action.activities);
    default:
      return state;
  }
}

export default ActivityReducer;
