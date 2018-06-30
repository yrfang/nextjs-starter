import { all, fork } from 'redux-saga/effects';
import hello from './hello';
import clock from './clock';
import next from './next';

function* rootSaga() {
  yield all([
    fork(hello),
    fork(clock),
    fork(next)
  ])
}

export default rootSaga;
