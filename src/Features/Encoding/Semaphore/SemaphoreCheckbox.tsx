import { Checkbox } from "@mantine/core";
import {
  SemaphoreDirection as Direction,
  SemaphoreEncoding,
  addSemaphoreDirection,
  hasSemaphoreDirection,
  lookupSemaphoreEncoding,
} from "puzzle-lib";
import clsx from "clsx";
import styles from "./SemaphoreCheckbox.module.scss";

const DIRECTION_LABELS: Record<number, string> = {
  [Direction.North]: "North",
  [Direction.NorthEast]: "North East",
  [Direction.East]: "East",
  [Direction.SouthEast]: "South East",
  [Direction.South]: "South",
  [Direction.SouthWest]: "South West",
  [Direction.West]: "West",
  [Direction.NorthWest]: "North West",
};

interface Props {
  encoding: SemaphoreEncoding;
  className?: string;
  direction: Direction;
  labelPosition?: "left" | "right";
  onChange?: (type: string, direction: Direction) => void;
}

function SemaphoreCheckbox(props: Props) {
  function getPotentialMatch() {
    // Don't show suggestions if this direction is already selected
    if (hasSemaphoreDirection(props.encoding, props.direction)) {
      return "";
    }

    const potential = addSemaphoreDirection(props.encoding, props.direction);

    // If adding this direction would replace an existing one (already at 2),
    // don't show a suggestion since it would change the character, not complete it
    if (potential !== (props.encoding | props.direction)) {
      return "";
    }

    const result = lookupSemaphoreEncoding(potential);
    if (result.exact.length > 0) {
      return result.exact[0].toString();
    }

    return "";
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const handler = props.onChange;
    if (handler) {
      handler(event.currentTarget.checked ? "add" : "remove", props.direction);
    }
  }

  return (
    <div className={clsx(styles.container, props.className)}>
      <Checkbox
        checked={hasSemaphoreDirection(props.encoding, props.direction)}
        onChange={onChange}
        label={getPotentialMatch()}
        labelPosition={props.labelPosition}
        size="md"
        aria-label={DIRECTION_LABELS[props.direction] ?? "Direction"}
      />
    </div>
  );
}

export default SemaphoreCheckbox;
