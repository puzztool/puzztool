import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import CaesarList from './CaesarList';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { CaesarString } from 'puzzle-lib';
import './CaesarStream.css';

type Props = {};
type State = {
  text: string,
  list: Array<string>,
};

type SavedState = {
  text: string,
};

class CaesarStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _str: CaesarString = new CaesarString();
  private _input: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      list: [],
    };
  }

  public componentDidMount() {
    super.componentDidMount();
    this._input.focus();
  }

  public render() {
    return (
      <div className="CaesarStream">
        <FormControl
          className="CaesarStream-input"
          inputRef={(input: HTMLInputElement) => { this._input = input; }}
          onChange={(event: React.FormEvent<FormControl>) => this.onTextChanged(event)}
          placeholder="Text"
          value={this.state.text}
        />
        <ButtonToolbar className="CaesarStream-commands">
          <ButtonGroup>
            <Button onClick={(event: React.MouseEvent<Button>) => this.onResetClick(event)}>Reset</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <CaesarList list={this.state.list} />
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'CaesarStream';
  }

  protected onSaveState() {
    return {
      text: this._str.text,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._str.text = savedState.text;
    }
  }

  protected onUpdateState() {
    this.setState({
      list: this._str.getRotations(),
      text: this._str.text,
    });
  }

  private onTextChanged(event: React.SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str.text = element.value;
    this.updateState();
  }

  private onResetClick(event: React.MouseEvent<Button>) {
    this._str.text = '';
    this.updateState();
  }
}

export default CaesarStream;
