import {
  BrailleDot as Dot,
  decodeBrailleStream,
  lookupBrailleEncoding,
  toggleBrailleDot,
} from "puzzle-lib/braille";
import { useEffect } from "react";
import { Button, Card, Grid, Group, Stack, Text } from "@mantine/core";
import ClearButton from "../../../Common/ClearButton";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import BrailleCharacter from "./BrailleCharacter";
import {
  append,
  backspace,
  clear,
  setEncoding,
  space,
} from "./brailleEncodingSlice";
import styles from "./BrailleStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  encoding: state.encoding.braille.encoding,
  stream: state.encoding.braille.stream,
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

function BrailleStreamInner(props: Props) {
  const {
    encoding,
    backspace: backspaceFn,
    append,
    space: spaceFn,
    setEncoding,
  } = props;

  useEffect(() => {
    function onKeyDown(ev: KeyboardEvent) {
      if (ev.defaultPrevented) {
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
          backspaceFn();
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

      let handled = false;

      if (ev.keyCode === 13) {
        // Enter
        const lookup = lookupBrailleEncoding(encoding);
        if (lookup.exactString) {
          append(encoding);
        } else {
          spaceFn();
        }
        handled = true;
      } else if (ev.charCode >= 49 && ev.charCode <= 54) {
        // '1' through '6'
        // The braille dots are bitfields, so calculate the value based on the key
        // pressed.
        // TODO: This should probably be in puzzle-lib.
        setEncoding(toggleBrailleDot(encoding, Math.pow(2, ev.charCode - 49)));
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
  }, [encoding, backspaceFn, append, spaceFn, setEncoding]);

  function onBackspaceClick() {
    props.backspace();
  }

  function onCharacterClick(mask: Dot) {
    props.setEncoding(toggleBrailleDot(props.encoding, mask));
  }

  function onClearClick() {
    props.clear();
  }

  const lookup = lookupBrailleEncoding(props.encoding);
  const displayStr = lookup.exactString;
  const partialStr = lookup.partial.map((e) => e.display).join(" ");

  function onNextClick() {
    if (displayStr) {
      props.append(props.encoding);
    } else {
      props.space();
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
              <BrailleCharacter
                encoding={props.encoding}
                onClick={onCharacterClick}
              />
            </Grid.Col>
            <Grid.Col span="auto">
              <div className={styles.view}>{displayStr || "?"}</div>
              {partialStr && props.encoding !== 0 && (
                <Text size="sm" c="dimmed">
                  {partialStr}
                </Text>
              )}
            </Grid.Col>
          </Grid>
          <Group gap="xs">
            <Button onClick={onBackspaceClick}>&#x232b;</Button>
            <Button onClick={onNextClick}>Next</Button>
            <ClearButton onClear={onClearClick} />
          </Group>
        </Stack>
      </Card>
      <Card withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Output</Text>
        </Card.Section>
        <pre className={styles.output}>
          {decodeBrailleStream(props.stream)}
          <span className="blinking-cursor">|</span>
        </pre>
      </Card>
    </Stack>
  );
}

const BrailleStream = connector(BrailleStreamInner);
export default BrailleStream;
