import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MorseStream from 'Morse/MorseStream';
import './Morse.css';

class Morse extends React.Component<RouteComponentProps<void>> {
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
