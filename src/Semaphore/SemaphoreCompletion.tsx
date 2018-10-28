import * as React from 'react';
import { SemaphoreCharacter as Character, SemaphoreDirection as Direction } from 'puzzle-lib';

type Props = {
  character: Character,
  className: string,
  direction: Direction,
};

type State = {
  character: Character,
};

class SemaphoreCompletion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      character: props.character,
    };
  }

  public render() {
    return (
      <div className={`SemaphoreCompletion ${this.props.className}`}>
        {this.suggestion()}
      </div>
    );
  }

  private suggestion(): string {
    let candidate = '';
    // If exactly one direction is selected, show suggestions for what other options would be
    // valid.  If this direction is currently selected, don't suggest anything.  
    const currentDirections = this.props.character.directions;
    if ((currentDirections.length === 1) && (currentDirections[0] !== this.props.direction)) {
      let newCharacter = new Character();
      newCharacter.directions = [currentDirections[0], this.props.direction];
      let matches = newCharacter.getExactMatches();
      if (matches.length > 0) {
        candidate = matches[0].toString();
      }
    }
    return candidate;
  }
}

export default SemaphoreCompletion;
