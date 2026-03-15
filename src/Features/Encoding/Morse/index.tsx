import { Tabs } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import { RootState } from "../../../Store/rootReducer";
import { selectTab } from "./morseEncodingSlice";
import MorseStream from "./MorseStream";
import MorseTable from "./MorseTable";
import MorseTree from "./MorseTree";

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
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">Value</Tabs.Tab>
          <Tabs.Tab value="2">Reference</Tabs.Tab>
          <Tabs.Tab value="3">Tree</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <MorseStream />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <MorseTable />
        </Tabs.Panel>
        <Tabs.Panel value="3">
          <MorseTree />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const Morse = connector(MorseInner);
export default Morse;
