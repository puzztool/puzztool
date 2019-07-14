import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import { MorseCharacter as Character, MorseString } from 'puzzle-lib';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import MorsePicture from './MorsePicture';
import './MorseStream.scss';

type Props = {};
type State = {
  morseStream: string
};

type SavedState = {
  morseStream: string
};

class MorseStream extends LocalStorageComponent<Props, State, SavedState> {

  private _morseStream: string = '';

  constructor(props: Props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      morseStream: this._morseStream,
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
        <Card className="MorseStream-morse-output">
          <Card.Header>Input</Card.Header>
          <Card.Body>
            <pre>
              {this.codeText()}<span className="blinking-cursor">|</span>
            </pre>
          </Card.Body>
        </Card>
        <Card className="MorseStream-output">
          <Card.Header>Plaintext</Card.Header>
          <Card.Body>
            <pre>
              {this.plainText() || ' '}
            </pre>
          </Card.Body>
        </Card>
        <Card className="MorseStream-output">
          <Card.Header>Swap Dots/Dashes</Card.Header>
          <Card.Body>
            <pre>
              {this.invertText() || ' '}
            </pre>
          </Card.Body>
        </Card>
        <Card className="MorseStream-output">
          <Card.Header>Right to Left</Card.Header>
          <Card.Body>
            <pre>
              {this.reverseText() || ' '}
            </pre>
          </Card.Body>
        </Card>
        <Card className="MorseStream-output">
          <Card.Header>Right to Left + Swap Dots/Dashes</Card.Header>
          <Card.Body>
            <pre>
              {this.invertReverseText() || ' '}
            </pre>
          </Card.Body>
        </Card>
        <ButtonToolbar className="MorseStream-inputCommands">
          <ButtonGroup>
            <Button onClick={() => this.onDotClick()}>
              {MorsePicture.renderDot()}
            </Button>
            <Button onClick={() => this.onDashClick()}>
              {MorsePicture.renderDash()}
            </Button>
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
      morseStream: this._morseStream,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._morseStream = savedState.morseStream;
    }
  }

  protected onUpdateState() {
    this.setState({
      morseStream: this._morseStream,
    });
  }

  private codeText(): string {
    // Replace dot with interpunct for readability
    // Replace dash with full width hyphen for readability.  Don't use emdash
    // because multiple emdashes get combined with no space between them.
    return this._morseStream.replace(/\./g, '\u00b7').replace(/-/g, '\uff0d');
  }

  private plainText(): string {
    return new MorseString(this._morseStream).toString();
  }

  private invertText(): string {
    return new MorseString(this._morseStream).invertDotsAndDashes().toString();
  }

  private reverseText(): string {
    return new MorseString(this._morseStream).reverse().toString();
  }

  private invertReverseText(): string {
    return new MorseString(this._morseStream)
      .invertDotsAndDashes()
      .reverse()
      .toString();
  }

  private onKeyDown(ev: KeyboardEvent) {
    if (ev.defaultPrevented) {
      return;
    }

    let handled = false;

    // Chrome won't trigger keypress for any keys that can invoke browser
    // actions.
    if ((ev.key === "Backspace") || (ev.keyCode === 8)) { // Backspace
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

    let handled = true;
    if (ev.key) {
      switch (ev.key) {
        case "-":
        case "j":
          this.onDashClick();
          break;
        case ".":
        case "k":
          this.onDotClick();
          break;
        case "Enter":
        case " ":
        case "l":
          this.onNextClick();
          break;
        case ";":
          this.onBackspaceClick();
          break;
        default:
          handled = false;
      }
    } else {
      // Older browsers such as Edge don't support ev.key
      switch (ev.keyCode) {
        case 45: // '-'
        case 106: // 'J'
          this.onDashClick();
          break;
        case 46: // '.'
        case 107: // 'K'
          this.onDotClick();
          break;
        case 13: // Enter
        case 32: // Space
        case 108: // 'L'
          this.onNextClick();
          break;
        case 59: // ';'
          this.onBackspaceClick();
          break;
        default:
          handled = false;
      }
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private onDotClick() {
    this._morseStream += Character.DOT;

    this.updateState();
  }

  private onDashClick() {
    this._morseStream += Character.DASH;

    this.updateState();
  }

  private onBackspaceClick() {
    if (this._morseStream.length > 0) {
      this._morseStream =
        this._morseStream.substring(0, this._morseStream.length - 1);
    }

    this.updateState();
  }

  private onNextClick() {
    if (this._morseStream.length > 0) {
      const lastCharacter = this._morseStream.slice(-1);
      if (lastCharacter === MorseString.CHARACTER_DIVIDER) {
        // Pressing next twice starts a new word
        this._morseStream =
          this._morseStream.substring(0, this._morseStream.length - 1) +
          MorseString.WORD_DIVIDER;
      } else if (lastCharacter !== MorseString.WORD_DIVIDER) {
        this._morseStream += MorseString.CHARACTER_DIVIDER;
      }
    }

    this.updateState();
  }

  private onClearClick() {
    this._morseStream = '';

    this.updateState();
  }
}

export default MorseStream;
