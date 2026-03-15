import { convertString } from "puzzle-lib";
import { ChangeEvent, ReactNode } from "react";
import {
  Card,
  Group,
  SegmentedControl,
  Stack,
  TextInput,
  Text,
} from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import ClearButton from "../../../Common/ClearButton";
import { useFocusInput } from "../../../Hooks/FocusInput";
import { RootState } from "../../../Store/rootReducer";
import { clear, setHomogeneous, setText } from "./autoConvertSlice";
import styles from "./AutoConvertStream.module.scss";

enum ConversionMode {
  consistent,
  mixed,
}

const mapStateToProps = (state: RootState) => ({
  homogeneous: state.encoding.autoConvert.homogeneous,
  text: state.encoding.autoConvert.text,
});
const mapDispatchToProps = {
  clear,
  setHomogeneous,
  setText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
  prompt: ReactNode;
}

function AutoConvertStreamInner(props: Props) {
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
            <SegmentedControl
              data={[
                {
                  label: "Consistent",
                  value: String(ConversionMode.consistent),
                },
                { label: "Mixed", value: String(ConversionMode.mixed) },
              ]}
              value={String(
                props.homogeneous
                  ? ConversionMode.consistent
                  : ConversionMode.mixed,
              )}
              onChange={(value) =>
                props.setHomogeneous(
                  Number(value) === ConversionMode.consistent,
                )
              }
            />
            <ClearButton onClear={onClearClick} />
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Output</Text>
        </Card.Section>
        <pre>{convertString(props.text, props.homogeneous) || " "}</pre>
      </Card>
    </Stack>
  );
}

const AutoConvertStream = connector(AutoConvertStreamInner);
export default AutoConvertStream;
