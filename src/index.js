import React from 'react';
import ReactDOM from 'react-dom';
import { Braille } from 'puzzle-lib';
import './braille.css';

function BrailleCell(props) {
  return (
    <button className="braille-cell" onClick={props.onClick}>
      <svg className={props.className}>
        <circle cx="50%" cy="50%" r="20%" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </button>
  );
}

function CommandButton(props) {
  return (
    <button className="command" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class BrailleCharacter extends React.Component {
  renderCell(mask) {
    return (
      <BrailleCell
        className={(this.props.bits & mask) !== 0 ? "selected" : "unselected"}
        onClick={() => this.props.onClick(mask)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="braille-row">
          {this.renderCell(Braille.Dot.UpperLeft)}
          {this.renderCell(Braille.Dot.UpperRight)}
        </div>
        <div className="braille-row">
          {this.renderCell(Braille.Dot.MiddleLeft)}
          {this.renderCell(Braille.Dot.MiddleRight)}
        </div>
        <div className="braille-row">
          {this.renderCell(Braille.Dot.LowerLeft)}
          {this.renderCell(Braille.Dot.LowerRight)}
        </div>
      </div>
    );
  }
}

class BrailleStream extends React.Component {
  constructor(props) {
    super(props);

    this.stream = new Braille.Stream();
    this.character = new Braille.Character();

    this.state = {
      bits: this.character.valueOf(),
      content: this.stream.toString(),
      currentCharacter: '?'
    };
  }

  handleClick(mask) {
    this.character.toggle(mask);

    this.setState({
      bits: this.character.valueOf(),
      currentCharacter: this.character.toString() || '?'
    });
  }

  handleNext() {
    if (!this.character.empty()) {
      this.stream.append(this.character);
      this.character.clear();

      this.setState({
        bits: this.character.valueOf(),
        content: this.stream.toString(),
        currentCharacter: '?'
      });
    }
  }

  handleReset() {
    this.character.clear();
    this.stream.clear();

    this.setState({
      bits: this.character.valueOf(),
      content: this.stream.toString(),
      currentCharacter: '?'
    });
  }

  handleSpace() {
    this.stream.space();

    this.setState({
      content: this.stream.toString()
    });
  }

  render() {
    return (
      <div>
        <div className="braille-stream">
          <div className="braille-character">
            <BrailleCharacter
              bits={this.state.bits}
              onClick={i => this.handleClick(i)} />
          </div>
          <div className="braille-view">{this.state.currentCharacter}</div>
        </div>
        <div className="stream-commands">
          <CommandButton value="Next" onClick={() => this.handleNext()} />
          <CommandButton value="Space" onClick={() => this.handleSpace()} />
          <CommandButton value="Reset" onClick={() => this.handleReset()} />
        </div>
        <div className="character-stream">{this.state.content}</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<BrailleStream />, document.getElementById("root"));
