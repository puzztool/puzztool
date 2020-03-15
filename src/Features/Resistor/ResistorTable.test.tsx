import React from 'react';
import ReactDOM from 'react-dom';
import ResistorTable from './ResistorTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResistorTable />, div);
});
