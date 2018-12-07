import React, { FormEvent, MouseEvent, SyntheticEvent } from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import './WordSearchGrid.css';

type Props = {};
type State = {
  text: string,
  output: string,
};

type SavedState = {
  text: string,
};

class WordSearchGrid extends LocalStorageComponent<Props, State, SavedState> {
  private _text: string = '';
  private _input?: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      output: '',
    };
  }

  public componentDidMount() {
    super.componentDidMount();

    if (this._input) {
      this._input.focus();
    }
  }

  /*
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>
  */
  public render() {
    return (
      <div className="WordSearchGrid">
        <FormControl
          componentClass="textarea"
          className="WordSearchGrid-input"
          inputRef={(input: HTMLInputElement) => { this._input = input; }}
          onChange={(event: FormEvent<FormControl>) => this.onTextChanged(event)}
          placeholder="Text"
          value={this.state.text}
        />
        <pre className="WordSearchGrid-output">
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
      text: this._text
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

  private onTextChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._text = element.value;
    this.updateState();
  }

  private onClearClick(event: MouseEvent<Button>) {
    this._text = '';
    this.updateState();
  }

  private toggleHomogeneous(event: MouseEvent<Button>) {
    this.updateState();
  }

  private calculateOutput() {
    // Transform output here
    return this._text;
  }
}

export default WordSearchGrid;
