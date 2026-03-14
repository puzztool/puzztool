import { Button, Table } from "@mantine/core";
import {
  findWords,
  parseWordSearchGrid,
  WordSearchDirection,
} from "puzzle-lib/word-search";
import { getCellStyle } from "./WordSearchColors";
import WordSearchLegend from "./WordSearchLegend";
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

function buildCellWordIndices(
  inputGrid: string[][],
  results: { word: string; points: { x: number; y: number }[] }[],
  wordList: string[],
) {
  // Map each word to its index in the user's word list
  const wordToIndex = new Map<string, number>();
  for (let i = 0; i < wordList.length; i++) {
    const w = wordList[i].toLowerCase();
    if (!wordToIndex.has(w)) {
      wordToIndex.set(w, i);
    }
  }

  const cellWordIndices: number[][][] = inputGrid.map((row) =>
    row.map(() => []),
  );

  for (const result of results) {
    const idx = wordToIndex.get(result.word.toLowerCase());
    if (idx === undefined) continue;
    for (const point of result.points) {
      const cell = cellWordIndices[point.y][point.x];
      if (!cell.includes(idx)) {
        cell.push(idx);
      }
    }
  }

  return cellWordIndices;
}

function getUnusedLetters(
  grid: string[][],
  cellWordIndices: number[][][],
): string {
  const chars: string[] = [];
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      const cell = grid[rowIndex][colIndex];
      if (cell !== " " && cellWordIndices[rowIndex][colIndex].length === 0) {
        chars.push(cell);
      }
    }
  }
  return chars.join("");
}

function WordSearchOutput(props: Props) {
  const gridInputText = props.gridInputText.trimEnd();
  if (!gridInputText) {
    return null;
  }

  const grid = parseWordSearchGrid(gridInputText);

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

  const cellWordIndices = buildCellWordIndices(grid, results, wordList);
  const unusedLetters = getUnusedLetters(grid, cellWordIndices);
  const foundWords = new Set(results.map((r) => r.word));

  return (
    <>
      <Table className={styles.container} withRowBorders={false}>
        <Table.Tbody>
          {grid.map((row, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <Table.Td
                  style={getCellStyle(cellWordIndices[rowIndex][colIndex])}
                  key={`${rowIndex},${colIndex}`}
                >
                  {col}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <WordSearchLegend wordList={wordList} foundWords={foundWords} />
      {results.length > 0 && (
        <div className={styles.unusedLettersSection}>
          <Button
            onClick={() => props.onToggleShowUnused(!props.showUnused)}
            variant="outline"
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
