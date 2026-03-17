import {
  SemaphoreDirection as Direction,
  SemaphoreEncoding,
  addSemaphoreDirection,
  degreesToSemaphoreDirection,
  encodeSemaphoreStream,
  hasSemaphoreDirection,
  lookupSemaphoreEncoding,
  removeSemaphoreDirection,
} from "puzzle-lib/semaphore";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Card, Grid, Group, Stack, Text, TextInput } from "@mantine/core";
import SemaphorePicture from "./SemaphorePicture";
import { connect, ConnectedProps } from "react-redux";
import ClearButton from "../../../Common/ClearButton";
import { RootState } from "../../../Store/rootReducer";
import SemaphoreCharacter from "./SemaphoreCharacter";
import {
  append,
  backspace,
  clear,
  setEncoding,
  space,
} from "./semaphoreEncodingSlice";
import styles from "./SemaphoreStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  encoding: state.encoding.semaphore.encoding,
  stream: state.encoding.semaphore.stream,
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

function SemaphoreStreamInner(props: Props) {
  useEffect(() => {
    function onKeyDown(ev: KeyboardEvent) {
      if (ev.defaultPrevented) {
        return;
      }

      if (ev.target instanceof HTMLInputElement) {
        return;
      }

      let handled = false;

      // Chrome won't trigger keypress for any keys that can invoke browser
      // actions.
      if (
        ev.key === "Backspace" ||
        ev.key === "Delete" ||
        ev.keyCode === 8 ||
        ev.keyCode === 46
      ) {
        const count = Math.max(
          1,
          window.getSelection()?.toString().length ?? 0,
        );
        for (let i = 0; i < count; i++) {
          props.backspace();
        }
        handled = true;
      }

      if (handled) {
        ev.preventDefault();
      }
    }

    function onKeyPress(ev: KeyboardEvent) {
      if (ev.defaultPrevented) {
        return;
      }

      if (ev.target instanceof HTMLInputElement) {
        return;
      }

      let handled = false;

      if (ev.keyCode === 13) {
        // Enter
        onNextClick();
        handled = true;
      } else if (ev.charCode >= 49 && ev.charCode <= 56) {
        // '1' through '8'
        const direction = degreesToSemaphoreDirection((ev.charCode - 49) * 45);
        onCharacterChange(
          !hasSemaphoreDirection(props.encoding, direction) ? "add" : "remove",
          direction,
        );
        handled = true;
      }

      if (handled) {
        ev.preventDefault();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keypress", onKeyPress);
    };
  });

  function onBackspaceClick() {
    props.backspace();
  }

  function onCharacterChange(type: string, direction: Direction) {
    switch (type) {
      case "add":
        props.setEncoding(addSemaphoreDirection(props.encoding, direction));
        break;

      case "remove":
        props.setEncoding(removeSemaphoreDirection(props.encoding, direction));
        break;

      default:
        throw new Error("Invalid change type");
    }
  }

  function onClearClick() {
    props.clear();
  }

  function onNextClick() {
    const result = lookupSemaphoreEncoding(props.encoding);
    if (result.exact.length > 0) {
      props.append(result.exact[0].toString());
    } else {
      props.space();
    }
  }

  function onSpaceClick() {
    props.space();
  }

  const displayText = lookupSemaphoreEncoding(props.encoding).exactString;

  const [encodeInput, setEncodeInput] = useState("");

  function onEncodeInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setEncodeInput(event.currentTarget.value);
  }

  const encodedStream = encodeInput ? encodeSemaphoreStream(encodeInput) : [];
  const encodeChars = encodeInput.toUpperCase().split("");

  return (
    <Stack className={styles.container} gap="sm">
      <Card className={styles.input} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Input</Text>
        </Card.Section>
        <Stack gap="sm">
          <Grid align="center">
            <Grid.Col span="content">
              <SemaphoreCharacter
                encoding={props.encoding}
                onChange={onCharacterChange}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <div className={styles.view}>{displayText || "?"}</div>
            </Grid.Col>
          </Grid>
          <Group gap="xs">
            <Button onClick={onBackspaceClick}>&#x232b;</Button>
            <Button onClick={onNextClick}>Next</Button>
            <Button onClick={onSpaceClick} variant="default">
              Space
            </Button>
            <ClearButton onClear={onClearClick} />
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Output</Text>
        </Card.Section>
        <pre className={styles.output}>
          {props.stream}
          <span className="blinking-cursor">|</span>
        </pre>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Encode</Text>
        </Card.Section>
        <TextInput
          aria-label="Text to encode as semaphore"
          onChange={onEncodeInputChanged}
          placeholder="Type plaintext to encode as semaphore"
          value={encodeInput}
          mt="xs"
          mb="xs"
        />
        <Group wrap="wrap" gap="xs">
          {encodedStream.map((enc: SemaphoreEncoding, i: number) =>
            enc === SemaphoreEncoding.None ? (
              <div key={i} style={{ width: 20 }} />
            ) : (
              <Stack key={i} gap={2} align="center">
                <SemaphorePicture encoding={enc} width={56} />
                <Text size="xs">{encodeChars[i]}</Text>
              </Stack>
            ),
          )}
        </Group>
      </Card>
    </Stack>
  );
}

const SemaphoreStream = connector(SemaphoreStreamInner);
export default SemaphoreStream;
