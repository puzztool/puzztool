import React from 'react';
import Tab from 'react-bootstrap/Tab';
import BrailleStream from '../../Braille/BrailleStream';
import BrailleTable from '../../Braille/BrailleTable';
import TabsView from '../../Common/TabsView';

function Braille() {
  return (
    <TabsView id="Braille-tabs">
      <Tab eventKey={1} title="Value">
        <BrailleStream />
      </Tab>
      <Tab eventKey={2} title="Reference">
        <BrailleTable />
      </Tab>
    </TabsView>
  );
}

export default Braille;
