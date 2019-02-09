import { WordSearchSolver, WordSearchResult } from 'puzzle-lib';
import React, { FormEvent, MouseEvent, SyntheticEvent } from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl, Grid, Row, Col } from 'react-bootstrap';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import './WordSearchComponent.css';

type Props = {};
type State = {
  gridInputText: string,
  wordListInputText: string,
  output: JSX.Element[],
};

type SavedState = {
  gridInputText: string,
  wordListInputText: string,
};

class WordSearchComponent extends LocalStorageComponent<Props, State, SavedState> {
  private _gridInputText: string = '';
  private _gridInputElement?: HTMLInputElement;
  private _wordListInputText: string = '';

  constructor(props: Props) {
    super(props);
    this.state = {
      gridInputText: '',
      wordListInputText: '',
      output: [],
    };
  }

  public componentDidMount() {
    super.componentDidMount();

    if (this._gridInputElement) {
      this._gridInputElement.focus();
    }
  }

  public render() {
    return (
      <div className="WordSearchGrid">
        <Grid>
          <Row>
            <Col md={4}>
              <FormControl
                componentClass="textarea"
                className="WordSearchList-input"
                onChange={(event: FormEvent<FormControl>) => this.onListTextChanged(event)}
                placeholder="Word List To Find"
                value={this.state.wordListInputText}
              />
            </Col>

            <Col md={8}>
                <FormControl
                  componentClass="textarea"
                  className="WordSearchGrid-input"
                  spellCheck={false}
                  inputRef={(input: HTMLInputElement) => { this._gridInputElement = input; }}
                  onChange={(event: FormEvent<FormControl>) => this.onGridTextChanged(event)}
                  placeholder="Grid Text"
                  value={this.state.gridInputText}
                />
            </Col>
          </Row>

          <pre className="WordSearchGrid-output">
            {this.state.output}
          </pre>
        </Grid>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'WordSearchGrid';
  }

  protected onSaveState() {
    return {
      gridInputText: this._gridInputText,
      wordListInputText: this._wordListInputText
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._gridInputText = savedState.gridInputText;
      this._wordListInputText = savedState.wordListInputText;
    }
  }

  protected onUpdateState() {
    this.setState({
      gridInputText: this._gridInputText,
      wordListInputText: this._wordListInputText,
      output: this.calculateOutput(),
    });
  }

  private onGridTextChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._gridInputText = element.value;
    this.updateState();
  }

  private onListTextChanged(event: SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._wordListInputText = element.value;
    this.updateState();
  }

  private calculateOutput() {
    // Save work if possible
    if (!this._gridInputText.trim() || !this._wordListInputText.trim()) {
      return [];
    }

    // get inputs
    const lines = this._gridInputText.split(/\r?\n/);
    const wordsToFind = this._wordListInputText.split(/\r?\n/);
    
    let charArray: string[][];
    charArray = [];
    for (const line of lines) {
      charArray.push(line.split(''));
    }
    // find the results
    const solver = new WordSearchSolver(charArray);
    const results = solver.findWords(wordsToFind);

    // display / highlight the results
    const shoudHighlight = this.highlightArray(charArray, results);

    let result = [];
    for (let y = 0; y < charArray.length; y++) {
      for (let x = 0; x < charArray[y].length; x++) {
        if (shoudHighlight[y][x] !== 0) {
            result.push(<span className="highlightedLetter">{charArray[y][x]}</span>);
        } else {
            result.push(<span className="unhighlightedLetter">{charArray[y][x]}</span>);
        }
      }
      result.push(<br/>);
    }

    return result;
  }

  private highlightArray(inputGrid: string[][], results: WordSearchResult[]) {
    let shouldHighlight: number[][];
    shouldHighlight = [];

    for (const line of inputGrid) {
      const hightlightLine = Array.from({length: line.length}, (v, i) => 0);
      shouldHighlight.push(hightlightLine);
    }

    for (const result of results) {
      for (const point of result.points) {
        shouldHighlight[point.y][point.x] = 1;
      }
    }

    return shouldHighlight;
  }
}

export default WordSearchComponent;
