import React, { Component } from 'react';
import { CharacterConversion as Conversion } from 'puzzle-lib';
import CharacterTable from './CharacterTable';

class OrdinalTable extends Component {
  public render() {
    return (
      <div className="OrdinalTable">
        <CharacterTable data={Conversion.getOrdinalTable()} />
      </div>
    );
  }
}

export default OrdinalTable;
