import React, { FunctionComponent } from 'react';
import './index.scss';

const ReferenceList: FunctionComponent = (props) => {
  return (
    <div className="ReferenceList">
        {props.children}
    </div>
  );
}

export default ReferenceList;
