import * as React from 'react';
import BrailleCell from './BrailleCell';
import { BrailleCharacter as Character, BrailleDot as Dot } from 'puzzle-lib';
import './BrailleCharacter.css';

type Props = {
  character: Character,
  onClick: (mask: Dot) => void,
};

class BrailleCharacter extends React.Component<Props> {
  public render() {
    return (
      <div className="BrailleCharacter">
        {this.renderCell(Dot.UpperLeft)}
        {this.renderCell(Dot.UpperRight)}
        {this.renderCell(Dot.MiddleLeft)}
        {this.renderCell(Dot.MiddleRight)}
        {this.renderCell(Dot.LowerLeft)}
        {this.renderCell(Dot.LowerRight)}
      </div>
    );
  }

  private renderCell(mask: Dot) {
    return (
      <BrailleCell
        character={this.props.character}
        mask={mask}
        onClick={this.props.onClick}
      />
    );
  }
}

export default BrailleCharacter;
