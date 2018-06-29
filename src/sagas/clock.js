import { call, put, select, takeLatest, fork, all, take, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actionTypes from 'constants/types';
import { serverRenderClock, startClock, updateClock } from 'actions/clockActions';

export function* updateClockSaga(action) {
  try {
    while (true) {
      yield delay(800);
      yield put(updateClock());
    }
  }
  finally {
    console.log('out');
  }
}

export function* clockRootSaga() {
  try {
    while (true) {
      yield take(actionTypes.TICK);
      const clockUpdater = yield fork(updateClockSaga);
      /*
       * use maybe to stop saga either on STOP or END (for changing page)
       */
      yield take.maybe(actionTypes.STOP_TICK);
      yield cancel(clockUpdater);
    }
  }
  finally {
  }
}

export default function* root() {
  yield all([
    clockRootSaga()
  ]);
}
