import React, { Component } from 'react';
import './PigpenReference.scss';

class PigpenReference extends Component {
  public render() {
    return (
      <div id="PigpenReference">
        <p>
        <img
          className="PigpenReference-img"
          src={require('../../Images/pigpen_key.svg')}
          alt="Pigpen cipher reference chart"
        />
        </p>
      </div>
    );
  }
}   

export default PigpenReference;
