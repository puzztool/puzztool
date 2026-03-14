import { caesarRotations } from "puzzle-lib/cipher";
import { ChangeEvent, ReactNode } from "react";
import { Card, Group, Stack, TextInput, Text } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import ClearButton from "../../../Common/ClearButton";
import { useFocusInput } from "../../../Hooks/FocusInput";
import { RootState } from "../../../Store/rootReducer";
import { clear, setText } from "./caesarCipherSlice";
import CaesarList from "./CaesarList";
import styles from "./CaesarStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  text: state.cipher.caesar.text,
});
const mapDispatchToProps = {
  clear,
  setText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
  prompt: ReactNode;
}

function CaesarStreamInner(props: Props) {
  const inputRef = useFocusInput();

  function onClearClick() {
    props.clear();
  }

  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    props.setText(event.currentTarget.value);
  }

  return (
    <Stack className={styles.container} gap="sm">
      <Card className={styles.input} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>{props.prompt}</Text>
        </Card.Section>
        <Stack gap="sm">
          <TextInput
            onChange={onTextChanged}
            placeholder="Text"
            ref={inputRef}
            value={props.text}
          />
          <Group gap="xs">
            <ClearButton onClear={onClearClick} />
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Output</Text>
        </Card.Section>
        <CaesarList list={caesarRotations(props.text)} />
      </Card>
    </Stack>
  );
}

const CaesarStream = connector(CaesarStreamInner);
export default CaesarStream;
