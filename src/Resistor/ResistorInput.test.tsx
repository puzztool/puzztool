import React from 'react';
import ReactDOM from 'react-dom';
import ResistorInput from './ResistorInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResistorInput />, div);
});
