import classNames from "classnames";
import { BrailleDot as Dot, BrailleEncoding, getBrailleDot } from "puzzle-lib";
import styles from "./BrailleCell.module.scss";

interface Props {
  encoding: BrailleEncoding;
  mask: Dot;
  onClick?: (mask: Dot) => void;
}

function BrailleCell(props: Props) {
  function onClick() {
    const handler = props.onClick;
    if (handler) {
      handler(props.mask);
    }
  }

  const btnClass = classNames(styles.container, {
    [styles.selected]: getBrailleDot(props.encoding, props.mask),
  });

  return (
    <button className={btnClass} onClick={onClick}>
      <svg viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="12" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </button>
  );
}

export default BrailleCell;
