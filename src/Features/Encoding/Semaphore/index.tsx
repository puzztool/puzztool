import { Tabs } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import { RootState } from "../../../Store/rootReducer";
import { selectTab } from "./semaphoreEncodingSlice";
import SemaphoreStream from "./SemaphoreStream";
import SemaphoreReference from "./SemaphoreReference";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.semaphore.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function SemaphoreInner(props: Props) {
  return (
    <PuzzToolPage title="Semaphore">
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">Value</Tabs.Tab>
          <Tabs.Tab value="2">Reference</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <SemaphoreStream />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <SemaphoreReference />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const Semaphore = connector(SemaphoreInner);
export default Semaphore;
