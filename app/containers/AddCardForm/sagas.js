import { takeEvery, put, call } from 'redux-saga/effects';

import { SEND_CARD } from './constants';
import { changeSaved } from './actions';

import { addCardToDeck } from '../../utils/api';

const sendCard = function* sendCard(action) {
  yield call(addCardToDeck, action.card, action.deckKey);
  yield put(changeSaved());
}

const cardFormSaga = function* cardFormSaga() {
  yield takeEvery(SEND_CARD, sendCard);
}

export default cardFormSaga;
