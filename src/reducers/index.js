import { combineReducers } from 'redux';
import pseudocodeReducer from './pseudocode';
import memoryReducer from './memory';

const rootReducer = combineReducers({
  pseudocode: pseudocodeReducer,
  memory: memoryReducer,
});

export default rootReducer;