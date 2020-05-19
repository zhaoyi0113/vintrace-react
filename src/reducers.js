import { combineReducers } from 'redux'

const winery = (state, action) => {
  if (typeof state === 'undefined') {
    state = 0 // If state is undefined, initialize it with a default value
  }
  return state;
}

export const rootReducer = combineReducers({
  wineryData: winery
});
