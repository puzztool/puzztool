import BrailleCell from "./BrailleCell";
import { BrailleCharacter as Character, BrailleDot as Dot } from "puzzle-lib";
import styles from "./BrailleCharacter.module.scss";

interface Props {
  character: Character;
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
      <BrailleCell character={props.character} mask={mask} onClick={onClick} />
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
