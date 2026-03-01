import { SemaphoreEncoding, lookupSemaphoreEncoding } from "puzzle-lib";
import ReferenceList from "../../../Common/ReferenceList";
import SemaphorePicture from "./SemaphorePicture";

function SemaphoreReference() {
  const result = lookupSemaphoreEncoding(SemaphoreEncoding.None);
  return (
    <ReferenceList>
      {result.partial.map((entry) => (
        <div key={entry.display}>
          <SemaphorePicture width={96} encoding={entry.encoding} />
          <br />
          {entry.display}
        </div>
      ))}
    </ReferenceList>
  );
}

export default SemaphoreReference;
