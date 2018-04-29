import * as React from 'react';
import SemaphoreStream from '../../Semaphore/SemaphoreStream';
import './Semaphore.css';

class Semaphore extends React.Component {
  public render() {
    return (
      <div className="Semaphore">
        <div className="Semaphore-content">
          <SemaphoreStream />
        </div>
      </div>
    );
  }
}

export default Semaphore;
