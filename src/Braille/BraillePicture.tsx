import * as React from 'react';
import { BrailleCharacter as Character, BrailleDot as Dot } from 'puzzle-lib';

type Props = {
  width: number,
  character: Character
};

class BraillePicture extends React.Component<Props> {
  public render() {
    // 12x12 Circles with padding width 6 between them.  Padding width 2 on the edges.
    return (
        <svg width={this.props.width} viewBox="0 0 34 52">
          <defs>
            <g id="FullDot">
              <circle r="6" fill="black" cx="0" cy="0" />
            </g>
            <g id="EmptyDot">
              <circle r="6" fill="transparent" strokeWidth="1" stroke="black" cx="0" cy="0" />
            </g>
          </defs>
          {this.brailleDot(Dot.UpperLeft, 8, 8)}
          {this.brailleDot(Dot.UpperRight, 26, 8)}
          {this.brailleDot(Dot.MiddleLeft, 8, 26)}
          {this.brailleDot(Dot.MiddleRight, 26, 26)}
          {this.brailleDot(Dot.LowerLeft, 8, 44)}
          {this.brailleDot(Dot.LowerRight, 26, 44)}
          Sorry, your browser does not support inline SVG.
        </svg>
    );
  }

  private brailleDot(dot: Dot, x: number, y: number) {
    return (
    <use
        transform={`translate(${x}, ${y})`}
        xlinkHref={this.props.character.get(dot) ? '#FullDot' : '#EmptyDot'}
    />
    );
  }
}

export default BraillePicture;
