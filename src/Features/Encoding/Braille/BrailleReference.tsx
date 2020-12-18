import { BrailleCharacter as Character } from 'puzzle-lib';
import ReferenceList from '../../../Common/ReferenceList';
import BraillePicture from './BraillePicture';

function BrailleReference() {
  const characters = new Character().getPotentialMatches();
  return (
    <ReferenceList>
      {characters.map((entry) => (
        <div key={`${entry.encoding}_${entry.display}`}>
          <BraillePicture
            width={40}
            character={new Character(entry.encoding, entry.category)}
          />
          <br />{entry.display}
        </div>
      ))}
    </ReferenceList>
  );
}

export default BrailleReference;
