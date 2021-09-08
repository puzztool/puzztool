import Table from "react-bootstrap/Table";
import { NatoData } from "puzzle-lib";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import styles from "./index.module.scss";

function Nato() {
  return (
    <PuzzToolPage title="NATO Alphabet">
      <div className={styles.container}>
        <Table striped={true} responsive={true}>
          <thead>
            <tr>
              <th>Letter</th>
              <th>NATO Word</th>
            </tr>
          </thead>
          <tbody>
            {NatoData.instance.entries.map((value) => (
              <tr key={value.character}>
                <td>{value.character}</td>
                <td>{value.word}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </PuzzToolPage>
  );
}

export default Nato;
