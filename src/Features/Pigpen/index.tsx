import PuzzToolPage from '../../Common/PuzzToolPage';
import './index.scss';

function Pigpen() {
  return (
    <PuzzToolPage title="Pigpen">
      <div className="Pigpen">
        <img
          className="Pigpen-img"
          src={require('../../Images/pigpen_key.svg')}
          alt="Pigpen cipher reference chart"
        />
      </div>
    </PuzzToolPage>
  );
}

export default Pigpen;
