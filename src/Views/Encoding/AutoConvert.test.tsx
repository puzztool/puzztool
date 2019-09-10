import React from 'react';
import ReactDOM from 'react-dom';
import AutoConvert from './AutoConvert';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoConvert />, div);
});
