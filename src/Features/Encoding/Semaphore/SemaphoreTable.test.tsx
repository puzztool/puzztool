import React from 'react';
import ReactDOM from 'react-dom';
import SemaphoreTable from './SemaphoreTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SemaphoreTable />, div);
});
