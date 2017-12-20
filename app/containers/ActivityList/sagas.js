import { takeEvery, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import qs from 'querystring';

import { GET_ACTIVITIES } from './constants';
import { setActivities } from './actions';
import { makeSelectToken, makeSelectUserId } from '../Account/selectors';

const getActivities = function* sendLogIn(action) {
  const token = yield select(makeSelectToken());
  const accountId = yield select(makeSelectUserId());
  const activitiesUrl = `https://apidev.buzzpoints.com/consumer-api/consumers/${accountId}/activities`;

  const headers = {
    'x-signature': 'HmacSHA512 +/gd/C+wRY3OMdf+u320LiOm6AUYE9Uk+OLGkSRCrnKdh9dwV0lkEVN3n8M5KGAhdDqTvuaLPW34cAr8x4YtCQ==',
    Authorization: token,
    APIID: '32898f52433a4cc166495941934c5c6c',
  };

  try {
    const activities = yield call(axios.get, activitiesUrl, {headers})
    yield put(setActivities(activities.data.data));
  } catch (error) {
    yield put(errorLogin());
  }
};

const activitySaga = function* logInSaga() {
  yield takeEvery(GET_ACTIVITIES, getActivities);
};

export default activitySaga;
