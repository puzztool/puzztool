import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../Store/rootReducer';
import AsciiTable from './AsciiTable';
import { selectTab } from './characterEncodingSlice';
import OrdinalTable from './OrdinalTable';

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.character.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }

function CharacterEncodings(props: Props) {
  return (
    <Tabs
      activeKey={props.selectedTab}
      id="CharacterEncodings-tabs"
      onSelect={props.selectTab}
    >
      <Tab eventKey="1" title="ASCII">
        <AsciiTable />
      </Tab>
      <Tab eventKey="2" title="Ordinal">
        <OrdinalTable />
      </Tab>
    </Tabs>
  );
}

export default connector(CharacterEncodings);
