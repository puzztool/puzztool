import { MorseCharacter as Character } from 'puzzle-lib';
import Table from 'react-bootstrap/Table';
import MorsePicture from './MorsePicture';
import './MorseTable.scss';

function MorseTable() {
  const characters = new Character().getPotentialMatches();
  return (
    <div className="MorseTable">
      <Table striped={true} responsive={true}>
        <thead>
          <tr>
            <th>Character</th>
            <th>Morse</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((entry) => (
            <tr key={entry.display}>
              <td>{entry.display}</td>
              <td>
                <div className="MorseTable-morseView">
                  <MorsePicture morseString={Character.toMorseString(entry.encoding)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MorseTable;
