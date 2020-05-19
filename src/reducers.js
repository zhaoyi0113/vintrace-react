import { combineReducers } from 'redux';
import { wineryData } from './data';

const rawData = wineryData;

const winery = (state = { wineryData }, action) => {
  if (action.type === 'search') {
    if (!action.text) {
      return rawData;
    }
    return state.filter(
      (winery) =>
        (winery.lotCode && winery.lotCode.toLowerCase().includes(action.text.toLowerCase())) ||
        (winery.description && winery.description.toLowerCase().includes(action.text.toLowerCase())),
    );
  }
  return state;
};

export const rootReducer = combineReducers({
  wineryData: winery,
});
