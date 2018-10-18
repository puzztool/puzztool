import * as React from 'react';
import { NavalFlags, NavalFlagImage } from 'puzzle-lib';
import { Table } from 'react-bootstrap';

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

  private renderRows(data: NavalFlagImage[]) {
    return data.map((value: NavalFlagImage) => {
      return (
        <tr key={value.character}>
          <td>{value.character}</td>
          <td dangerouslySetInnerHTML={{__html: value.image(100)}} />
        </tr>
      );
    });
  }
}

export default NavalFlagTable;
