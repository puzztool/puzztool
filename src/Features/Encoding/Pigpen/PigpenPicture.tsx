import {
  PigpenEncoding,
  PigpenSegment,
  hasPigpenSegment,
  isCardinal,
  isIntercardinal,
} from "puzzle-lib/pigpen";

interface Props {
  width: number;
  encoding: PigpenEncoding;
}

// SVG viewBox is 100x100. Line positions for a centered layout.
const GRID_LINES = {
  [PigpenSegment.North]: { x1: 20, y1: 20, x2: 80, y2: 20 },
  [PigpenSegment.East]: { x1: 80, y1: 20, x2: 80, y2: 80 },
  [PigpenSegment.South]: { x1: 20, y1: 80, x2: 80, y2: 80 },
  [PigpenSegment.West]: { x1: 20, y1: 20, x2: 20, y2: 80 },
};

const X_LINES = {
  [PigpenSegment.NorthEast]: { x1: 50, y1: 50, x2: 80, y2: 20 },
  [PigpenSegment.SouthEast]: { x1: 50, y1: 50, x2: 80, y2: 80 },
  [PigpenSegment.SouthWest]: { x1: 50, y1: 50, x2: 20, y2: 80 },
  [PigpenSegment.NorthWest]: { x1: 50, y1: 50, x2: 20, y2: 20 },
};

function PigpenPicture({ width, encoding }: Props) {
  const hasCardinal = isCardinal(encoding);
  const hasIntercardinal = isIntercardinal(encoding);
  const hasDot = hasPigpenSegment(encoding, PigpenSegment.Dot);

  function renderLine(
    segment: PigpenSegment,
    coords: { x1: number; y1: number; x2: number; y2: number },
  ) {
    const active = hasPigpenSegment(encoding, segment);
    return (
      <line
        key={segment}
        {...coords}
        stroke="currentColor"
        strokeWidth={active ? 4 : 1}
        strokeLinecap="round"
        opacity={active ? 1 : 0.15}
      />
    );
  }

  // Show grid lines if cardinal segments are active (or nothing selected)
  // Show X lines if intercardinal segments are active (or nothing selected)
  const showGrid = hasCardinal || !hasIntercardinal;
  const showX = hasIntercardinal || !hasCardinal;

  return (
    <svg width={width} viewBox="0 0 100 100">
      {showGrid &&
        Object.entries(GRID_LINES).map(([seg, coords]) =>
          renderLine(Number(seg) as PigpenSegment, coords),
        )}
      {showX &&
        Object.entries(X_LINES).map(([seg, coords]) =>
          renderLine(Number(seg) as PigpenSegment, coords),
        )}
      {hasDot && (
        <circle cx={50} cy={50} r={5} fill="currentColor" opacity={1} />
      )}
    </svg>
  );
}

export default PigpenPicture;
