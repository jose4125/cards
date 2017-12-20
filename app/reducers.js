import { combineReducers } from 'redux-immutable';

// import the reducers
import global from './global.reducer';
import home from './screens/Decks/reducer';

export default combineReducers({
  global,
  home,
});
