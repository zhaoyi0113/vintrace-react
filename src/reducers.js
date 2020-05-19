import { combineReducers } from 'redux';
import { wineryData } from './data';

const rawData = wineryData;

const winery = (state = { wineryData }, action) => {
  if (action.type === 'search') {
    console.log('action:', action, state);
    if (!action.text) {
      return rawData;
    }
    const filtered = state.filter(
      (winery) =>
        (winery.lotCode && winery.lotCode.includes(action.text)) ||
        (winery.description && winery.description.includes(action.text)),
    );
    return filtered;
  }
  return state;
};

export const rootReducer = combineReducers({
  wineryData: winery,
});
