import * as React from 'react';
import BrailleCharacter from './BrailleCharacter';
import CommandButton from '../Common/CommandButton';
import { BrailleCharacter as Character, BrailleDot as Dot, BrailleStream as Stream } from 'puzzle-lib';
import './BrailleStream.css';

type Props = {};
type State = {
  character: Character,
  stream: Stream,
};

class BrailleStream extends React.Component<Props, State> {
  _stream: Stream = new Stream();
  _character: Character = new Character();

  constructor(props: Props) {
    super(props);

    this.state = {
      character: this._character,
      stream: this._stream,
    };
  }

  handleClick(mask: Dot) {
    this._character.toggle(mask);

    this.setState({
      character: this._character,
    });
  }

  handleNext() {
    if (this._character.valid()) {
      this._stream.append(this._character);
      this._character.clear();

      this.setState({
        character: this._character,
        stream: this._stream,
      });
    }
  }

  handleReset() {
    this._character.clear();
    this._stream.clear();

    this.setState({
      character: this._character,
      stream: this._stream,
    });
  }

  handleSpace() {
    this._stream.space();

    this.setState({
      stream: this._stream,
    });
  }

  render() {
    return (
      <div className="BrailleStream">
        <div className="BrailleStream-input">
          <BrailleCharacter
            character={this.state.character}
            onClick={i => this.handleClick(i)}
          />
          <div className="BrailleStream-view">{this.state.character.toString() || '?'}</div>
        </div>
        <div className="BrailleStream-commands">
          <CommandButton value="Next" onClick={() => this.handleNext()} />
          <CommandButton value="Space" onClick={() => this.handleSpace()} />
          <CommandButton value="Reset" onClick={() => this.handleReset()} />
        </div>
        <div className="BrailleStream-output">{this.state.stream.toString()}</div>
      </div>
    );
  }
}

export default BrailleStream;
