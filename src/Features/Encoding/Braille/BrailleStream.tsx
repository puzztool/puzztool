import {
  BrailleCharacter as Character,
  BrailleDot as Dot,
  BrailleStream as Stream,
} from "puzzle-lib";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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

      let handled = false;

      if (ev.keyCode === 13) {
        // Enter
        onNextClick();
        handled = true;
      } else if (ev.charCode >= 49 && ev.charCode <= 54) {
        // '1' through '6'
        // The braille dots are bitfields, so calculate the value based on the key
        // pressed.
        // TODO: This should probably be in puzzle-lib.
        onCharacterClick(Math.pow(2, ev.charCode - 49));
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

  function onCharacterClick(mask: Dot) {
    const character = new Character(props.encoding);
    character.toggle(mask);
    props.setEncoding(character.encoding);
  }

  function onClearClick() {
    props.clear();
  }

  function onNextClick() {
    const character = new Character(props.encoding);
    if (character.valid()) {
      props.append(character.valueOf());
    } else {
      props.space();
    }
  }

  const character = new Character(props.encoding);

  return (
    <div className={styles.container}>
      <Card className={styles.input}>
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <Container fluid={true}>
            <Row>
              <Col xs="auto" sm="auto" md="auto">
                <BrailleCharacter
                  character={character}
                  onClick={onCharacterClick}
                />
              </Col>
              <Col className={styles.view}>{character.toString() || "?"}</Col>
            </Row>
            <Row>
              <Col>
                <ButtonToolbar>
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
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Output</Card.Header>
        <Card.Body>
          <pre className={styles.output}>
            {new Stream(props.stream).toString()}
            <span className="blinking-cursor">|</span>
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

const BrailleStream = connector(BrailleStreamInner);
export default BrailleStream;
