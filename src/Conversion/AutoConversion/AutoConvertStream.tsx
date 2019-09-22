import React, { FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { StringAutoConvert } from 'puzzle-lib';
import './AutoConvertStream.scss';

interface Props {
  prompt: JSX.Element | string;
}

interface State {
  text: string;
  output: string;
  homogeneous: boolean;
}

interface SavedState {
  text: string;
  homogeneous: boolean;
}

class AutoConvertStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _input = React.createRef<FormControl<'input'> & HTMLInputElement>();
  private _text = '';
  private _useConsistentEncoding = true;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      output: '',
      homogeneous: true,
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
      <div className="AutoConvertStream">
        <Card className="AutoConvertStream-input">
          <Card.Header>{this.props.prompt}</Card.Header>
          <Card.Body>
            <FormControl
              onChange={(event: FormEvent<FormControlProps>) => this.onTextChanged(event)}
              placeholder="Text"
              ref={this._input}
              value={this.state.text}
            />
            <ButtonToolbar className="AutoConvertStream-commands">
              <ToggleButtonGroup<boolean>
                defaultValue={true}
                name="options"
                onChange={(value) => this.requireConsistentEncoding(value)}
                type="radio"
              >
                <ToggleButton value={true}>Consistent</ToggleButton>
                <ToggleButton value={false}>Mixed</ToggleButton>
              </ToggleButtonGroup>
              <ButtonGroup>
                <Button
                  onClick={() => this.onClearClick()}
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
              {this.state.output || ' '}
            </pre>
          </Card.Body>
        </Card>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'AutoConvertStream';
  }

  protected onSaveState() {
    return {
      text: this._text,
      homogeneous: this._useConsistentEncoding,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._text = savedState.text;
      this._useConsistentEncoding = savedState.homogeneous;
    }
  }

  protected onUpdateState() {
    this.setState({
      text: this._text,
      output: this.calculateOutput(),
      homogeneous: this._useConsistentEncoding,
    });
  }

  private onTextChanged(event: FormEvent<FormControlProps>) {
    const element = (event.target as HTMLInputElement);
    this._text = element.value;
    this.updateState();
  }

  private onClearClick() {
    this._text = '';
    this.updateState();
  }

  private requireConsistentEncoding(value: boolean) {
    this._useConsistentEncoding = value;
    this.updateState();
  }

  private calculateOutput() {
    return StringAutoConvert.convertString(this._text, this._useConsistentEncoding);
  }
}

export default AutoConvertStream;
