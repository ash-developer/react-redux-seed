import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

function* timeout() {
  yield put({
    type: actionTypes.ACTION1_TYPE, value: 8
  });

  yield call(function* () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  });

  yield put({
    type: actionTypes.ACTION1_TYPE, value: -1
  });
}

export default function* saga() {
  yield* takeEvery(actionTypes.TIMEOUT_REQUESTED_TYPE, timeout);
}
