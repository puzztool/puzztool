import { Tabs } from "@mantine/core";
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
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">Value</Tabs.Tab>
          <Tabs.Tab value="2">Reference</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <BrailleStream />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <BrailleReference />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const Braille = connector(BrailleInner);
export default Braille;
