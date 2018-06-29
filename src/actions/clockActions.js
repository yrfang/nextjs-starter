import * as actionTypes from 'constants/types';

export function serverRenderClock(isServer) {
  return { 
    type: actionTypes._INIT_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}

export function startClock() {
  return {
    type: actionTypes.TICK,
    light: true,
    ts: Date.now()
  }
}

export function updateClock() {
  return {
    type: actionTypes.UPDATE_TICK,
    light: true,
    ts: Date.now()
  }
}
