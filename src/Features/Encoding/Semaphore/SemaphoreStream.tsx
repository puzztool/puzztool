import {
  SemaphoreDirection as Direction,
  addSemaphoreDirection,
  degreesToSemaphoreDirection,
  hasSemaphoreDirection,
  lookupSemaphoreEncoding,
  removeSemaphoreDirection,
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

  const displayText = lookupSemaphoreEncoding(props.encoding).exactString;

  return (
    <div className={styles.container}>
      <Card className={styles.input}>
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <Container fluid={true}>
            <Row>
              <Col xs="auto" sm="auto" md="auto">
                <SemaphoreCharacter
                  encoding={props.encoding}
                  onChange={onCharacterChange}
                />
              </Col>
              <Col>
                <div className={styles.view}>{displayText || "?"}</div>
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

const SemaphoreStream = connector(SemaphoreStreamInner);
export default SemaphoreStream;
