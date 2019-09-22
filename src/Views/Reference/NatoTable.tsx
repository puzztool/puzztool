import React from 'react';
import Table from 'react-bootstrap/Table';
import { NatoData } from 'puzzle-lib';
import './NatoTable.scss';

function NatoTable() {
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
          {NatoData.instance.entries.map((value) => (
            <tr key={value.character}>
              <td>{value.character}</td>
              <td>{value.word}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default NatoTable;
