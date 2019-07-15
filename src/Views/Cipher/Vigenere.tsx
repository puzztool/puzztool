import React, { Component } from 'react';
import VigenereStream from '../../Cipher/Vigenere/VigenereStream';
import './Vigenere.scss';

class Vigenere extends Component {
  public render() {
    return (
      <div className="Vigenere">
        <div className="Vigenere-info">
          <h2>Vigenere Cipher</h2>
          <p>
            A Vigenere cipher is a type of substitution cipher.  It shifts each letter by using a keyword.
            For example, a the keyword "ace" would shift the first letter by 1, second by 3, and third by 5.
            </p>
        </div>
        <VigenereStream
          prompt="Enter the text you want to convert, and the keyword to shift the text by."
        />
      </div>
    );
  }
}

export default Vigenere;
