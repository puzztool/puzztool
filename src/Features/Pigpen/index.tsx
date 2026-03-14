import { Tabs } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../Common/PuzzToolPage";
import { RootState } from "../../Store/rootReducer";
import { selectTab } from "../Encoding/Pigpen/pigpenEncodingSlice";
import PigpenStream from "../Encoding/Pigpen/PigpenStream";
import PigpenReference from "../Encoding/Pigpen/PigpenReference";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.pigpen.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function PigpenInner(props: Props) {
  return (
    <PuzzToolPage title="Pigpen">
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">Value</Tabs.Tab>
          <Tabs.Tab value="2">Reference</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <PigpenStream />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <PigpenReference />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const Pigpen = connector(PigpenInner);
export default Pigpen;
