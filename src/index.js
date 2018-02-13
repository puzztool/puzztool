import React from 'react';
import ReactDOM from 'react-dom';
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

function ParseBraille(value, numberMode) {
  switch (value) {
    case 0b000001: return numberMode ? "1" : "A";
    case 0b000101: return numberMode ? "2" : "B";
    case 0b000011: return numberMode ? "3" : "C";
    case 0b001011: return numberMode ? "4" : "D";
    case 0b001001: return numberMode ? "5" : "E";
    case 0b000111: return numberMode ? "6" : "F";
    case 0b001111: return numberMode ? "7" : "G";
    case 0b001101: return numberMode ? "8" : "H";
    case 0b000110: return numberMode ? "9" : "I";
    case 0b001110: return numberMode ? "0" : "J";
    case 0b010001: return "K";
    case 0b010101: return "L";
    case 0b010011: return "M";
    case 0b011011: return "N";
    case 0b011001: return "O";
    case 0b010111: return "P";
    case 0b011111: return "Q";
    case 0b011101: return "R";
    case 0b010110: return "S";
    case 0b011110: return "T";
    case 0b110001: return "U";
    case 0b110101: return "V";
    case 0b101110: return "W";
    case 0b110011: return "X";
    case 0b111011: return "Y";
    case 0b111001: return "Z";
    case 0b111010: return "#";

    default: return "?";
  }
}

class BrailleCharacter extends React.Component {
  renderCell(i) {
    return (
      <BrailleCell
        className={(this.props.bits & (1 << i)) !== 0 ? "selected" : "unselected"}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="braille-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
        </div>
        <div className="braille-row">
          {this.renderCell(2)}
          {this.renderCell(3)}
        </div>
        <div className="braille-row">
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
      </div>
    );
  }
}

class BrailleStream extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bits: 0,
      content: "",
      currentCharacter: "?",
      numberMode: false
    };
  }

  handleClick(i) {
    let bits = this.state.bits ^ (1 << i);

    this.setState({
      bits: bits,
      currentCharacter: ParseBraille(bits, this.state.numberMode)
    });
  }

  handleNext() {
    let current = this.state.currentCharacter;
    let number = (current === "#") ? true : this.state.numberMode;

    this.setState({
      content: this.state.content + current,
      bits: 0,
      currentCharacter: "?",
      numberMode: number
    });
  }

  handleReset() {
    this.setState({
      bits: 0,
      currentCharacter: "?",
      content: ""
    })
  }

  handleSpace() {
    this.setState({
      bits: 0,
      content: this.state.content + " ",
      numberMode: false
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
