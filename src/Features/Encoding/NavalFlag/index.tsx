import { NavalFlags } from "puzzle-lib";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import ReferenceList from "../../../Common/ReferenceList";
import styles from "./index.module.scss";

function NavalFlag() {
  const characters = NavalFlags.instance.entries;
  return (
    <PuzzToolPage title="Naval Flags">
      <ReferenceList>
        {characters.map((entry) => (
          <div key={entry.character}>
            <img
              className={styles.flagImage}
              src={`data:image/svg+xml,${encodeURIComponent(
                entry.image.render(),
              )}`}
              alt={entry.character}
            />
            <br />
            {entry.character}
          </div>
        ))}
      </ReferenceList>
    </PuzzToolPage>
  );
}

export default NavalFlag;
