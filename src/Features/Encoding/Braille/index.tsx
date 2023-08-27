import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import { RootState } from "../../../Store/rootReducer";
import { selectTab } from "./brailleEncodingSlice";
import BrailleStream from "./BrailleStream";
import BrailleReference from "./BrailleReference";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.braille.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function BrailleInner(props: Props) {
  return (
    <PuzzToolPage title="Braille">
      <Tabs
        activeKey={props.selectedTab}
        id="Braille-tabs"
        onSelect={props.selectTab}
      >
        <Tab eventKey="1" title="Value">
          <BrailleStream />
        </Tab>
        <Tab eventKey="2" title="Reference">
          <BrailleReference />
        </Tab>
      </Tabs>
    </PuzzToolPage>
  );
}

const Braille = connector(BrailleInner);
export default Braille;
