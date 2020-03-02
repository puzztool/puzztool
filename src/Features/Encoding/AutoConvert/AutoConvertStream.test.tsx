import React from 'react';
import ReactDOM from 'react-dom';
import AutoConvertStream from './AutoConvertStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoConvertStream prompt="Type here" />, div);
});
