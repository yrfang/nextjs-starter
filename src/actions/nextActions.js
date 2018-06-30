import * as actionTypes from 'constants/types';

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function loadData() {
  return { 
    type: actionTypes.LOAD_DATA
  }
}

export function loadDataSuccess(data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}
