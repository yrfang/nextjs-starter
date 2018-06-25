import * as ActionTypes from 'constants/types';
import { initialState } from 'constants/initialState';

const textInitialState = initialState.get('text');

const textReducers = (state = textInitialState, action) => {
  // switch (action.type) {
    // case ActionTypes.INCREMENT:
    //   return state.merge({
    //     count: state.get('count') + 1
    //   });

  //   default: return state
  // }
  return state;
}

export default textReducers;
