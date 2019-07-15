import React, { Component } from 'react';
import './PigpenReference.scss';

class PigpenReference extends Component {
  public render() {
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
}

export default PigpenReference;
