import { takeEvery } from 'redux-saga/effects';

const testSaga = function* testSaga(action) {
  console.log('TEST SAGA', action);
  yield;
}

const rootSaga = function* rootSaga() {
  yield takeEvery('TEST', testSaga);
}

export default rootSaga;
