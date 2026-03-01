import { getAsciiTable } from "puzzle-lib";
import CharacterTable from "./CharacterTable";

function AsciiTable() {
  return <CharacterTable data={getAsciiTable()} />;
}

export default AsciiTable;
