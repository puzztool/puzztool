import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import VigenereStream from 'Cipher/Vigenere/VigenereStream';
import './Caesar.css';

class Morse extends React.Component<RouteComponentProps<void>> {
  public render() {
    return (
      <div className="Caesar">
        <div className="Caesar-content">
          <VigenereStream />
        </div>
      </div>
    );
  }
}

export default Morse;
