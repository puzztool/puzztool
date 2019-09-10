import React from 'react';
import ReactDOM from 'react-dom';
import MorseTable from './MorseTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MorseTable />, div);
});
