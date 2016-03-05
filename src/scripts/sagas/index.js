import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/types';

function* timeout() {
  yield put({
    type: actionTypes.ACTION1_TYPE, value: 8
  });

  try {
    yield call(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('qwe');
        }, 1000);
      });
    });
  } catch (error) {
    console.log(error);
  }

  yield put({
    type: actionTypes.ACTION1_TYPE, value: -1
  });
}

export default function* saga() {
  yield* takeEvery(actionTypes.TIMEOUT_REQUESTED_TYPE, timeout);
}
