import React from 'react';
import Tab from 'react-bootstrap/Tab';
import { connect, ConnectedProps } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import PuzzToolPage from '../../Common/PuzzToolPage';
import { RootState } from '../../Store/rootReducer';
import ResistorInput from './ResistorInput';
import { selectTab } from './resistorSlice';
import ResistorTable from './ResistorTable';

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.resistor.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

function Resistors(props: Props) {
  return (
    <PuzzToolPage title="Resistors">
      <Tabs
        activeKey={props.selectedTab}
        id="Resistors-tabs"
        onSelect={props.selectTab}
      >
        <Tab eventKey="1" title="Value">
          <ResistorInput />
        </Tab>
        <Tab eventKey="2" title="Reference">
          <ResistorTable />
        </Tab>
      </Tabs>
    </PuzzToolPage>
  );
}

export default connector(Resistors);
