import { combineReducers } from 'redux-immutable';
import countReducers from './countReducers';
import textReducers from './textReducers';

const rootReducer = combineReducers({
  count: countReducers,
  text: textReducers
});

export default rootReducer;
