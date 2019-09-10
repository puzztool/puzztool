import React from 'react';
import ReactDOM from 'react-dom';
import BrailleStream from './BrailleStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrailleStream />, div);
});
