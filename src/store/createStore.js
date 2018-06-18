import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'reducers';
import { initialState } from 'constants/initialState';

export function initializeStore(preloadState = initialState) {
  return createStore(
    rootReducer,
    preloadState,
    applyMiddleware(thunkMiddleware, createLogger)
  );
}
