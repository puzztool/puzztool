import SemaphoreCheckbox from "./SemaphoreCheckbox";
import SemaphorePicture from "./SemaphorePicture";
import { SemaphoreDirection as Direction, SemaphoreEncoding } from "puzzle-lib";
import styles from "./SemaphoreCharacter.module.scss";

interface Props {
  encoding: SemaphoreEncoding;
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
        encoding={props.encoding}
        className={styles.north}
        direction={Direction.North}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.northEast}
        direction={Direction.NorthEast}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.east}
        direction={Direction.East}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.southEast}
        direction={Direction.SouthEast}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.south}
        direction={Direction.South}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.southWest}
        direction={Direction.SouthWest}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.west}
        direction={Direction.West}
        onChange={onChange}
      />
      <SemaphoreCheckbox
        encoding={props.encoding}
        className={styles.northWest}
        direction={Direction.NorthWest}
        onChange={onChange}
      />
      <SemaphorePicture width={240} encoding={props.encoding} />
    </div>
  );
}

export default SemaphoreCharacter;
