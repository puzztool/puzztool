import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import BrailleStream from 'Braille/BrailleStream';
import './Braille.css';

class Braille extends React.Component<RouteComponentProps<void>> {
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
