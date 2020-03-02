import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../Store/rootReducer';
import { selectTab } from './semaphoreEncodingSlice';
import SemaphoreStream from './SemaphoreStream';
import SemaphoreTable from './SemaphoreTable';

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.semaphore.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }

function Semaphore(props: Props) {
  return (
    <Tabs
      activeKey={props.selectedTab}
      id="Semaphore-tabs"
      onSelect={props.selectTab}
    >
      <Tab eventKey={1} title="Value">
        <SemaphoreStream />
      </Tab>
      <Tab eventKey={2} title="Reference">
        <SemaphoreTable />
      </Tab>
    </Tabs>
  );
}

export default connector(Semaphore);
