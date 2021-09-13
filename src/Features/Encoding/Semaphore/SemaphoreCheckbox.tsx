import { ChangeEvent } from "react";
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
} from "puzzle-lib";
import classNames from "classnames";
import styles from "./SemaphoreCheckbox.module.scss";

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

    return "";
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const handler = props.onChange;
    if (handler) {
      handler(event.currentTarget.checked ? "add" : "remove", props.direction);
    }
  }

  return (
    <div className={classNames(styles.container, props.className)}>
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
