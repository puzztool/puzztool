import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Well } from 'react-bootstrap';
import { MorseCharacter as Character } from 'puzzle-lib';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import MorsePicture from './MorsePicture';
import './MorseStream.css';

type Props = {};
type State = {
  character: Character,
  stream: string
};

type SavedState = {
  character: string,
  stream: string,
};

class MorseStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _character: Character = new Character();
  private _stream: string = '';

  constructor(props: Props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      character: this._character,
      stream: this._stream,
    };
  }

  public componentDidMount() {
    super.componentDidMount();
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keypress', this.onKeyPress);
  }

  public componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keypress', this.onKeyPress);
  }

  public render() {
    return (
      <div className="MorseStream">
        <Well className="MorseStream-input">
          <div className="MorseStream-view">
            {this.state.character.toString() || '¯\\_(ツ)_/¯'}
          </div>
          <div className="MorseStream-morseView">
            <MorsePicture morseString={this.state.character.morseString} />
          </div>
        </Well>
        <pre className="MorseStream-output">
          {this.state.stream.toString()}<span className="blinking-cursor">|</span>
        </pre>
        <ButtonToolbar className="MorseStream-inputCommands">
          <ButtonGroup>
            <Button onClick={() => this.onDotClick()}>{MorsePicture.renderDot()}</Button>
            <Button onClick={() => this.onDashClick()}>{MorsePicture.renderDash()}</Button>
            <Button onClick={() => this.onBackspaceClick()}>&#x232b;</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <ButtonToolbar className="MorseStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.onNextClick()}>Next</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => this.onClearClick()}>Clear</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'MorseStream';
  }

  protected onSaveState() {
    return {
      character: this._character.morseString,
      stream: this._stream,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._character.morseString = savedState.character;
      this._stream = savedState.stream;
    }
  }

  protected onUpdateState() {
    this.setState({
      character: this._character,
      stream: this._stream,
    });
  }

  private onKeyDown(ev: KeyboardEvent) {
    if (ev.defaultPrevented) {
      return;
    }

    let handled = false;

    // Chrome won't trigger keypress for any keys that can invoke browser
    // actions.
    if (ev.keyCode === 8) { // Backspace
      this.onBackspaceClick();
      handled = true;
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private onKeyPress(ev: KeyboardEvent) {
    if (ev.defaultPrevented) {
      return;
    }

    let handled = false;

    if (ev.keyCode === 13) { // Enter
      this.onNextClick();
      handled = true;
    } else if (ev.charCode === 45 || ev.charCode === 106) { // '-' or 'J'
      this.onDashClick();
      handled = true;
    } else if (ev.charCode === 46 || ev.charCode === 107) { // '.' or 'K'
      this.onDotClick();
      handled = true;
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private onDotClick() {
    this._character.dot();

    this.updateState();
  }

  private onDashClick() {
    this._character.dash();

    this.updateState();
  }

  private onBackspaceClick() {
    if (!this._character.empty()) {
      this._character.backspace();
    } else if (this._stream.length > 0) {
      this._stream = this._stream.substring(0, this._stream.length - 1);
    }

    this.updateState();
  }

  private onNextClick() {
    if (this._character.valid()) {
      this._stream += this._character.toString();
      this._character.clear();
    } else {
      this._stream += ' ';
    }

    this.updateState();
  }

  private onClearClick() {
    this._character.clear();
    this._stream = '';

    this.updateState();
  }
}

export default MorseStream;
