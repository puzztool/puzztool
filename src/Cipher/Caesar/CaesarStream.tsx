import React, { FormEvent, MouseEvent } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl'
import CaesarList from './CaesarList';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { CaesarString } from 'puzzle-lib';
import './CaesarStream.scss';

type Props = {};
type State = {
  text: string,
  list: Array<string>,
};

type SavedState = {
  text: string,
};

class CaesarStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _input = React.createRef<FormControl<"input"> & HTMLInputElement>();
  private readonly _str = new CaesarString();

  constructor(props: Props) {
    super(props);

    this.state = {
      text: '',
      list: [],
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
      <div className="CaesarStream">
        <FormControl
          className="CaesarStream-input"
          onChange={(event: FormEvent<FormControlProps>) => this.onTextChanged(event)}
          placeholder="Text"
          ref={this._input}
          value={this.state.text}
        />
        <ButtonToolbar className="CaesarStream-commands">
          <ButtonGroup>
            <Button onClick={(event: MouseEvent<HTMLButtonElement>) => this.onClearClick(event)}>
              Clear
            </Button>
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

  private onTextChanged(event: FormEvent<FormControlProps>) {
    const element = (event.target as HTMLInputElement);
    this._str.text = element.value;
    this.updateState();
  }

  private onClearClick(event: MouseEvent<HTMLButtonElement>) {
    this._str.text = '';
    this.updateState();
  }
}

export default CaesarStream;
