import { KeyedCipherStringBase } from 'puzzle-lib';
import React, { ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useFocusInput } from '../../../Hooks/FocusInput';
import './index.scss';

interface Props {
  cipher: KeyedCipherStringBase;
  conversion: number;
  id: string;
  secret: string;
  onClear: () => void;
  onConversionChange: (value: number) => void;
  onSecretChange: (value: string) => void;
  onTextChange: (value: string) => void;
  prompt: JSX.Element | string;
  text: string;
}

function KeyedCipherStream(props: Props) {
  const inputRef = useFocusInput();

  function onClearClick() {
    props.onClear();
  }

  function onKeyChange(event: ChangeEvent<HTMLInputElement>) {
    props.onSecretChange(event.currentTarget.value);
  }

  function onTextChange(event: ChangeEvent<HTMLInputElement>) {
    props.onTextChange(event.currentTarget.value);
  }

  function calculateOutput() {
    const cipher = props.cipher;
    cipher.key = props.secret;
    cipher.text = props.text;
    return props.conversion === 1 ? cipher.encrypt() : cipher.decrypt();
  }

  return (
    <div className="KeyedCipherStream">
      <Card className="KeyedCipherStream-input">
        <Card.Header>{props.prompt}</Card.Header>
        <Card.Body>
          <FormControl
            onChange={onTextChange}
            placeholder="Text"
            ref={inputRef}
            value={props.text}
          />
          <FormControl
            onChange={onKeyChange}
            placeholder="Key"
            value={props.secret}
          />
          <ButtonToolbar>
            <ToggleButtonGroup<number>
              name="KeyedCipherStream-conversion"
              onChange={props.onConversionChange}
              type="radio"
              value={props.conversion}
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
