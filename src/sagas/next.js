import { all, call, put, take, takeLatest } from 'redux-saga/effects';

import * as actionTypes from 'constants/types';
import { failure, loadDataSuccess } from 'actions/nextActions';
import { fetchNextData } from 'api/next';

function* loadDataSaga() {
  try {
    const res = yield call(fetchNextData);
    yield put(loadDataSuccess(res));
  } catch (err) {
    yield put(failure(err));
  }
}

function* next() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ])
}

export default next;
