import { createStore } from 'redux';
import { wineryData } from './data';
import { rootReducer } from './reducers';

const initialState = { wineryData };

export default createStore(rootReducer, initialState);
