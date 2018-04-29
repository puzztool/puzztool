import * as React from 'react';
import BrailleStream from '../../Braille/BrailleStream';
import './Braille.css';

class Braille extends React.Component {
  public render() {
    return (
      <div className="Braille">
        <div className="Braille-content">
          <BrailleStream />
        </div>
      </div>
    );
  }
}

export default Braille;
