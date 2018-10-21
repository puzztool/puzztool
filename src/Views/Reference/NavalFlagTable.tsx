import * as React from 'react';
import { NavalFlags, CharacterImage } from 'puzzle-lib';
import { Table } from 'react-bootstrap';
import './NavalFlagTable.css';

class NavalFlagTable extends React.Component {
  public render() {
    return (
      <div className="NavalFlagsTable">
        <div className="NavalFlagsTable-content">
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
      </div>
    );
  }

  private renderRows(data: CharacterImage[]) {
    return data.map((value: CharacterImage) => {
      const dataUri = `data:image/svg+xml,${encodeURIComponent(value.image.render())}`;
      return (
        <tr key={value.character}>
          <td className="flagCharacter">{value.character}</td>
          <td>
            <img className="flagImage" src={dataUri} />
          </td>
        </tr>
      );
    });
  }
}

export default NavalFlagTable;
