import PuzzToolPage from '../../Common/PuzzToolPage';
import PigpenKey from '../../Images/pigpen_key.svg';
import './index.scss';

function Pigpen() {
  return (
    <PuzzToolPage title="Pigpen">
      <div className="Pigpen">
        <img
          className="Pigpen-img"
          src={PigpenKey}
          alt="Pigpen cipher reference chart"
        />
      </div>
    </PuzzToolPage>
  );
}

export default Pigpen;
