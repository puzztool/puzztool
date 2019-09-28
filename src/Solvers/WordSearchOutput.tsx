import React from 'react';
import Table from 'react-bootstrap/Table';
import {
  WordSearchSolver,
  WordSearchResult,
  WordSearchDirection,
} from 'puzzle-lib';
import './WordSearchOutput.scss';

interface Props {
  gridInputText: string;
  useCardinals: boolean;
  useDiagonals: boolean;
  wordListInputText: string;
}

function getWordSearchDirection(useCardinals: boolean, useDiagonals: boolean) {
  if (useCardinals && useDiagonals) {
    return WordSearchDirection.CardinalAndDiagonal;
  } else if (useCardinals) {
    return WordSearchDirection.Cardinal;
  } else if (useDiagonals) {
    return WordSearchDirection.Diagonal;
  }

  return WordSearchDirection.None;
}

function splitLines(str: string) {
  return str.split(/\r?\n/);
}

function highlightArray(inputGrid: string[][], results: WordSearchResult[]) {
  const shouldHighlight: boolean[][] = [];

  for (const line of inputGrid) {
    const hightlightLine = Array.from({ length: line.length }, () => false);
    shouldHighlight.push(hightlightLine);
  }

  for (const result of results) {
    for (const point of result.points) {
      shouldHighlight[point.y][point.x] = true;
    }
  }

  return shouldHighlight;
}

function getGridHighlights(
  grid: string[][],
  wordsToFind: string[],
  direction: WordSearchDirection) {
  const solver = new WordSearchSolver();
  solver.setDirections(direction);
  solver.setGrid(grid);
  solver.setWords(wordsToFind);
  const results = solver.findWords();

  return highlightArray(grid, results);
}

function getColumnClassName(shouldHighlight: boolean) {
  return shouldHighlight ? 'WordSearchOutput-highlightChar' : '';
}

function WordSearchOutput(props: Props) {
  const gridInputText = props.gridInputText.trim();
  if (!gridInputText) {
    return null;
  }

  const lines = splitLines(gridInputText);
  const grid: string[][] = [];
  for (const line of lines) {
    grid.push(line.split(''));
  }

  // Process direction settings
  const direction = getWordSearchDirection(
    props.useCardinals,
    props.useDiagonals);

  // Split on newlines, trim any whitespace, and filter out empty lines.
  const wordList = splitLines(props.wordListInputText)
    .filter(word => word.length > 0);

  const shouldHighlight = getGridHighlights(grid, wordList, direction);

  return (
    <Table className="WordSearchOutput" borderless={true}>
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((col, colIndex) => (
              <td
                className={getColumnClassName(shouldHighlight[rowIndex][colIndex])}
                key={`${rowIndex},${colIndex}`}
              >
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default WordSearchOutput;
