import React from 'react';
import { SemaphoreCharacter as Character } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import SemaphorePicture from './SemaphorePicture';
import './SemaphoreTable.scss';

function SemaphoreTable() {
  const characters = new Character().getPotentialMatches();
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
          {characters.map((entry) => (
            <tr key={entry.display}>
              <td>{entry.display}</td>
              <td>
                <SemaphorePicture
                  width={100}
                  character={new Character(entry.encoding, entry.category)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SemaphoreTable;
