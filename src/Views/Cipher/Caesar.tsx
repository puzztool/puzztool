import React, { Component } from 'react';
import CaesarStream from '../../Cipher/Caesar/CaesarStream';
import './Caesar.scss';

class Caesar extends Component {
  public render() {
    return (
      <div className="Caesar">
        <div className="Caesar-content">
          <div className="Caesar-info">
            <h2>Caesar Cipher</h2>
            <p>
              A Caesar cipher works by shifting every letter by a fixed amount.
              This is a simple cipher - there are only 25 different shifts for each letter.
            </p>
          </div>
          <CaesarStream
            prompt="Type in your text, and all possible shifts will be displayed."
          />
        </div>
      </div>
    );
  }
}

export default Caesar;
