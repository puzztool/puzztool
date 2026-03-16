import {
  PigpenEncoding,
  decodePigpenStream,
  lookupPigpenEncoding,
} from "puzzle-lib/pigpen";
import { Card, Grid, Group, Stack, Text, Button } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import PigpenCharacter from "./PigpenCharacter";
import ClearButton from "../../../Common/ClearButton";
import {
  append,
  backspace,
  clear,
  setEncoding,
  space,
} from "./pigpenEncodingSlice";
import styles from "./PigpenStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  encoding: state.encoding.pigpen.encoding,
  stream: state.encoding.pigpen.stream,
});
const mapDispatchToProps = {
  append,
  backspace,
  clear,
  setEncoding,
  space,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function PigpenStreamInner({
  encoding,
  stream,
  append,
  backspace: backspaceFn,
  clear: clearFn,
  setEncoding,
  space: spaceFn,
}: Props) {
  function onCharacterClick(newEncoding: PigpenEncoding) {
    setEncoding(newEncoding);
  }

  const lookup = lookupPigpenEncoding(encoding);
  const displayStr = lookup.exactString;
  const partialStr = lookup.partial.map((e) => e.display).join(" ");

  function onNextClick() {
    if (displayStr) {
      append(encoding);
    } else {
      spaceFn();
    }
  }

  return (
    <Stack className={styles.container} gap="sm">
      <Card className={styles.input} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Input</Text>
        </Card.Section>
        <Stack gap="sm">
          <Grid align="center">
            <Grid.Col span="content">
              <PigpenCharacter encoding={encoding} onClick={onCharacterClick} />
            </Grid.Col>
            <Grid.Col span="auto">
              <div className={styles.view}>{displayStr || "?"}</div>
              {partialStr && (
                <Text size="sm" c="dimmed">
                  {partialStr}
                </Text>
              )}
            </Grid.Col>
          </Grid>
          <Group gap="xs">
            <Button onClick={() => backspaceFn()}>&#x232b;</Button>
            <Button onClick={onNextClick}>Next</Button>
            <ClearButton onClear={() => clearFn()} />
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Output</Text>
        </Card.Section>
        <pre className={styles.output}>
          {decodePigpenStream(stream)}
          <span className="blinking-cursor">|</span>
        </pre>
      </Card>
    </Stack>
  );
}

const PigpenStream = connector(PigpenStreamInner);
export default PigpenStream;
