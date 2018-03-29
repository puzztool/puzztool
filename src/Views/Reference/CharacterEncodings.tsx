import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Tab, Tabs } from 'react-bootstrap';
import OrdinalTable from 'Conversion/Character/OrdinalTable';
import './CharacterEncodings.css';
import AsciiTable from 'Conversion/Character/AsciiTable';

class CharacterEncodings extends React.Component<RouteComponentProps<void>> {
  public render() {
    return (
      <div className="CharacterEncodings">
        <div className="CharacterEncodings-content">
          <Tabs>
            <Tab eventKey={1} title="ASCII">
              <AsciiTable />
            </Tab>
            <Tab eventKey={2} title="Ordinal">
              <OrdinalTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CharacterEncodings;
