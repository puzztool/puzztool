import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../Store/configureStore';
import AutokeyStream from './AutokeyStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const { store } = configureStore();
  
  ReactDOM.render(
    <Provider store={store}>
      <AutokeyStream prompt="Type here" />
    </Provider>,
    div);
});
