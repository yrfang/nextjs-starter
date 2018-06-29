import { initialState } from 'constants/initialState';

const textInitialState = initialState.get('text');

const textReducers = (state = textInitialState, action) => {
  return state;
}

export default textReducers;
