import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import TabViewBase from '../TabViewBase';
import ResistorTable from '../../Resistor/ResistorTable';
import ResistorInput from '../../Resistor/ResistorInput';
import './Resistors.css';

class Resistors extends TabViewBase {
  public render() {
    return (
      <div className="Resistors">
        <div className="Resistors-content">
          <Tabs
            activeKey={this.state.activeKey}
            animation={false}
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
