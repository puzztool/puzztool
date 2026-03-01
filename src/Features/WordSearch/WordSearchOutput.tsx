import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { findWords, WordSearchDirection } from "puzzle-lib";
import styles from "./WordSearchOutput.module.scss";

interface Props {
  canBend: boolean;
  gridInputText: string;
  onToggleShowUnused: (value: boolean) => void;
  showUnused: boolean;
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

function highlightArray(
  inputGrid: string[][],
  results: { points: { x: number; y: number }[] }[],
) {
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

function getUnusedLetters(
  grid: string[][],
  shouldHighlight: boolean[][],
): string {
  const chars: string[] = [];
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      const cell = grid[rowIndex][colIndex];
      if (cell !== " " && !shouldHighlight[rowIndex][colIndex]) {
        chars.push(cell);
      }
    }
  }
  return chars.join("");
}

function getColumnClassName(shouldHighlight: boolean) {
  return shouldHighlight ? styles.highlightChar : "";
}

function WordSearchOutput(props: Props) {
  const gridInputText = props.gridInputText.trimEnd();
  if (!gridInputText) {
    return null;
  }

  const lines = splitLines(gridInputText);
  const grid: string[][] = [];
  for (const line of lines) {
    grid.push(line.split(""));
  }

  // Process direction settings
  const direction = getWordSearchDirection(
    props.useCardinals,
    props.useDiagonals,
  );

  // Split on newlines and filter out empty lines.
  const wordList = splitLines(props.wordListInputText).filter(
    (word) => word.length > 0,
  );

  const results = findWords({
    grid,
    words: wordList,
    directions: direction,
    canBend: props.canBend,
  });

  const shouldHighlight = highlightArray(grid, results);
  const unusedLetters = getUnusedLetters(grid, shouldHighlight);

  return (
    <>
      <Table className={styles.container} borderless={true}>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td
                  className={getColumnClassName(
                    shouldHighlight[rowIndex][colIndex],
                  )}
                  key={`${rowIndex},${colIndex}`}
                >
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {results.length > 0 && (
        <div className={styles.unusedLettersSection}>
          <Button
            onClick={() => props.onToggleShowUnused(!props.showUnused)}
            variant="outline-secondary"
          >
            {props.showUnused ? "Hide Unused Letters" : "Show Unused Letters"}
          </Button>
          {props.showUnused && (
            <div className={styles.unusedLetters}>
              {unusedLetters || "(none)"}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default WordSearchOutput;
