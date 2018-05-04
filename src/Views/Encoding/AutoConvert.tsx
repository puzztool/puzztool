import * as React from 'react';
import AutoConvertStream from '../../Conversion/AutoConversion/AutoConvertStream';
import './AutoConvert.css';

class AutoConvert extends React.Component {
  public render() {
    return (
      <div className="AutoConvert">
        <div className="AutoConvert-content">
          <AutoConvertStream />
        </div>
      </div>
    );
  }
}

export default AutoConvert;
