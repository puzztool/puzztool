import {
  lookupMorseEncoding,
  morseEncodingToString,
  MorseEncoding,
} from "puzzle-lib";
import Table from "react-bootstrap/Table";
import MorsePicture from "./MorsePicture";
import styles from "./MorseTable.module.scss";

function MorseTable() {
  const characters = lookupMorseEncoding(MorseEncoding.None).partial;
  return (
    <div className={styles.container}>
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
                <div className={styles.morseView}>
                  <MorsePicture
                    className={styles.morse_picture}
                    morseString={morseEncodingToString(entry.encoding)}
                  />
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
