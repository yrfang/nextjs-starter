import * as actionTypes from 'constants/types';

// actions must be plain objects
export function incrementCount() {
  return { type: actionTypes.INCREMENT }
}

export function decrementCount() {
  return { type: actionTypes.DECREMENT }
}

export function resetCount() {
  return { type: actionTypes.RESET }
}
