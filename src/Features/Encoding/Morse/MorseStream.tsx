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
} from "puzzle-lib";
import { useEffect } from "react";
import { Button, Card, Group, Stack, Text } from "@mantine/core";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import { append, backspace, clear } from "./morseEncodingSlice";
import { MorseDot, MorseDash } from "./MorsePicture";
import styles from "./MorseStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  stream: state.encoding.morse.stream,
});
const mapDispatchToProps = {
  append,
  backspace,
  clear,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function MorseStreamInner(props: Props) {
  const { stream, append: appendFn, backspace: backspaceFn } = props;

  useEffect(() => {
    function handleDot() {
      appendFn(MORSE_DOT);
    }

    function handleDash() {
      appendFn(MORSE_DASH);
    }

    function handleNext() {
      if (stream.length > 0) {
        const lastCharacter = stream.slice(-1);
        if (lastCharacter === MORSE_CHARACTER_DIVIDER) {
          backspaceFn();
          appendFn(MORSE_WORD_DIVIDER);
        } else if (lastCharacter !== MORSE_WORD_DIVIDER) {
          appendFn(MORSE_CHARACTER_DIVIDER);
        }
      }
    }

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

      let handled = true;
      if (ev.key) {
        switch (ev.key) {
          case "-":
          case "j":
            handleDash();
            break;
          case ".":
          case "k":
            handleDot();
            break;
          case "Enter":
          case " ":
          case "l":
            handleNext();
            break;
          case ";":
            backspaceFn();
            break;
          default:
            handled = false;
        }
      } else {
        // Older browsers such as Edge don't support ev.key
        switch (ev.keyCode) {
          case 45: // '-'
          case 106: // 'J'
            handleDash();
            break;
          case 46: // '.'
          case 107: // 'K'
            handleDot();
            break;
          case 13: // Enter
          case 32: // Space
          case 108: // 'L'
            handleNext();
            break;
          case 59: // ';'
            backspaceFn();
            break;
          default:
            handled = false;
        }
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
  }, [stream, appendFn, backspaceFn]);

  function codeText(): string {
    // Replace dot with interpunct for readability
    // Replace dash with full width hyphen for readability.  Don't use emdash
    // because multiple emdashes get combined with no space between them.
    return props.stream.replace(/\./g, "\u00b7").replace(/-/g, "\uff0d");
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
        <pre>
          {codeText()}
          <span className="blinking-cursor">|</span>
        </pre>
        {hint !== null && <div className={styles.partialMatches}>{hint}</div>}
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
        <Button onClick={onClearClick} color="red">
          Clear
        </Button>
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
