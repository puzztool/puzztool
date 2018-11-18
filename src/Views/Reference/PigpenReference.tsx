import React, { Component } from 'react';
import './PigpenReference.css';

class PigpenReference extends Component {
  public render() {
    return (
      <div id="PigpenReference-container">
        <p>
        <img
          className="PigpenReference"
          src={require('../../Images/pigpen_key.svg')}
          alt="Pigpen cipher reference chart"
        />
        </p>
      </div>
    );
  }
}   

export default PigpenReference;
