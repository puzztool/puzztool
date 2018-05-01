import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import BrailleCharacter from './BrailleCharacter';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import {
  BrailleCharacter as Character,
  BrailleDot as Dot,
  BrailleEncoding as Encoding,
  BrailleStream as Stream
} from 'puzzle-lib';
import './BrailleStream.css';

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

    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      character: this._character,
      stream: this._stream,
    };
  }

  public componentDidMount() {
    super.componentDidMount();
    document.addEventListener('keypress', this.onKeyPress);
  }

  public componentWillUnmount() {
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
            onClick={i => this.handleClick(i)}
          />
          <div className="BrailleStream-view">{this.state.character.toString() || '?'}</div>
        </div>
        <ButtonToolbar className="BrailleStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.handleBackspace()}>Backspace</Button>
            <Button onClick={() => this.handleNext()}>Next</Button>
            <Button onClick={() => this.handleReset()}>Reset</Button>
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

  private onKeyPress(ev: KeyboardEvent) {
    if (ev.defaultPrevented) {
      return;
    }

    let handled = false;

    if (ev.keyCode === 8) { // Backspace
      this.handleBackspace();
      handled = true;
    } else if (ev.keyCode === 13 || ev.charCode === 32) { // Enter or Space
      this.handleNext();
      handled = true;
    } else if (ev.charCode >= 49 && ev.charCode <= 54) { // '1' through '6'
      this.handleClick(Math.pow(2, ev.charCode - 49));
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private handleClick(mask: Dot) {
    this._character.toggle(mask);

    this.updateState();
  }

  private handleBackspace() {
    this._stream.backspace();

    this.updateState();
  }

  private handleNext() {
    if (this._character.valid()) {
      this._stream.append(this._character);
      this._character.clear();
    } else {
      this._stream.space();
    }

    this.updateState();
  }

  private handleReset() {
    this._character.clear();
    this._stream.clear();

    this.updateState();
  }
}

export default BrailleStream;
