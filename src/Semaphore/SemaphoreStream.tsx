import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import SemaphoreCharacter from './SemaphoreCharacter';
import LocalStorage from 'Data/LocalStorage';
import {
  SemaphoreCharacter as Character,
  SemaphoreDirection as Direction
} from 'puzzle-lib';
import './SemaphoreStream.css';

type Props = {};
type State = {
  character: Character,
  stream: string,
};

type SavedState = {
  directions: Direction[],
  stream: string,
};

class SemaphoreStream extends React.Component<Props, State> {
  private readonly _character: Character = new Character(0, 0);
  private _stream: string = '';

  constructor(props: Props) {
    super(props);

    this.state = {
      character: this._character,
      stream: '',
    };
  }

  public componentDidMount() {
    this.restoreState();
    this.updateState();
  }

  public render() {
    return (
      <div className="SemaphoreStream">
        <div className="SemaphoreStream-input">
          <SemaphoreCharacter
            character={this.state.character}
            onChange={(type, direction) => this.handleChange(type, direction)}
          />
          <div className="SemaphoreStream-view">{this.state.character.toString() || '?'}</div>
        </div>
        <ButtonToolbar className="SemaphoreStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.handleNext()}>Next</Button>
            <Button onClick={() => this.handleSpace()}>Space</Button>
            <Button onClick={() => this.handleReset()}>Reset</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <pre className="SemaphoreStream-output">
          {this.state.stream}<span className="blinking-cursor">|</span>
        </pre>
      </div>
    );
  }

  private saveState() {
    LocalStorage.setObject<SavedState>('SemaphoreStream', {
      directions: this._character.directions,
      stream: this._stream,
    });
  }

  private restoreState() {
    const savedState = LocalStorage.getObject<SavedState>('SemaphoreStream');

    if (savedState !== null) {
      this._character.directions = savedState.directions;
      this._stream = savedState.stream;
    }
  }

  private updateState() {
    this.setState({
      character: this._character,
      stream: this._stream,
    });

    this.saveState();
  }

  private handleChange(type: string, direction: Direction) {
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

  private handleNext() {
    const ch = this._character.toString();
    if (ch.length > 0) {
      this._stream += ch;
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
}

export default SemaphoreStream;
