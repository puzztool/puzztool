import React from 'react';
import ReactDOM from 'react-dom';
import WordSearchComponent from './WordSearchComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WordSearchComponent />, div);
});
