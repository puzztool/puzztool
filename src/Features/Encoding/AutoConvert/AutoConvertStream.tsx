import { StringAutoConvert } from 'puzzle-lib';
import React, { ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { connect, ConnectedProps } from 'react-redux';
import { useFocusInput } from '../../../Hooks/FocusInput';
import { RootState } from '../../../Store/rootReducer';
import { clear, setHomogeneous, setText } from './autoConvertSlice';
import './AutoConvertStream.scss';

const mapStateToProps = (state: RootState) => ({
  homogeneous: state.encoding.autoConvert.homogeneous,
  text: state.encoding.autoConvert.text,
});
const mapDispatchToProps = {
  clear,
  setHomogeneous,
  setText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
  prompt: JSX.Element | string;
}

function AutoConvertStream(props: Props) {
  const inputRef = useFocusInput();

  function onClearClick() {
    props.clear();
  }

  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    props.setText(event.currentTarget.value);
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
            value={props.text}
          />
          <ButtonToolbar className="AutoConvertStream-commands">
            <ToggleButtonGroup<boolean>
              defaultValue={true}
              name="options"
              onChange={props.setHomogeneous}
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
            {StringAutoConvert.convertString(props.text, props.homogeneous) || ' '}
          </pre>
        </Card.Body>
      </Card>
    </div>
  );
}

export default connector(AutoConvertStream);
