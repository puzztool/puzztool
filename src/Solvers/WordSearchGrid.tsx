import React, { FormEvent, MouseEvent, SyntheticEvent } from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import './WordSearchGrid.css';

type Props = {};
type State = {
  gridInputText: string,
  wordListInputText: string,
  output: JSX.Element[],
};

type SavedState = {
  gridInputText: string,
  wordListInputText: string,
};

class WordSearchGrid extends LocalStorageComponent<Props, State, SavedState> {
  private _gridInputText: string = '';
  private _gridInputElement?: HTMLInputElement;
  private _wordListInputText: string = '';
  private _wordListInputElement?: HTMLInputElement;

  constructor(props: Props) {
    super(props);
    this.state = {
      gridInputText: '',
      wordListInputText: '',
      output: [],
    };
  }

  public componentDidMount() {
    super.componentDidMount();

    if (this._gridInputElement) {
      this._gridInputElement.focus();
    }
  }

  public render() {
    return (
      <div className="WordSearchGrid">
        <FormControl
          componentClass="textarea"
          className="WordSearchGrid-input"
          inputRef={(input: HTMLInputElement) => { this._gridInputElement = input; }}
          onChange={(event: FormEvent<FormControl>) => this.onGridTextChanged(event)}
          placeholder="Grid Text"
          value={this.state.gridInputText}
        />
        <FormControl
          componentClass="textarea"
          className="WordList-input"
          inputRef={(input: HTMLInputElement) => { this._wordListInputElement = input; }}
          onChange={(event: FormEvent<FormControl>) => this.onListTextChanged(event)}
          placeholder="Word List To Find"
          value={this.state.wordListInputText}
        />
        <pre className="WordSearchGrid-output">
          {this.state.output}
        </pre>

      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'WordSearchGrid';
  }

  protected onSaveState() {
    return {
      gridInputText: this._gridInputText,
      wordListInputText: this._wordListInputText
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._gridInputText = savedState.gridInputText;
      this._wordListInputText = savedState.wordListInputText;
    }
  }

  protected onUpdateState() {
    this.setState({
      gridInputText: this._gridInputText,
      wordListInputText: this._wordListInputText,
      output: this.calculateOutput(),
    });
  }

  private onGridTextChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._gridInputText = element.value;
    this.updateState();
  }

  private onListTextChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._wordListInputText = element.value;
    this.updateState();
  }

  private onClearClick(event: MouseEvent<Button>) {
    this._gridInputText = '';
    this.updateState();
  }

  private toggleHomogeneous(event: MouseEvent<Button>) {
    this.updateState();
  }

  private calculateOutput() {
    if (!this._gridInputText) {
      return [];
    }

    let idx = 0;
    let result = [];
    for (const s of this._gridInputText) {
        if (idx % 2 === 0) {
            result.push(<span className="highlightedLetter"> {s} </span>);
        } else {
            result.push(<span>{s}</span>);
        }
        idx++;
    }

    return result;
  }
}

export default WordSearchGrid;
