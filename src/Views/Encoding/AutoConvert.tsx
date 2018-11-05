import * as React from 'react';
import AutoConvertStream from '../../Conversion/AutoConversion/AutoConvertStream';
import './AutoConvert.css';

class AutoConvert extends React.Component {
  public render() {
    return (
      <div className="AutoConvert">
        <div className="AutoConvert-content">
          <div className="AutoConvert-info">
            <h2>AutoConvert</h2>
            <p>
              AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext.
              If all of your text is in the same encoding, you can select "force consistent encoding".  
              This can be useful for ambigious strings.
            </p>
            <p>
              Some of the supported encodings are:
            </p>
            <ul>
              <li>ASCII (A=65, B=66)</li>
              <li>Five bit binary (A=00001, B=00010)</li>
              <li>Eight bit binary (A=01100001, B=01100010)</li>
              <li>Ordinal (A=1, B=2)</li>
            </ul>
          </div>
          <AutoConvertStream />
        </div>
      </div>
    );
  }
}

export default AutoConvert;
