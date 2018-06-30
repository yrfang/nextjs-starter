import { fromJS } from 'immutable';

export const initialState = fromJS({
  count: {
    count: 0
  },
  text: {
    title: 'First Nextjs example with Redux'
  },
  clock: {
    lastUpdate: 0,
    light: false
  },
  next: {
    placeholderData: null
  }
});
