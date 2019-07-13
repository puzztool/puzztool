import React, { Component } from 'react';
import { NatoCharacter, NatoData } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';

class NatoTable extends Component {
  public render() {
    return (
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
