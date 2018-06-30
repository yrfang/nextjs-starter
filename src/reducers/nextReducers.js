import * as actionTypes from 'constants/types';
import { initialState } from 'constants/initialState';

const nextInitialState = initialState.get('next');

const nextReducers = (state = nextInitialState, action) => {
  switch (action.type) {
    case actionTypes.FAILURE:
      return state.merge({
        error: action.error
      });
    case actionTypes.LOAD_DATA_SUCCESS:
      return state.merge({
        placeholderData: action.data
      })

    default: return state
  }
}

export default nextReducers;
