import Table from 'react-bootstrap/Table';
import { NatoData } from 'puzzle-lib';
import PuzzToolPage from '../../../Common/PuzzToolPage';
import './index.scss';

function Nato() {
  return (
    <PuzzToolPage title="NATO Alphabet">
      <div className="Nato">
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
