import type { ResistorColor as Color } from "puzzle-lib";
import { RESISTOR_COLOR_TABLE } from "puzzle-lib";
import Table from "react-bootstrap/Table";
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
      <Table striped={true} responsive={true}>
        <thead>
          <tr>
            <th>Color</th>
            <th>Value</th>
            <th>Multiplier</th>
            <th>Tolerance (%)</th>
          </tr>
        </thead>
        <tbody>
          {RESISTOR_COLOR_TABLE.map((value: Color) => (
            <tr key={value.name}>
              <td style={cellColorStyle(value)}>{value.name}</td>
              <td>{value.value !== undefined ? value.value : ""}</td>
              <td>{value.multiplier}</td>
              <td>
                {value.toleranceInPercent !== undefined
                  ? value.toleranceInPercent
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ResistorTable;
