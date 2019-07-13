import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BrailleCharacter from './BrailleCharacter';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import {
  BrailleCharacter as Character,
  BrailleDot as Dot,
  BrailleEncoding as Encoding,
  BrailleStream as Stream
} from 'puzzle-lib';
import './BrailleStream.scss';

type Props = {};
type State = {
  character: Character,
  stream: Stream,
};

type SavedState = {
  character: number,
  stream: Encoding[],
};

class BrailleStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _stream: Stream = new Stream();
  private readonly _character: Character = new Character();

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
      <div className="BrailleStream">
        <pre className="BrailleStream-output">
          {this.state.stream.toString()}<span className="blinking-cursor">|</span>
        </pre>
        <div className="BrailleStream-input">
          <BrailleCharacter
            character={this.state.character}
            onClick={i => this.onCharacterClick(i)}
          />
          <div className="BrailleStream-view">{this.state.character.toString() || '?'}</div>
        </div>
        <ButtonToolbar className="BrailleStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.onBackspaceClick()}>&#x232b;</Button>
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
    return 'BrailleStream';
  }

  protected onSaveState() {
    return {
      character: this._character.encoding,
      stream: this._stream.chars,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._character.encoding = savedState.character;
      this._stream.chars = savedState.stream;
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
    } else if (ev.charCode >= 49 && ev.charCode <= 54) { // '1' through '6'
      // The braille dots are bitfields, so calculate the value based on the key
      // pressed.
      // TODO: This should probably be in puzzle-lib.
      this.onCharacterClick(Math.pow(2, ev.charCode - 49));
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private onCharacterClick(mask: Dot) {
    this._character.toggle(mask);

    this.updateState();
  }

  private onBackspaceClick() {
    this._stream.backspace();

    this.updateState();
  }

  private onNextClick() {
    if (this._character.valid()) {
      this._stream.append(this._character);
      this._character.clear();
    } else {
      this._stream.space();
    }

    this.updateState();
  }

  private onClearClick() {
    this._character.clear();
    this._stream.clear();

    this.updateState();
  }
}

export default BrailleStream;
