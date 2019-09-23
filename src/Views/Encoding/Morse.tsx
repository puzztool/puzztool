import React from 'react';
import Tab from 'react-bootstrap/Tab';
import TabsView from '../../Common/TabsView';
import MorseStream from '../../Morse/MorseStream';
import MorseTable from '../../Morse/MorseTable';
import './Morse.scss';

function Morse() {
  return (
    <TabsView id="Morse-tabs">
      <Tab className="Morse-tab-value" eventKey={1} title="Value">
        <MorseStream />
      </Tab>
      <Tab eventKey={2} title="Reference">
        <MorseTable />
      </Tab>
    </TabsView>
  );
}

export default Morse;
