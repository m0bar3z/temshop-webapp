import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './helpers'
import { Provider } from 'react-redux'; 

import './assets/styles/myBootstrap.css'
import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

