import * as React from 'react';
import { CharacterConversion as Conversion } from 'puzzle-lib';
import CharacterTable from './CharacterTable';
import './AsciiTable.css';

class AsciiTable extends React.Component {
  public render() {
    return (
      <div className="AsciiTable">
        <CharacterTable data={Conversion.getAsciiTable()} />
      </div>
    );
  }
}

export default AsciiTable;
