import React, { Component } from 'react';
import BrailleCell from './BrailleCell';
import { BrailleCharacter as Character, BrailleDot as Dot } from 'puzzle-lib';
import './BrailleCharacter.scss';

type Props = {
  character: Character,
  onClick?: (mask: Dot) => void,
};

class BrailleCharacter extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

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
        onClick={this.onClick}
      />
    );
  }

  private onClick(mask: Dot) {
    const handler = this.props.onClick;
    if (handler) {
      handler(mask);
    }
  }
}

export default BrailleCharacter;
