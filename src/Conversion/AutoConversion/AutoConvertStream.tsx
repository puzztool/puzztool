import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { CharacterAutoConvert } from 'puzzle-lib';
import './AutoConvertStream.css';

type Props = {};
type State = {
  text: string,
  output: string,
};

type SavedState = {
  text: string,
};

class AutoConvertStream extends LocalStorageComponent<Props, State, SavedState> {
  private _text: string = '';
  private _input: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      output: '',
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
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._text = savedState.text;
    }
  }

  protected onUpdateState() {
    this.setState({
      text: this._text,
      output: this.calculateOutput(),
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

  private calculateOutput() {
    return this._text
      .split(' ')
      .reduce((result, letter) => result + CharacterAutoConvert.convertCharacter(letter), '');
  }
}

export default AutoConvertStream;
