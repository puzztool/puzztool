import * as React from 'react';
import { CharacterConversion as Conversion } from 'puzzle-lib';
import CharacterTable from './CharacterTable';
import './OrdinalTable.css';

class OrdinalTable extends React.Component {
  public render() {
    return (
      <div className="OrdinalTable">
        <CharacterTable data={Conversion.getOrdinalTable()} />
      </div>
    );
  }
}

export default OrdinalTable;
