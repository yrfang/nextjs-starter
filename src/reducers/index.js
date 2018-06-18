import { combineReducers } from 'redux';
import countReducers from './countReducers';

const rootReducer = combineReducers({
  count: countReducers
});

export default rootReducer;
