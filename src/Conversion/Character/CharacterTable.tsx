import * as React from 'react';
import { Table } from 'react-bootstrap';
import { CharacterTableEntry as Entry } from 'puzzle-lib';
import './CharacterTable.css';

type Props = {
  data: Entry[],
};

class CharacterTable extends React.Component<Props> {
  public render() {
    return (
      <div className="CharacterTable">
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Character</th>
              <th>Binary</th>
              <th>Ternary</th>
              <th>Octal</th>
              <th>Decimal</th>
              <th>Hexadecimal</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows(this.props.data)}
          </tbody>
        </Table>
      </div>
    );
  }

  private renderRows(data: Entry[]) {
    return data.map((value: Entry) => {
      return (
        <tr key={value.character}>
          <td>{value.character}</td>
          <td>{value.binary}</td>
          <td>{value.ternary}</td>
          <td>{value.octal}</td>
          <td>{value.decimal}</td>
          <td>{value.hexadecimal.toUpperCase()}</td>
        </tr>
      );
    });
  }
}

export default CharacterTable;
