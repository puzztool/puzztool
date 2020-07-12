import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../Store/rootReducer';
import { selectTab } from './brailleEncodingSlice';
import BrailleStream from './BrailleStream';
import BrailleTable from './BrailleTable';

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.braille.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }

function Braille(props: Props) {
  return (
    <Tabs
      activeKey={props.selectedTab}
      id="Braille-tabs"
      onSelect={props.selectTab}
    >
      <Tab eventKey="1" title="Value">
        <BrailleStream />
      </Tab>
      <Tab eventKey="2" title="Reference">
        <BrailleTable />
      </Tab>
    </Tabs>
  );
}

export default connector(Braille);
