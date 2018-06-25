import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import { initialState } from 'constants/initialState';

const stateLogger = createLogger({ stateTransformer: state => state.toJS() });

export const initStore = (preloadState = initialState) => {
  return createStore(
    rootReducer,
    preloadState,
    applyMiddleware(thunkMiddleware, stateLogger)
  );
}
