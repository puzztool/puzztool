import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import CaesarList from './CaesarList';
import LocalStorage from 'Data/LocalStorage';
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

class CaesarStream extends React.Component<Props, State> {
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
    this.restoreState();
    this.updateState();
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

  private saveState() {
    LocalStorage.setObject<SavedState>('CaesarStream', {
      text: this._str.text,
    });
  }

  private restoreState() {
    const savedState = LocalStorage.getObject<SavedState>('CaesarStream');

    if (savedState !== null) {
      this._str.text = savedState.text;
    }
  }

  private updateState() {
    this.setState({
      list: this._str.getRotations(),
      text: this._str.text,
    });

    this.saveState();
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
