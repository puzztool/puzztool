import * as React from 'react';
import { BrailleCharacter as Character } from 'puzzle-lib';
import { Table } from 'react-bootstrap';
import BraillePicture from './BraillePicture';
import './BrailleTable.css';

class BrailleTable extends React.Component {
  public render() {
    return (
      <div className="BrailleTable">
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Character</th>
              <th>Braille</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </Table>
      </div>
    );
  }

  private renderRows() {
    const characters = new Character().getPotentialMatches();
    return characters.map((entry) => (
      <tr key={`${entry.encoding}-${entry.display}`}>
        <td>{entry.display}</td>
        <td>
          <BraillePicture 
            width={40}
            character={new Character(entry.encoding, entry.category)}
          />
        </td>
      </tr>
    ));
  }
}

export default BrailleTable;
