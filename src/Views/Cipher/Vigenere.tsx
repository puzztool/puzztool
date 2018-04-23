import * as React from 'react';
import VigenereStream from 'Cipher/Vigenere/VigenereStream';
import './Vigenere.css';

class Vigenere extends React.Component {
  public render() {
    return (
      <div className="Vigenere">
        <div className="Vigenere-content">
          <VigenereStream />
        </div>
      </div>
    );
  }
}

export default Vigenere;
