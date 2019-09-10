import React from 'react';
import ReactDOM from 'react-dom';
import NatoTable from './NatoTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NatoTable />, div);
});
