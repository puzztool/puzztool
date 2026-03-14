import {
  lookupMorseEncoding,
  morseEncodingToString,
  MorseEncoding,
} from "puzzle-lib/morse";
import { Table } from "@mantine/core";
import MorsePicture from "./MorsePicture";
import styles from "./MorseTable.module.scss";

function MorseTable() {
  const characters = lookupMorseEncoding(MorseEncoding.None).partial;
  return (
    <div className={styles.container}>
      <Table striped withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Character</Table.Th>
            <Table.Th>Morse</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {characters.map((entry) => (
            <Table.Tr key={entry.display}>
              <Table.Td>{entry.display}</Table.Td>
              <Table.Td>
                <div className={styles.morseView}>
                  <MorsePicture
                    className={styles.morse_picture}
                    morseString={morseEncodingToString(entry.encoding)}
                  />
                </div>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default MorseTable;
