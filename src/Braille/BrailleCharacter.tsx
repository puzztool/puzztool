import * as React from 'react';
import BrailleCell from './BrailleCell';
import { Braille } from 'puzzle-lib';
import './BrailleCharacter.css';

type Props = {
  character: Braille.Character,
  onClick: (mask: Braille.Dot) => void,
};

class BrailleCharacter extends React.Component<Props> {
  renderCell(mask: Braille.Dot) {
    return (
      <BrailleCell
        className={this.props.character.get(mask) ? 'selected' : 'unselected'}
        onClick={() => this.props.onClick(mask)}
      />
    );
  }

  render() {
    return (
      <div className="BrailleCharacter">
        <div className="BrailleCharacter-row">
          {this.renderCell(Braille.Dot.UpperLeft)}
          {this.renderCell(Braille.Dot.UpperRight)}
        </div>
        <div className="BrailleCharacter-row">
          {this.renderCell(Braille.Dot.MiddleLeft)}
          {this.renderCell(Braille.Dot.MiddleRight)}
        </div>
        <div className="BrailleCharacter-row">
          {this.renderCell(Braille.Dot.LowerLeft)}
          {this.renderCell(Braille.Dot.LowerRight)}
        </div>
      </div>
    );
  }
}

export default BrailleCharacter;
