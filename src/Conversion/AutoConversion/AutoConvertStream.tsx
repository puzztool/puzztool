import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl } from 'react-bootstrap';
import LocalStorageComponent from '../../Data/LocalStorageComponent';
import { CharacterAutoConvert } from 'puzzle-lib';
import './AutoConvertStream.css';

type Props = {};
type State = {
  text: string,
  list: Array<string>,
};

type SavedState = {
  text: string,
};

class AutoConvertStream extends LocalStorageComponent<Props, State, SavedState> {
  private _str: string;
  private _converted: string;
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
      <div className="AutoConvertStream">
        <FormControl
          className="AutoConvertStream-input"
          inputRef={(input: HTMLInputElement) => { this._input = input; }}
          onChange={(event: React.FormEvent<FormControl>) => this.onTextChanged(event)}
          placeholder="Text"
          value={this.state.text}
        />
        {this._converted}
        <ButtonToolbar className="AutoConvertStream-commands">
          <ButtonGroup>
            <Button onClick={(event: React.MouseEvent<Button>) => this.onClearClick(event)}>Clear</Button>
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
      text: this._str,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._str = savedState.text;
    }
  }

  protected onUpdateState() {
    this.updateConverted();
    this.setState({
      text: this._str,
    });
  }

  private onTextChanged(event: React.SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str = element.value;
    this.updateState();
  }

  private onClearClick(event: React.MouseEvent<Button>) {
    this._str = '';
    this.updateState();
  }

  private updateConverted() {
    const split = this._str.split(' ');
    let result = '';
    for (const letter of split) {
      result = result + CharacterAutoConvert.convertCharacter(letter);
    }
    this._converted = result;
  }
}

export default AutoConvertStream;
