import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect, ConnectedProps } from 'react-redux';
import PuzzToolPage from '../../../Common/PuzzToolPage';
import { RootState } from '../../../Store/rootReducer';
import { selectTab } from './morseEncodingSlice';
import MorseStream from './MorseStream';
import MorseTable from './MorseTable';
import './index.scss';

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.morse.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }

function Morse(props: Props) {
  return (
    <PuzzToolPage title="Morse Code">
      <Tabs
        activeKey={props.selectedTab}
        id="Morse-tabs"
        onSelect={props.selectTab}
      >
        <Tab className="Morse-tab-value" eventKey="1" title="Value">
          <MorseStream />
        </Tab>
        <Tab eventKey="2" title="Reference">
          <MorseTable />
        </Tab>
      </Tabs>
    </PuzzToolPage>
  );
}

export default connector(Morse);
