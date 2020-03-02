import React from 'react';
import ReactDOM from 'react-dom';
import Vigenere from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vigenere />, div);
});
