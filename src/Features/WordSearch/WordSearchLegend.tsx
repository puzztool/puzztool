import type { CSSProperties } from "react";
import { WORD_COLOR_PALETTE } from "./WordSearchColors";
import styles from "./WordSearchOutput.module.scss";

interface Props {
  wordList: readonly string[];
  foundWords: ReadonlySet<string>;
}

function swatchStyle(wordIndex: number): CSSProperties {
  return {
    backgroundColor: WORD_COLOR_PALETTE[wordIndex % WORD_COLOR_PALETTE.length],
    display: "inline-block",
    width: "1rem",
    height: "1rem",
    borderRadius: "2px",
    marginRight: "0.375rem",
    border: "1px solid rgba(0,0,0,0.15)",
    flexShrink: 0,
  };
}

function WordSearchLegend(props: Props) {
  if (props.wordList.length === 0) {
    return null;
  }

  return (
    <div className={styles.legend}>
      {props.wordList.map((word, index) => {
        const found = props.foundWords.has(word);
        return (
          <div
            key={`${word}-${index}`}
            className={found ? styles.legendItem : styles.legendItemNotFound}
          >
            <span style={swatchStyle(index)} aria-hidden="true" />
            <span className={found ? undefined : styles.legendWordNotFound}>
              {word}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default WordSearchLegend;
