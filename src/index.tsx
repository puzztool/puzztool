import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './Store/configureStore';
import './index.scss';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || '';
const history = createBrowserHistory({ basename: baseUrl });
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'));

serviceWorker.register();
