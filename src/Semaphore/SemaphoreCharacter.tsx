import * as React from 'react';
import SemaphoreCheckbox from './SemaphoreCheckbox';
import SemaphoreCompletion from './SemaphoreCompletion';
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
          className="SemaphoreCheckbox-north"
          direction={Direction.North}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-northEast"
          direction={Direction.NorthEast}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-east"
          direction={Direction.East}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-southEast"
          direction={Direction.SouthEast}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-south"
          direction={Direction.South}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-southWest"
          direction={Direction.SouthWest}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-west"
          direction={Direction.West}
          onChange={this.props.onChange}
        />
        <SemaphoreCheckbox
          character={this.props.character}
          className="SemaphoreCheckbox-northWest"
          direction={Direction.NorthWest}
          onChange={this.props.onChange}
        />
        
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-north"
          direction={Direction.North}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-northEast"
          direction={Direction.NorthEast}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-east"
          direction={Direction.East}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-southEast"
          direction={Direction.SouthEast}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-south"
          direction={Direction.South}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-southWest"
          direction={Direction.SouthWest}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-west"
          direction={Direction.West}
        />
        <SemaphoreCompletion
          character={this.props.character}
          className="SemaphoreCompletion-northWest"
          direction={Direction.NorthWest}
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
