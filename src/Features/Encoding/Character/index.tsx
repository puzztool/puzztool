import { Tabs } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import PuzzToolPage from "../../../Common/PuzzToolPage";
import { RootState } from "../../../Store/rootReducer";
import AsciiTable from "./AsciiTable";
import { selectTab } from "./characterEncodingSlice";
import OrdinalTable from "./OrdinalTable";

const mapStateToProps = (state: RootState) => ({
  selectedTab: state.encoding.character.selectedTab,
});
const mapDispatchToProps = {
  selectTab,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function CharacterEncodingsInner(props: Props) {
  return (
    <PuzzToolPage title="Character Encodings">
      <Tabs value={props.selectedTab ?? "1"} onChange={props.selectTab}>
        <Tabs.List>
          <Tabs.Tab value="1">ASCII</Tabs.Tab>
          <Tabs.Tab value="2">Ordinal</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="1">
          <AsciiTable />
        </Tabs.Panel>
        <Tabs.Panel value="2">
          <OrdinalTable />
        </Tabs.Panel>
      </Tabs>
    </PuzzToolPage>
  );
}

const CharacterEncodings = connector(CharacterEncodingsInner);
export default CharacterEncodings;
