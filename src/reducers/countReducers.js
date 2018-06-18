import * as ActionTypes from 'constants/types';
import { initialState } from 'constants/initialState';

const countReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case ActionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case ActionTypes.RESET:
      return Object.assign({}, state, {
        count: initialState.count.count
      });

    default: return state
  }
}

export default countReducers;
