import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabViewBase from '../TabViewBase';
import MorseStream from '../../Morse/MorseStream';
import MorseTable from '../../Morse/MorseTable';
import './Morse.scss';

class Morse extends TabViewBase {
  public render() {
    return (
      <div className="Morse">
        <Tabs
          activeKey={this.state.activeKey}
          animation={false}
          id="Morse-tabs"
          // tslint:disable-next-line: no-any
          onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
        >
          <Tab className="Morse-tab-value" eventKey={1} title="Value">
            <MorseStream />
          </Tab>
          <Tab eventKey={2} title="Reference">
            <MorseTable />
          </Tab>
        </Tabs>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Morse';
  }
}

export default Morse;
