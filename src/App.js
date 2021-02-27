import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import InsertionSort from './pseudocode/p018InsertionSort/InsertionSort';
import Controls from './controls/Controls';
import './App.css';
import './App.scss';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // optional argument to visualize Redux store's state in browser Redux Dev Tools
)

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <InsertionSort />
        <Controls />
      </div>
    </Provider>
  );
}

export default App;
