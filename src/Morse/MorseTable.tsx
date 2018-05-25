import * as React from 'react';
import { MorseCharacter as Character } from 'puzzle-lib';
import { Table } from 'react-bootstrap';
import './MorseTable.css';

class MorseTable extends React.Component {
  public render() {
    return (
      <div className="MorseTable">
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Character</th>
              <th>Morse</th>
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
      <tr key={entry.display}>
        <td>{entry.display}</td>
        <td>{Character.toMorseString(entry.encoding)}</td>
      </tr>
    ));
  }
}

export default MorseTable;
