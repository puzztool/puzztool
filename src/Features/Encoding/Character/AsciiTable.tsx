import { CharacterConversion } from "puzzle-lib";
import CharacterTable from "./CharacterTable";

function AsciiTable() {
  return <CharacterTable data={CharacterConversion.getAsciiTable()} />;
}

export default AsciiTable;
