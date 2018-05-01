import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Well } from 'react-bootstrap';
import { MorseCharacter as Character } from 'puzzle-lib';
import LocalStorageComponent from '../Data/LocalStorageComponent';
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
      <div className="MorseStream">
        <Well className="MorseStream-input">
          <div className="MorseStream-view">
            {this.state.character.toString() || '?'}
          </div>
          <div className="MorseStream-morseView">
            {this.renderMorse(this.state.character.morseString)}
          </div>
        </Well>
        <pre className="MorseStream-output">
          {this.state.stream.toString()}<span className="blinking-cursor">|</span>
        </pre>
        <ButtonToolbar className="MorseStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.handleDot()}>{this.renderDot()}</Button>
            <Button onClick={() => this.handleDash()}>{this.renderDash()}</Button>
            <Button onClick={() => this.handleBackspace()}>Backspace</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => this.handleNext()}>Next</Button>
            <Button onClick={() => this.handleReset()}>Reset</Button>
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
    } else if (ev.charCode === 45 || ev.charCode === 106) { // '-' or 'J'
      this.handleDash();
      handled = true;
    } else if (ev.charCode === 46 || ev.charCode === 107) { // '.' or 'K'
      this.handleDot();
      handled = true;
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private handleDot() {
    this._character.dot();

    this.updateState();
  }

  private handleDash() {
    this._character.dash();

    this.updateState();
  }

  private handleBackspace() {
    if (!this._character.empty()) {
      this._character.backspace();
    } else if (this._stream.length > 0) {
      this._stream = this._stream.substring(0, this._stream.length - 1);
    }

    this.updateState();
  }

  private handleNext() {
    if (this._character.valid()) {
      this._stream += this._character.toString();
      this._character.clear();
    } else {
      this._stream += ' ';
    }

    this.updateState();
  }

  private handleReset() {
    this._character.clear();
    this._stream = '';

    this.updateState();
  }

  private renderDot() {
    return (
      <svg className="MorseStream-dotIcon" viewBox="0 0 30 30">
        <circle cx="15" cy="15" r="15" />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  private renderDash() {
    return (
      <svg className="MorseStream-dashIcon" viewBox="0 0 90 30">
        <rect width="90" height="30" />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  private renderMorse(str: string) {
    return str.split('').map((value: string, index: number) => {
      return (
        <span key={index}>
          {value === '.' ? this.renderDot() : this.renderDash()}
        </span>
      );
    });
  }
}

export default MorseStream;
