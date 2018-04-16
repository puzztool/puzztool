import * as React from 'react';
import { SemaphoreCharacter as Character, SemaphoreDirection as Direction } from 'puzzle-lib';
import './SemaphoreCheckbox.css';

type Props = {
  character: Character,
  className: string,
  direction: Direction,
  onChange: (type: string, direction: Direction) => void,
};

type State = {
  character: Character,
};

class SemaphoreCheckbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      character: props.character,
    };
  }

  public render() {
    return (
      <input
        className={`SemaphoreCheckbox ${this.props.className}`}
        type="checkbox"
        checked={this.state.character.hasDirection(this.props.direction)}
        onChange={(event: React.FormEvent<HTMLInputElement>) => this.handleChange(event)}
      />
    );
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>) {
    const element = (event.target as HTMLInputElement);
    this.props.onChange(element.checked ? 'add' : 'remove', this.props.direction);
  }
}

export default SemaphoreCheckbox;
