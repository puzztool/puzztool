import {
  PigpenEncoding,
  PigpenSegment,
  hasPigpenSegment,
  isCardinal,
  isIntercardinal,
  togglePigpenSegment,
} from "puzzle-lib";
import styles from "./PigpenCharacter.module.scss";

interface Props {
  encoding: PigpenEncoding;
  onClick?: (encoding: PigpenEncoding) => void;
}

// SVG viewBox is 100x100
const GRID_SEGMENTS: {
  segment: PigpenSegment;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}[] = [
  { segment: PigpenSegment.North, x1: 15, y1: 15, x2: 85, y2: 15 },
  { segment: PigpenSegment.East, x1: 85, y1: 15, x2: 85, y2: 85 },
  { segment: PigpenSegment.South, x1: 15, y1: 85, x2: 85, y2: 85 },
  { segment: PigpenSegment.West, x1: 15, y1: 15, x2: 15, y2: 85 },
];

const X_SEGMENTS: {
  segment: PigpenSegment;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}[] = [
  { segment: PigpenSegment.NorthWest, x1: 50, y1: 50, x2: 15, y2: 15 },
  { segment: PigpenSegment.NorthEast, x1: 50, y1: 50, x2: 85, y2: 15 },
  { segment: PigpenSegment.SouthEast, x1: 50, y1: 50, x2: 85, y2: 85 },
  { segment: PigpenSegment.SouthWest, x1: 50, y1: 50, x2: 15, y2: 85 },
];

function PigpenCharacter({ encoding, onClick }: Props) {
  const hasCardinal = isCardinal(encoding);
  const hasIntercardinal = isIntercardinal(encoding);
  const hasDot = hasPigpenSegment(encoding, PigpenSegment.Dot);

  function onSegmentClick(segment: PigpenSegment) {
    if (onClick) {
      onClick(togglePigpenSegment(encoding, segment));
    }
  }

  function onDotClick() {
    if (onClick) {
      onClick(togglePigpenSegment(encoding, PigpenSegment.Dot));
    }
  }

  function renderSegment(
    segment: PigpenSegment,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    disabled: boolean,
  ) {
    const active = hasPigpenSegment(encoding, segment);

    return (
      <g key={segment}>
        {/* Visible line */}
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className={
            active
              ? styles.segmentActive
              : disabled
                ? styles.segmentDisabled
                : styles.segment
          }
          strokeLinecap="round"
        />
        {/* Wide invisible hit area */}
        {!disabled && (
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="transparent"
            strokeWidth={14}
            strokeLinecap="round"
            className={styles.hitArea}
            onClick={() => onSegmentClick(segment)}
          />
        )}
      </g>
    );
  }

  // Lock out the opposite type once one is selected
  const gridDisabled = hasIntercardinal;
  const xDisabled = hasCardinal;

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 100">
        {/* Grid segments */}
        {GRID_SEGMENTS.map(({ segment, x1, y1, x2, y2 }) =>
          renderSegment(segment, x1, y1, x2, y2, gridDisabled),
        )}
        {/* X segments */}
        {X_SEGMENTS.map(({ segment, x1, y1, x2, y2 }) =>
          renderSegment(segment, x1, y1, x2, y2, xDisabled),
        )}
        {/* Dot toggle */}
        <circle
          cx={50}
          cy={50}
          r={7}
          className={hasDot ? styles.dotActive : styles.dot}
          onClick={onDotClick}
        />
      </svg>
    </div>
  );
}

export default PigpenCharacter;
