import React from 'react';
import './PigpenReference.scss';

function PigpenReference() {
  return (
    <div className="PigpenReference">
      <img
        className="PigpenReference-img"
        src={require('../../Images/pigpen_key.svg')}
        alt="Pigpen cipher reference chart"
      />
    </div>
  );
}

export default PigpenReference;
