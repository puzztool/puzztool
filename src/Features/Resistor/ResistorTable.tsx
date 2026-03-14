import type { ResistorColor as Color } from "puzzle-lib/resistor";
import { RESISTOR_COLOR_TABLE } from "puzzle-lib/resistor";
import { Table } from "@mantine/core";
import { getContrastingColor } from "../../Common/Helpers";
import styles from "./ResistorTable.module.scss";

function cellColorStyle(value: Color) {
  return {
    backgroundColor: value.colorCode,
    color: getContrastingColor(value.colorCode),
  };
}

function ResistorTable() {
  return (
    <div className={styles.container}>
      <Table striped withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Color</Table.Th>
            <Table.Th>Value</Table.Th>
            <Table.Th>Multiplier</Table.Th>
            <Table.Th>Tolerance (%)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {RESISTOR_COLOR_TABLE.map((value: Color) => (
            <Table.Tr key={value.name}>
              <Table.Td style={cellColorStyle(value)}>{value.name}</Table.Td>
              <Table.Td>
                {value.value !== undefined ? value.value : ""}
              </Table.Td>
              <Table.Td>{value.multiplier}</Table.Td>
              <Table.Td>
                {value.toleranceInPercent !== undefined
                  ? value.toleranceInPercent
                  : ""}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default ResistorTable;
