import React, { Component } from 'react';
import SemaphoreCheckbox from './SemaphoreCheckbox';
import SemaphorePicture from './SemaphorePicture';
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction
} from 'puzzle-lib';
import './SemaphoreCharacter.scss';

type Props = {
  character: Character,
  onChange: (type: string, direction: Direction) => void,
};

class SemaphoreCharacter extends Component<Props> {
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
        <SemaphorePicture
          width={240}
          character={this.props.character}
        />
      </div>
    );
  }
}

export default SemaphoreCharacter;
