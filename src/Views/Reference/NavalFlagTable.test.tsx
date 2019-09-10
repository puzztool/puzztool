import React from 'react';
import ReactDOM from 'react-dom';
import NavalFlagTable from './NavalFlagTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavalFlagTable />, div);
});
