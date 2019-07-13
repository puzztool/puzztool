import React, { FormEvent } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl'
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { StringAutoConvert } from 'puzzle-lib';
import './AutoConvertStream.scss';

type Props = {};
type State = {
  text: string,
  output: string,
  homogeneous: boolean
};

type SavedState = {
  text: string,
  homogeneous: boolean,
};

class AutoConvertStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _input = React.createRef<FormControl<"input"> & HTMLInputElement>();
  private _text = '';
  private _homogeneous = true;

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
        <FormControl
          className="AutoConvertStream-input"
          onChange={(event: FormEvent<FormControlProps>) => this.onTextChanged(event)}
          placeholder="Text"
          ref={this._input}
          value={this.state.text}
        />
        <pre className="AutoConvertStream-output">
          {this.state.output}
        </pre>
        <ButtonToolbar className="AutoConvertStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.onClearClick()}>
              Clear
            </Button>
            <Button 
              onClick={() => this.toggleHomogeneous()}
              active={this.state.homogeneous}
            >
              Force Consistent Encoding
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'AutoConvertStream';
  }

  protected onSaveState() {
    return {
      text: this._text,
      homogeneous: this._homogeneous,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._text = savedState.text;
      this._homogeneous = savedState.homogeneous;
    }
  }

  protected onUpdateState() {
    this.setState({
      text: this._text,
      output: this.calculateOutput(),
      homogeneous: this._homogeneous,
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

  private toggleHomogeneous() {
    this._homogeneous = !this._homogeneous;
    this.updateState();
  }

  private calculateOutput() {
    return StringAutoConvert.convertString(this._text, this._homogeneous);
  }
}

export default AutoConvertStream;
