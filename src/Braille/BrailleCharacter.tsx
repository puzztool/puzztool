import * as React from 'react';
import BrailleCell from './BrailleCell';
import { BrailleCharacter as Character, BrailleDot as Dot } from 'puzzle-lib';
import './BrailleCharacter.css';

type Props = {
  character: Character,
  onClick: (mask: Dot) => void,
};

class BrailleCharacter extends React.Component<Props> {
  renderCell(mask: Dot) {
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
          {this.renderCell(Dot.UpperLeft)}
          {this.renderCell(Dot.UpperRight)}
        </div>
        <div className="BrailleCharacter-row">
          {this.renderCell(Dot.MiddleLeft)}
          {this.renderCell(Dot.MiddleRight)}
        </div>
        <div className="BrailleCharacter-row">
          {this.renderCell(Dot.LowerLeft)}
          {this.renderCell(Dot.LowerRight)}
        </div>
      </div>
    );
  }
}

export default BrailleCharacter;
