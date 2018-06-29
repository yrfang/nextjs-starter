import * as actionTypes from 'constants/types';
import { initialState } from 'constants/initialState';

const countInitialState = initialState.get('count');

const countReducers = (state = countInitialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state.merge({
        count: state.get('count') + 1
      });
    case actionTypes.DECREMENT:
      return state.merge({
        count: state.get('count') - 1
      });
    case actionTypes.RESET:
      return state.merge({
        count: countInitialState.get('count')
      });

    default: return state
  }
}

export default countReducers;
