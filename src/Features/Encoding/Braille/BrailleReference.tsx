import { BrailleEncoding, lookupBrailleEncoding } from "puzzle-lib";
import ReferenceList from "../../../Common/ReferenceList";
import BraillePicture from "./BraillePicture";

function BrailleReference() {
  const result = lookupBrailleEncoding(BrailleEncoding.None);
  const characters = [...result.exact, ...result.partial];
  return (
    <ReferenceList>
      {characters.map((entry) => (
        <div key={`${entry.encoding}_${entry.display}`}>
          <BraillePicture width={40} encoding={entry.encoding} />
          <br />
          {entry.display}
        </div>
      ))}
    </ReferenceList>
  );
}

export default BrailleReference;
