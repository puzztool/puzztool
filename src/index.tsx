import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import { Router } from 'react-router-dom';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || '';
const history = createBrowserHistory({ basename: baseUrl });

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'));

serviceWorker.register();
