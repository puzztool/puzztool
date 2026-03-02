import type { CSSProperties } from "react";

// 12-color accessible palette (ColorBrewer Set3), distinguishable on screen
// and readable with black text overlay.
export const WORD_COLOR_PALETTE: readonly string[] = [
  "#8dd3c7", // teal
  "#ffffb3", // pale yellow
  "#bebada", // lavender
  "#fb8072", // salmon
  "#80b1d3", // steel blue
  "#fdb462", // peach
  "#b3de69", // lime green
  "#fccde5", // pink
  "#bc80bd", // purple
  "#ccebc5", // mint
  "#ffed6f", // gold
  "#d9d9d9", // light gray
];

const MULTI_WORD_STYLE: CSSProperties = {
  background:
    "repeating-linear-gradient(45deg, #bbb 0px, #bbb 4px, #e0e0e0 4px, #e0e0e0 8px)",
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
