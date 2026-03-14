import { getOrdinalTable } from "puzzle-lib/conversion";
import CharacterTable from "./CharacterTable";

function OrdinalTable() {
  return <CharacterTable data={getOrdinalTable()} />;
}

export default OrdinalTable;
