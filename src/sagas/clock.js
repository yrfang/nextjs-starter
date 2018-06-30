import { delay } from 'redux-saga';
import { all, call, put, take, takeLatest } from 'redux-saga/effects';

import * as actionTypes from 'constants/types';
import { tickClock } from 'actions/clockActions';

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* clock() {
  yield all([
    call(runClockSaga)
  ]);
}

export default clock;
