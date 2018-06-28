import { all, fork } from 'redux-saga/effects';
import hello from './hello';

function* rootSaga() {
  yield all([
    fork(hello)
  ])
}

export default rootSaga;
