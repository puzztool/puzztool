import React from 'react';
import ReactDOM from 'react-dom';
import './braille.css';

function BrailleCell(props) {
return (
    <button className="braille-cell" onClick={props.onClick}>
    {props.value}
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

function ParseBraille(cells, numberMode) {
    let value = 0;
    let setBit = 0b100000;
    for (let i = 0; i < 6; ++i) {
        if (cells[i] === "O") {
            value = value + setBit;
        }
        setBit = setBit >>> 1;
    }

    switch (value) {
        case 0b100000: return numberMode ? "1" : "A";
        case 0b101000: return numberMode ? "2" : "B";
        case 0b110000: return numberMode ? "3" : "C";
        case 0b110100: return numberMode ? "4" : "D";
        case 0b100100: return numberMode ? "5" : "E";
        case 0b111000: return numberMode ? "6" : "F";
        case 0b111100: return numberMode ? "7" : "G";
        case 0b101100: return numberMode ? "8" : "H";
        case 0b011000: return numberMode ? "9" : "I";
        case 0b011100: return numberMode ? "0" : "J";
        case 0b100010: return "K";
        case 0b101010: return "L";
        case 0b110010: return "M";
        case 0b110110: return "N";
        case 0b100110: return "O";
        case 0b111010: return "P";
        case 0b111110: return "Q";
        case 0b101110: return "R";
        case 0b011010: return "S";
        case 0b011110: return "T";
        case 0b100011: return "U";
        case 0b101011: return "V";
        case 0b011101: return "W";
        case 0b110011: return "X";
        case 0b110111: return "Y";
        case 0b100111: return "Z";
        case 0b010111: return "#";

        default: return "?";
    }
}

class BrailleCharacter extends React.Component {
renderCell(i) {
    return (
    <BrailleCell
        value={this.props.cells[i]}
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
        cells: Array(6).fill(""),
        content: "",
        currentCharacter: "?",
        numberMode: false
    };
}

handleClick(i) {
    let cells = this.state.cells;
    if (cells[i] !== "") {
        cells[i] = "";
    } else {
        cells[i] = "O";
    }

    this.setState({
        cells: cells,
        currentCharacter: ParseBraille(cells, this.state.numberMode)
    });
}

handleNext() {
    let current = this.state.currentCharacter;
    let number = (current === "#") ? true : this.state.numberMode;
    this.setState({
        content: this.state.content + current,
        cells: Array(6).fill(""),
        currentCharacter: "?",
        numberMode: number
    });
}

handleReset() {
    this.setState({
        cells: Array(6).fill(""),
        currentCharacter: "?",
        content: ""
    })
}

handleSpace() {
    this.setState({
        content: this.state.content + " ",
        numberMode: false
    });}

render() {
    return (
    <div>
        <div className="braille-stream">
            <div className="braille-character">
                <BrailleCharacter
                    cells={this.state.cells}
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

  