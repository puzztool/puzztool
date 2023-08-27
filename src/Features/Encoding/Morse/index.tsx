import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import { RootState } from "../../../Store/rootReducer";
import { selectTab } from "./morseEncodingSlice";
import MorseStream from "./MorseStream";
import MorseTable from "./MorseTable";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.morse.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function MorseInner(props: Props) {
  return (
    <PuzzToolPage title="Morse Code">
      <Tabs
        activeKey={props.selectedTab}
        id="Morse-tabs"
        onSelect={props.selectTab}
      >
        <Tab eventKey="1" title="Value">
          <MorseStream />
        </Tab>
        <Tab eventKey="2" title="Reference">
          <MorseTable />
        </Tab>
      </Tabs>
    </PuzzToolPage>
  );
}

const Morse = connector(MorseInner);
export default Morse;
