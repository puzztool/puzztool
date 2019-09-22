import React from 'react';
import { BrailleCharacter as Character } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import BraillePicture from './BraillePicture';
import './BrailleTable.scss';

function BrailleTable() {
  const characters = new Character().getPotentialMatches();
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
          {characters.map((entry) => (
            <tr key={`${entry.encoding}-${entry.display}`}>
              <td>{entry.display}</td>
              <td>
                <BraillePicture
                  width={40}
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

export default BrailleTable;
