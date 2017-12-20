import { takeEvery, put } from 'redux-saga/effects';

import { FETCH_DECKS } from './constants';
import { storeMock } from './actions';
import mock from '../../utils/mock';

const fetchDecks = function* fetchDecks(action) {
  yield put(storeMock(mock));
}

const decksSaga = function* decksSaga() {
  yield takeEvery(FETCH_DECKS, fetchDecks);
}

export default decksSaga;
