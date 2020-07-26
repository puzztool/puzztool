import React from 'react';
import ReactDOM from 'react-dom';
import PuzzToolPage from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PuzzToolPage title="Test Page">
      Hi!
    </PuzzToolPage>,
    div);
});
