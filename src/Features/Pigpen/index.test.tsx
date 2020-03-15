import React from 'react';
import ReactDOM from 'react-dom';
import Pigpen from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pigpen />, div);
});
