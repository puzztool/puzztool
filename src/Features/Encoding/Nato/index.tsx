import { Table } from "@mantine/core";
import { NATO_ALPHABET } from "puzzle-lib";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import styles from "./index.module.scss";

function Nato() {
  return (
    <PuzzToolPage title="NATO Alphabet">
      <div className={styles.container}>
        <Table striped withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Letter</Table.Th>
              <Table.Th>NATO Word</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {NATO_ALPHABET.map((value) => (
              <Table.Tr key={value.character}>
                <Table.Td>{value.character}</Table.Td>
                <Table.Td>{value.word}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </PuzzToolPage>
  );
}

export default Nato;
