import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import * as actionTypes from 'constants/types';
import { failure, loadDataSuccess } from 'actions/nextActions';

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const res = yield fetch('https://api.github.com/repos/zeit/next.js')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* next() {
  yield all([
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ])
}

export default next;
