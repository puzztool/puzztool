import React from 'react';
import ReactDOM from 'react-dom';
import { BrailleCharacter as Character } from 'puzzle-lib';
import BrailleCharacter from './BrailleCharacter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrailleCharacter character={new Character()} />, div);
});
