import React from 'react';
import ReactDOM from 'react-dom';
import Semaphore from './Semaphore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Semaphore />, div);
});
