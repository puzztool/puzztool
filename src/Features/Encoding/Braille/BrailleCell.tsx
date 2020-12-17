import { BrailleCharacter as Character, BrailleDot as Dot } from 'puzzle-lib';
import './BrailleCell.scss';

interface Props {
  character: Character;
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

  const classNames = `BrailleCell ${props.character.get(props.mask) ? 'BrailleCell-selected' : ''}`;
  return (
    <button className={classNames} onClick={onClick}>
      <svg viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="12" />
        Sorry, your browser does not support inline SVG.
        </svg>
    </button>
  );
}

export default BrailleCell;
