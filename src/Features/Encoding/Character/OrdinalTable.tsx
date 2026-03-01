import { getOrdinalTable } from "puzzle-lib";
import CharacterTable from "./CharacterTable";

function OrdinalTable() {
  return <CharacterTable data={getOrdinalTable()} />;
}

export default OrdinalTable;
