import SemaphoreCheckbox from './SemaphoreCheckbox';
import SemaphorePicture from './SemaphorePicture';
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction
} from 'puzzle-lib';
import './SemaphoreCharacter.scss';

interface Props {
  character: Character;
  onChange?: (type: string, direction: Direction) => void;
}

function SemaphoreCharacter(props: Props) {
  function onChange(type: string, direction: Direction) {
    const handler = props.onChange;
    if (handler) {
      handler(type, direction);
    }
  }

  return (
    <div className="SemaphoreCharacter">
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-north"
        direction={Direction.North}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-northEast"
        direction={Direction.NorthEast}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-east"
        direction={Direction.East}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-southEast"
        direction={Direction.SouthEast}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-south"
        direction={Direction.South}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-southWest"
        direction={Direction.SouthWest}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-west"
        direction={Direction.West}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className="SemaphoreCheckbox-northWest"
        direction={Direction.NorthWest}
        onChange={onChange}
      />
      <SemaphorePicture
        width={240}
        character={props.character}
      />
    </div>
  );
}

export default SemaphoreCharacter;
