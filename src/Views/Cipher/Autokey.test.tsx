import React from 'react';
import ReactDOM from 'react-dom';
import Autokey from './Autokey';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Autokey />, div);
});
