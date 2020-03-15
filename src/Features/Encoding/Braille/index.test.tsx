import React from 'react';
import ReactDOM from 'react-dom';
import Braille from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Braille />, div);
});
