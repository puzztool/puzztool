import React from 'react';
import ReactDOM from 'react-dom';
import Caesar from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Caesar />, div);
});
