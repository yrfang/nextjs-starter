import { all } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

function* hello() {
  yield all([
    helloSaga()
  ]);
}

export default hello;
