import * as React from 'react';
import SemaphoreCheckbox from './SemaphoreCheckbox';
import SemaphorePicture from './SemaphorePicture';
import { SemaphoreCharacter as Character, SemaphoreDirection as Direction } from 'puzzle-lib';
import './SemaphoreCharacter.css';

type Props = {
  character: Character,
  onChange: (type: string, direction: Direction) => void,
};

class SemaphoreCharacter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div className="SemaphoreCharacter">
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-north"
          direction={Direction.North}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-northEast"
          direction={Direction.NorthEast}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-east"
          direction={Direction.East}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-southEast"
          direction={Direction.SouthEast}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-south"
          direction={Direction.South}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-southWest"
          direction={Direction.SouthWest}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-west"
          direction={Direction.West}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCharacter-northWest"
          direction={Direction.NorthWest}
          onChange={this.props.onChange}
        />
        <SemaphorePicture
          width={240}
          character={this.props.character}
        />
      </div>
    );
  }
}

export default SemaphoreCharacter;
