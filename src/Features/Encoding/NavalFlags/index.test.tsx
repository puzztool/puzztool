import React from 'react';
import ReactDOM from 'react-dom';
import NavalFlags from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavalFlags />, div);
});
