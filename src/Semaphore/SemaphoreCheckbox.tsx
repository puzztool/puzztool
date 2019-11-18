import React, { FormEvent } from 'react';
import { SemaphoreCharacter as Character, SemaphoreDirection as Direction } from 'puzzle-lib';
import './SemaphoreCheckbox.scss';

interface Props {
  character: Character;
  className?: string;
  direction: Direction;
  onChange?: (type: string, direction: Direction) => void;
}

function SemaphoreCheckbox(props: Props) {
  function getPotentialMatch() {
    const match = props.character.getPotentialMatch(props.direction);
    if (match) {
      return match.toString();
    }

    return '';
  }

  function onChange(event: FormEvent<HTMLInputElement>) {
    const handler = props.onChange;
    if (handler) {
      handler(event.currentTarget.checked ? 'add' : 'remove', props.direction);
    }
  }

  return (
    <div className={`SemaphoreCheckbox ${props.className}`}>
      <input
        type="checkbox"
        checked={props.character.hasDirection(props.direction)}
        onChange={onChange}
      />
      <label>{getPotentialMatch()}</label>
    </div>
  );
}

export default SemaphoreCheckbox;
