import { all } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* root() {
  yield all([
    helloSaga()
  ]);
}
