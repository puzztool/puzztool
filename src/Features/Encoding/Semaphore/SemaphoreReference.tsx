import { SemaphoreCharacter as Character } from "puzzle-lib";
import ReferenceList from "../../../Common/ReferenceList";
import SemaphorePicture from "./SemaphorePicture";

function SemaphoreReference() {
  const characters = new Character().getPotentialMatches();
  return (
    <ReferenceList>
      {characters.map((entry) => (
        <div key={entry.display}>
          <SemaphorePicture
            width={96}
            character={new Character(entry.encoding, entry.category)}
          />
          <br />
          {entry.display}
        </div>
      ))}
    </ReferenceList>
  );
}

export default SemaphoreReference;
