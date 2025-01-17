import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
