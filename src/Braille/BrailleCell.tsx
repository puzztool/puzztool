import React, { Component } from 'react';
import { BrailleCharacter as Character, BrailleDot as Dot } from 'puzzle-lib';
import './BrailleCell.scss';

type Props = {
  character: Character,
  mask: Dot,
  onClick: (mask: Dot) => void,
};

class BrailleCell extends Component<Props> {
  public render() {
    const classNames = `BrailleCell ${this.props.character.get(this.props.mask) ? 'BrailleCell-selected' : ''}`;
    return (
      <button className={classNames} onClick={() => this.onClick()}>
        <svg viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="12" />
          Sorry, your browser does not support inline SVG.
        </svg>
      </button>
    );
  }

  private onClick() {
    this.props.onClick(this.props.mask);
  }
}

export default BrailleCell;
