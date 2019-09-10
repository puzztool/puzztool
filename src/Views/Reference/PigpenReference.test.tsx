import React from 'react';
import ReactDOM from 'react-dom';
import PigpenReference from './PigpenReference';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PigpenReference />, div);
});
