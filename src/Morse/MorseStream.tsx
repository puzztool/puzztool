import { MorseCharacter as Character, MorseString } from 'puzzle-lib';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import { useLocalStorage } from '../Hooks/LocalStorage';
import { renderDot, renderDash } from './MorsePicture';
import './MorseStream.scss';

interface SavedState {
  morseStream: string;
}

function MorseStream() {
  const [morseStream, setMorseStream] = useState('');

  useLocalStorage<SavedState>(
    'MorseStream',
    (savedState) => {
      if (savedState) {
        setMorseStream(savedState.morseStream);
      }
    },
    () => {
      return {
        morseStream,
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
        if ((ev.key === 'Backspace') || (ev.keyCode === 8)) { // Backspace
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

        let handled = true;
        if (ev.key) {
          switch (ev.key) {
            case '-':
            case 'j':
              onDashClick();
              break;
            case '.':
            case 'k':
              onDotClick();
              break;
            case 'Enter':
            case ' ':
            case 'l':
              onNextClick();
              break;
            case ';':
              onBackspaceClick();
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
              onBackspaceClick();
              break;
            default:
              handled = false;
          }
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

  function codeText(): string {
    // Replace dot with interpunct for readability
    // Replace dash with full width hyphen for readability.  Don't use emdash
    // because multiple emdashes get combined with no space between them.
    return morseStream.replace(/\./g, '\u00b7').replace(/-/g, '\uff0d');
  }

  function plainText(): string {
    return new MorseString(morseStream).toString();
  }

  function invertText(): string {
    return new MorseString(morseStream).invertDotsAndDashes().toString();
  }

  function reverseText(): string {
    return new MorseString(morseStream).reverse().toString();
  }

  function invertReverseText(): string {
    return new MorseString(morseStream)
      .invertDotsAndDashes()
      .reverse()
      .toString();
  }

  function onDotClick() {
    setMorseStream(morseStream + Character.DOT);
  }

  function onDashClick() {
    setMorseStream(morseStream + Character.DASH);
  }

  function onBackspaceClick() {
    setMorseStream(morseStream.slice(0, -1));
  }

  function onNextClick() {
    if (morseStream.length > 0) {
      const lastCharacter = morseStream.slice(-1);
      if (lastCharacter === MorseString.CHARACTER_DIVIDER) {
        // Pressing next twice starts a new word
        setMorseStream(morseStream.slice(0, -1) + MorseString.WORD_DIVIDER);
      } else if (lastCharacter !== MorseString.WORD_DIVIDER) {
        setMorseStream(morseStream + MorseString.CHARACTER_DIVIDER);
      }
    }
  }

  function onClearClick() {
    setMorseStream('');
  }

  return (
    <div className="MorseStream">
      <Card className="MorseStream-morse-output">
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <pre>
            {codeText()}<span className="blinking-cursor">|</span>
          </pre>
        </Card.Body>
      </Card>
      <Card className="MorseStream-output">
        <Card.Header>Plaintext</Card.Header>
        <Card.Body>
          <pre>
            {plainText() || ' '}
          </pre>
        </Card.Body>
      </Card>
      <Card className="MorseStream-output">
        <Card.Header>Swap Dots/Dashes</Card.Header>
        <Card.Body>
          <pre>
            {invertText() || ' '}
          </pre>
        </Card.Body>
      </Card>
      <Card className="MorseStream-output">
        <Card.Header>Right to Left</Card.Header>
        <Card.Body>
          <pre>
            {reverseText() || ' '}
          </pre>
        </Card.Body>
      </Card>
      <Card className="MorseStream-output">
        <Card.Header>Right to Left + Swap Dots/Dashes</Card.Header>
        <Card.Body>
          <pre>
            {invertReverseText() || ' '}
          </pre>
        </Card.Body>
      </Card>
      <ButtonToolbar className="MorseStream-inputCommands">
        <ButtonGroup>
          <Button
            onClick={onDotClick}
            variant="primary"
          >
            {renderDot()}
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            onClick={onDashClick}
            variant="primary"
          >
            {renderDash()}
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar className="MorseStream-commands">
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
    </div>
  );
}

export default MorseStream;
