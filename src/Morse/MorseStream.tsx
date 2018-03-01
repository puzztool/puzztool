import * as React from 'react';
import CommandButton from 'Common/CommandButton';
import { MorseCharacter as Character } from 'puzzle-lib';
import './MorseStream.css';

type Props = {};
type State = {
  character: Character,
  stream: string
};

class MorseStream extends React.Component<Props, State> {
  private stream: string = '';
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
      <div className="MorseStream">
        <div className="MorseStream-input">
          <div className="MorseStream-view">
            {this.state.character.toString() || '?'}
          </div>
          <pre className="MorseStream-morseView">
            {this.renderMorse(this.state.character.toMorseString())}
          </pre>
        </div>
        <div className="MorseStream-commands">
          <div>
            <CommandButton onClick={() => this.handleDot()}>
              {this.renderDot()}
            </CommandButton>
            <CommandButton onClick={() => this.handleDash()}>
              {this.renderDash()}
            </CommandButton>
            <CommandButton onClick={() => this.handleBackspace()}>
              Backspace
            </CommandButton>
          </div>
          <div>
            <CommandButton onClick={() => this.handleNext()}>
              Next
            </CommandButton>
            <CommandButton onClick={() => this.handleSpace()}>
              Space
            </CommandButton>
            <CommandButton onClick={() => this.handleReset()}>
              Reset
            </CommandButton>
          </div>
        </div>
        <pre className="MorseStream-output">{this.state.stream.toString()}</pre>
      </div>
    );
  }

  private handleDot() {
    this.character.dot();

    this.setState({
      character: this.character,
    });
  }

  private handleDash() {
    this.character.dash();

    this.setState({
      character: this.character,
    });
  }

  private handleBackspace() {
    this.character.backspace();

    this.setState({
      character: this.character,
    });
  }

  private handleNext() {
    if (this.character.valid()) {
      this.stream += this.character.toString();
      this.character.clear();

      this.setState({
        character: this.character,
        stream: this.stream,
      });
    }
  }

  private handleReset() {
    this.character.clear();
    this.stream = '';

    this.setState({
      character: this.character,
      stream: this.stream,
    });
  }

  private handleSpace() {
    this.stream += ' ';

    this.setState({
      stream: this.stream,
    });
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

  private renderSpace() {
    return (
      <svg className="MorseStream-spaceIcon" viewBox="0 0 30 30">
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  private renderMorse(str: string) {
    let first = true;
    const elements: React.ReactNode[] = [];

    for (const ch of str) {
      if (!first) {
        elements.push(this.renderSpace());
      }

      switch (ch) {
        case '.':
          elements.push(this.renderDot());
          break;

        case '-':
          elements.push(this.renderDash());
          break;

        default:
          throw new Error('Invalid morse string');
      }

      first = false;
    }

    return elements;
  }
}

export default MorseStream;
