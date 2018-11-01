import * as React from 'react';
import './Home.css';

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
              <a href="/#/cipher/caesar">Caesar Cipher</a> - Letters are shifted by a fixed value
            </li>
            <li>
              <a href="/#/cipher/vigenere">Vignere Cipher</a> - Letters are mapped based on a key word
            </li>
            <li>
              <a href="/#/cipher/autokey">Autokey Cipher</a> - A Vignere cipher which uses plaintext as the key
            </li>
          </ul>

          <h3>
            Encoding - Different Ways To Represent Letters
          </h3>
          <ul>
            <li>
              <a href="/#/encoding/autoconvert">AutoConvert</a> - Mapping numbers to letters (ASCII, Binary, Ordinal)
            </li>
            <li>
              <a href="/#/encoding/braille">Braille</a> - Six dots in a two-by-three grid
            </li>
            <li>
              <a href="/#/encoding/morse">Morse Code</a> - Dots and dashes with separations
            </li>
            <li>
              <a href="/#/encoding/semaphore">Semaphore</a> - Positions of two different flags
            </li>
            <li>
              <a href="/#/encoding/pigpen">Pigpen</a> - Parts of a tic-tac-toe grid or X, some with dot
            </li>
          </ul>

          <h3>
            Reference - Misc information
          </h3>
          <ul>
            <li>
              <a href="/#/reference/characterencodings">Character Encodings</a>
               - Static display of number to letter mapping
            </li>
            <li>
              <a href="/#/reference/nato">NATO Alphabet</a> - Words used to clearly identify a letter
            </li>
            <li>
              <a href="/#/reference/navalflags">Naval Flags</a> - Different simple flags which convey a letter
            </li>
            <li>
              <a href="/#/reference/resistors">Resistors</a> - Find a resistor value using different colored bands
            </li>
          </ul>
          </div>
      </div>
    );
  }
}

export default Home;
