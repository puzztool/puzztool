import SemaphoreCheckbox from "./SemaphoreCheckbox";
import SemaphorePicture from "./SemaphorePicture";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import styles from "./SemaphoreCharacter.module.scss";

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
    <div className={styles.container}>
      <SemaphoreCheckbox
        character={props.character}
        className={styles.north}
        direction={Direction.North}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.northEast}
        direction={Direction.NorthEast}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.east}
        direction={Direction.East}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.southEast}
        direction={Direction.SouthEast}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.south}
        direction={Direction.South}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.southWest}
        direction={Direction.SouthWest}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.west}
        direction={Direction.West}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        character={props.character}
        className={styles.northWest}
        direction={Direction.NorthWest}
        onChange={onChange}
      />
      <SemaphorePicture width={240} character={props.character} />
    </div>
  );
}

export default SemaphoreCharacter;
