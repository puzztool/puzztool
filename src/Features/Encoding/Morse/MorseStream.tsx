import { MorseCharacter as Character, MorseString } from "puzzle-lib";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
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

type Props = ConnectedProps<typeof connector>

function MorseStreamInner(props: Props) {
  useEffect(() => {
    function onKeyDown(ev: KeyboardEvent) {
      if (ev.defaultPrevented) {
        return;
      }

      let handled = false;

      // Chrome won't trigger keypress for any keys that can invoke browser
      // actions.
      if (ev.key === "Backspace" || ev.keyCode === 8) {
        // Backspace
        props.backspace();
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
            onDashClick();
            break;
          case ".":
          case "k":
            onDotClick();
            break;
          case "Enter":
          case " ":
          case "l":
            onNextClick();
            break;
          case ";":
            props.backspace();
            break;
          default:
            handled = false;
        }
      } else {
        // Older browsers such as Edge don't support ev.key
        switch (ev.keyCode) {
          case 45: // '-'
          case 106: // 'J'
            onDashClick();
            break;
          case 46: // '.'
          case 107: // 'K'
            onDotClick();
            break;
          case 13: // Enter
          case 32: // Space
          case 108: // 'L'
            onNextClick();
            break;
          case 59: // ';'
            props.backspace();
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
  });

  function codeText(): string {
    // Replace dot with interpunct for readability
    // Replace dash with full width hyphen for readability.  Don't use emdash
    // because multiple emdashes get combined with no space between them.
    return props.stream.replace(/\./g, "\u00b7").replace(/-/g, "\uff0d");
  }

  function plainText(): string {
    return new MorseString(props.stream).toString();
  }

  function invertText(): string {
    return new MorseString(props.stream).invertDotsAndDashes().toString();
  }

  function reverseText(): string {
    return new MorseString(props.stream).reverse().toString();
  }

  function invertReverseText(): string {
    return new MorseString(props.stream)
      .invertDotsAndDashes()
      .reverse()
      .toString();
  }

  function onBackspaceClick() {
    props.backspace();
  }

  function onClearClick() {
    props.clear();
  }

  function onDotClick() {
    props.append(Character.DOT);
  }

  function onDashClick() {
    props.append(Character.DASH);
  }

  function onNextClick() {
    if (props.stream.length > 0) {
      const lastCharacter = props.stream.slice(-1);
      if (lastCharacter === MorseString.CHARACTER_DIVIDER) {
        // Pressing next twice starts a new word
        props.backspace();
        props.append(MorseString.WORD_DIVIDER);
      } else if (lastCharacter !== MorseString.WORD_DIVIDER) {
        props.append(MorseString.CHARACTER_DIVIDER);
      }
    }
  }

  return (
    <div className={styles.container}>
      <Card className={styles.morseOutput}>
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <pre>
            {codeText()}
            <span className="blinking-cursor">|</span>
          </pre>
        </Card.Body>
      </Card>
      <Card className={styles.output}>
        <Card.Header>Plaintext</Card.Header>
        <Card.Body>
          <pre>{plainText() || " "}</pre>
        </Card.Body>
      </Card>
      <Card className={styles.output}>
        <Card.Header>Swap Dots/Dashes</Card.Header>
        <Card.Body>
          <pre>{invertText() || " "}</pre>
        </Card.Body>
      </Card>
      <Card className={styles.output}>
        <Card.Header>Right to Left</Card.Header>
        <Card.Body>
          <pre>{reverseText() || " "}</pre>
        </Card.Body>
      </Card>
      <Card className={styles.output}>
        <Card.Header>Right to Left + Swap Dots/Dashes</Card.Header>
        <Card.Body>
          <pre>{invertReverseText() || " "}</pre>
        </Card.Body>
      </Card>
      <ButtonToolbar className={styles.inputCommands}>
        <ButtonGroup>
          <Button onClick={onDotClick} variant="primary">
            <MorseDot className={styles.dot_button} />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onDashClick} variant="primary">
            <MorseDash className={styles.dash_button} />
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar className={styles.commands}>
        <ButtonGroup>
          <Button onClick={onBackspaceClick}>&#x232b;</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onNextClick}>Next</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onClearClick} variant="danger">
            Clear
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

const MorseStream = connector(MorseStreamInner);
export default MorseStream;
