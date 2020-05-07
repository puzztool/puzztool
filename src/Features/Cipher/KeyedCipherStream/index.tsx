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

export enum Conversion {
  encrypt,
  decrypt,
}

interface Props {
  cipher: KeyedCipherStringBase;
  conversion: Conversion;
  id: string;
  secret: string;
  onClear: () => void;
  onConversionChange: (value: Conversion) => void;
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

    switch (props.conversion) {
      case Conversion.encrypt:
        return cipher.encrypt();

      case Conversion.decrypt:
        return cipher.decrypt();

      default:
        throw new Error('Invalid conversion type');
    }
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
            <ToggleButtonGroup<Conversion>
              name="KeyedCipherStream-conversion"
              onChange={props.onConversionChange}
              type="radio"
              value={props.conversion}
            >
              <ToggleButton value={Conversion.encrypt}>Encrypt</ToggleButton>
              <ToggleButton value={Conversion.decrypt}>Decrypt</ToggleButton>
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
