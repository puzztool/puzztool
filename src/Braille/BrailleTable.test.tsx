import React from 'react';
import ReactDOM from 'react-dom';
import BrailleTable from './BrailleTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrailleTable />, div);
});
