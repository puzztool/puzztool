import { Table } from "@mantine/core";
import { CharacterTableEntry as Entry } from "puzzle-lib";
import styles from "./CharacterTable.module.scss";

interface Props {
  data: Entry[];
}

function CharacterTable(props: Props) {
  return (
    <div className={styles.container}>
      <Table striped withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Character</Table.Th>
            <Table.Th>Binary</Table.Th>
            <Table.Th>Ternary</Table.Th>
            <Table.Th>Octal</Table.Th>
            <Table.Th>Decimal</Table.Th>
            <Table.Th>Hexadecimal</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {props.data.map((value: Entry) => (
            <Table.Tr key={value.character}>
              <Table.Td>{value.character}</Table.Td>
              <Table.Td>{value.binary}</Table.Td>
              <Table.Td>{value.ternary}</Table.Td>
              <Table.Td>{value.octal}</Table.Td>
              <Table.Td>{value.decimal}</Table.Td>
              <Table.Td>{value.hexadecimal.toUpperCase()}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default CharacterTable;
