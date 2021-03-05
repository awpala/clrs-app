import { combineReducers } from 'redux';
import pseudocodeReducer from './pseudocode';
import memoryReducer from './memory';
import controlsReducer from './controls';

const rootReducer = combineReducers({
  pseudocode: pseudocodeReducer,
  memory: memoryReducer,
  controls: controlsReducer,
});

export default rootReducer;