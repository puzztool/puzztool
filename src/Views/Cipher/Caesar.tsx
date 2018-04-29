import * as React from 'react';
import CaesarStream from '../../Cipher/Caesar/CaesarStream';
import './Caesar.css';

class Caesar extends React.Component {
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

export default Caesar;
