import { getAsciiTable } from "puzzle-lib/conversion";
import CharacterTable from "./CharacterTable";

function AsciiTable() {
  return <CharacterTable data={getAsciiTable()} />;
}

export default AsciiTable;
