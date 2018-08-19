import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabViewBase from '../TabViewBase';
import MorseStream from '../../Morse/MorseStream';
import MorseTable from '../../Morse/MorseTable';
import './Morse.css';

class Morse extends TabViewBase {
  public render() {
    return (
      <div className="Morse">
        <div className="Morse-content">
          <Tabs
            activeKey={this.state.activeKey}
            animation={false}
            id="Morse-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
          >
            <Tab eventKey={1} title="Value">
              <MorseStream />
            </Tab>
            <Tab eventKey={2} title="Reference">
              <MorseTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Morse';
  }
}

export default Morse;
