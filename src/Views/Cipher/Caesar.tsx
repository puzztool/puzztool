import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import CaesarStream from 'Cipher/Caesar/CaesarStream';
import './Caesar.css';

class Morse extends React.Component<RouteComponentProps<void>> {
  public render() {
    return (
      <div className="Caesar">
        <div className="Caesar-content">
          <CaesarStream />
        </div>
      </div>
    );
  }
}

export default Morse;
