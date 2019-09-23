import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
  SemaphoreDegrees as Degrees,
} from 'puzzle-lib';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocalStorage } from '../Hooks/LocalStorage';
import SemaphoreCharacter from './SemaphoreCharacter';
import './SemaphoreStream.scss';

interface SavedState {
  directions: Direction[];
  stream: string;
}

function SemaphoreStream() {
  const [character, setCharacter] = useState(new Character());
  const [stream, setStream] = useState('');

  useLocalStorage<SavedState>(
    'SemaphoreStream',
    (savedState) => {
      if (savedState) {
        const newCharacter = new Character();
        newCharacter.directions = savedState.directions;
        setCharacter(newCharacter);
        setStream(stream);
      }
    },
    () => {
      return {
        directions: character.directions,
        stream,
      };
    });

  useEffect(
    () => {
      function onKeyDown(ev: KeyboardEvent) {
        if (ev.defaultPrevented) {
          return;
        }

        let handled = false;

        // Chrome won't trigger keypress for any keys that can invoke browser
        // actions.
        if (ev.keyCode === 8) { // Backspace
          onBackspaceClick();
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

        if (ev.keyCode === 13) { // Enter
          onNextClick();
          handled = true;
        } else if (ev.charCode >= 49 && ev.charCode <= 56) { // '1' through '8'
          const direction = Degrees.FromDegrees((ev.charCode - 49) * 45);
          onCharacterChange(
            !character.hasDirection(direction) ? 'add' : 'remove',
            direction);
        }

        if (handled) {
          ev.preventDefault();
        }
      }

      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keypress', onKeyPress);

      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keypress', onKeyPress);
      };
    });

  function onCharacterChange(type: string, direction: Direction) {
    const newCharacter = new Character();
    newCharacter.directions = character.directions;

    switch (type) {
      case 'add':
        newCharacter.addDirection(direction);
        break;

      case 'remove':
        newCharacter.removeDirection(direction);
        break;

      default:
        throw new Error('Invalid change type');
    }

    setCharacter(newCharacter);
  }

  function onNextClick() {
    let newStream = stream;
    
    const matches = character.getExactMatches();
    if (matches.length > 0) {
      newStream += matches[0].toString();
      setCharacter(new Character());
    } else {
      newStream += ' ';
    }

    setStream(newStream);
  }

  function onClearClick() {
    setCharacter(new Character());
    setStream('');
  }

  function onBackspaceClick() {
    setStream(stream.slice(0, -1));
  }

  return (
    <div className="SemaphoreStream">
      <Card className="SemaphoreStream-input">
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <Container fluid={true}>
            <Row>
              <Col
                xs="auto"
                sm="auto"
                md="auto"
              >
                <SemaphoreCharacter
                  character={character}
                  onChange={onCharacterChange}
                />
              </Col>
              <Col>
                <div className="SemaphoreStream-view">{character.toString() || '?'}</div>
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
                    <Button
                      onClick={onClearClick}
                      variant="danger"
                    >
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
          <pre className="SemaphoreStream-output">
            {stream}<span className="blinking-cursor">|</span>
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SemaphoreStream;
