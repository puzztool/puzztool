import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Well } from 'react-bootstrap';
import { MorseCharacter as Character } from 'puzzle-lib';
import LocalStorageComponent from 'Data/LocalStorageComponent';
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

    this.state = {
      character: this._character,
      stream: this._stream,
    };
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
            <Button onClick={() => this.handleSpace()}>Space</Button>
            <Button onClick={() => this.handleReset()}>Reset</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    );
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

  private handleDot() {
    this._character.dot();

    this.updateState();
  }

  private handleDash() {
    this._character.dash();

    this.updateState();
  }

  private handleBackspace() {
    this._character.backspace();

    this.updateState();
  }

  private handleNext() {
    if (this._character.valid()) {
      this._stream += this._character.toString();
      this._character.clear();

      this.updateState();
    }
  }

  private handleReset() {
    this._character.clear();
    this._stream = '';

    this.updateState();
  }

  private handleSpace() {
    this._stream += ' ';

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
