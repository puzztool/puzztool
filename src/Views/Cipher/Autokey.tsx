import * as React from 'react';
import AutokeyStream from 'Cipher/Autokey/AutokeyStream';
import './Caesar.css';

class Autokey extends React.Component {
  public render() {
    return (
      <div className="Autokey">
        <div className="Autokey-content">
          <AutokeyStream />
        </div>
      </div>
    );
  }
}

export default Autokey;
