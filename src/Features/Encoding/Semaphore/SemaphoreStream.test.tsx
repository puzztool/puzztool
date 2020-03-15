import React from 'react';
import ReactDOM from 'react-dom';
import SemaphoreStream from './SemaphoreStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SemaphoreStream />, div);
});
