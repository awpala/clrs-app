import { combineReducers } from 'redux';
import pseudocodeReducer from './pseudocode';

const rootReducer = combineReducers({
  pseudocode: pseudocodeReducer,
});

export default rootReducer;