import * as React from 'react';
import VigenereStream from 'Cipher/Vigenere/VigenereStream';
import './Caesar.css';

class Morse extends React.Component {
  public render() {
    return (
      <div className="Caesar">
        <div className="Caesar-content">
          <VigenereStream />
        </div>
      </div>
    );
  }
}

export default Morse;
