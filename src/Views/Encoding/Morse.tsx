import * as React from 'react';
import MorseStream from '../../Morse/MorseStream';
import './Morse.css';

class Morse extends React.Component {
  public render() {
    return (
      <div className="Morse">
        <div className="Morse-content">
          <MorseStream />
        </div>
      </div>
    );
  }
}

export default Morse;
