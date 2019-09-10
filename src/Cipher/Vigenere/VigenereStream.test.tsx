import React from 'react';
import ReactDOM from 'react-dom';
import VigenereStream from './VigenereStream';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VigenereStream prompt="Type here" />, div);
});
