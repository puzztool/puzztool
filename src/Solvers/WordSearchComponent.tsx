import React, { FormEvent } from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl, { FormControlProps } from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { WordSearchSolver, WordSearchResult, WordSearchDirection } from 'puzzle-lib';
import LocalStorageComponent from '../Data/LocalStorageComponent';
import './WordSearchComponent.scss';

type Props = {};
type State = {
  gridInputText: string,
  wordListInputText: string,
  useDiagonals: boolean,
  useCardinals: boolean,
};

type SavedState = {
  gridInputText: string,
  wordListInputText: string,
  useDiagonals: boolean,
  useCardinals: boolean,
};

class WordSearchComponent extends LocalStorageComponent<Props, State, SavedState> {
  private readonly _input = React.createRef<FormControl<"textarea"> & HTMLTextAreaElement>();
  private _gridInputText: string = '';
  private _wordListInputText: string = '';
  private _useCardinals: boolean = true;
  private _useDiagonals: boolean = true;

  constructor(props: Props) {
    super(props);
    this.state = {
      gridInputText: '',
      wordListInputText: '',
      useCardinals: true,
      useDiagonals: true,
    };
  }

  public componentDidMount() {
    super.componentDidMount();

    const element = this._input.current;
    if (element) {
      element.focus();
    }
  }

  public render() {
    return (
      <div className="WordSearchComponent">
        <Container fluid={true} >
          <Row noGutters={true}>
            <Col md={4}>
              <Card className="WordSearchComponent-ListInput">
                <Card.Header>Enter the list of words to find, one word per line</Card.Header>
                <Card.Body>
                  <FormControl
                    as="textarea"
                    className="WordSearchComponent-ListInput"
                    label="Enter the word search grid, one row of letters per line"
                    onChange={(event: FormEvent<FormControlProps>) => this.onListTextChanged(event)}
                    placeholder="Word List To Find"
                    value={this.state.wordListInputText}
                  />
                  {this.renderEmptyDirection()}
                  <FormCheck
                    checked={this._useDiagonals}
                    id="WordSearchComponent-checkbox-diagonal"
                    label="Use diagonal directions"
                    onChange={
                      (event: FormEvent<HTMLInputElement>) => this.onDiagonalCheckboxChange(event)
                    }
                    type="checkbox"
                  />
                  <FormCheck
                    checked={this._useCardinals}
                    id="WordSearchComponent-checkbox-cardinal"
                    label="Use cardinal directions"
                    onChange={
                      (event: FormEvent<HTMLInputElement>) => this.onCardinalCheckboxChange(event)
                    }
                    type="checkbox"
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={8}>
              <Card className="WordSearchComponent-GridInput">
                <Card.Header>Enter the word search grid, one row of letters per line</Card.Header>
                <Card.Body>
                  <FormControl
                    as="textarea"
                    onChange={(event: FormEvent<FormControlProps>) => this.onGridTextChanged(event)}
                    placeholder="Grid Text"
                    ref={this._input}
                    spellCheck={false}
                    value={this.state.gridInputText}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row noGutters={true}>
            <Col md={12}>
              <Card className="WordSearchComponent-GridOutput">
                <Card.Header>Output</Card.Header>
                <Card.Body>
                  <Table className="WordSearchComponent-TableOutput" borderless={true}>
                    <tbody>
                      {this.renderOutput()}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'WordSearchComponent';
  }

  protected onSaveState() {
    return {
      gridInputText: this._gridInputText,
      wordListInputText: this._wordListInputText,
      useDiagonals: this._useDiagonals,
      useCardinals: this._useCardinals,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._gridInputText = savedState.gridInputText;
      this._wordListInputText = savedState.wordListInputText;
      this._useDiagonals = savedState.useDiagonals;
      this._useCardinals = savedState.useCardinals;
    }
  }

  protected onUpdateState() {
    this.setState({
      gridInputText: this._gridInputText,
      wordListInputText: this._wordListInputText,
      useDiagonals: this._useDiagonals,
      useCardinals: this._useCardinals,
    });
  }

  private onGridTextChanged(event: FormEvent<FormControlProps>) {
    const element = (event.target as HTMLInputElement);
    this._gridInputText = element.value;
    this.updateState();
  }

  private onListTextChanged(event: FormEvent<FormControlProps>) {
    const element = (event.target as HTMLInputElement);
    this._wordListInputText = element.value;
    this.updateState();
  }

  private onCardinalCheckboxChange(event: FormEvent<HTMLInputElement>) {
    const element = (event.target as HTMLInputElement);
    this._useCardinals = element.checked;
    this.updateState();
  }

  private onDiagonalCheckboxChange(event: FormEvent<HTMLInputElement>) {
    const element = (event.target as HTMLInputElement);
    this._useDiagonals = element.checked;
    this.updateState();
  }

  private renderEmptyDirection() {
    if (this._useCardinals || this._useDiagonals) {
      return null;
    }

    return (
      <Alert variant="warning">
        No directions are selected. No results will be shown.
      </Alert>
    );
  }

  private renderOutput() {
    // Save work if possible
    if (!this._gridInputText.trim()) {
      return [];
    }

    // get inputs
    const lines = this._gridInputText.split(/\r?\n/);
    const wordList = this._wordListInputText.split(/\r?\n/);

    const wordsToFind = wordList.filter(word => word.length > 0);

    let charArray: string[][];
    charArray = [];
    for (const line of lines) {
      charArray.push(line.split(''));
    }

    let wordSearchDirection: WordSearchDirection;
    if (this._useCardinals && this._useDiagonals) {
      wordSearchDirection = WordSearchDirection.CardinalAndDiagonal;
    } else if (this._useCardinals) {
      wordSearchDirection = WordSearchDirection.Cardinal;
    } else if (this._useDiagonals) {
      wordSearchDirection = WordSearchDirection.Diagonal;
    } else {
      wordSearchDirection = WordSearchDirection.None;
    }

    // find the results
    const solver = new WordSearchSolver();
    solver.setDirections(wordSearchDirection);
    solver.setGrid(charArray);
    solver.setWords(wordsToFind);
    const results = solver.findWords();

    // display / highlight the results
    const shoudHighlight = this.highlightArray(charArray, results);

    let result = [];

    for (let y = 0; y < charArray.length; y++) {
      let row = [];
      for (let x = 0; x < charArray[y].length; x++) {
        let reactKey = x.toString() + y.toString();
        if (shoudHighlight[y][x] !== 0) {
          row.push(<td key={reactKey} className="WordSearchComponent-HighlightChar">{charArray[y][x]}</td>);
        } else {
          row.push(<td key={reactKey}>{charArray[y][x]}</td>);
        }
      }

      result.push(<tr key={y}>{row}</tr>);
    }
    return result;
  }

  private highlightArray(inputGrid: string[][], results: WordSearchResult[]) {
    let shouldHighlight: number[][];
    shouldHighlight = [];

    for (const line of inputGrid) {
      const hightlightLine = Array.from({ length: line.length }, (v, i) => 0);
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
