import React from 'react';
import ReactDOM from 'react-dom';
import OrdinalTable from './OrdinalTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrdinalTable />, div);
});
