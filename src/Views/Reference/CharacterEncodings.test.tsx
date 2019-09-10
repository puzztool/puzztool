import React from 'react';
import ReactDOM from 'react-dom';
import CharacterEncodings from './CharacterEncodings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterEncodings />, div);
});
