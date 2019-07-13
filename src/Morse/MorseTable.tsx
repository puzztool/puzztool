import React, { Component } from 'react';
import { MorseCharacter as Character } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import MorsePicture from './MorsePicture';
import './MorseTable.scss';

class MorseTable extends Component {
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
        <td>
          <div className="MorseTable-morseView">
            <MorsePicture morseString={Character.toMorseString(entry.encoding)} />
          </div>
        </td>
      </tr>
    ));
  }
}

export default MorseTable;
