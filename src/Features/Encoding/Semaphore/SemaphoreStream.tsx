import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
  SemaphoreDegrees as Degrees,
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
import SemaphoreCharacter from "./SemaphoreCharacter";
import {
  append,
  backspace,
  clear,
  setDirections,
  space,
} from "./semaphoreEncodingSlice";
import styles from "./SemaphoreStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  directions: state.encoding.semaphore.directions,
  stream: state.encoding.semaphore.stream,
});
const mapDispatchToProps = {
  append,
  backspace,
  clear,
  setDirections,
  space,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

function SemaphoreStream(props: Props) {
  useEffect(() => {
    function onKeyDown(ev: KeyboardEvent) {
      if (ev.defaultPrevented) {
        return;
      }

      let handled = false;

      // Chrome won't trigger keypress for any keys that can invoke browser
      // actions.
      if (ev.keyCode === 8) {
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

      let handled = false;

      if (ev.keyCode === 13) {
        // Enter
        onNextClick();
        handled = true;
      } else if (ev.charCode >= 49 && ev.charCode <= 56) {
        // '1' through '8'
        const character = new Character();
        character.directions = props.directions;

        const direction = Degrees.FromDegrees((ev.charCode - 49) * 45);
        onCharacterChange(
          !character.hasDirection(direction) ? "add" : "remove",
          direction
        );
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
    const character = new Character();
    character.directions = props.directions;

    switch (type) {
      case "add":
        character.addDirection(direction);
        break;

      case "remove":
        character.removeDirection(direction);
        break;

      default:
        throw new Error("Invalid change type");
    }

    props.setDirections(character.directions);
  }

  function onClearClick() {
    props.clear();
  }

  function onNextClick() {
    const character = new Character();
    character.directions = props.directions;

    const matches = character.getExactMatches();
    if (matches.length > 0) {
      props.append(matches[0].toString());
    } else {
      props.space();
    }
  }

  const character = new Character();
  character.directions = props.directions;

  return (
    <div className={styles.container}>
      <Card className={styles.input}>
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <Container fluid={true}>
            <Row>
              <Col xs="auto" sm="auto" md="auto">
                <SemaphoreCharacter
                  character={character}
                  onChange={onCharacterChange}
                />
              </Col>
              <Col>
                <div className={styles.view}>{character.toString() || "?"}</div>
              </Col>
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
            {props.stream}
            <span className="blinking-cursor">|</span>
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export default connector(SemaphoreStream);
