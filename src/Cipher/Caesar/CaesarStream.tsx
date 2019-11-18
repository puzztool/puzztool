import { CaesarString } from 'puzzle-lib';
import React, { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import { useFocusInput } from '../../Hooks/FocusInput';
import { useLocalStorage } from '../../Hooks/LocalStorage';
import CaesarList from './CaesarList';
import './CaesarStream.scss';

interface Props {
  prompt: JSX.Element | string;
}

interface SavedState {
  text: string;
}

function CaesarStream(props: Props) {
  const inputRef = useFocusInput();
  const [text, setText] = useState('');

  useLocalStorage<SavedState>(
    'CaesarStream',
    (savedState) => {
      if (savedState) {
        setText(savedState.text);
      }
    },
    () => {
      return {
        text,
      };
    });

  function onTextChanged(event: FormEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
  }

  function onClearClick() {
    setText('');
  }

  return (
    <div className="CaesarStream">
      <Card className="CaesarStream-input">
        <Card.Header>{props.prompt}</Card.Header>
        <Card.Body>
          <FormControl
            onChange={onTextChanged}
            placeholder="Text"
            ref={inputRef}
            value={text}
          />
          <ButtonToolbar>
            <ButtonGroup>
              <Button
                onClick={onClearClick}
                variant="danger"
              >
                Clear
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Output</Card.Header>
        <Card.Body>
          <CaesarList list={new CaesarString(text).getRotations()} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CaesarStream;
