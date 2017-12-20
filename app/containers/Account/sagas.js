import { takeEvery, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'querystring';
import CryptoJs from "crypto-js";

import { createSignature } from '../../utils/signature';
import { GET_CONSUMER } from './constants';
import { setConsumer } from './actions';
import { makeSelectToken, makeSelectUserId } from './selectors';

const getConsumer = function* sendLogIn(action) {
  const token = yield select(makeSelectToken());
  const accountId = yield select(makeSelectUserId());


  const userUrl = `https://apidev.buzzpoints.com/consumer-api/consumers/${accountId}`;
  const signature = createSignature('GET', `/consumers/${accountId}`, '');

  const headers = {
    'x-signature': signature,
    Authorization: token,
    APIID: '32898f52433a4cc166495941934c5c6c',
  };

  try {
    const user = yield call(axios.get, userUrl, {headers});
    yield put(setConsumer(user.data.data));

  } catch (error) {
    yield put(errorLogin());
  }
};

const consumerSaga = function* logInSaga() {
  yield takeEvery(GET_CONSUMER, getConsumer);
};

export default consumerSaga;
