import {
  BrailleCharacter as Character,
  BrailleDot as Dot,
  BrailleEncoding as Encoding,
  BrailleStream as Stream
} from 'puzzle-lib';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocalStorage } from '../../../Hooks/LocalStorage';
import BrailleCharacter from './BrailleCharacter';
import './BrailleStream.scss';

interface SavedState {
  character: number;
  stream: Encoding[];
}

function BrailleStream() {
  const [stream, setStream] = useState(new Stream());
  const [character, setCharacter] = useState(new Character());

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
        } else if (ev.charCode >= 49 && ev.charCode <= 54) { // '1' through '6'
          // The braille dots are bitfields, so calculate the value based on the key
          // pressed.
          // TODO: This should probably be in puzzle-lib.
          onCharacterClick(Math.pow(2, ev.charCode - 49));
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

  useLocalStorage<SavedState>(
    'BrailleStream',
    (savedState) => {
      if (savedState) {
        setCharacter(new Character(savedState.character));
        setStream(new Stream(savedState.stream));
      }
    },
    () => {
      return {
        character: character.encoding,
        stream: stream.chars,
      };
    });

  function onCharacterClick(mask: Dot) {
    const newCharacter = new Character(character.encoding, character.category);
    newCharacter.toggle(mask);
    setCharacter(newCharacter);
  }

  function onBackspaceClick() {
    const newStream = new Stream(stream.chars);
    newStream.backspace();
    setStream(newStream);
  }

  function onNextClick() {
    const newStream = new Stream(stream.chars);

    if (character.valid()) {
      newStream.append(character);
      setCharacter(new Character());
    } else {
      newStream.space();
    }

    setStream(newStream);
  }

  function onClearClick() {
    setCharacter(new Character());
    setStream(new Stream());
  }

  return (
    <div className="BrailleStream">
      <Card className="BrailleStream-input">
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <Container fluid={true}>
            <Row>
              <Col
                xs="auto"
                sm="auto"
                md="auto"
              >
                <BrailleCharacter
                  character={character}
                  onClick={onCharacterClick}
                />
              </Col>
              <Col className="BrailleStream-view">
                {character.toString() || '?'}
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
          <pre className="BrailleStream-output">
            {stream.toString()}<span className="blinking-cursor">|</span>
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BrailleStream;
