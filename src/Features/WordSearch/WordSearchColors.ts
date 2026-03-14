import type { CSSProperties } from "react";

// 12-color accessible palette with semi-transparent backgrounds.
// Works in both light and dark mode by tinting the background without
// overwhelming text contrast.
export const WORD_COLOR_PALETTE: readonly string[] = [
  "rgba(141, 211, 199, 0.4)", // teal
  "rgba(255, 255, 179, 0.4)", // pale yellow
  "rgba(190, 186, 218, 0.4)", // lavender
  "rgba(251, 128, 114, 0.4)", // salmon
  "rgba(128, 177, 211, 0.4)", // steel blue
  "rgba(253, 180, 98, 0.4)", // peach
  "rgba(179, 222, 105, 0.4)", // lime green
  "rgba(252, 205, 229, 0.4)", // pink
  "rgba(188, 128, 189, 0.4)", // purple
  "rgba(204, 235, 197, 0.4)", // mint
  "rgba(255, 237, 111, 0.4)", // gold
  "rgba(217, 217, 217, 0.4)", // light gray
];

const MULTI_WORD_STYLE: CSSProperties = {
  background:
    "repeating-linear-gradient(45deg, rgba(187, 187, 187, 0.4) 0px, rgba(187, 187, 187, 0.4) 4px, rgba(224, 224, 224, 0.4) 4px, rgba(224, 224, 224, 0.4) 8px)",
};

export function getCellStyle(wordIndices: readonly number[]): CSSProperties {
  if (wordIndices.length === 0) {
    return {};
  }
  if (wordIndices.length === 1) {
    return {
      backgroundColor:
        WORD_COLOR_PALETTE[wordIndices[0] % WORD_COLOR_PALETTE.length],
    };
  }
  if (wordIndices.length === 2) {
    const c1 = WORD_COLOR_PALETTE[wordIndices[0] % WORD_COLOR_PALETTE.length];
    const c2 = WORD_COLOR_PALETTE[wordIndices[1] % WORD_COLOR_PALETTE.length];
    return { background: `linear-gradient(135deg, ${c1} 50%, ${c2} 50%)` };
  }
  return MULTI_WORD_STYLE;
}
