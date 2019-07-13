import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ResistorColorEntry as Color, Resistor } from 'puzzle-lib';
import Helpers from '../Common/Helpers';
import './ResistorTable.scss';

class ResistorTable extends Component {
  public render() {
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
            {this.renderRows(Resistor.colorTable)}
          </tbody>
        </Table>
      </div>
    );
  }

  private renderRows(data: Color[]) {
    return data.map((value: Color) => (
        <tr key={value.name}>
          <td style={this.cellColorStyle(value)}>{value.name}</td>
          <td>{value.getDisplayValue()}</td>
          <td>{value.multiplier}</td>
          <td>{value.toleranceInPercent}</td>
        </tr>
      ));
  }

  private cellColorStyle(value: Color) {
    return {
      backgroundColor: value.colorCode,
      color: Helpers.contrastingColor(value.colorCode),
    };
  }
}

export default ResistorTable;
