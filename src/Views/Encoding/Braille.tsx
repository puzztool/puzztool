import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabViewBase from '../TabViewBase';
import BrailleStream from '../../Braille/BrailleStream';
import BrailleTable from '../../Braille/BrailleTable';

class Braille extends TabViewBase {
  public render() {
    return (
      <div className="Braille">
        <div className="Braille-content">
          <Tabs
            activeKey={this.state.activeKey}
            id="Braille-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
          >
            <Tab eventKey={1} title="Value">
              <BrailleStream />
            </Tab>
            <Tab eventKey={2} title="Reference">
              <BrailleTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Braille';
  }
}

export default Braille;
