import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabViewBase from '../TabViewBase';
import ResistorTable from '../../Resistor/ResistorTable';
import ResistorInput from '../../Resistor/ResistorInput';

class Resistors extends TabViewBase {
  public render() {
    return (
      <div className="Resistors">
        <div className="Resistors-content">
          <Tabs
            activeKey={this.state.activeKey}
            id="Resistors-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
          >
            <Tab eventKey={1} title="Value">
              <ResistorInput />
            </Tab>
            <Tab eventKey={2} title="Reference">
              <ResistorTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Resistors';
  }
}

export default Resistors;
