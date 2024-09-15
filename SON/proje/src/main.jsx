import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Provider'ı buradan import et
import store from './store'; // Redux store'unu buradan import et
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
