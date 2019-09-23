import React from 'react';
import Tab from 'react-bootstrap/Tab';
import TabsView from '../../Common/TabsView';
import AsciiTable from '../../Conversion/Character/AsciiTable';
import OrdinalTable from '../../Conversion/Character/OrdinalTable';

function CharacterEncodings() {
  return (
    <TabsView id="CharacterEncodings-tabs">
      <Tab eventKey={1} title="ASCII">
        <AsciiTable />
      </Tab>
      <Tab eventKey={2} title="Ordinal">
        <OrdinalTable />
      </Tab>
    </TabsView>
  );
}

export default CharacterEncodings;
