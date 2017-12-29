import { takeEvery, put, call } from 'redux-saga/effects';

import { SEND_DECK } from './constants';
import { changeSaved } from './actions';

import { saveDeckTitle } from '../../utils/api';

const sendDeck = function* sendDeck(action) {
  yield call(saveDeckTitle, action.deck);
  yield put(changeSaved());
  //console.log('decks =====', decks || []);
  //yield put(storeData(JSON.parse(decks)));
}

const deckFormSaga = function* decksSaga() {
  yield takeEvery(SEND_DECK, sendDeck);
}

export default deckFormSaga;
