import { Tabs } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import { RootState } from "../../../Store/rootReducer";
import { selectTab } from "./phoneSlice";
import PhoneStream from "./PhoneStream";
import PhoneReverse from "./PhoneReverse";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.phone.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function PhoneInner(props: Props) {
  return (
    <PuzzToolPage title="Phone Keypad">
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">Digits → Text</Tabs.Tab>
          <Tabs.Tab value="2">Text → Digits</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <PhoneStream />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <PhoneReverse />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const Phone = connector(PhoneInner);
export default Phone;
