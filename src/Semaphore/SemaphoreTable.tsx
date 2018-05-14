import * as React from 'react';
import { SemaphoreCharacter as Character } from 'puzzle-lib';
import { Table } from 'react-bootstrap';
import SemaphorePicture from './SemaphorePicture';
import './SemaphoreTable.css';

class SemaphoreTable extends React.Component {
  public render() {
    return (
      <div className="SemaphoreTable">
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Character</th>
              <th>Semaphore</th>
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
        <td>
          <SemaphorePicture 
            width={100}
            character={new Character(entry.encoding, entry.category)}
          />
        </td>
      </tr>
    ));
  }
}

export default SemaphoreTable;
