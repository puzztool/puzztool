import React from 'react';
import ReactDOM from 'react-dom';
import MorseStream from './MorseStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MorseStream />, div);
});
