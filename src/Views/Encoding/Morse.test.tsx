import React from 'react';
import ReactDOM from 'react-dom';
import Morse from './Morse';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Morse />, div);
});
