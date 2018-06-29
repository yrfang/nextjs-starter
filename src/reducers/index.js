import { combineReducers } from 'redux-immutable';
import countReducers from './countReducers';
import textReducers from './textReducers';
import clockReducers from './clockReducers';

const rootReducer = combineReducers({
  count: countReducers,
  text: textReducers,
  clock: clockReducers
});

export default rootReducer;
