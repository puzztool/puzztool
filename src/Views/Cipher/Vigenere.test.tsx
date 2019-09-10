import React from 'react';
import ReactDOM from 'react-dom';
import Vigenere from './Vigenere';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vigenere />, div);
});
