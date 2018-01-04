import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_DECKS } from './constants';
import { storeMock, storeData } from './actions';
import mock from '../../utils/mock';
import { getDecks, removeItem } from '../../utils/api';

const fetchDecks = function* fetchDecks(action) {
  //yield put(storeMock(mock));
  //yield call(removeItem)
  const response = yield call(getDecks);
  const decks = JSON.parse(response) || []
  yield put(storeData(decks));
}

const decksSaga = function* decksSaga() {
  yield takeEvery(FETCH_DECKS, fetchDecks);
}

export default decksSaga;
