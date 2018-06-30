import { combineReducers } from 'redux-immutable';
import countReducers from './countReducers';
import textReducers from './textReducers';
import clockReducers from './clockReducers';
import nextReducers from './nextReducers';

const rootReducer = combineReducers({
  count: countReducers,
  text: textReducers,
  clock: clockReducers,
  next: nextReducers
});

export default rootReducer;
