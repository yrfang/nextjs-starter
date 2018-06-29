import { all, fork } from 'redux-saga/effects';
import hello from './hello';
import clock from './clock';

function* rootSaga() {
  yield all([
    fork(hello),
    fork(clock)
  ])
}

export default rootSaga;
