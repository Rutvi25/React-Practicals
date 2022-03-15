import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import store from '../src/store'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
