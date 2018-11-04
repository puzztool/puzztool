import * as React from 'react';
import AutokeyStream from '../../Cipher/Autokey/AutokeyStream';
import './Autokey.css';

class Autokey extends React.Component {
  public render() {
    return (
      <div className="Autokey">
        <div className="Autokey-content">
          <h2>Autokey Cipher</h2>
          <p>
            An autokey cipher is similar to a Vigenere cipher, where the plaintext is used after the key runs out. 
            This addresses the key length repetition issues with the Vigenere cipher.
          </p>
          <p>
            Enter the text and key, and select encrypt or decrypt.
          </p>
          <AutokeyStream />
        </div>
      </div>
    );
  }
}

export default Autokey;
