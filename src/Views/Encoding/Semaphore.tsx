import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabViewBase from '../TabViewBase';
import SemaphoreStream from '../../Semaphore/SemaphoreStream';
import SemaphoreTable from '../../Semaphore/SemaphoreTable';
import './Semaphore.scss';

class Semaphore extends TabViewBase {
  public render() {
    return (
      <div className="Semaphore">
        <div className="Semaphore-content">
          <Tabs
            activeKey={this.state.activeKey}
            animation={false}
            id="Semaphore-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
          >
            <Tab eventKey={1} title="Value">
              <SemaphoreStream />
            </Tab>
            <Tab eventKey={2} title="Reference">
              <SemaphoreTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Semaphore';
  }
}

export default Semaphore;
