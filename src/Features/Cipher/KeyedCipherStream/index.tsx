import { KeyedCipherStringBase } from 'puzzle-lib';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useFocusInput } from '../../../Hooks/FocusInput';
import { useLocalStorage } from '../../../Hooks/LocalStorage';
import './index.scss';

interface Props {
  cipher: KeyedCipherStringBase;
  id: string;
  prompt: JSX.Element | string;
}

interface SavedState {
  conversion: number;
  key: string;
  text: string;
}

function KeyedCipherStream(props: Props) {
  const inputRef = useFocusInput();
  const [conversion, setConversion] = useState(2);
  const [key, setKey] = useState('');
  const [text, setText] = useState('');

  useLocalStorage<SavedState>(
    props.id,
    (savedState) => {
      if (savedState) {
        setConversion(savedState.conversion);
        setKey(savedState.key);
        setText(savedState.text);
      }
    },
    () => {
      return {
        conversion,
        key,
        text,
      };
    });

  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
  }

  function onKeyChanged(event: ChangeEvent<HTMLInputElement>) {
    setKey(event.currentTarget.value);
  }

  function onConversionChanged(event: number) {
    setConversion(event);
  }

  function onClearClick(event: MouseEvent<HTMLButtonElement>) {
    setConversion(2);
    setKey('');
    setText('');
  }

  function calculateOutput() {
    props.cipher.key = key;
    props.cipher.text = text;
    return conversion === 1 ?
      props.cipher.encrypt() :
      props.cipher.decrypt();
  }

  return (
    <div className="KeyedCipherStream">
      <Card className="KeyedCipherStream-input">
        <Card.Header>{props.prompt}</Card.Header>
        <Card.Body>
          <FormControl
            onChange={onTextChanged}
            placeholder="Text"
            ref={inputRef}
            value={text}
          />
          <FormControl
            onChange={onKeyChanged}
            placeholder="Key"
            value={key}
          />
          <ButtonToolbar>
            <ToggleButtonGroup<number>
              name="KeyedCipherStream-conversion"
              onChange={onConversionChanged}
              type="radio"
              value={conversion}
            >
              <ToggleButton value={1}>Encrypt</ToggleButton>
              <ToggleButton value={2}>Decrypt</ToggleButton>
            </ToggleButtonGroup>
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
      <Card className="KeyedCipherStream-output">
        <Card.Header>Output</Card.Header>
        <Card.Body>
          <pre>
            {calculateOutput() || ' '}
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KeyedCipherStream;
