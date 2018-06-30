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
    type: actionTypes.START_CLOCK
  }
}

export function tickClock(isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}
