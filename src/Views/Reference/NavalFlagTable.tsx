import React, { Component } from 'react';
import { NavalFlags, CharacterImage } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import './NavalFlagTable.scss';

class NavalFlagTable extends Component {
  public render() {
    return (
      <div className="NavalFlagTable">
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Letter</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows(NavalFlags.instance.entries)}
          </tbody>
        </Table>
      </div>
    );
  }

  private renderRows(data: CharacterImage[]) {
    return data.map((value: CharacterImage) => {
      const dataUri =
        `data:image/svg+xml,${encodeURIComponent(value.image.render())}`;
      return (
        <tr key={value.character}>
          <td className="NavalFlagTable-flagCharacter">{value.character}</td>
          <td>
            <img className="NavalFlagTable-flagImage" src={dataUri} alt={value.character} />
          </td>
        </tr>
      );
    });
  }
}

export default NavalFlagTable;
