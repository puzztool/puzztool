import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { NatoCharacter, NatoData } from 'puzzle-lib';
import './NatoTable.scss';

class NatoTable extends Component {
  public render() {
    return (
      <div className="NatoTable">
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Letter</th>
              <th>NATO Word</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows(NatoData.instance.entries)}
          </tbody>
        </Table>
      </div>
    );
  }

  private renderRows(data: NatoCharacter[]) {
    return data.map((value: NatoCharacter) => {
      return (
        <tr key={value.character}>
          <td>{value.character}</td>
          <td>{value.word}</td>
        </tr>
      );
    });
  }
}

export default NatoTable;
