import { combineReducers } from 'redux-immutable';

// import the reducers
import global from './global.reducer';
import Decks from './containers/DecksList/reducer';

export default combineReducers({
  global,
  Decks,
});
