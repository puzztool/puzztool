import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { StringAutoConvert } from 'puzzle-lib';
import './AutoConvertStream.css';

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
  private _text: string = '';
  private _input: HTMLInputElement;
  private _homogeneous = false;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      output: '',
      homogeneous: false,
    };
  }

  public componentDidMount() {
    super.componentDidMount();
    this._input.focus();
  }

  public render() {
    return (
      <div className="AutoConvertStream">
        <FormControl
          className="AutoConvertStream-input"
          inputRef={(input: HTMLInputElement) => { this._input = input; }}
          onChange={(event: React.FormEvent<FormControl>) => this.onTextChanged(event)}
          placeholder="Text"
          value={this.state.text}
        />
        <ButtonToolbar className="AutoConvertStream-commands">
          <ButtonGroup>
            <Button onClick={(event: React.MouseEvent<Button>) => this.onClearClick(event)}>Clear</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <input 
          type="checkbox"
          onClick={(event: React.MouseEvent<HTMLInputElement>) => this.toggleHomogenous(event)}
        />
        Entire string is the same encoding
        <pre className="AutoConvertStream-output">
          {this.state.output}
        </pre>
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

  private onTextChanged(event: React.SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._text = element.value;
    this.updateState();
  }

  private onClearClick(event: React.MouseEvent<Button>) {
    this._text = '';
    this.updateState();
  }

  private toggleHomogenous(event: React.MouseEvent<HTMLInputElement>) {
    this._homogeneous = !this._homogeneous;
    this.updateState();
  }

  private calculateOutput() {
    return StringAutoConvert.convertString(this._text, this._homogeneous);
  }
}

export default AutoConvertStream;
