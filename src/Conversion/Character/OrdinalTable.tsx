import React from 'react';
import { CharacterConversion } from 'puzzle-lib';
import CharacterTable from './CharacterTable';

function OrdinalTable() {
  return (
    <CharacterTable data={CharacterConversion.getOrdinalTable()} />
  );
}

export default OrdinalTable;
