import React from 'react';
import ReactDOM from 'react-dom';
import CaesarList from './CaesarList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CaesarList list={[]} />, div);
});
