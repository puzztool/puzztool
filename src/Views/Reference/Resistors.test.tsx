import React from 'react';
import ReactDOM from 'react-dom';
import Resistors from './Resistors';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resistors />, div);
});
