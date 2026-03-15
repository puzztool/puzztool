import {
  MORSE_DOT,
  MORSE_DASH,
  MORSE_CHARACTER_DIVIDER,
  MORSE_WORD_DIVIDER,
  decodeMorse,
  invertMorse,
  reverseMorse,
  invertAndReverseMorse,
  lookupMorseEncoding,
  parseMorseString,
} from "puzzle-lib/morse";
import { ChangeEvent } from "react";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import ClearButton from "../../../Common/ClearButton";
import { RootState } from "../../../Store/rootReducer";
import { append, backspace, clear, setStream } from "./morseEncodingSlice";
import { MorseDot, MorseDash } from "./MorsePicture";
import styles from "./MorseStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  stream: state.encoding.morse.stream,
});
const mapDispatchToProps = {
  append,
  backspace,
  clear,
  setStream,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function normalizeStream(text: string): string {
  return text
    .replace(/[\t\r\n/]+/g, " / ")
    .replace(/ *\/ */g, MORSE_WORD_DIVIDER)
    .replace(/ {2,}/g, MORSE_CHARACTER_DIVIDER)
    .replace(/[^.\- /]/g, "");
}

function MorseStreamInner(props: Props) {
  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    props.setStream(normalizeStream(event.currentTarget.value));
  }

  function plainText(): string {
    return decodeMorse(props.stream);
  }

  function invertText(): string {
    return invertMorse(props.stream);
  }

  function reverseText(): string {
    return reverseMorse(props.stream);
  }

  function invertReverseText(): string {
    return invertAndReverseMorse(props.stream);
  }

  function onBackspaceClick() {
    props.backspace();
  }

  function onClearClick() {
    props.clear();
  }

  function onDotClick() {
    props.append(MORSE_DOT);
  }

  function onDashClick() {
    props.append(MORSE_DASH);
  }

  function partialMatchHint(): string | null {
    // Extract the in-progress morse segment: everything after the last divider
    const lastDiv = Math.max(
      props.stream.lastIndexOf(MORSE_CHARACTER_DIVIDER),
      props.stream.lastIndexOf(MORSE_WORD_DIVIDER),
    );
    const morse = lastDiv >= 0 ? props.stream.slice(lastDiv + 1) : props.stream;
    if (!morse) {
      return null;
    }

    const encoding = parseMorseString(morse);
    const result = lookupMorseEncoding(encoding);
    const exact = result.exact;
    const potential = result.partial;
    if (potential.length === 0) {
      return null;
    }

    const exactSet = new Set(exact.map((e) => e.display));
    const potentialOnly = potential.filter((e) => !exactSet.has(e.display));

    const MAX_POTENTIAL = 6;
    const shownPotential = potentialOnly.slice(0, MAX_POTENTIAL);
    const hasMore = potentialOnly.length > MAX_POTENTIAL;

    const displayMorse = morse.replace(/\./g, "\u00b7").replace(/-/g, "\uff0d");
    const parts = [
      ...exact.map((e) => e.display),
      ...shownPotential.map((e) => e.display + "?"),
      ...(hasMore ? ["\u2026"] : []),
    ];

    return `${displayMorse} \u2192 ${parts.join("  ")}`;
  }

  function onNextClick() {
    if (props.stream.length > 0) {
      const lastCharacter = props.stream.slice(-1);
      if (lastCharacter === MORSE_CHARACTER_DIVIDER) {
        // Pressing next twice starts a new word
        props.backspace();
        props.append(MORSE_WORD_DIVIDER);
      } else if (lastCharacter !== MORSE_WORD_DIVIDER) {
        props.append(MORSE_CHARACTER_DIVIDER);
      }
    }
  }

  const hint = partialMatchHint();

  return (
    <Stack className={styles.container} gap="sm">
      <Card className={styles.morseOutput} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Input</Text>
        </Card.Section>
        <TextInput
          aria-label="Morse code input"
          onChange={onTextChanged}
          placeholder="Paste or type raw morse (e.g. .... . .-.. .-.. ---)"
          value={props.stream}
          mt="xs"
        />
        <div className={styles.partialMatches}>{hint}</div>
      </Card>
      <Card className={styles.output} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Plaintext</Text>
        </Card.Section>
        <pre>{plainText() || " "}</pre>
      </Card>
      <Group className={styles.inputCommands} gap="xs">
        <Button onClick={onDotClick}>
          <MorseDot className={styles.dot_button} />
        </Button>
        <Button onClick={onDashClick}>
          <MorseDash className={styles.dash_button} />
        </Button>
      </Group>
      <Group className={styles.commands} gap="xs">
        <Button onClick={onBackspaceClick}>&#x232b;</Button>
        <Button onClick={onNextClick}>Next</Button>
        <ClearButton onClear={onClearClick} />
      </Group>
      <Card className={styles.output} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Swap Dots/Dashes</Text>
        </Card.Section>
        <pre>{invertText() || " "}</pre>
      </Card>
      <Card className={styles.output} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Right to Left</Text>
        </Card.Section>
        <pre>{reverseText() || " "}</pre>
      </Card>
      <Card className={styles.output} withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Text fw={500}>Right to Left + Swap Dots/Dashes</Text>
        </Card.Section>
        <pre>{invertReverseText() || " "}</pre>
      </Card>
    </Stack>
  );
}

const MorseStream = connector(MorseStreamInner);
export default MorseStream;
