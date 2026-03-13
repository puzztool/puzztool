import { Tabs } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../Common/PuzzToolPage";
import { RootState } from "../../Store/rootReducer";
import ResistorInput from "./ResistorInput";
import { selectTab } from "./resistorSlice";
import ResistorTable from "./ResistorTable";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.resistor.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

function ResistorInner(props: Props) {
  return (
    <PuzzToolPage title="Resistors">
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">Value</Tabs.Tab>
          <Tabs.Tab value="2">Reference</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <ResistorInput />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <ResistorTable />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const Resistor = connector(ResistorInner);
export default Resistor;
