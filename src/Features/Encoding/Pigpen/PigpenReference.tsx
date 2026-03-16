import { PigpenEncoding, lookupPigpenEncoding } from "puzzle-lib/pigpen";
import ReferenceList from "../../../Common/ReferenceList";
import PigpenPicture from "./PigpenPicture";

function PigpenReference() {
  const result = lookupPigpenEncoding(PigpenEncoding.None);
  const characters = [...result.exact, ...result.partial];
  return (
    <ReferenceList>
      {characters.map((entry) => (
        <div key={`${entry.encoding}_${entry.display}`}>
          <PigpenPicture width={40} encoding={entry.encoding} />
          <br />
          {entry.display}
        </div>
      ))}
    </ReferenceList>
  );
}

export default PigpenReference;
