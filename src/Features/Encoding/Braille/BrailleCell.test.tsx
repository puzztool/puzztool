import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrailleCharacter as Character,
    BrailleDot as Dot,
} from 'puzzle-lib';
import BrailleCell from './BrailleCell';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrailleCell character={new Character()} mask={Dot.None} />, div);
});
