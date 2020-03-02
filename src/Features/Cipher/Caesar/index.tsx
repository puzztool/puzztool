import React from 'react';
import CaesarStream from './CaesarStream';
import './index.scss';

function Caesar() {
  return (
    <div className="Caesar">
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
  );
}

export default Caesar;
