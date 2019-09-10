import React from 'react';
import ReactDOM from 'react-dom';
import CaesarStream from './CaesarStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaesarStream prompt="Type here" />, div);
});
