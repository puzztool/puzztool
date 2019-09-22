import React from 'react';
import Table from 'react-bootstrap/Table';
import { ResistorColorEntry as Color, Resistor } from 'puzzle-lib';
import Helpers from '../Common/Helpers';
import './ResistorTable.scss';

function cellColorStyle(value: Color) {
  return {
    backgroundColor: value.colorCode,
    color: Helpers.contrastingColor(value.colorCode),
  };
}

function ResistorTable() {
  return (
    <div className="ResistorTable">
      <Table striped={true} responsive={true}>
        <thead>
          <tr>
            <th>Color</th>
            <th>Value</th>
            <th>Multiplier</th>
            <th>Tolerance (%)</th>
          </tr>
        </thead>
        <tbody>
          {Resistor.colorTable.map((value: Color) => (
            <tr key={value.name}>
              <td style={cellColorStyle(value)}>{value.name}</td>
              <td>{value.getDisplayValue()}</td>
              <td>{value.multiplier}</td>
              <td>{value.toleranceInPercent}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ResistorTable;
