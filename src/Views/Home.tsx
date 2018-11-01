import * as React from 'react';
import './Home.css';

const version = require('../version');

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <div className="Home-content">
          <h2>
            What type of puzzle are you trying to solve?
          </h2>

          <h3>
            Ciphers - Scrambled Letters
          </h3>
          <ul>
            <li>
              <a href="/#/cipher/caesar">Cipher - Letters are shifted by a fixed value (simple)</a>
            </li>
            <li>
              <a href="/#/cipher/vigenere">Vignere Cipher - Letters are mapped based on a key word</a>
            </li>
            <li>
              <a href="/#/cipher/autokey">Autokey Cipher - A Vignere cipher which uses plaintext as the key</a>
            </li>
          </ul>

          <h3>
            Encoding - Different Ways To Represent Letters
          </h3>
          <ul>
            <li>AutoConvert - Mapping numbers to letters (ASCII, Binary, Ordinal)</li>
            <li>Braille - Six dots in a two-by-three grid</li>
            <li>Morse - Dots and dashes with separations</li>
            <li>Semaphore - Positions of two different flags</li>
            <li>Pigpen - Parts of a tic-tac-toe grid or X, some with dots </li>
          </ul>

          <h3>
            Reference - Misc information
          </h3>
          <ul>
            <li>Character Encodings - Static display of number to letter mapping</li>
            <li>NATO Alphabet - Words used to clearly identify a letter</li>
            <li>Naval Flags - Different simple flags which convey a letter</li>
            <li>Resistors - Find a resistor value using different colored bands</li>
          </ul>
        </div>
        PuzzTool Version {version}
      </div>
    );
  }
}

export default Home;
