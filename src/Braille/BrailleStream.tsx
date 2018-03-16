import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import BrailleCharacter from './BrailleCharacter';
import { BrailleCharacter as Character, BrailleDot as Dot, BrailleStream as Stream } from 'puzzle-lib';
import './BrailleStream.css';

type Props = {};
type State = {
  character: Character,
  stream: Stream,
};

class BrailleStream extends React.Component<Props, State> {
  private stream: Stream = new Stream();
  private character: Character = new Character();

  constructor(props: Props) {
    super(props);

    this.state = {
      character: this.character,
      stream: this.stream,
    };
  }

  public render() {
    return (
      <div className="BrailleStream">
        <div className="BrailleStream-input">
          <BrailleCharacter
            character={this.state.character}
            onClick={i => this.handleClick(i)}
          />
          <div className="BrailleStream-view">{this.state.character.toString() || '?'}</div>
        </div>
        <ButtonToolbar className="BrailleStream-commands">
          <ButtonGroup>
            <Button onClick={() => this.handleNext()}>Next</Button>
            <Button onClick={() => this.handleSpace()}>Space</Button>
            <Button onClick={() => this.handleReset()}>Reset</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <pre className="BrailleStream-output">{this.state.stream.toString()}</pre>
      </div>
    );
  }

  private handleClick(mask: Dot) {
    this.character.toggle(mask);

    this.setState({
      character: this.character,
    });
  }

  private handleNext() {
    if (this.character.valid()) {
      this.stream.append(this.character);
      this.character.clear();

      this.setState({
        character: this.character,
        stream: this.stream,
      });
    }
  }

  private handleReset() {
    this.character.clear();
    this.stream.clear();

    this.setState({
      character: this.character,
      stream: this.stream,
    });
  }

  private handleSpace() {
    this.stream.space();

    this.setState({
      stream: this.stream,
    });
  }
}

export default BrailleStream;
