import React, { Component } from 'react';
import AutokeyStream from '../../Cipher/Autokey/AutokeyStream';
import './Autokey.scss';

class Autokey extends Component {
  public render() {
    return (
      <div className="Autokey">
        <div className="Autokey-content">
          <div className="Autokey-info">
            <h2>Autokey Cipher</h2>
            <p>
              An autokey cipher is similar to a Vigenere cipher, where the plaintext is used after the key runs out.
              This addresses the key length repetition issues with the Vigenere cipher.
            </p>
          </div>
          <AutokeyStream
            prompt="Enter the text and key, and select encrypt or decrypt."
          />
        </div>
      </div>
    );
  }
}

export default Autokey;
