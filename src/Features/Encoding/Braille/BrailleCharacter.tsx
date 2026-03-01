import BrailleCell from "./BrailleCell";
import { BrailleDot as Dot, BrailleEncoding } from "puzzle-lib";
import styles from "./BrailleCharacter.module.scss";

interface Props {
  encoding: BrailleEncoding;
  onClick?: (mask: Dot) => void;
}

function BrailleCharacter(props: Props) {
  function onClick(mask: Dot) {
    const handler = props.onClick;
    if (handler) {
      handler(mask);
    }
  }

  function renderCell(mask: Dot) {
    return (
      <BrailleCell encoding={props.encoding} mask={mask} onClick={onClick} />
    );
  }

  return (
    <div className={styles.container}>
      {renderCell(Dot.UpperLeft)}
      {renderCell(Dot.UpperRight)}
      {renderCell(Dot.MiddleLeft)}
      {renderCell(Dot.MiddleRight)}
      {renderCell(Dot.LowerLeft)}
      {renderCell(Dot.LowerRight)}
    </div>
  );
}

export default BrailleCharacter;
