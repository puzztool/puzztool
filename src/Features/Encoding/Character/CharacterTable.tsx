import Table from 'react-bootstrap/Table';
import { CharacterTableEntry as Entry } from 'puzzle-lib';
import './CharacterTable.scss';

interface Props {
  data: Entry[];
}

function CharacterTable(props: Props) {
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
          {props.data.map((value: Entry) => (
            <tr key={value.character}>
              <td>{value.character}</td>
              <td>{value.binary}</td>
              <td>{value.ternary}</td>
              <td>{value.octal}</td>
              <td>{value.decimal}</td>
              <td>{value.hexadecimal.toUpperCase()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CharacterTable;
