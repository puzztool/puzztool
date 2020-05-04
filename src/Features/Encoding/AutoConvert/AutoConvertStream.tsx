import { StringAutoConvert } from 'puzzle-lib';
import React, { ChangeEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useFocusInput } from '../../../Hooks/FocusInput';
import { useLocalStorage } from '../../../Hooks/LocalStorage';
import './AutoConvertStream.scss';

interface Props {
  prompt: JSX.Element | string;
}

interface SavedState {
  text: string;
  homogeneous: boolean;
}

function AutoConvertStream(props: Props) {
  const inputRef = useFocusInput();
  const [homogeneous, setHomogeneous] = useState(true);
  const [text, setText] = useState('');

  useLocalStorage<SavedState>(
    'AutoConvertStream',
    (savedState) => {
      if (savedState) {
        setHomogeneous(savedState.homogeneous);
        setText(savedState.text);
      }
    },
    () => {
      return {
        homogeneous,
        text,
      };
    });

  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    setText(event.currentTarget.value);
  }

  function onClearClick() {
    setText('');
  }

  function onHomogeneousChange(value: boolean) {
    setHomogeneous(value);
  }

  return (
    <div className="AutoConvertStream">
      <Card className="AutoConvertStream-input">
        <Card.Header>{props.prompt}</Card.Header>
        <Card.Body>
          <FormControl
            onChange={onTextChanged}
            placeholder="Text"
            ref={inputRef}
            value={text}
          />
          <ButtonToolbar className="AutoConvertStream-commands">
            <ToggleButtonGroup<boolean>
              defaultValue={true}
              name="options"
              onChange={onHomogeneousChange}
              type="radio"
            >
              <ToggleButton value={true}>Consistent</ToggleButton>
              <ToggleButton value={false}>Mixed</ToggleButton>
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
      <Card>
        <Card.Header>Output</Card.Header>
        <Card.Body>
          <pre className="AutoConvertStream-output">
            {StringAutoConvert.convertString(text, homogeneous) || ' '}
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AutoConvertStream;
