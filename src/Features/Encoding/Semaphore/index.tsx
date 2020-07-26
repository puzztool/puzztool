import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect, ConnectedProps } from 'react-redux';
import PuzzToolPage from '../../../Common/PuzzToolPage';
import { RootState } from '../../../Store/rootReducer';
import { selectTab } from './semaphoreEncodingSlice';
import SemaphoreStream from './SemaphoreStream';
import SemaphoreReference from './SemaphoreReference';

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
    <PuzzToolPage title="Semaphore">
      <Tabs
        activeKey={props.selectedTab}
        id="Semaphore-tabs"
        onSelect={props.selectTab}
      >
        <Tab eventKey="1" title="Value">
          <SemaphoreStream />
        </Tab>
        <Tab eventKey="2" title="Reference">
          <SemaphoreReference />
        </Tab>
      </Tabs>
    </PuzzToolPage>
  );
}

export default connector(Semaphore);
