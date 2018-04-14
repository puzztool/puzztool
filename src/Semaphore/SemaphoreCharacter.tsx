import * as React from 'react';
import { SemaphoreDegrees as Degrees, SemaphoreDirection as Direction } from 'puzzle-lib';
import './SemaphoreCharacter.css';

type Props = {
  directions?: Direction[],
  onChange?: (directions: Direction[]) => void,
};

type State = {
  left: number,
  right: number,
  directions: Direction[],
};

class SemaphoreCharacter extends React.Component<Props, State> {
  private _directions: Direction[] = [];

  public static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const newState: State = {
      left: -1,
      right: -1,
      directions: [],
    };

    if (nextProps.directions !== undefined) {
      const { left, right } = SemaphoreCharacter.getAnglesFromDirections(nextProps.directions);

      newState.left = left;
      newState.right = right;
      newState.directions = nextProps.directions;
    }

    return newState;
  }

  private static getAnglesFromDirections(directions: Direction[]) {
    const angles = {
      left: -1,
      right: -1,
    };

    let first;
    let second;

    if (directions.length > 0) {
      first = Degrees.ToDegrees(directions[0]);
    }

    if (directions.length > 1) {
      second = Degrees.ToDegrees(directions[1]);
    }

    if (first === undefined) {
      first = second;
      second = undefined;
    }

    if (first !== undefined) {
      if (second === undefined) {
        if (first <= 180) {
          angles.right = first;
        } else {
          angles.left = first;
        }
      } else {
        if (second < first) {
          const temp = first;
          first = second;
          second = temp;
        }

        if ((first === 0  && second <= 180) || (first <= 45 && second < 180) || (second <= 90 || first >= 270)) {
          angles.left = first;
          angles.right = second;
        } else {
          angles.right = first;
          angles.left = second;
        }
      }
    }

    return angles;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      left: -1,
      right: -1,
      directions: [],
    };
  }

  public render() {
    return (
      <div className="SemaphoreCharacter">
        <input
          className="SemaphoreCharacter-north"
          type="checkbox"
          checked={this.state.directions.indexOf(Direction.North) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.North)}
        />
        <input
          className="SemaphoreCharacter-northEast"
          type="checkbox"
          checked={this.state.directions.indexOf(Direction.NorthEast) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.NorthEast)}
        />
        <input
          className="SemaphoreCharacter-east"
          type="checkbox"
          checked={this.state.directions.indexOf(Direction.East) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.East)}
        />
        <input
          className="SemaphoreCharacter-southEast"
          type="checkbox" 
          checked={this.state.directions.indexOf(Direction.SouthEast) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.SouthEast)}
        />
        <input
          className="SemaphoreCharacter-south"
          type="checkbox" 
          checked={this.state.directions.indexOf(Direction.South) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.South)}
        />
        <input
          className="SemaphoreCharacter-southWest"
          type="checkbox" 
          checked={this.state.directions.indexOf(Direction.SouthWest) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.SouthWest)}
        />
        <input
          className="SemaphoreCharacter-west"
          type="checkbox" 
          checked={this.state.directions.indexOf(Direction.West) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.West)}
        />
        <input
          className="SemaphoreCharacter-northWest"
          type="checkbox" 
          checked={this.state.directions.indexOf(Direction.NorthWest) >= 0}
          onChange={(event: React.FormEvent<HTMLInputElement>) => this.onChecked(event, Direction.NorthWest)}
        />
        <svg width="240" viewBox="0 0 76 64">
          <defs>
            <g id="Person" fill="black">
              <circle r="3.5" cx="4" cy="4" />
              <rect y="8" width="8" height="16" rx="2" ry="2" />
            </g>
            <g id="Flag">
              <polyline strokeWidth="1" stroke="black" points="0 0, 0 20" />
              <polyline strokeWidth="2" strokeLinecap="round" stroke="black" points="0 20, 0 28" />
              <rect stroke="black" height="10" width="10" />
              <polygon fill="red" points="0 0, 10 0, 0 10" />
              <polygon fill="yellow" points="10 0, 10 10, 0 10" />
            </g>
            <g id="LeftFlag">
              <use xlinkHref="#Flag" transform="scale(-1, 1)" />
            </g>
          </defs>
          <use xlinkHref="#Person" x="34" y="23" />
          {this.getLeftFlag()}
          {this.getRightFlag()}
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    );
  }

  private updateState() {
    const { left, right } = SemaphoreCharacter.getAnglesFromDirections(this._directions);

    this.setState({
      left: left,
      right: right,
      directions: this._directions,
    });
  }

  private getLeftFlag() {
    if (this.state.left >= 0) {
      // The flag needs to be moved into position based upon the upper-left corner and then rotated around the lower-
      // left corner. There didn't appear to be a better way to handle this, so I ended up hard-coding the position
      // value and then adding the height to find the lower-left corner for the rotation origin.
      //
      // In this case the flag is currently 28 units high (in the SVG viewbox), so position it at (33, 4) and then
      // rotate around (33, 4 + 28).
      return (
        <use
          transform={`rotate(${this.state.left}, 33, 32)`}
          x="33"
          xlinkHref={this.state.left === 0 || this.state.left >= 180 ? '#LeftFlag' : '#Flag'}
          y="4"
        />
      );
    }

    return null;
  }

  private getRightFlag() {
    if (this.state.right >= 0) {
      // The flag needs to be moved into position based upon the upper-left corner and then rotated around the lower-
      // left corner. There didn't appear to be a better way to handle this, so I ended up hard-coding the position
      // value and then adding the height to find the lower-left corner for the rotation origin.
      //
      // In this case the flag is currently 28 units high (in the SVG viewbox), so position it at (43, 4) and then
      // rotate around (43, 4 + 28).
      return (
        <use
          transform={`rotate(${this.state.right}, 43, 32)`}
          x="43"
          xlinkHref={this.state.right <= 180 ? '#Flag' : '#LeftFlag'}
          y="4"
        />
      );
    }

    return null;
  }

  private onChecked(event: React.FormEvent<HTMLInputElement>, direction: Direction) {
    const element = (event.target as HTMLInputElement);
    this._directions = this.state.directions;

    if (element.checked) {
      this._directions.push(direction);

      if (this._directions.length > 2) {
        this._directions.shift();
      }
    } else {
      const index = this._directions.indexOf(direction);
      if (index >= 0) {
        this._directions.splice(index, 1);
      }
    }

    this.updateState();

    if (this.props.onChange !== undefined) {
      this.props.onChange(this._directions);
    }
  }
}

export default SemaphoreCharacter;
