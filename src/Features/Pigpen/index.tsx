import React from 'react';
import './index.scss';

function Pigpen() {
  return (
    <div className="Pigpen">
      <img
        className="Pigpen-img"
        src={require('../../Images/pigpen_key.svg')}
        alt="Pigpen cipher reference chart"
      />
    </div>
  );
}

export default Pigpen;
