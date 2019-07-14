import React, { FormEvent, MouseEvent } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { KeyedCipherStringBase } from 'puzzle-lib';
import './KeyedCipherStreamBase.scss';

export interface KeyedCipherStreamProps {
  prompt: JSX.Element | string;
}

interface KeyedCipherStreamState {
  conversion: number;
  key: string;
  output: string;
  text: string;
}

interface KeyedCipherStreamSavedState {
  conversion: number;
  key: string;
  text: string;
}

abstract class KeyedCipherStreamBase
  extends LocalStorageComponent<
  KeyedCipherStreamProps,
  KeyedCipherStreamState,
  KeyedCipherStreamSavedState> {
  private readonly _input = React.createRef<FormControl<"input"> & HTMLInputElement>();
  private readonly _cipher: KeyedCipherStringBase;
  private _conversion = 2;

  constructor(props: KeyedCipherStreamProps, cipher: KeyedCipherStringBase) {
    super(props);

    this._cipher = cipher;
    this.state = {
      conversion: 0,
      key: '',
      output: '',
      text: '',
    };
  }

  public componentDidMount() {
    super.componentDidMount();

    const element = this._input.current;
    if (element) {
      element.focus();
    }
  }

  public render() {
    return (
      <div className="KeyedCipherStreamBase">
        <Card className="KeyedCipherStreamBase-input">
          <Card.Header>{this.props.prompt}</Card.Header>
          <Card.Body>
            <FormControl
              onChange={(event: FormEvent<FormControlProps>) => this.onTextChanged(event)}
              placeholder="Text"
              ref={this._input}
              value={this.state.text}
            />
            <FormControl
              onChange={(event: FormEvent<FormControlProps>) => this.onKeyChanged(event)}
              placeholder="Key"
              value={this.state.key}
            />
            <ButtonToolbar>
              <ToggleButtonGroup<number>
                name="KeyedCipherStreamBase-conversion"
                onChange={(value: number) => this.onConversionChanged(value)}
                type="radio"
                value={this.state.conversion}
              >
                <ToggleButton value={1}>Encrypt</ToggleButton>
                <ToggleButton value={2}>Decrypt</ToggleButton>
              </ToggleButtonGroup>
              <ButtonGroup>
                <Button
                  onClick={(event: MouseEvent<HTMLButtonElement>) => this.onClearClick(event)}
                  variant="danger"
                >
                  Clear
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Body>
        </Card>
        <Card className="KeyedCipherStreamBase-output">
          <Card.Header>Output</Card.Header>
          <Card.Body>
            <pre>
              {this.state.output || ' '}
            </pre>
          </Card.Body>
        </Card>
      </div>
    );
  }

  protected onSaveState() {
    return {
      conversion: this._conversion,
      key: this._cipher.key,
      text: this._cipher.text,
    };
  }

  protected onRestoreState(savedState: KeyedCipherStreamSavedState | null) {
    if (savedState !== null) {
      this._cipher.text = savedState.text;
      this._cipher.key = savedState.key;
      this._conversion = savedState.conversion;
    }
  }

  protected onUpdateState() {
    this.setState({
      conversion: this._conversion,
      key: this._cipher.key,
      output: this._conversion === 1 ? this._cipher.encrypt() : this._cipher.decrypt(),
      text: this._cipher.text,
    });
  }

  private onTextChanged(event: FormEvent<FormControlProps>) {
    const element = (event.target as HTMLInputElement);
    this._cipher.text = element.value;
    this.updateState();
  }

  private onKeyChanged(event: FormEvent<FormControlProps>) {
    const element = (event.target as HTMLInputElement);
    this._cipher.key = element.value;
    this.updateState();
  }

  private onConversionChanged(event: number) {
    this._conversion = event;
    this.updateState();
  }

  private onClearClick(event: MouseEvent<HTMLButtonElement>) {
    this._cipher.key = '';
    this._cipher.text = '';
    this._conversion = 2;

    this.updateState();
  }
}

export default KeyedCipherStreamBase;
