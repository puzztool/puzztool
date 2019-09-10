import React, { Component, FormEvent } from 'react';
import { SemaphoreCharacter as Character, SemaphoreDirection as Direction } from 'puzzle-lib';
import './SemaphoreCheckbox.scss';

type Props = {
  character: Character,
  className?: string,
  direction: Direction,
  onChange?: (type: string, direction: Direction) => void,
};

type State = {
  character: Character,
};

class SemaphoreCheckbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      character: props.character,
    };
  }

  public render() {
    return (
      <div className={`SemaphoreCheckbox ${this.props.className}`}>
        <input
          type="checkbox"
          checked={this.state.character.hasDirection(this.props.direction)}
          onChange={this.onChange}
        />
        <label>{this.getPotentialMatch()}</label>
      </div>
    );
  }

  private getPotentialMatch() {
    const match = this.props.character.getPotentialMatch(this.props.direction);
    if (match) {
      return match.toString();
    }

    return '';
  }

  private onChange(event: FormEvent<HTMLInputElement>) {
    const handler = this.props.onChange;
    if (handler) {
      const element = event.target as HTMLInputElement;
      handler(element.checked ? 'add' : 'remove', this.props.direction);
    }
  }
}

export default SemaphoreCheckbox;
