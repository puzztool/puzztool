/**
 * Traditional pigpen cipher key layout showing the 4 grids:
 * - Tic-tac-toe grid (A–I)
 * - Tic-tac-toe grid with dots (J–R)
 * - X grid (S–V)
 * - X grid with dots (W–Z)
 */

const STROKE_COLOR = "currentColor";
const STROKE_WIDTH = 1.5;
const FONT_SIZE = 16;
const DOT_RADIUS = 2.5;

// Cell size for the 3×3 grid
const CELL = 30;
const GRID_SIZE = CELL * 3; // 90

// Quadrant positions (origin of each sub-grid)
const Q1 = { x: 10, y: 10 }; // Grid A–I
const Q2 = { x: 130, y: 10 }; // Grid J–R (dots)
const Q3 = { x: 10, y: 130 }; // X S–V
const Q4 = { x: 130, y: 130 }; // X W–Z (dots)

const GRID_LETTERS_1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const GRID_LETTERS_2 = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
const X_LETTERS_1 = ["S", "T", "U", "V"];
const X_LETTERS_2 = ["W", "X", "Y", "Z"];

function GridLines({ ox, oy }: { ox: number; oy: number }) {
  return (
    <g>
      {/* Vertical lines */}
      <line
        x1={ox + CELL}
        y1={oy}
        x2={ox + CELL}
        y2={oy + GRID_SIZE}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <line
        x1={ox + CELL * 2}
        y1={oy}
        x2={ox + CELL * 2}
        y2={oy + GRID_SIZE}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      {/* Horizontal lines */}
      <line
        x1={ox}
        y1={oy + CELL}
        x2={ox + GRID_SIZE}
        y2={oy + CELL}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <line
        x1={ox}
        y1={oy + CELL * 2}
        x2={ox + GRID_SIZE}
        y2={oy + CELL * 2}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
    </g>
  );
}

function GridLabels({
  ox,
  oy,
  letters,
  dots,
}: {
  ox: number;
  oy: number;
  letters: string[];
  dots: boolean;
}) {
  return (
    <g>
      {letters.map((letter, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const cx = ox + col * CELL + CELL / 2;
        const cy = oy + row * CELL + CELL / 2;
        return (
          <g key={letter}>
            <text
              x={cx}
              y={cy + FONT_SIZE * 0.35}
              textAnchor="middle"
              fill={STROKE_COLOR}
              fontSize={FONT_SIZE}
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              {letter}
            </text>
            {dots && (
              <circle
                cx={cx + 10}
                cy={cy - 8}
                r={DOT_RADIUS}
                fill={STROKE_COLOR}
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

function XLines({ ox, oy }: { ox: number; oy: number }) {
  const mid = GRID_SIZE / 2;
  return (
    <g>
      <line
        x1={ox}
        y1={oy}
        x2={ox + GRID_SIZE}
        y2={oy + GRID_SIZE}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      <line
        x1={ox + GRID_SIZE}
        y1={oy}
        x2={ox}
        y2={oy + GRID_SIZE}
        stroke={STROKE_COLOR}
        strokeWidth={STROKE_WIDTH}
      />
      {/* Short center stub to close the middle */}
      <circle
        cx={ox + mid}
        cy={oy + mid}
        r={0.5}
        fill={STROKE_COLOR}
        opacity={0}
      />
    </g>
  );
}

function XLabels({
  ox,
  oy,
  letters,
  dots,
}: {
  ox: number;
  oy: number;
  letters: string[];
  dots: boolean;
}) {
  const mid = GRID_SIZE / 2;
  // Positions: top, left, right, bottom
  const positions = [
    { x: ox + mid, y: oy + mid * 0.4 },
    { x: ox + mid * 0.4, y: oy + mid + 5 },
    { x: ox + mid * 1.6, y: oy + mid + 5 },
    { x: ox + mid, y: oy + mid + mid * 0.65 },
  ];

  return (
    <g>
      {letters.map((letter, i) => {
        const { x, y } = positions[i];
        return (
          <g key={letter}>
            <text
              x={x}
              y={y + FONT_SIZE * 0.35}
              textAnchor="middle"
              fill={STROKE_COLOR}
              fontSize={FONT_SIZE}
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              {letter}
            </text>
            {dots && (
              <circle
                cx={x + 10}
                cy={y - 5}
                r={DOT_RADIUS}
                fill={STROKE_COLOR}
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

function PigpenKey() {
  return (
    <svg
      viewBox="0 0 230 230"
      width="100%"
      style={{ maxWidth: 400 }}
      role="img"
      aria-label="Pigpen cipher reference key"
    >
      {/* Top-left: Grid A–I */}
      <GridLines ox={Q1.x} oy={Q1.y} />
      <GridLabels ox={Q1.x} oy={Q1.y} letters={GRID_LETTERS_1} dots={false} />

      {/* Top-right: Grid J–R with dots */}
      <GridLines ox={Q2.x} oy={Q2.y} />
      <GridLabels ox={Q2.x} oy={Q2.y} letters={GRID_LETTERS_2} dots={true} />

      {/* Bottom-left: X S–V */}
      <XLines ox={Q3.x} oy={Q3.y} />
      <XLabels ox={Q3.x} oy={Q3.y} letters={X_LETTERS_1} dots={false} />

      {/* Bottom-right: X W–Z with dots */}
      <XLines ox={Q4.x} oy={Q4.y} />
      <XLabels ox={Q4.x} oy={Q4.y} letters={X_LETTERS_2} dots={true} />
    </svg>
  );
}

export default PigpenKey;
