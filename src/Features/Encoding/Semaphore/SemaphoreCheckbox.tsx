import { ChangeEvent } from "react";
import {
  SemaphoreDirection as Direction,
  SemaphoreEncoding,
  addSemaphoreDirection,
  hasSemaphoreDirection,
  lookupSemaphoreEncoding,
} from "puzzle-lib";
import classNames from "classnames";
import styles from "./SemaphoreCheckbox.module.scss";

interface Props {
  encoding: SemaphoreEncoding;
  className?: string;
  direction: Direction;
  onChange?: (type: string, direction: Direction) => void;
}

function SemaphoreCheckbox(props: Props) {
  function getPotentialMatch() {
    const potential = addSemaphoreDirection(props.encoding, props.direction);
    const result = lookupSemaphoreEncoding(potential);
    if (result.exact.length > 0) {
      return result.exact[0].toString();
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
        checked={hasSemaphoreDirection(props.encoding, props.direction)}
        onChange={onChange}
      />
      <label>{getPotentialMatch()}</label>
    </div>
  );
}

export default SemaphoreCheckbox;
