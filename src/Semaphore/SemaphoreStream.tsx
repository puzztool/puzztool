import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import SemaphoreCharacter from './SemaphoreCharacter';
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction,
  SemaphoreDegrees as Degrees,
} from 'puzzle-lib';
import './SemaphoreStream.scss';

interface Props {}

interface State {
  character: Character;
  stream: string;
}

interface SavedState {
  directions: Direction[];
  stream: string;
}

class SemaphoreStream extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _character: Character = new Character();
  private _stream: string = '';

  constructor(props: Props) {
    super(props);

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.state = {
      character: this._character,
      stream: '',
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
      <div className="SemaphoreStream">
        <Card className="SemaphoreStream-input">
          <Card.Header>Input</Card.Header>
          <Card.Body>
            <Container fluid={true}>
              <Row>
                <Col
                  xs="auto"
                  sm="auto"
                  md="auto"
                >
                  <SemaphoreCharacter
                    character={this.state.character}
                    onChange={(type, direction) => this.onCharacterChange(type, direction)}
                  />
                </Col>
                <Col>
                  <div className="SemaphoreStream-view">{this.state.character.toString() || '?'}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button onClick={() => this.onBackspaceClick()}>&#x232b;</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button onClick={() => this.onNextClick()}>Next</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                      <Button
                        onClick={() => this.onClearClick()}
                        variant="danger"
                      >
                        Clear
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Output</Card.Header>
          <Card.Body>
            <pre className="SemaphoreStream-output">
              {this.state.stream}<span className="blinking-cursor">|</span>
            </pre>
          </Card.Body>
        </Card>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'SemaphoreStream';
  }

  protected onSaveState() {
    return {
      directions: this._character.directions,
      stream: this._stream,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._character.directions = savedState.directions;
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
    } else if (ev.charCode >= 49 && ev.charCode <= 56) { // '1' through '8'
      const direction = Degrees.FromDegrees((ev.charCode - 49) * 45);
      this.onCharacterChange(
        !this._character.hasDirection(direction) ? 'add' : 'remove',
        direction);
    }

    if (handled) {
      ev.preventDefault();
    }
  }

  private onCharacterChange(type: string, direction: Direction) {
    switch (type) {
      case 'add':
        this._character.addDirection(direction);
        break;

      case 'remove':
        this._character.removeDirection(direction);
        break;

      default:
        throw new Error('Invalid change type');
    }

    this.updateState();
  }

  private onNextClick() {
    const matches = this._character.getExactMatches();
    if (matches.length > 0) {
      this._stream += matches[0].toString();
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

  private onBackspaceClick() {
    this._stream = this._stream.substring(0, this._stream.length - 1);

    this.updateState();
  }
}

export default SemaphoreStream;
