import React from 'react';
import ReactDOM from 'react-dom';
import MorsePicture from './MorsePicture';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MorsePicture morseString="" />, div);
});
