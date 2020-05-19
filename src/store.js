import { createStore } from 'react-redux';

import {rootReducer} from './reducers';

export const store = createStore(rootReducer);
